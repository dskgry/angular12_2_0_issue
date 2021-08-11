"use strict";
// no global async polyfill
(self.webpackChunktest = self.webpackChunktest || []).push([[893], {
    893: (_, o, e) => {
        e.r(o), e.d(o, {my_component: () => l});
        var r = e(304), n = e(142);
        const l = class {
            constructor(t) {
                (0, n.r)(this, t), this.stuff = 0
            }

            getText() {
                return (this.first || "") + ((s = this.middle) ? ` ${s}` : "") + ((u = this.last) ? ` ${u}` : "");
                var s, u
            }

            doStuff() {
                var t = this;
                return (0, r.Z)(function* () {
                    const s = yield t.calculate();
                    console.log(s), t.stuff = s
                })()
            }

            calculate() {
                return new Promise(t => setTimeout(() => t(Date.now()), 1e3))
            }

            render() {
                return (0, n.h)("div", null, "Hello, World! I'm ", this.getText(), (0, n.h)("button", {onClick: () => this.doStuff()}, "CLICK ME"), this.stuff)
            }
        };
        l.style = ":host{display:block}"
    }
}]);