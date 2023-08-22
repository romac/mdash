const spacer = {
  type: 'spacer'
};

const bookmarks = [
  {
    id: 'hermes',
    side: 'left',
    title: 'Hermes',
    bookmarks: [
      {
        name: 'Code',
        url: 'https://github.com/informalsystems/hermes',
        favicon: 'img/favicons_053.png'
      },
      {
        name: 'Issues',
        url: 'https://github.com/informalsystems/hermes/issues',
        favicon: 'img/favicons_053.png'
      },
      {
        name: 'Pull Requests',
        url: 'https://github.com/informalsystems/hermes/pulls',
        favicon: 'img/favicons_053.png'
      }
    ],
  },
  {
    id: 'cosmos',
    side: 'left',
    title: 'Cosmos',
    bookmarks: [
      {
        name: 'ibc-rs',
        url: 'https://github.com/cosmos/ibc-rs',
        favicon: 'img/favicons_053.png'
      },
      {
        name: 'ibc-proto-rs',
        url: 'https://github.com/cosmos/ibc-proto-rs',
        favicon: 'img/favicons_053.png'
      },
      {
        name: 'tendermint-rs',
        url: 'https://github.com/informalsystems/tendermint-rs',
        favicon: 'img/favicons_053.png'
      },
      spacer,
      {
        name: 'ics23',
        url: 'https://github.com/cosmos/ics23',
        favicon: 'img/favicons_053.png'
      },
      {
        name: 'cosmos.nix',
        url: 'https://github.com/informalsystems/cosmos.nix',
        favicon: 'img/favicons_053.png'
      }
    ]
  },
  {
    id: 'epfl-lara',
    side: 'left',
    title: 'EPFL LARA',
    bookmarks: [
      {
        name: 'Stainless',
        url: 'https://github.com/epfl-lara/stainless',
        favicon: 'img/favicons_053.png'
      },
      {
        name: 'Noxt',
        url: 'https://github.com/epfl-lara/rust-stainless',
        favicon: 'img/favicons_053.png'
      },
      {
        name: 'Inox',
        url: 'https://github.com/epfl-lara/inox',
        favicon: 'img/favicons_053.png'
      }
    ]
  },
  {
    id: 'social',
    side: 'left',
    title: 'Social',
    bookmarks: [
      {
        name: 'GitHub',
        url: 'https://github.com/',
        favicon: 'img/favicons_053.png'
      },
      {
        name: 'reddit',
        url: 'https://reddit.com/r/all',
        favicon: 'img/favicons_016.png'
      },
      {
        name: 'Twitter',
        url: 'https://mobile.twitter.com/home',
        favicon: 'img/favicons_038.png'
      }
    ]
  },
  {
    id: 'programming',
    side: 'left',
    title: 'Programming',
    bookmarks: [
      {
        name: 'Hacker News',
        url: 'https://news.ycombinator.com',
        favicon: 'img/favicons_014.png'
      },
      {
        name: 'Lambda the Ultimate',
        url: 'http://lambda-the-ultimate.org/',
        favicon: 'img/favicons_030.png'
      },
      {
        name: 'Reddit',
        url: 'https://www.reddit.com/r/haskell+purescript+rust+scala/',
        favicon: 'img/favicons_035.png'
      }
    ]
  },
  {
    id: 'crypto',
    side: 'left',
    title: 'Crypto',
    bookmarks: [
      {
        name: 'Coindesk',
        url: 'https://www.coindesk.com',
        favicon: 'img/coindesk.ico'
      },
      {
        name: 'CoinMarketCap',
        url: 'https://coinmarketcap.com',
        favicon: 'img/coinmarketcap.ico'
      },
      {
        name: 'Map of Zones',
        url: 'https://mapofzones.com',
        favicon: 'img/mapofzones.ico'
      }
    ]
  },
  {
    id: 'music',
    side: 'right',
    title: 'Music',
    bookmarks: [
      {
        name: 'SoundCloud',
        url: 'https://soundcloud.com/dashboard',
        favicon: 'img/favicons_042.png'
      },
      {
        name: 'Ad Noiseam',
        url: 'http://www.adnoiseam.net/',
        favicon: 'img/favicons_057.png'
      },
      {
        name: 'You are listening to',
        url: 'http://youarelistening.to/losangeles',
        favicon: 'img/favicons_047.png'
      },
      {
        name: 'FACT',
        url: 'http://www.factmag.com/',
        favicon: 'img/favicons_060.png'
      },
      spacer,
      {
        name: 'XLR8R',
        url: 'http://www.xlr8r.com/',
        favicon: 'img/favicons_002.png'
      },
      {
        name: 'echospace',
        url: 'https://echospacedetroit.bandcamp.com/',
        favicon: 'img/favicons_045.png'
      },
      {
        name: 'Mixcloud',
        url: 'https://www.mixcloud.com/discover/',
        favicon: 'img/favicons_004.png'
      },
      {
        name: 'nodata.tv',
        url: 'http://nodata.tv/',
        favicon: 'img/favicons.png'
      }
    ]
  },
  {
    id: 'video',
    side: 'right',
    title: 'Video',
    bookmarks: [
      {
        name: 'YouTube',
        url: 'http://www.youtube.com/',
        favicon: 'img/favicons_024.png'
      },
      {
        name: 'Netflix',
        url: 'https://www.netflix.com/browse',
        favicon: 'img/favicons_034.png'
      },
      {
        name: 'Amazon Video',
        url: 'https://www.primevideo.com/',
        favicon: 'img/prime.png'
      },
      {
        name: 'Episode Calendar',
        url: 'http://www.episodecalendar.com/',
        favicon: 'img/favicons_061.png'
      }
    ]
  },
  {
    id: 'news',
    side: 'right',
    title: 'News',
    bookmarks: [
      {
        name: 'Quartz',
        url: 'http://qz.com/',
        favicon: 'img/favicons_012.png'
      },
      {
        name: 'The Economist',
        url: 'http://www.economist.com/',
        favicon: 'img/favicons_025.png'
      },
      {
        name: 'Co.Design',
        url: 'http://www.fastcodesign.com/',
        favicon: 'img/favicons_054.png'
      },
      {
        name: 'The Intercept',
        url: 'https://firstlook.org/theintercept/',
        favicon: 'img/favicons_031.png'
      },
      spacer,
      {
        name: 'New Republic',
        url: 'http://www.newrepublic.com/',
        favicon: 'img/favicons_049.png'
      },
      {
        name: 'Product Hunt',
        url: 'http://www.producthunt.com/',
        favicon: 'img/favicons_019.png'
      },
      {
        name: 'Aeon',
        url: 'http://aeon.co/',
        favicon: 'img/favicons_051.png'
      }
    ]
  },
  {
    id: 'science',
    side: 'right',
    title: 'Science',
    bookmarks: [
      {
        name: 'Terry Tao',
        url: 'http://terrytao.wordpress.com/',
        favicon: 'img/favicons_058.png'
      },
      {
        name: 'WIRED',
        url: 'http://www.wired.com/',
        favicon: 'img/favicons_020.png'
      },
      {
        name: 'Nature',
        url: 'http://www.nature.com/',
        favicon: 'img/nature.png'
      },
      {
        name: 'Phys.org',
        url: 'http://phys.org/weekly-news/',
        favicon: 'img/favicons_048.png'
      }
    ]
  },
  {
    id: 'fashion',
    side: 'right',
    title: 'Fashion',
    bookmarks: [
      {
        name: 'Highsnobiety',
        url: 'http://www.highsnobiety.com/',
        favicon: 'img/favicons_033.png'
      },
      {
        name: 'HYPEBEAST',
        url: 'http://hypebeast.com/',
        favicon: 'img/favicons_043.png'
      },
      {
        name: 'MKI Store',
        url: 'http://mkistore.co.uk/product_list.php',
        favicon: 'img/favicons_037.png'
      }
    ]
  }
];

function select(selector, context = document) {
  return context.querySelector(selector);
}

function element(tagName, attributes = {}, ...children) {
  const element = tagName === 'fragment'
    ? document.createDocumentFragment()
    : document.createElement(tagName);

  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }

  for (const child of children) {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      element.appendChild(child);
    } else {
      throw new Error('Invalid child: ' + typeof child);
    }
  }

  return element;
}

const $ = new Proxy(select, {
  get(target, name) {
    if (name === 'fragment') {
      return (...args) => element('fragment', {}, ...args);
    }
    else {
      return (...args) => element(name, ...args);
    }
  }
});

const renderSection = (section) =>
  $.section({ id: section.id },
    $.h1({}, section.title),
    ...section.bookmarks.map(bookmark =>
      bookmark.type === 'spacer'
        ? renderSpacer()
        : renderBookmark(bookmark)
    )
  );

const renderBookmark = (bookmark) =>
  $.a({ href: bookmark.url },
    $.img({ src: bookmark.favicon, alt: bookmark.name }),
      $.span({}, bookmark.name),
  );

const renderSpacer = () =>
  $.a({ class: 'spacer' });

const renderBookmarks = (sections, container) => {
  container.appendChild($.fragment(
    $.div({ class: 'left' },
      ...sections
        .filter(section => section.side === 'left')
        .map(renderSection)
    ),
    $.div({ class: 'right' },
      ...sections
        .filter(section => section.side === 'right')
        .map(renderSection)
    )
  ));
}