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
    id: "home",
    side: "left",
    title: "Home",
    bookmarks: [
      {
        name: "GitHub",
        url: "https://github.com/",
        favicon: "img/github.png",
      },
      {
        name: "/r/all",
        url: "https://old.reddit.com/r/all",
        favicon: "img/favicons_016.png",
      },
      {
        name: "Wintermute Pi",
        url: "http://pi.home",
        favicon: "img/pi.svg",
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
        name: "/r/programming",
        url: "https://old.reddit.com/r/haskell+purescript+rust+scala+gleamlang/",
        favicon: "img/favicons_035.png",
      },
      {
        name: "Lobste.rs",
        url: "https://lobste.rs",
        favicon: "img/lobsters.ico",
      },
    ],
  },
  github("malachite", "Malachite", "informalsystems/malachite"),
  {
    id: "informal",
    side: "left",
    title: "Informal",
    bookmarks: [
      {
        name: "Muppet",
        url: "https://github.com/informalsystems/muppet",
        favicon: "img/github.png",
      },
      {
        name: "Quint",
        url: "https://github.com/informalsystems/quint",
        favicon: "img/github.png",
      },
      {
        name: "Hermes",
        url: "https://github.com/informalsystems/hermes",
        favicon: "img/github.png",
      },
      spacer,
      {
        name: "itf-rs",
        url: "https://github.com/informalsystems/itf-rs",
        favicon: "img/github.png",
      },
      {
        name: "tendermint-rs",
        url: "https://github.com/informalsystems/tendermint-rs",
        favicon: "img/github.png",
      },
      {
        name: "cometbft-rs",
        url: "https://github.com/cometbft/cometbft-rs",
        favicon: "img/github.png",
      },
      // {
      //   name: "ibc-proto-rs",
      //   url: "https://github.com/cosmos/ibc-proto-rs",
      //   favicon: "img/github.png",
      // },
      // spacer,
      // {
      //   name: "ibc-rs",
      //   url: "https://github.com/cosmos/ibc-rs",
      //   favicon: "img/github.png",
      // },
      // {
      //   name: "ics23",
      //   url: "https://github.com/cosmos/ics23",
      //   favicon: "img/github.png",
      // },
      // {
      //   name: "cosmos.nix",
      //   url: "https://github.com/informalsystems/cosmos.nix",
      //   favicon: "img/github.png",
      // },
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
    id: "tools",
    side: "left",
    title: "Tools",
    bookmarks: [
      {
        name: "Keybr",
        url: "https://www.keybr.com",
        favicon: "img/keybr.ico",
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
