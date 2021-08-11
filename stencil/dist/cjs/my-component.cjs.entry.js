'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d265fc09.js');

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return index.h("div", null, "Hello, World! I'm ", this.getText(), index.h("button", { onClick: () => this.doStuff() }, "CLICK ME"), this.stuff);
  }
};
MyComponent.style = myComponentCss;

exports.my_component = MyComponent;
