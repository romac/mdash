const spacer = {
  type: 'spacer'
};

const bookmarks = [
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
        url: 'https://old.reddit.com/r/all',
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
        name: 'Reddit',
        url: 'https://old.reddit.com/r/haskell+purescript+rust+scala/',
        favicon: 'img/favicons_035.png'
      },
      {
        name: 'Lambda the Ultimate',
        url: 'http://lambda-the-ultimate.org/',
        favicon: 'img/favicons_030.png'
      },
    ]
  },
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
    id: 'malachite',
    side: 'left',
    title: 'Malachite',
    bookmarks: [
      {
        name: 'malachite',
        url: 'https://github.com/informalsystems/malachite',
        favicon: 'img/favicons_053.png'
      },
      {
        name: 'itf-rs',
        url: 'https://github.com/informalsystems/itf-rs',
        favicon: 'img/favicons_053.png'
      },
      {
        name: 'quint',
        url: 'https://github.com/informalsystems/quint',
        favicon: 'img/favicons_053.png'
      },
    ]
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
      },
      // {
      //   name: 'piwasm',
      //   url: 'https://github.com/p-offtermatt/piwasm',
      //   favicon: 'img/favicons_053.png'
      // },
      {
        name: 'chainpulse',
        url: 'https://github.com/informalsystems/chainpulse-internal',
        favicon: 'img/favicons_053.png'
      },
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
  },
  {
    id: 'magazines',
    side: 'right',
    title: 'Magazines',
    bookmarks: [
      {
        name: 'Paged Out!',
        url: 'https://pagedout.institute/',
        favicon: 'img/pagedout.ico',
      },
      {
        name: 'C-ACM',
        url: 'https://m-cacm.acm.org',
        favicon: 'img/cacm.ico'
      }
    ]
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
      ...this.props
    });

    return element.render();
  }
}

const vdom = {
  el: (component, props = {}, ...children) => new VDOMComponent(component, props, children),
  text: (text) => new VDOMTextNode(text),
  fragment: (...children) => new VDOMFragment(children),
};

const $ = new Proxy(vdom, {
  get(target, name) {
    if (name in target) {
      return target[name];
    }

    return (attributes = {}, ...children) => new VDOMElement(name, attributes, children);
  }
});

const Section = ({ section, children }) =>
  $.section({ id: section.id },
    $.h1({}, $.text(section.title)),
    ...children
  );

const Bookmark = ({ bookmark }) =>
  $.a({ href: bookmark.url },
    $.img({ src: bookmark.favicon, alt: bookmark.name }),
    $.span({}, $.text(bookmark.name)),
  );

const Spacer = () => $.a({ class: 'spacer' });

const Bookmarks = ({ sections }) =>
  $.div({ id: 'bookmarks' },
    $.div({ class: 'left' },
      ...sections
        .filter(section => section.side === 'left')
        .map(section =>
          $.el(Section, { section },
            ...section.bookmarks.map(bookmark =>
              bookmark.type === 'spacer'
                ? $.el(Spacer)
                : $.el(Bookmark, { bookmark })
            )
          )
        )
    ),
    $.div({ class: 'right' },
      ...sections
        .filter(section => section.side === 'right')
        .map(section =>
          $.el(Section, { section },
            ...section.bookmarks.map(bookmark =>
              bookmark.type === 'spacer'
                ? $.el(Spacer)
                : $.el(Bookmark, { bookmark })
            )
          )
        )
    )
  );

const render = (container, vdom) => {
  let node = vdom.render();
  window.requestAnimationFrame(() => {
    container.replaceChildren(node);
  });
};
