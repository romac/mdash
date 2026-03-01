class VDOMNode {}

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
      if (key.startsWith("on") && typeof value === "function") {
        element.addEventListener(key.slice(2), value);
      } else {
        element.setAttribute(key, value);
      }
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
    if (name in target) return target[name];
    return (attributes = {}, ...children) =>
      new VDOMElement(name, attributes, children);
  },
});

const render = (container, vdom) => {
  const node = vdom.render();
  window.requestAnimationFrame(() => {
    container.replaceChildren(node);
  });
};
