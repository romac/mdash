const spacer = {
  type: "spacer",
};

function github(id, title, repo) {
  return {
    id,
    side: "left",
    title,
    bookmarks: [
      {
        name: "Code",
        url: `https://github.com/${repo}`,
        favicon: "img/github.png",
      },
      {
        name: "Issues",
        url: `https://github.com/${repo}/issues`,
        favicon: "img/github.png",
      },
      {
        name: "Pull Requests",
        url: `https://github.com/${repo}/pulls`,
        favicon: "img/github.png",
      },
    ],
  };
}

const bookmarks = [
  {
    id: "social",
    side: "left",
    title: "Social",
    bookmarks: [
      {
        name: "Glance",
        url: "http://glance.pi.local",
        favicon: "img/glance.png",
      },
      {
        name: "GitHub",
        url: "https://github.com/",
        favicon: "img/github.png",
      },
      {
        name: "reddit",
        url: "https://old.reddit.com/r/all",
        favicon: "img/favicons_016.png",
      },
      {
        name: "Twitter",
        url: "https://mobile.twitter.com/home",
        favicon: "img/favicons_038.png",
      },
    ],
  },
  {
    id: "programming",
    side: "left",
    title: "Programming",
    bookmarks: [
      {
        name: "Hacker News",
        url: "https://news.ycombinator.com",
        favicon: "img/favicons_014.png",
      },
      {
        name: "Reddit",
        url: "https://old.reddit.com/r/haskell+purescript+rust+scala+gleamlang/",
        favicon: "img/favicons_035.png",
      },
      {
        name: "Product Hunt",
        url: "http://www.producthunt.com/",
        favicon: "img/favicons_019.png",
      },
    ],
  },
  // github("hermes", "Hermes", "informalsystems/hermes"),
  github("malachite", "Malachite", "informalsystems/malachite"),
  {
    id: "hermes",
    side: "left",
    title: "Hermes",
    bookmarks: [
      {
        name: "hermes",
        url: "https://github.com/informalsystems/hermes",
        favicon: "img/github.png",
      },
      {
        name: "tendermint-rs",
        url: "https://github.com/informalsystems/tendermint-rs",
        favicon: "img/github.png",
      },
      {
        name: "ibc-proto-rs",
        url: "https://github.com/cosmos/ibc-proto-rs",
        favicon: "img/github.png",
      },
    ],
  },
  {
    id: "cosmos",
    side: "left",
    title: "Cosmos",
    bookmarks: [
      {
        name: "quint",
        url: "https://github.com/informalsystems/quint",
        favicon: "img/github.png",
      },
      {
        name: "itf-rs",
        url: "https://github.com/informalsystems/itf-rs",
        favicon: "img/github.png",
      },
      {
        name: "ibc-rs",
        url: "https://github.com/cosmos/ibc-rs",
        favicon: "img/github.png",
      },
      spacer,
      {
        name: "ics23",
        url: "https://github.com/cosmos/ics23",
        favicon: "img/github.png",
      },
      {
        name: "cosmos.nix",
        url: "https://github.com/informalsystems/cosmos.nix",
        favicon: "img/github.png",
      },
      {
        name: "cometbft-rs",
        url: "https://github.com/cometbft/cometbft-rs",
        favicon: "img/github.png",
      },
    ],
  },
  {
    id: "epfl-lara",
    side: "left",
    title: "EPFL LARA",
    bookmarks: [
      {
        name: "Stainless",
        url: "https://github.com/epfl-lara/stainless",
        favicon: "img/github.png",
      },
      {
        name: "Noxt",
        url: "https://github.com/epfl-lara/rust-stainless",
        favicon: "img/github.png",
      },
      {
        name: "Inox",
        url: "https://github.com/epfl-lara/inox",
        favicon: "img/github.png",
      },
    ],
  },
  {
    id: "music",
    side: "right",
    title: "Music",
    bookmarks: [
      {
        name: "You are listening to",
        url: "http://youarelistening.to/losangeles",
        favicon: "img/favicons_047.png",
      },
      {
        name: "XLR8R",
        url: "http://www.xlr8r.com/",
        favicon: "img/favicons_002.png",
      },
      {
        name: "Mixcloud",
        url: "https://www.mixcloud.com/discover/",
        favicon: "img/favicons_004.png",
      },
      {
        name: "nodata.tv",
        url: "http://nodata.tv/",
        favicon: "img/favicons.png",
      },
    ],
  },
  {
    id: "video",
    side: "right",
    title: "Video",
    bookmarks: [
      {
        name: "YouTube",
        url: "http://www.youtube.com/",
        favicon: "img/favicons_024.png",
      },
      {
        name: "Netflix",
        url: "https://www.netflix.com/browse",
        favicon: "img/favicons_034.png",
      },
      {
        name: "Amazon Video",
        url: "https://www.primevideo.com/",
        favicon: "img/prime.png",
      },
      {
        name: "Episode Calendar",
        url: "http://www.episodecalendar.com/",
        favicon: "img/favicons_061.png",
      },
    ],
  },
  {
    id: "news",
    side: "right",
    title: "News",
    bookmarks: [
      {
        name: "RTS",
        url: "https://www.rts.ch/",
        favicon: "img/rts.ico",
      },
      {
        name: "Quartz",
        url: "http://qz.com/",
        favicon: "img/favicons_012.png",
      },
      {
        name: "New Republic",
        url: "http://www.newrepublic.com/",
        favicon: "img/favicons_049.png",
      },
      spacer,
      {
        name: "WSJ",
        url: "http://www.wsj.com/",
        favicon: "img/wsj.svg",
      },
      {
        name: "The Economist",
        url: "http://www.economist.com/",
        favicon: "img/favicons_025.png",
      },
    ],
  },
  {
    id: "science",
    side: "right",
    title: "Science",
    bookmarks: [
      {
        name: "Terry Tao",
        url: "http://terrytao.wordpress.com/",
        favicon: "img/favicons_058.png",
      },
      {
        name: "WIRED",
        url: "http://www.wired.com/",
        favicon: "img/favicons_020.png",
      },
      {
        name: "Nature",
        url: "http://www.nature.com/",
        favicon: "img/nature.png",
      },
      {
        name: "Phys.org",
        url: "http://phys.org/weekly-news/",
        favicon: "img/favicons_048.png",
      },
    ],
  },
  {
    id: "magazines",
    side: "right",
    title: "Magazines",
    bookmarks: [
      {
        name: "Paged Out!",
        url: "https://pagedout.institute/",
        favicon: "img/pagedout.ico",
      },
      {
        name: "C-ACM",
        url: "https://m-cacm.acm.org",
        favicon: "img/cacm.ico",
      },
      {
        name: "Aeon",
        url: "http://aeon.co/",
        favicon: "img/favicons_051.png",
      },
    ],
  },
  {
    id: "fashion",
    side: "right",
    title: "Fashion",
    bookmarks: [
      {
        name: "Highsnobiety",
        url: "http://www.highsnobiety.com/",
        favicon: "img/favicons_033.png",
      },
      {
        name: "HYPEBEAST",
        url: "http://hypebeast.com/",
        favicon: "img/favicons_043.png",
      },
      {
        name: "MKI Store",
        url: "http://mkistore.co.uk/product_list.php",
        favicon: "img/favicons_037.png",
      },
    ],
  },
  // {
  //   id: 'crypto',
  //   side: 'right',
  //   title: 'Crypto',
  //   bookmarks: [
  //     {
  //       name: 'Coindesk',
  //       url: 'https://www.coindesk.com',
  //       favicon: 'img/coindesk.ico'
  //     },
  //     {
  //       name: 'CoinMarketCap',
  //       url: 'https://coinmarketcap.com',
  //       favicon: 'img/coinmarketcap.ico'
  //     },
  //     {
  //       name: 'Map of Zones',
  //       url: 'https://mapofzones.com',
  //       favicon: 'img/mapofzones.ico'
  //     }
  //   ]
  // },
];

class VDOMNode { }

class VDOMElement extends VDOMNode {
  constructor(tagName, attributes = {}, children) {
    super();

    this.tagName = tagName;
    this.attributes = attributes;
    this.children = children;
  }

  render() {
    const element = document.createElement(this.tagName);

    for (const [key, value] of Object.entries(this.attributes)) {
      element.setAttribute(key, value);
    }

    for (const child of this.children) {
      element.appendChild(child.render());
    }

    return element;
  }
}

class VDOMFragment extends VDOMNode {
  constructor(children) {
    super();

    this.children = children;
  }

  render() {
    const fragment = document.createDocumentFragment();

    for (const child of this.children) {
      fragment.appendChild(child.render());
    }

    return fragment;
  }
}

class VDOMTextNode extends VDOMNode {
  constructor(text) {
    super();

    this.text = text;
  }

  render() {
    return document.createTextNode(this.text);
  }
}

class VDOMComponent extends VDOMNode {
  constructor(component, props = {}, children) {
    super();

    this.component = component;
    this.props = props;
    this.children = children;
  }

  render() {
    const element = this.component.call(null, {
      children: this.children,
      ...this.props,
    });

    return element.render();
  }
}

const vdom = {
  el: (component, props = {}, ...children) =>
    new VDOMComponent(component, props, children),
  text: (text) => new VDOMTextNode(text),
  fragment: (...children) => new VDOMFragment(children),
};

const $ = new Proxy(vdom, {
  get(target, name) {
    if (name in target) {
      return target[name];
    }

    return (attributes = {}, ...children) =>
      new VDOMElement(name, attributes, children);
  },
});

const Section = ({ section, children }) =>
  $.section({ id: section.id }, $.h1({}, $.text(section.title)), ...children);

const Bookmark = ({ bookmark }) =>
  $.a(
    { href: bookmark.url },
    $.img({ src: bookmark.favicon, alt: bookmark.name }),
    $.span({}, $.text(bookmark.name)),
  );

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

const render = (container, vdom) => {
  let node = vdom.render();
  window.requestAnimationFrame(() => {
    container.replaceChildren(node);
  });
};
