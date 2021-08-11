"use strict";
// global async polyfill.
var r = (h, u, e) => new Promise((o, l) => {
    var i = s => {
        try {
            t(e.next(s))
        } catch (n) {
            l(n)
        }
    }, c = s => {
        try {
            t(e.throw(s))
        } catch (n) {
            l(n)
        }
    }, t = s => s.done ? o(s.value) : Promise.resolve(s.value).then(i, c);
    t((e = e.apply(h, u)).next())
});
(self.webpackChunktest = self.webpackChunktest || []).push([[893], {
    893: (h, u, e) => {
        e.r(u), e.d(u, {my_component: () => c});
        var o = e(142);
        const c = class {
            constructor(t) {
                (0, o.r)(this, t), this.stuff = 0
            }

            getText() {
                return (this.first || "") + ((s = this.middle) ? ` ${s}` : "") + ((n = this.last) ? ` ${n}` : "");
                var s, n
            }

            doStuff() {
                return r(this, null, function* () {
                    const t = yield this.calculate();
                    console.log(t), this.stuff = t
                })
            }

            calculate() {
                return new Promise(t => setTimeout(() => t(Date.now()), 1e3))
            }

            render() {
                return (0, o.h)("div", null, "Hello, World! I'm ", this.getText(), (0, o.h)("button", {onClick: () => this.doStuff()}, "CLICK ME"), this.stuff)
            }
        };
        c.style = ":host{display:block}"
    }
}]);