import { Component, h, Prop, State } from '@stencil/core';
import { format } from '../../utils/utils';
export class MyComponent {
  constructor() {
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
    return h("div", null,
      "Hello, World! I'm ",
      this.getText(),
      h("button", { onClick: () => this.doStuff() }, "CLICK ME"),
      this.stuff);
  }
  static get is() { return "my-component"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["my-component.css"]
  }; }
  static get styleUrls() { return {
    "$": ["my-component.css"]
  }; }
  static get properties() { return {
    "first": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "first",
      "reflect": false
    },
    "middle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "middle",
      "reflect": false
    },
    "last": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "last",
      "reflect": false
    }
  }; }
  static get states() { return {
    "stuff": {}
  }; }
}
