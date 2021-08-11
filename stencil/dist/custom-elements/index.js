import { attachShadow, h, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.stuff = 0;
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  async doStuff() {
    const result = await this.calculate();
    console.log(result);
    this.stuff = result;
  }
  calculate() {
    return new Promise(resolve => setTimeout(() => resolve(Date.now()), 1000));
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText(), h("button", { onClick: () => this.doStuff() }, "CLICK ME"), this.stuff);
  }
  static get style() { return myComponentCss; }
};

const MyComponent = /*@__PURE__*/proxyCustomElement(MyComponent$1, [1,"my-component",{"first":[1],"middle":[1],"last":[1],"stuff":[32]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      MyComponent
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { MyComponent, defineCustomElements };
