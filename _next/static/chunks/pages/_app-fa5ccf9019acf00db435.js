(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        44548: function(e, n, t) {
            "use strict";
            t(67294);
            var r = t(74607),
                o = t.n(r),
                c = t(85893);
            n.Z = function(e) {
                var n = e.showPopup,
                    t = e.closePopup,
                    r = e.title,
                    a = void 0 === r ? "" : r,
                    i = e.content,
                    u = void 0 === i ? "" : i,
                    s = e.okButtonText,
                    p = void 0 === s ? "OK" : s,
                    f = e.onOk,
                    d = void 0 === f ? function() {} : f;
                return (0, c.jsx)("div", { children: n && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)("div", { className: "backdrop", onClick: t }), (0, c.jsxs)("div", { className: o().popup, children: [(0, c.jsx)("img", { src: "/img/close.svg", alt: "", className: o().close, onClick: t }), (0, c.jsx)("div", { className: o().header, children: a }), (0, c.jsxs)("div", { className: o().inner, children: [u, (0, c.jsxs)("div", { className: o().btnGroup, children: [(0, c.jsx)("div", { className: o().btnSwitch, onClick: d, children: p }), (0, c.jsx)("div", { className: o().btnCancel, onClick: t, children: "Cancel" })] })] })] })] }) })
            }
        },
        82025: function(e, n, t) {
            "use strict";
            t.d(n, { r_: function() { return a }, SH: function() { return i }, x9: function() { return u }, LC: function() { return s }, Sg: function() { return p }, xH: function() { return d }, Js: function() { return f }, LW: function() { return l }, Kf: function() { return b }, RE: function() { return h }, sD: function() { return w }, ks: function() { return m }, tJ: function() { return v }, d$: function() { return y }, F1: function() { return _ }, By: function() { return g }, Rj: function() { return x }, sJ: function() { return C }, LP: function() { return E } });
            var r = t(30266),
                o = t(809),
                c = t.n(o),
                a = !1,
                i = "dynasty:auth",
                u = "user:address",
                s = "0.5",
                p = "https://api2.thedynasty.app/api",
                f = "",
                d = "",
                l = "0x1802a63EFe3255aBC3004F8e63047dB96300bd1c",
                h = "0x38",
                b = "https://bsc-dataseed.binance.org/",
                w = "0xB2A12686a291cB3497E723Db4FBF28bF807025d4",
                m = "0x432DE87CF1BEDd82a5fC863D5DA7C741994Ff784",
                v = "0xB4c85fc3f46F6A861930367Fa14afb4285e67686",
                y = "0x9538Ef56C896d247297ca88A2E79cF5f6e1F96d5",
                _ = "https://thedynasty.app/newgameplayv7/",
                g = "0x1796eC91d636EE56a57885abC6608CD4ABFEf74d",
                x = "0xF196dB001391D14cf84DeE1Bd81939fc7194b6c7";
            a && (p = "https://apitestnet.thedynasty.app/api", f = "0xCae16A604968be6F2b7d07fc5b0F247c2691bEC9", d = "0x22904164dA33D08F87fEb3C7D691eac75f7F1C66", l = "0x3757f7b23AcAAD86534d37BBC7Ca26fdd2f35183", 97, h = "0x61", b = "https://data-seed-prebsc-1-s1.binance.org:8545/", w = "0xb7e0926301eDe6c1948910B18Dd96333Bb75352B", m = "0x63C3aDB8cE7962EAE5A4463CacCD9A0fd5F0Dfa9", v = "0x23fE4db904896A7AdeF7ED54AFaF3A9A88539eE7", y = "0x8DAf9859c9B1Ae684A578958C3058f98e257fCC3", _ = "https://testnet.thedynasty.app/gameabcxyz010/", g = "0x5ADc5f87d082b571719fBd01346Ff82C3E317Dc5", x = "0x39846116aEA68a6AC45f6aacE6751F1645c6352f");
            var C = function() {
                    var e = (0, r.Z)(c().mark((function e(n) {
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise((function(e, t) {
                                        var r = n.toString();
                                        if (-1 !== r.indexOf("Error: Internal JSON-RPC error.")) {
                                            var o = r.replace("Error: Internal JSON-RPC error.", ""),
                                                c = JSON.parse(o);
                                            return e(c.message)
                                        }
                                        if (-1 === r.indexOf("Error: Transaction has been reverted by the EVM:")) return e(n.message);
                                        var a = r.replace("Error: Transaction has been reverted by the EVM:", ""),
                                            i = JSON.parse(a),
                                            u = new Web3(window.ethereum);
                                        u.eth.getTransaction(i.transactionHash).then((function(e) { return u.eth.call(e, e.blockNumber) })).then((function(e) { console.log(e) })).catch((function(n) {
                                            console.log(n);
                                            try {
                                                var r = n.message.substring(24),
                                                    o = (r = JSON.parse(r)).message;
                                                e(o)
                                            } catch (c) { t(c) }
                                        }))
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) { return e.apply(this, arguments) }
                }(),
                E = function() { try { var e = window.localStorage.getItem(i); return (e && JSON.parse(e)).token } catch (n) { return "" } }
        },
        49578: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, { default: function() { return b } });
            var r = t(92809),
                o = t(30266),
                c = t(809),
                a = t.n(c),
                i = (t(65210), t(9008)),
                u = t(67294),
                s = t(44548),
                p = t(85893),
                f = function(e) {
                    var n = e.showPopup,
                        t = e.closePopup,
                        r = e.switchNetwork;
                    return (0, p.jsx)(s.Z, { closePopup: t, showPopup: n, onOk: r, okButtonText: "Switch to bsc network", title: "Switch Network", content: "We use Binance Smart Chain network to get real-time data of the game! If you don\u2019t have your wallet connected to BSC network you might not be able to enjoy the full experience." })
                },
                d = t(82025);

            function l(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) { return Object.getOwnPropertyDescriptor(e, n).enumerable }))), t.push.apply(t, r)
                }
                return t
            }

            function h(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? l(Object(t), !0).forEach((function(n) {
                        (0, r.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach((function(n) { Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n)) }))
                }
                return e
            }
            var b = function(e) {
                var n = e.Component,
                    t = e.pageProps,
                    r = (0, u.useState)(!1),
                    c = r[0],
                    s = r[1],
                    l = function() { s(!1) };
                (0, u.useEffect)((function() { setTimeout((function() { window.ethereum && window.ethereum.chainId != d.RE && s(!0) }), 1e3) }), []);
                var b = function() {
                    var e = (0, o.Z)(a().mark((function e() {
                        var n;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = window.ethereum, e.prev = 2, e.next = 5, n.request({ method: "wallet_switchEthereumChain", params: [{ chainId: d.RE }] });
                                case 5:
                                    l(), e.next = 19;
                                    break;
                                case 8:
                                    if (e.prev = 8, e.t0 = e.catch(2), console.log(e.t0), 4902 !== e.t0.code) { e.next = 19; break }
                                    return e.prev = 12, e.next = 15, n.request({ method: "wallet_addEthereumChain", params: [{ chainId: d.RE, rpcUrl: d.Kf, chainName: "Binance Main net", nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18 } }] });
                                case 15:
                                    e.next = 19;
                                    break;
                                case 17:
                                    e.prev = 17, e.t1 = e.catch(12);
                                case 19:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8],
                            [12, 17]
                        ])
                    })));
                    return function() { return e.apply(this, arguments) }
                }();
                return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsxs)(i.default, { children: [(0, p.jsx)("script", { dangerouslySetInnerHTML: { __html: "\n          !function(f,b,e,v,n,t,s)\n          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n          n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n          n.queue=[];t=b.createElement(e);t.async=!0;\n          t.src=v;s=b.getElementsByTagName(e)[0];\n          s.parentNode.insertBefore(t,s)}(window, document,'script',\n          'https://connect.facebook.net/en_US/fbevents.js');\n          fbq('init', '1047480669410552');\n          fbq('track', 'PageView');\n        " } }), (0, p.jsx)("script", { async: !0, src: "https://www.googletagmanager.com/gtag/js?id=G-VY0FVYM89T" }), (0, p.jsx)("script", { dangerouslySetInnerHTML: { __html: "\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n\n            gtag('config', 'G-VY0FVYM89T');\n            " } })] }), (0, p.jsx)("noscript", { children: (0, p.jsx)("img", { height: "1", width: "1", style: { display: "none" }, src: "https://www.facebook.com/tr?id=1047480669410552&ev=PageView&noscript=1", alt: "pixel" }) }), (0, p.jsx)(n, h({}, t)), (0, p.jsx)(f, { showPopup: c, closePopup: l, switchNetwork: b })] })
            }
        },
        81780: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() { return t(49578) }])
        },
        74607: function(e) { e.exports = { popup: "DytPopup_popup__30--b", header: "DytPopup_header__-clH8", close: "DytPopup_close__31PFn", inner: "DytPopup_inner__2-LY0", heroList: "DytPopup_heroList__2VXC6", hero: "DytPopup_hero__r_5IE", heroTitle: "DytPopup_heroTitle__qC4WP", heroAvatar: "DytPopup_heroAvatar__10ZZ4", count: "DytPopup_count__1Ub1i", heroStat: "DytPopup_heroStat__1CVve", btnGroup: "DytPopup_btnGroup__3pmcG", btnCancel: "DytPopup_btnCancel__3o09h" } },
        65210: function() {},
        9008: function(e, n, t) { e.exports = t(70639) },
        30266: function(e, n, t) {
            "use strict";

            function r(e, n, t, r, o, c, a) {
                try {
                    var i = e[c](a),
                        u = i.value
                } catch (s) { return void t(s) }
                i.done ? n(u) : Promise.resolve(u).then(r, o)
            }

            function o(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(o, c) {
                        var a = e.apply(n, t);

                        function i(e) { r(a, o, c, i, u, "next", e) }

                        function u(e) { r(a, o, c, i, u, "throw", e) }
                        i(void 0)
                    }))
                }
            }
            t.d(n, { Z: function() { return o } })
        },
        92809: function(e, n, t) {
            "use strict";

            function r(e, n, t) { return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e }
            t.d(n, { Z: function() { return r } })
        }
    },
    function(e) {
        var n = function(n) { return e(e.s = n) };
        e.O(0, [774, 179], (function() { return n(81780), n(34651) }));
        var t = e.O();
        _N_E = t
    }
]);