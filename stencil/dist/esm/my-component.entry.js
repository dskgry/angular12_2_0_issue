import { r as registerInstance, h } from './index-ee49cb54.js';

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
