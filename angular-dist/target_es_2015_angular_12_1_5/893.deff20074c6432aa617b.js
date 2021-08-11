(self.webpackChunktest = self.webpackChunktest || []).push([[893], {
    893: (t, s, e) => {
        "use strict";
        e.r(s), e.d(s, {my_component: () => o});
        var l = e(142);
        const o = class {
            constructor(t) {
                (0, l.r)(this, t), this.stuff = 0
            }

            getText() {
                return (this.first || "") + ((t = this.middle) ? ` ${t}` : "") + ((s = this.last) ? ` ${s}` : "");
                var t, s
            }

            async doStuff() {
                const t = await this.calculate();
                console.log(t), this.stuff = t
            }

            calculate() {
                return new Promise(t => setTimeout(() => t(Date.now()), 1e3))
            }

            render() {
                return (0, l.h)("div", null, "Hello, World! I'm ", this.getText(), (0, l.h)("button", {onClick: () => this.doStuff()}, "CLICK ME"), this.stuff)
            }
        };
        o.style = ":host{display:block}"
    }
}]);