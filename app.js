// --- Click tracking ---

const Clicks = {
  key: "mdash-clicks",
  get() {
    try {
      return JSON.parse(localStorage.getItem(this.key) || "{}");
    } catch {
      return {};
    }
  },
  entry(url) {
    const raw = this.get()[url];
    if (!raw) return { count: 0, last: null };
    // Migrate old format (plain number)
    if (typeof raw === "number") return { count: raw, last: null };
    return raw;
  },
  count(url) {
    return this.entry(url).count;
  },
  increment(url) {
    const data = this.get();
    const prev = this.entry(url);
    const updated = { count: prev.count + 1, last: Date.now() };
    data[url] = updated;
    localStorage.setItem(this.key, JSON.stringify(data));
    return updated.count;
  },
};

function relativeTime(ts) {
  if (!ts) return "never";
  const mins = Math.floor((Date.now() - ts) / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

window.stats = () => {
  const data = Clicks.get();
  const rows = Object.entries(data)
    .map(([url, raw]) => {
      const e = typeof raw === "number" ? { count: raw, last: null } : raw;
      return { url, count: e.count, last: relativeTime(e.last) };
    })
    .sort((a, b) => b.count - a.count);
  console.table(rows);
  return rows;
};

// --- Components ---

const Section = ({ section, children }) =>
  $.section({ id: section.id }, $.h1({}, $.text(section.title)), ...children);

const Bookmark = ({ bookmark }) => {
  const count = Clicks.count(bookmark.url);
  return $.a(
    {
      href: bookmark.url,
      onclick: (e) => {
        const n = Clicks.increment(bookmark.url);
        const badge = e.currentTarget.querySelector(".count");
        if (badge) badge.textContent = n;
      },
    },
    $.img({ src: bookmark.favicon, alt: bookmark.name }),
    $.span({}, $.text(bookmark.name)),
    $.span({ class: "count" }, $.text(count > 0 ? String(count) : "")),
  );
};

const Spacer = () => $.a({ class: "spacer" });

const Bookmarks = ({ sections }) =>
  $.div(
    { id: "bookmarks" },
    $.div(
      { class: "left" },
      ...sections
        .filter((section) => section.side === "left")
        .map((section) =>
          $.el(
            Section,
            { section },
            ...section.bookmarks.map((bookmark) =>
              bookmark.type === "spacer"
                ? $.el(Spacer)
                : $.el(Bookmark, { bookmark }),
            ),
          ),
        ),
    ),
    $.div(
      { class: "right" },
      ...sections
        .filter((section) => section.side === "right")
        .map((section) =>
          $.el(
            Section,
            { section },
            ...section.bookmarks.map((bookmark) =>
              bookmark.type === "spacer"
                ? $.el(Spacer)
                : $.el(Bookmark, { bookmark }),
            ),
          ),
        ),
    ),
  );

// --- Stats modal ---

function buildUrlMap() {
  const map = {};
  for (const section of bookmarks) {
    for (const bm of section.bookmarks) {
      if (bm.type !== "spacer") {
        map[bm.url] = { name: bm.name, section: section.title };
      }
    }
  }
  return map;
}

function showStatsModal() {
  const existing = document.getElementById("stats-modal");
  if (existing) {
    existing.remove();
    return;
  }

  const urlMap = buildUrlMap();
  const rows = Object.entries(urlMap).map(([url, { name, section }]) => {
    const entry = Clicks.entry(url);
    return { name, section, url, count: entry.count, last: entry.last };
  });

  const columns = ["name", "section", "count", "last"];
  let sortKey = "count";
  let sortAsc = false;

  function getValue(row, key) {
    if (key === "last") return row.last ?? 0;
    return row[key];
  }

  function sortedRows() {
    return [...rows].sort((a, b) => {
      const va = getValue(a, sortKey), vb = getValue(b, sortKey);
      if (typeof va === "string") return sortAsc ? va.localeCompare(vb) : vb.localeCompare(va);
      return sortAsc ? va - vb : vb - va;
    });
  }

  function makeRow(row) {
    const tr = document.createElement("tr");
    tr.className = row.count === 0 ? "zero" : "";
    const link = document.createElement("a");
    link.href = row.url;
    link.textContent = row.name;
    [
      (() => { const td = document.createElement("td"); td.appendChild(link); return td; })(),
      (() => { const td = document.createElement("td"); td.textContent = row.section; return td; })(),
      (() => { const td = document.createElement("td"); td.textContent = String(row.count); return td; })(),
      (() => { const td = document.createElement("td"); td.textContent = relativeTime(row.last); return td; })(),
    ].forEach((td) => tr.appendChild(td));
    return tr;
  }

  const modal = $.div(
    {
      id: "stats-modal",
      onclick: (e) => { if (e.target === e.currentTarget) e.currentTarget.remove(); },
    },
    $.div(
      { id: "stats-content" },
      $.h2({}, $.text("Stats")),
      $.table(
        {},
        $.thead({}, $.tr({},
          $.th({}, $.text("Bookmark")),
          $.th({}, $.text("Section")),
          $.th({}, $.text("Clicks")),
          $.th({}, $.text("Last used")),
        )),
        $.tbody({}),
      ),
    ),
  );

  document.body.appendChild(modal.render());

  const tbody = document.querySelector("#stats-content tbody");
  const ths = document.querySelectorAll("#stats-content th");

  function refresh() {
    tbody.replaceChildren(...sortedRows().map(makeRow));
    ths.forEach((th, i) => {
      th.classList.remove("sort-asc", "sort-desc");
      if (columns[i] === sortKey) th.classList.add(sortAsc ? "sort-asc" : "sort-desc");
    });
  }

  ths.forEach((th, i) => {
    th.addEventListener("click", () => {
      sortKey === columns[i] ? (sortAsc = !sortAsc) : ((sortKey = columns[i]), (sortAsc = i < 2));
      refresh();
    });
  });

  refresh();
}

window.addEventListener("keydown", (e) => {
  if (e.key === "?" && !e.ctrlKey && !e.metaKey && !e.altKey) {
    showStatsModal();
  } else if (e.key === "Escape") {
    document.getElementById("stats-modal")?.remove();
  }
});

// --- Boot ---

render(document.body, $.el(Bookmarks, { sections: bookmarks }));
