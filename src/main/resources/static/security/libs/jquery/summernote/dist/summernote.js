! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(window.jQuery)
}(function(a) {
    Array.prototype.reduce || (Array.prototype.reduce = function(a) {
        var b, c = Object(this),
            d = c.length >>> 0,
            e = 0;
        if (2 === arguments.length) b = arguments[1];
        else {
            for (; d > e && !(e in c);) e++;
            if (e >= d) throw new TypeError("Reduce of empty array with no initial value");
            b = c[e++]
        }
        for (; d > e; e++) e in c && (b = a(b, c[e], e, c));
        return b
    }), "function" != typeof Array.prototype.filter && (Array.prototype.filter = function(a) {
        for (var b = Object(this), c = b.length >>> 0, d = [], e = arguments.length >= 2 ? arguments[1] : void 0, f = 0; c > f; f++)
            if (f in b) {
                var g = b[f];
                a.call(e, g, f, b) && d.push(g)
            }
        return d
    });
    var b, c = "function" == typeof define && define.amd,
        d = function(b) {
            var c = "Comic Sans MS" === b ? "Courier New" : "Comic Sans MS",
                d = a("<div>").css({
                    position: "absolute",
                    left: "-9999px",
                    top: "-9999px",
                    fontSize: "200px"
                }).text("mmmmmmmmmwwwwwww").appendTo(document.body),
                e = d.css("fontFamily", c).width(),
                f = d.css("fontFamily", b + "," + c).width();
            return d.remove(), e !== f
        },
        e = {
            isMac: navigator.appVersion.indexOf("Mac") > -1,
            isMSIE: navigator.userAgent.indexOf("MSIE") > -1 || navigator.userAgent.indexOf("Trident") > -1,
            isFF: navigator.userAgent.indexOf("Firefox") > -1,
            jqueryVersion: parseFloat(a.fn.jquery),
            isSupportAmd: c,
            hasCodeMirror: c ? require.specified("CodeMirror") : !!window.CodeMirror,
            isFontInstalled: d,
            isW3CRangeSupport: !!document.createRange
        },
        f = function() {
            var b = function(a) {
                    return function(b) {
                        return a === b
                    }
                },
                c = function(a, b) {
                    return a === b
                },
                d = function(a) {
                    return function(b, c) {
                        return b[a] === c[a]
                    }
                },
                e = function() {
                    return !0
                },
                f = function() {
                    return !1
                },
                g = function(a) {
                    return function() {
                        return !a.apply(a, arguments)
                    }
                },
                h = function(a, b) {
                    return function(c) {
                        return a(c) && b(c)
                    }
                },
                i = function(a) {
                    return a
                },
                j = 0,
                k = function(a) {
                    var b = ++j + "";
                    return a ? a + b : b
                },
                l = function(b) {
                    var c = a(document);
                    return {
                        top: b.top + c.scrollTop(),
                        left: b.left + c.scrollLeft(),
                        width: b.right - b.left,
                        height: b.bottom - b.top
                    }
                },
                m = function(a) {
                    var b = {};
                    for (var c in a) a.hasOwnProperty(c) && (b[a[c]] = c);
                    return b
                };
            return {
                eq: b,
                eq2: c,
                peq2: d,
                ok: e,
                fail: f,
                self: i,
                not: g,
                and: h,
                uniqueId: k,
                rect2bnd: l,
                invertObject: m
            }
        }(),
        g = function() {
            var b = function(a) {
                    return a[0]
                },
                c = function(a) {
                    return a[a.length - 1]
                },
                d = function(a) {
                    return a.slice(0, a.length - 1)
                },
                e = function(a) {
                    return a.slice(1)
                },
                g = function(a, b) {
                    for (var c = 0, d = a.length; d > c; c++) {
                        var e = a[c];
                        if (b(e)) return e
                    }
                },
                h = function(a, b) {
                    for (var c = 0, d = a.length; d > c; c++)
                        if (!b(a[c])) return !1;
                    return !0
                },
                i = function(b, c) {
                    return -1 !== a.inArray(c, b)
                },
                j = function(a, b) {
                    return b = b || f.self, a.reduce(function(a, c) {
                        return a + b(c)
                    }, 0)
                },
                k = function(a) {
                    for (var b = [], c = -1, d = a.length; ++c < d;) b[c] = a[c];
                    return b
                },
                l = function(a, d) {
                    if (!a.length) return [];
                    var f = e(a);
                    return f.reduce(function(a, b) {
                        var e = c(a);
                        return d(c(e), b) ? e[e.length] = b : a[a.length] = [b], a
                    }, [
                        [b(a)]
                    ])
                },
                m = function(a) {
                    for (var b = [], c = 0, d = a.length; d > c; c++) a[c] && b.push(a[c]);
                    return b
                },
                n = function(a) {
                    for (var b = [], c = 0, d = a.length; d > c; c++) i(b, a[c]) || b.push(a[c]);
                    return b
                },
                o = function(a, b) {
                    var c = a.indexOf(b);
                    return -1 === c ? null : a[c + 1]
                },
                p = function(a, b) {
                    var c = a.indexOf(b);
                    return -1 === c ? null : a[c - 1]
                };
            return {
                head: b,
                last: c,
                initial: d,
                tail: e,
                prev: p,
                next: o,
                find: g,
                contains: i,
                all: h,
                sum: j,
                from: k,
                clusterBy: l,
                compact: m,
                unique: n
            }
        }(),
        h = String.fromCharCode(160),
        i = "﻿",
        j = function() {
            var b = function(b) {
                    return b && a(b).hasClass("note-editable")
                },
                c = function(b) {
                    return b && a(b).hasClass("note-control-sizing")
                },
                d = function(b) {
                    var c;
                    if (b.hasClass("note-air-editor")) {
                        var d = g.last(b.attr("id").split("-"));
                        return c = function(b) {
                            return function() {
                                return a(b + d)
                            }
                        }, {
                            editor: function() {
                                return b
                            },
                            editable: function() {
                                return b
                            },
                            popover: c("#note-popover-"),
                            handle: c("#note-handle-"),
                            dialog: c("#note-dialog-")
                        }
                    }
                    return c = function(a) {
                        return function() {
                            return b.find(a)
                        }
                    }, {
                        editor: function() {
                            return b
                        },
                        dropzone: c(".note-dropzone"),
                        toolbar: c(".note-toolbar"),
                        editable: c(".note-editable"),
                        codable: c(".note-codable"),
                        statusbar: c(".note-statusbar"),
                        popover: c(".note-popover"),
                        handle: c(".note-handle"),
                        dialog: c(".note-dialog")
                    }
                },
                k = function(a) {
                    return a = a.toUpperCase(),
                        function(b) {
                            return b && b.nodeName.toUpperCase() === a
                        }
                },
                l = function(a) {
                    return a && 3 === a.nodeType
                },
                m = function(a) {
                    return a && /^BR|^IMG|^HR/.test(a.nodeName.toUpperCase())
                },
                n = function(a) {
                    return b(a) ? !1 : a && /^DIV|^P|^LI|^H[1-7]/.test(a.nodeName.toUpperCase())
                },
                o = k("LI"),
                p = function(a) {
                    return n(a) && !o(a)
                },
                q = k("TABLE"),
                r = function(a) {
                    return !(v(a) || s(a) || n(a) || q(a) || u(a))
                },
                s = function(a) {
                    return a && /^UL|^OL/.test(a.nodeName.toUpperCase())
                },
                t = function(a) {
                    return a && /^TD|^TH/.test(a.nodeName.toUpperCase())
                },
                u = k("BLOCKQUOTE"),
                v = function(a) {
                    return t(a) || u(a) || b(a)
                },
                w = k("A"),
                x = function(a) {
                    return r(a) && !!G(a, n)
                },
                y = function(a) {
                    return r(a) && !G(a, n)
                },
                z = k("BODY"),
                A = function(a, b) {
                    return a.nextSibling === b || a.previousSibling === b
                },
                B = function(a, b) {
                    b = b || f.ok;
                    var c = [];
                    return a.previousSibling && b(a.previousSibling) && c.push(a.previousSibling), c.push(a), a.nextSibling && b(a.nextSibling) && c.push(a.nextSibling), c
                },
                C = e.isMSIE ? "&nbsp;" : "<br>",
                D = function(a) {
                    return l(a) ? a.nodeValue.length : a.childNodes.length
                },
                E = function(a) {
                    var b = D(a);
                    return 0 === b ? !0 : j.isText(a) || 1 !== b || a.innerHTML !== C ? !1 : !0
                },
                F = function(a) {
                    m(a) || D(a) || (a.innerHTML = C)
                },
                G = function(a, c) {
                    for (; a;) {
                        if (c(a)) return a;
                        if (b(a)) break;
                        a = a.parentNode
                    }
                    return null
                },
                H = function(a, c) {
                    for (a = a.parentNode; a && 1 === D(a);) {
                        if (c(a)) return a;
                        if (b(a)) break;
                        a = a.parentNode
                    }
                    return null
                },
                I = function(a, c) {
                    c = c || f.fail;
                    var d = [];
                    return G(a, function(a) {
                        return b(a) || d.push(a), c(a)
                    }), d
                },
                J = function(a, b) {
                    var c = I(a);
                    return g.last(c.filter(b))
                },
                K = function(b, c) {
                    for (var d = I(b), e = c; e; e = e.parentNode)
                        if (a.inArray(e, d) > -1) return e;
                    return null
                },
                L = function(a, b) {
                    b = b || f.fail;
                    for (var c = []; a && !b(a);) c.push(a), a = a.previousSibling;
                    return c
                },
                M = function(a, b) {
                    b = b || f.fail;
                    for (var c = []; a && !b(a);) c.push(a), a = a.nextSibling;
                    return c
                },
                N = function(a, b) {
                    var c = [];
                    return b = b || f.ok,
                        function d(e) {
                            a !== e && b(e) && c.push(e);
                            for (var f = 0, g = e.childNodes.length; g > f; f++) d(e.childNodes[f])
                        }(a), c
                },
                O = function(b, c) {
                    var d = b.parentNode,
                        e = a("<" + c + ">")[0];
                    return d.insertBefore(e, b), e.appendChild(b), e
                },
                P = function(a, b) {
                    var c = b.nextSibling,
                        d = b.parentNode;
                    return c ? d.insertBefore(a, c) : d.appendChild(a), a
                },
                Q = function(b, c) {
                    return a.each(c, function(a, c) {
                        b.appendChild(c)
                    }), b
                },
                R = function(a) {
                    return 0 === a.offset
                },
                S = function(a) {
                    return a.offset === D(a.node)
                },
                T = function(a) {
                    return R(a) || S(a)
                },
                U = function(a, b) {
                    for (; a && a !== b;) {
                        if (0 !== W(a)) return !1;
                        a = a.parentNode
                    }
                    return !0
                },
                V = function(a, b) {
                    for (; a && a !== b;) {
                        if (W(a) !== D(a.parentNode) - 1) return !1;
                        a = a.parentNode
                    }
                    return !0
                },
                W = function(a) {
                    for (var b = 0; a = a.previousSibling;) b += 1;
                    return b
                },
                X = function(a) {
                    return !!(a && a.childNodes && a.childNodes.length)
                },
                Y = function(a, c) {
                    var d, e;
                    if (0 === a.offset) {
                        if (b(a.node)) return null;
                        d = a.node.parentNode, e = W(a.node)
                    } else X(a.node) ? (d = a.node.childNodes[a.offset - 1], e = D(d)) : (d = a.node, e = c ? 0 : a.offset - 1);
                    return {
                        node: d,
                        offset: e
                    }
                },
                Z = function(a, c) {
                    var d, e;
                    if (D(a.node) === a.offset) {
                        if (b(a.node)) return null;
                        d = a.node.parentNode, e = W(a.node) + 1
                    } else X(a.node) ? (d = a.node.childNodes[a.offset], e = 0) : (d = a.node, e = c ? D(a.node) : a.offset + 1);
                    return {
                        node: d,
                        offset: e
                    }
                },
                $ = function(a, b) {
                    return a.node === b.node && a.offset === b.offset
                },
                _ = function(a) {
                    if (l(a.node) || !X(a.node) || E(a.node)) return !0;
                    var b = a.node.childNodes[a.offset - 1],
                        c = a.node.childNodes[a.offset];
                    return b && !m(b) || c && !m(c) ? !1 : !0
                },
                ab = function(a, b) {
                    for (; a;) {
                        if (b(a)) return a;
                        a = Y(a)
                    }
                    return null
                },
                bb = function(a, b) {
                    for (; a;) {
                        if (b(a)) return a;
                        a = Z(a)
                    }
                    return null
                },
                cb = function(a, b, c, d) {
                    for (var e = a; e && (c(e), !$(e, b));) {
                        var f = d && a.node !== e.node && b.node !== e.node;
                        e = Z(e, f)
                    }
                },
                db = function(b, c) {
                    var d = I(c, f.eq(b));
                    return a.map(d, W).reverse()
                },
                eb = function(a, b) {
                    for (var c = a, d = 0, e = b.length; e > d; d++) c = c.childNodes.length <= b[d] ? c.childNodes[c.childNodes.length - 1] : c.childNodes[b[d]];
                    return c
                },
                fb = function(a, b) {
                    if (l(a.node)) return R(a) ? a.node : S(a) ? a.node.nextSibling : a.node.splitText(a.offset);
                    var c = a.node.childNodes[a.offset],
                        d = P(a.node.cloneNode(!1), a.node);
                    return Q(d, M(c)), b || (F(a.node), F(d)), d
                },
                gb = function(a, b, c) {
                    var d = I(b.node, f.eq(a));
                    return d.length ? 1 === d.length ? fb(b, c) : d.reduce(function(a, d) {
                                var e = P(d.cloneNode(!1), d);
                                return a === b.node && (a = fb(b, c)), Q(e, M(a)), c || (F(d), F(e)), e
                            }) : null
                },
                hb = function(a, b) {
                    var c, d, e = b ? n : v,
                        f = I(a.node, e),
                        h = g.last(f) || a.node;
                    e(h) ? (c = f[f.length - 2], d = h) : (c = h, d = c.parentNode);
                    var i = c && gb(c, a, b);
                    return {
                        rightNode: i,
                        container: d
                    }
                },
                ib = function(a) {
                    return document.createElement(a)
                },
                jb = function(a) {
                    return document.createTextNode(a)
                },
                kb = function(a, b) {
                    if (a && a.parentNode) {
                        if (a.removeNode) return a.removeNode(b);
                        var c = a.parentNode;
                        if (!b) {
                            var d, e, f = [];
                            for (d = 0, e = a.childNodes.length; e > d; d++) f.push(a.childNodes[d]);
                            for (d = 0, e = f.length; e > d; d++) c.insertBefore(f[d], a)
                        }
                        c.removeChild(a)
                    }
                },
                lb = function(a, c) {
                    for (; a && !b(a) && c(a);) {
                        var d = a.parentNode;
                        kb(a), a = d
                    }
                },
                mb = function(a, b) {
                    if (a.nodeName.toUpperCase() === b.toUpperCase()) return a;
                    var c = ib(b);
                    return a.style.cssText && (c.style.cssText = a.style.cssText), Q(c, g.from(a.childNodes)), P(c, a), kb(a), c
                },
                nb = k("TEXTAREA"),
                ob = function(b, c) {
                    var d = nb(b[0]) ? b.val() : b.html();
                    if (c) {
                        var e = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;
                        d = d.replace(e, function(a, b, c) {
                            c = c.toUpperCase();
                            var d = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(c) && !!b,
                                e = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(c);
                            return a + (d || e ? "\n" : "")
                        }), d = a.trim(d)
                    }
                    return d
                },
                pb = function(a, b) {
                    var c = a.val();
                    return b ? c.replace(/[\n\r]/g, "") : c
                };
            return {
                NBSP_CHAR: h,
                ZERO_WIDTH_NBSP_CHAR: i,
                blank: C,
                emptyPara: "<p>" + C + "</p>",
                makePredByNodeName: k,
                isEditable: b,
                isControlSizing: c,
                buildLayoutInfo: d,
                isText: l,
                isVoid: m,
                isPara: n,
                isPurePara: p,
                isInline: r,
                isBodyInline: y,
                isBody: z,
                isParaInline: x,
                isList: s,
                isTable: q,
                isCell: t,
                isBlockquote: u,
                isBodyContainer: v,
                isAnchor: w,
                isDiv: k("DIV"),
                isLi: o,
                isBR: k("BR"),
                isSpan: k("SPAN"),
                isB: k("B"),
                isU: k("U"),
                isS: k("S"),
                isI: k("I"),
                isImg: k("IMG"),
                isTextarea: nb,
                isEmpty: E,
                isEmptyAnchor: f.and(w, E),
                isClosestSibling: A,
                withClosestSiblings: B,
                nodeLength: D,
                isLeftEdgePoint: R,
                isRightEdgePoint: S,
                isEdgePoint: T,
                isLeftEdgeOf: U,
                isRightEdgeOf: V,
                prevPoint: Y,
                nextPoint: Z,
                isSamePoint: $,
                isVisiblePoint: _,
                prevPointUntil: ab,
                nextPointUntil: bb,
                walkPoint: cb,
                ancestor: G,
                singleChildAncestor: H,
                listAncestor: I,
                lastAncestor: J,
                listNext: M,
                listPrev: L,
                listDescendant: N,
                commonAncestor: K,
                wrap: O,
                insertAfter: P,
                appendChildNodes: Q,
                position: W,
                hasChildren: X,
                makeOffsetPath: db,
                fromOffsetPath: eb,
                splitTree: gb,
                splitPoint: hb,
                create: ib,
                createText: jb,
                remove: kb,
                removeWhile: lb,
                replace: mb,
                html: ob,
                value: pb
            }
        }(),
        k = function() {
            var b = function(a, b) {
                    var c, d, e = a.parentElement(),
                        f = document.body.createTextRange(),
                        h = g.from(e.childNodes);
                    for (c = 0; c < h.length; c++)
                        if (!j.isText(h[c])) {
                            if (f.moveToElementText(h[c]), f.compareEndPoints("StartToStart", a) >= 0) break;
                            d = h[c]
                        }
                    if (0 !== c && j.isText(h[c - 1])) {
                        var i = document.body.createTextRange(),
                            k = null;
                        i.moveToElementText(d || e), i.collapse(!d), k = d ? d.nextSibling : e.firstChild;
                        var l = a.duplicate();
                        l.setEndPoint("StartToStart", i);
                        for (var m = l.text.replace(/[\r\n]/g, "").length; m > k.nodeValue.length && k.nextSibling;) m -= k.nodeValue.length, k = k.nextSibling; {
                            k.nodeValue
                        }
                        b && k.nextSibling && j.isText(k.nextSibling) && m === k.nodeValue.length && (m -= k.nodeValue.length, k = k.nextSibling), e = k, c = m
                    }
                    return {
                        cont: e,
                        offset: c
                    }
                },
                c = function(a) {
                    var b = function(a, c) {
                            var d, e;
                            if (j.isText(a)) {
                                var h = j.listPrev(a, f.not(j.isText)),
                                    i = g.last(h).previousSibling;
                                d = i || a.parentNode, c += g.sum(g.tail(h), j.nodeLength), e = !i
                            } else {
                                if (d = a.childNodes[c] || a, j.isText(d)) return b(d, 0);
                                c = 0, e = !1
                            }
                            return {
                                node: d,
                                collapseToStart: e,
                                offset: c
                            }
                        },
                        c = document.body.createTextRange(),
                        d = b(a.node, a.offset);
                    return c.moveToElementText(d.node), c.collapse(d.collapseToStart), c.moveStart("character", d.offset), c
                },
                d = function(b, h, i, k) {
                    this.sc = b, this.so = h, this.ec = i, this.eo = k;
                    var l = function() {
                        if (e.isW3CRangeSupport) {
                            var a = document.createRange();
                            return a.setStart(b, h), a.setEnd(i, k), a
                        }
                        var d = c({
                            node: b,
                            offset: h
                        });
                        return d.setEndPoint("EndToEnd", c({
                            node: i,
                            offset: k
                        })), d
                    };
                    this.getPoints = function() {
                        return {
                            sc: b,
                            so: h,
                            ec: i,
                            eo: k
                        }
                    }, this.getStartPoint = function() {
                        return {
                            node: b,
                            offset: h
                        }
                    }, this.getEndPoint = function() {
                        return {
                            node: i,
                            offset: k
                        }
                    }, this.select = function() {
                        var a = l();
                        if (e.isW3CRangeSupport) {
                            var b = document.getSelection();
                            b.rangeCount > 0 && b.removeAllRanges(), b.addRange(a)
                        } else a.select()
                    }, this.normalize = function() {
                        var a = function(a) {
                                return j.isVisiblePoint(a) || (a = j.isLeftEdgePoint(a) ? j.nextPointUntil(a, j.isVisiblePoint) : j.prevPointUntil(a, j.isVisiblePoint)), a
                            },
                            b = a(this.getStartPoint()),
                            c = a(this.getEndPoint());
                        return new d(b.node, b.offset, c.node, c.offset)
                    }, this.nodes = function(a, b) {
                        a = a || f.ok;
                        var c = b && b.includeAncestor,
                            d = b && b.fullyContains,
                            e = this.getStartPoint(),
                            h = this.getEndPoint(),
                            i = [],
                            k = [];
                        return j.walkPoint(e, h, function(b) {
                            if (!j.isEditable(b.node)) {
                                var e;
                                d ? (j.isLeftEdgePoint(b) && k.push(b.node), j.isRightEdgePoint(b) && g.contains(k, b.node) && (e = b.node)) : e = c ? j.ancestor(b.node, a) : b.node, e && a(e) && i.push(e)
                            }
                        }, !0), g.unique(i)
                    }, this.commonAncestor = function() {
                        return j.commonAncestor(b, i)
                    }, this.expand = function(a) {
                        var c = j.ancestor(b, a),
                            e = j.ancestor(i, a);
                        if (!c && !e) return new d(b, h, i, k);
                        var f = this.getPoints();
                        return c && (f.sc = c, f.so = 0), e && (f.ec = e, f.eo = j.nodeLength(e)), new d(f.sc, f.so, f.ec, f.eo)
                    }, this.collapse = function(a) {
                        return a ? new d(b, h, b, h) : new d(i, k, i, k)
                    }, this.splitText = function() {
                        var a = b === i,
                            c = this.getPoints();
                        return j.isText(i) && !j.isEdgePoint(this.getEndPoint()) && i.splitText(k), j.isText(b) && !j.isEdgePoint(this.getStartPoint()) && (c.sc = b.splitText(h), c.so = 0, a && (c.ec = c.sc, c.eo = k - h)), new d(c.sc, c.so, c.ec, c.eo)
                    }, this.deleteContents = function() {
                        if (this.isCollapsed()) return this;
                        var b = this.splitText(),
                            c = b.nodes(null, {
                                fullyContains: !0
                            }),
                            e = j.prevPointUntil(b.getStartPoint(), function(a) {
                                return !g.contains(c, a.node)
                            }),
                            f = [];
                        return a.each(c, function(a, b) {
                            var c = b.parentNode;
                            e.node !== c && 1 === j.nodeLength(c) && f.push(c), j.remove(b, !1)
                        }), a.each(f, function(a, b) {
                            j.remove(b, !1)
                        }), new d(e.node, e.offset, e.node, e.offset).normalize()
                    };
                    var m = function(a) {
                        return function() {
                            var c = j.ancestor(b, a);
                            return !!c && c === j.ancestor(i, a)
                        }
                    };
                    this.isOnEditable = m(j.isEditable), this.isOnList = m(j.isList), this.isOnAnchor = m(j.isAnchor), this.isOnCell = m(j.isCell), this.isLeftEdgeOf = function(a) {
                        if (!j.isLeftEdgePoint(this.getStartPoint())) return !1;
                        var b = j.ancestor(this.sc, a);
                        return b && j.isLeftEdgeOf(this.sc, b)
                    }, this.isCollapsed = function() {
                        return b === i && h === k
                    }, this.wrapBodyInlineWithPara = function() {
                        if (j.isBodyContainer(b) && j.isEmpty(b)) return b.innerHTML = j.emptyPara, new d(b.firstChild, 0, b.firstChild, 0);
                        if (j.isParaInline(b) || j.isPara(b)) return this.normalize();
                        var a;
                        if (j.isInline(b)) {
                            var c = j.listAncestor(b, f.not(j.isInline));
                            a = g.last(c), j.isInline(a) || (a = c[c.length - 2] || b.childNodes[h])
                        } else a = b.childNodes[h > 0 ? h - 1 : 0];
                        var e = j.listPrev(a, j.isParaInline).reverse();
                        if (e = e.concat(j.listNext(a.nextSibling, j.isParaInline)), e.length) {
                            var i = j.wrap(g.head(e), "p");
                            j.appendChildNodes(i, g.tail(e))
                        }
                        return this.normalize()
                    }, this.insertNode = function(a) {
                        var b = this.wrapBodyInlineWithPara().deleteContents(),
                            c = j.splitPoint(b.getStartPoint(), j.isInline(a));
                        return c.rightNode ? c.rightNode.parentNode.insertBefore(a, c.rightNode) : c.container.appendChild(a), a
                    }, this.toString = function() {
                        var a = l();
                        return e.isW3CRangeSupport ? a.toString() : a.text
                    }, this.bookmark = function(a) {
                        return {
                            s: {
                                path: j.makeOffsetPath(a, b),
                                offset: h
                            },
                            e: {
                                path: j.makeOffsetPath(a, i),
                                offset: k
                            }
                        }
                    }, this.paraBookmark = function(a) {
                        return {
                            s: {
                                path: g.tail(j.makeOffsetPath(g.head(a), b)),
                                offset: h
                            },
                            e: {
                                path: g.tail(j.makeOffsetPath(g.last(a), i)),
                                offset: k
                            }
                        }
                    }, this.getClientRects = function() {
                        var a = l();
                        return a.getClientRects()
                    }
                };
            return {
                create: function(a, c, f, g) {
                    if (arguments.length) 2 === arguments.length && (f = a, g = c);
                    else if (e.isW3CRangeSupport) {
                        var h = document.getSelection();
                        if (0 === h.rangeCount) return null;
                        if (j.isBody(h.anchorNode)) return null;
                        var i = h.getRangeAt(0);
                        a = i.startContainer, c = i.startOffset, f = i.endContainer, g = i.endOffset
                    } else {
                        var k = document.selection.createRange(),
                            l = k.duplicate();
                        l.collapse(!1);
                        var m = k;
                        m.collapse(!0);
                        var n = b(m, !0),
                            o = b(l, !1);
                        j.isText(n.node) && j.isLeftEdgePoint(n) && j.isTextNode(o.node) && j.isRightEdgePoint(o) && o.node.nextSibling === n.node && (n = o), a = n.cont, c = n.offset, f = o.cont, g = o.offset
                    }
                    return new d(a, c, f, g)
                },
                createFromNode: function(a) {
                    var b = a,
                        c = 0,
                        d = a,
                        e = j.nodeLength(d);
                    return j.isVoid(b) && (c = j.listPrev(b).length - 1, b = b.parentNode), j.isBR(d) ? (e = j.listPrev(d).length - 1, d = d.parentNode) : j.isVoid(d) && (e = j.listPrev(d).length, d = d.parentNode), this.create(b, c, d, e)
                },
                createFromBookmark: function(a, b) {
                    var c = j.fromOffsetPath(a, b.s.path),
                        e = b.s.offset,
                        f = j.fromOffsetPath(a, b.e.path),
                        g = b.e.offset;
                    return new d(c, e, f, g)
                },
                createFromParaBookmark: function(a, b) {
                    var c = a.s.offset,
                        e = a.e.offset,
                        f = j.fromOffsetPath(g.head(b), a.s.path),
                        h = j.fromOffsetPath(g.last(b), a.e.path);
                    return new d(f, c, h, e)
                }
            }
        }(),
        l = {
            version: "0.6.1",
            options: {
                width: null,
                height: null,
                minHeight: null,
                maxHeight: null,
                focus: !1,
                tabsize: 4,
                styleWithSpan: !0,
                disableLinkTarget: !1,
                disableDragAndDrop: !1,
                disableResizeEditor: !1,
                shortcuts: !0,
                placeholder: !1,
                prettifyHtml: !0,
                codemirror: {
                    mode: "text/html",
                    htmlMode: !0,
                    lineNumbers: !0
                },
                lang: "en-US",
                direction: null,
                toolbar: [
                    ["style", ["style"]],
                    ["font", ["bold", "italic", "underline", "clear"]],
                    ["fontname", ["fontname"]],
                    ["color", ["color"]],
                    ["para", ["ul", "ol", "paragraph"]],
                    ["height", ["height"]],
                    ["table", ["table"]],
                    ["insert", ["link", "picture", "hr"]],
                    ["view", ["fullscreen", "codeview"]],
                    ["help", ["help"]]
                ],
                airMode: !1,
                airPopover: [
                    ["color", ["color"]],
                    ["font", ["bold", "underline", "clear"]],
                    ["para", ["ul", "paragraph"]],
                    ["table", ["table"]],
                    ["insert", ["link", "picture"]]
                ],
                styleTags: ["p", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"],
                defaultFontName: "Helvetica Neue",
                fontNames: ["Arial", "Arial Black", "Comic Sans MS", "Courier New", "Helvetica Neue", "Impact", "Lucida Grande", "Tahoma", "Times New Roman", "Verdana"],
                fontNamesIgnoreCheck: [],
                colors: [
                    ["#000000", "#424242", "#636363", "#9C9C94", "#CEC6CE", "#EFEFEF", "#F7F7F7", "#FFFFFF"],
                    ["#FF0000", "#FF9C00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#9C00FF", "#FF00FF"],
                    ["#F7C6CE", "#FFE7CE", "#FFEFC6", "#D6EFD6", "#CEDEE7", "#CEE7F7", "#D6D6E7", "#E7D6DE"],
                    ["#E79C9C", "#FFC69C", "#FFE79C", "#B5D6A5", "#A5C6CE", "#9CC6EF", "#B5A5D6", "#D6A5BD"],
                    ["#E76363", "#F7AD6B", "#FFD663", "#94BD7B", "#73A5AD", "#6BADDE", "#8C7BC6", "#C67BA5"],
                    ["#CE0000", "#E79439", "#EFC631", "#6BA54A", "#4A7B8C", "#3984C6", "#634AA5", "#A54A7B"],
                    ["#9C0000", "#B56308", "#BD9400", "#397B21", "#104A5A", "#085294", "#311873", "#731842"],
                    ["#630000", "#7B3900", "#846300", "#295218", "#083139", "#003163", "#21104A", "#4A1031"]
                ],
                lineHeights: ["1.0", "1.2", "1.4", "1.5", "1.6", "1.8", "2.0", "3.0"],
                insertTableMaxSize: {
                    col: 10,
                    row: 10
                },
                maximumImageFileSize: null,
                oninit: null,
                onfocus: null,
                onblur: null,
                onenter: null,
                onkeyup: null,
                onkeydown: null,
                onImageUpload: null,
                onImageUploadError: null,
                onMediaDelete: null,
                onToolbarClick: null,
                onsubmit: null,
                onCreateLink: function(a) {
                    return -1 !== a.indexOf("@") && -1 === a.indexOf(":") ? a = "mailto:" + a : -1 === a.indexOf("://") && (a = "http://" + a), a
                },
                keyMap: {
                    pc: {
                        ENTER: "insertParagraph",
                        "CTRL+Z": "undo",
                        "CTRL+Y": "redo",
                        TAB: "tab",
                        "SHIFT+TAB": "untab",
                        "CTRL+B": "bold",
                        "CTRL+I": "italic",
                        "CTRL+U": "underline",
                        "CTRL+SHIFT+S": "strikethrough",
                        "CTRL+BACKSLASH": "removeFormat",
                        "CTRL+SHIFT+L": "justifyLeft",
                        "CTRL+SHIFT+E": "justifyCenter",
                        "CTRL+SHIFT+R": "justifyRight",
                        "CTRL+SHIFT+J": "justifyFull",
                        "CTRL+SHIFT+NUM7": "insertUnorderedList",
                        "CTRL+SHIFT+NUM8": "insertOrderedList",
                        "CTRL+LEFTBRACKET": "outdent",
                        "CTRL+RIGHTBRACKET": "indent",
                        "CTRL+NUM0": "formatPara",
                        "CTRL+NUM1": "formatH1",
                        "CTRL+NUM2": "formatH2",
                        "CTRL+NUM3": "formatH3",
                        "CTRL+NUM4": "formatH4",
                        "CTRL+NUM5": "formatH5",
                        "CTRL+NUM6": "formatH6",
                        "CTRL+ENTER": "insertHorizontalRule",
                        "CTRL+K": "showLinkDialog"
                    },
                    mac: {
                        ENTER: "insertParagraph",
                        "CMD+Z": "undo",
                        "CMD+SHIFT+Z": "redo",
                        TAB: "tab",
                        "SHIFT+TAB": "untab",
                        "CMD+B": "bold",
                        "CMD+I": "italic",
                        "CMD+U": "underline",
                        "CMD+SHIFT+S": "strikethrough",
                        "CMD+BACKSLASH": "removeFormat",
                        "CMD+SHIFT+L": "justifyLeft",
                        "CMD+SHIFT+E": "justifyCenter",
                        "CMD+SHIFT+R": "justifyRight",
                        "CMD+SHIFT+J": "justifyFull",
                        "CMD+SHIFT+NUM7": "insertUnorderedList",
                        "CMD+SHIFT+NUM8": "insertOrderedList",
                        "CMD+LEFTBRACKET": "outdent",
                        "CMD+RIGHTBRACKET": "indent",
                        "CMD+NUM0": "formatPara",
                        "CMD+NUM1": "formatH1",
                        "CMD+NUM2": "formatH2",
                        "CMD+NUM3": "formatH3",
                        "CMD+NUM4": "formatH4",
                        "CMD+NUM5": "formatH5",
                        "CMD+NUM6": "formatH6",
                        "CMD+ENTER": "insertHorizontalRule",
                        "CMD+K": "showLinkDialog"
                    }
                }
            },
            lang: {
                "en-US": {
                    font: {
                        bold: "Bold",
                        italic: "Italic",
                        underline: "Underline",
                        clear: "Remove Font Style",
                        height: "Line Height",
                        name: "Font Family"
                    },
                    image: {
                        image: "Picture",
                        insert: "Insert Image",
                        resizeFull: "Resize Full",
                        resizeHalf: "Resize Half",
                        resizeQuarter: "Resize Quarter",
                        floatLeft: "Float Left",
                        floatRight: "Float Right",
                        floatNone: "Float None",
                        shapeRounded: "Shape: Rounded",
                        shapeCircle: "Shape: Circle",
                        shapeThumbnail: "Shape: Thumbnail",
                        shapeNone: "Shape: None",
                        dragImageHere: "Drag image or text here",
                        dropImage: "Drop image or Text",
                        selectFromFiles: "Select from files",
                        maximumFileSize: "Maximum file size",
                        maximumFileSizeError: "Maximum file size exceeded.",
                        url: "Image URL",
                        remove: "Remove Image"
                    },
                    link: {
                        link: "Link",
                        insert: "Insert Link",
                        unlink: "Unlink",
                        edit: "Edit",
                        textToDisplay: "Text to display",
                        url: "To what URL should this link go?",
                        openInNewWindow: "Open in new window"
                    },
                    table: {
                        table: "Table"
                    },
                    hr: {
                        insert: "Insert Horizontal Rule"
                    },
                    style: {
                        style: "Style",
                        normal: "Normal",
                        blockquote: "Quote",
                        pre: "Code",
                        h1: "Header 1",
                        h2: "Header 2",
                        h3: "Header 3",
                        h4: "Header 4",
                        h5: "Header 5",
                        h6: "Header 6"
                    },
                    lists: {
                        unordered: "Unordered list",
                        ordered: "Ordered list"
                    },
                    options: {
                        help: "Help",
                        fullscreen: "Full Screen",
                        codeview: "Code View"
                    },
                    paragraph: {
                        paragraph: "Paragraph",
                        outdent: "Outdent",
                        indent: "Indent",
                        left: "Align left",
                        center: "Align center",
                        right: "Align right",
                        justify: "Justify full"
                    },
                    color: {
                        recent: "Recent Color",
                        more: "More Color",
                        background: "Background Color",
                        foreground: "Foreground Color",
                        transparent: "Transparent",
                        setTransparent: "Set transparent",
                        reset: "Reset",
                        resetToDefault: "Reset to default"
                    },
                    shortcut: {
                        shortcuts: "Keyboard shortcuts",
                        close: "Close",
                        textFormatting: "Text formatting",
                        action: "Action",
                        paragraphFormatting: "Paragraph formatting",
                        documentStyle: "Document Style",
                        extraKeys: "Extra keys"
                    },
                    history: {
                        undo: "Undo",
                        redo: "Redo"
                    }
                }
            }
        },
        m = function() {
            var b = function(b) {
                    return a.Deferred(function(c) {
                        a.extend(new FileReader, {
                            onload: function(a) {
                                var b = a.target.result;
                                c.resolve(b)
                            },
                            onerror: function() {
                                c.reject(this)
                            }
                        }).readAsDataURL(b)
                    }).promise()
                },
                c = function(b, c) {
                    return a.Deferred(function(d) {
                        var e = a("<img>");
                        e.one("load", function() {
                            e.off("error abort"), d.resolve(e)
                        }).one("error abort", function() {
                            e.off("load").detach(), d.reject(e)
                        }).css({
                            display: "none"
                        }).appendTo(document.body).attr({
                            src: b,
                            "data-filename": c,
                            "width":167,
                            "height":105,
                            "class":"inner-det-img"
                        })
                    }).promise()
                };
            return {
                readFileAsDataURL: b,
                createImage: c
            }
        }(),
        n = {
            isEdit: function(a) {
                return g.contains([8, 9, 13, 32], a)
            },
            nameFromCode: {
                8: "BACKSPACE",
                9: "TAB",
                13: "ENTER",
                32: "SPACE",
                48: "NUM0",
                49: "NUM1",
                50: "NUM2",
                51: "NUM3",
                52: "NUM4",
                53: "NUM5",
                54: "NUM6",
                55: "NUM7",
                56: "NUM8",
                66: "B",
                69: "E",
                73: "I",
                74: "J",
                75: "K",
                76: "L",
                82: "R",
                83: "S",
                85: "U",
                89: "Y",
                90: "Z",
                191: "SLASH",
                219: "LEFTBRACKET",
                220: "BACKSLASH",
                221: "RIGHTBRACKET"
            }
        },
        o = function() {
            var b = function(b, c) {
                if (e.jqueryVersion < 1.9) {
                    var d = {};
                    return a.each(c, function(a, c) {
                        d[c] = b.css(c)
                    }), d
                }
                return b.css.call(b, c)
            };
            this.stylePara = function(b, c) {
                a.each(b.nodes(j.isPara, {
                    includeAncestor: !0
                }), function(b, d) {
                    a(d).css(c)
                })
            }, this.styleNodes = function(b, c) {
                b = b.splitText();
                var d = c && c.nodeName || "SPAN",
                    e = !(!c || !c.expandClosestSibling),
                    h = !(!c || !c.onlyPartialContains);
                if (b.isCollapsed()) return b.insertNode(j.create(d));
                var i = j.makePredByNodeName(d),
                    k = a.map(b.nodes(j.isText, {
                        fullyContains: !0
                    }), function(a) {
                        return j.singleChildAncestor(a, i) || j.wrap(a, d)
                    });
                if (e) {
                    if (h) {
                        var l = b.nodes();
                        i = f.and(i, function(a) {
                            return g.contains(l, a)
                        })
                    }
                    return a.map(k, function(b) {
                        var c = j.withClosestSiblings(b, i),
                            d = g.head(c),
                            e = g.tail(c);
                        return a.each(e, function(a, b) {
                            j.appendChildNodes(d, b.childNodes), j.remove(b)
                        }), g.head(c)
                    })
                }
                return k
            }, this.current = function(c, d) {
                var e = a(j.isText(c.sc) ? c.sc.parentNode : c.sc),
                    f = ["font-family", "font-size", "text-align", "list-style-type", "line-height"],
                    g = b(e, f) || {};
                if (g["font-size"] = parseInt(g["font-size"], 10), g["font-bold"] = document.queryCommandState("bold") ? "bold" : "normal", g["font-italic"] = document.queryCommandState("italic") ? "italic" : "normal", g["font-underline"] = document.queryCommandState("underline") ? "underline" : "normal", g["font-strikethrough"] = document.queryCommandState("strikeThrough") ? "strikethrough" : "normal", g["font-superscript"] = document.queryCommandState("superscript") ? "superscript" : "normal", g["font-subscript"] = document.queryCommandState("subscript") ? "subscript" : "normal", c.isOnList()) {
                    var h = ["circle", "disc", "disc-leading-zero", "square"],
                        i = a.inArray(g["list-style-type"], h) > -1;
                    g["list-style"] = i ? "unordered" : "ordered"
                } else g["list-style"] = "none";
                var k = j.ancestor(c.sc, j.isPara);
                if (k && k.style["line-height"]) g["line-height"] = k.style.lineHeight;
                else {
                    var l = parseInt(g["line-height"], 10) / parseInt(g["font-size"], 10);
                    g["line-height"] = l.toFixed(1)
                }
                return g.image = j.isImg(d) && d, g.anchor = c.isOnAnchor() && j.ancestor(c.sc, j.isAnchor), g.ancestors = j.listAncestor(c.sc, j.isEditable), g.range = c, g
            }
        },
        p = function() {
            this.insertTab = function(a, b, c) {
                var d = j.createText(new Array(c + 1).join(j.NBSP_CHAR));
                b = b.deleteContents(), b.insertNode(d, !0), b = k.create(d, c), b.select()
            }, this.insertParagraph = function() {
                var b = k.create();
                b = b.deleteContents(), b = b.wrapBodyInlineWithPara();
                var c, d = j.ancestor(b.sc, j.isPara);
                if (d) {
                    c = j.splitTree(d, b.getStartPoint());
                    var e = j.listDescendant(d, j.isEmptyAnchor);
                    e = e.concat(j.listDescendant(c, j.isEmptyAnchor)), a.each(e, function(a, b) {
                        j.remove(b)
                    })
                } else {
                    var f = b.sc.childNodes[b.so];
                    c = a(j.emptyPara)[0], f ? b.sc.insertBefore(c, f) : b.sc.appendChild(c)
                }
                k.create(c, 0).normalize().select()
            }
        },
        q = function() {
            this.tab = function(a, b) {
                var c = j.ancestor(a.commonAncestor(), j.isCell),
                    d = j.ancestor(c, j.isTable),
                    e = j.listDescendant(d, j.isCell),
                    f = g[b ? "prev" : "next"](e, c);
                f && k.create(f, 0).select()
            }, this.createTable = function(b, c) {
                for (var d, e = [], f = 0; b > f; f++) e.push("<td>" + j.blank + "</td>");
                d = e.join("");
                for (var g, h = [], i = 0; c > i; i++) h.push("<tr>" + d + "</tr>");
                return g = h.join(""), a('<table class="table table-bordered">' + g + "</table>")[0]
            }
        },
        r = function() {
            this.insertOrderedList = function() {
                this.toggleList("OL")
            }, this.insertUnorderedList = function() {
                this.toggleList("UL")
            }, this.indent = function() {
                var b = this,
                    c = k.create().wrapBodyInlineWithPara(),
                    d = c.nodes(j.isPara, {
                        includeAncestor: !0
                    }),
                    e = g.clusterBy(d, f.peq2("parentNode"));
                a.each(e, function(c, d) {
                    var e = g.head(d);
                    j.isLi(e) ? b.wrapList(d, e.parentNode.nodeName) : a.each(d, function(b, c) {
                            a(c).css("marginLeft", function(a, b) {
                                return (parseInt(b, 10) || 0) + 25
                            })
                        })
                }), c.select()
            }, this.outdent = function() {
                var b = this,
                    c = k.create().wrapBodyInlineWithPara(),
                    d = c.nodes(j.isPara, {
                        includeAncestor: !0
                    }),
                    e = g.clusterBy(d, f.peq2("parentNode"));
                a.each(e, function(c, d) {
                    var e = g.head(d);
                    j.isLi(e) ? b.releaseList([d]) : a.each(d, function(b, c) {
                            a(c).css("marginLeft", function(a, b) {
                                return b = parseInt(b, 10) || 0, b > 25 ? b - 25 : ""
                            })
                        })
                }), c.select()
            }, this.toggleList = function(b) {
                var c = this,
                    d = k.create().wrapBodyInlineWithPara(),
                    e = d.nodes(j.isPara, {
                        includeAncestor: !0
                    }),
                    h = d.paraBookmark(e),
                    i = g.clusterBy(e, f.peq2("parentNode"));
                if (g.find(e, j.isPurePara)) {
                    var l = [];
                    a.each(i, function(a, d) {
                        l = l.concat(c.wrapList(d, b))
                    }), e = l
                } else {
                    var m = d.nodes(j.isList, {
                        includeAncestor: !0
                    }).filter(function(c) {
                        return !a.nodeName(c, b)
                    });
                    m.length ? a.each(m, function(a, c) {
                            j.replace(c, b)
                        }) : e = this.releaseList(i, !0)
                }
                k.createFromParaBookmark(h, e).select()
            }, this.wrapList = function(b, c) {
                var d = g.head(b),
                    e = g.last(b),
                    f = j.isList(d.previousSibling) && d.previousSibling,
                    h = j.isList(e.nextSibling) && e.nextSibling,
                    i = f || j.insertAfter(j.create(c || "UL"), e);
                return b = a.map(b, function(a) {
                    return j.isPurePara(a) ? j.replace(a, "LI") : a
                }), j.appendChildNodes(i, b), h && (j.appendChildNodes(i, g.from(h.childNodes)), j.remove(h)), b
            }, this.releaseList = function(b, c) {
                var d = [];
                return a.each(b, function(b, e) {
                    var f = g.head(e),
                        h = g.last(e),
                        i = c ? j.lastAncestor(f, j.isList) : f.parentNode,
                        k = i.childNodes.length > 1 ? j.splitTree(i, {
                                node: h.parentNode,
                                offset: j.position(h) + 1
                            }, !0) : null,
                        l = j.splitTree(i, {
                            node: f.parentNode,
                            offset: j.position(f)
                        }, !0);
                    e = c ? j.listDescendant(l, j.isLi) : g.from(l.childNodes).filter(j.isLi), (c || !j.isList(i.parentNode)) && (e = a.map(e, function(a) {
                        return j.replace(a, "P")
                    })), a.each(g.from(e).reverse(), function(a, b) {
                        j.insertAfter(b, i)
                    });
                    var m = g.compact([i, l, k]);
                    a.each(m, function(b, c) {
                        var d = [c].concat(j.listDescendant(c, j.isList));
                        a.each(d.reverse(), function(a, b) {
                            j.nodeLength(b) || j.remove(b, !0)
                        })
                    }), d = d.concat(e)
                }), d
            }
        },
        s = function() {
            var b = new o,
                c = new q,
                d = new p,
                f = new r;
            this.createRange = function(a) {
                return a.focus(), k.create()
            }, this.saveRange = function(a, b) {
                a.focus(), a.data("range", k.create()), b && k.create().collapse().select()
            }, this.saveNode = function(a) {
                for (var b = [], c = 0, d = a[0].childNodes.length; d > c; c++) b.push(a[0].childNodes[c]);
                a.data("childNodes", b)
            }, this.restoreRange = function(a) {
                var b = a.data("range");
                b && (b.select(), a.focus())
            }, this.restoreNode = function(a) {
                a.html("");
                for (var b = a.data("childNodes"), c = 0, d = b.length; d > c; c++) a[0].appendChild(b[c])
            }, this.currentStyle = function(a) {
                var c = k.create();
                return c ? c.isOnEditable() && b.current(c, a) : !1
            };
            var h = this.triggerOnBeforeChange = function(a) {
                    var b = a.data("callbacks").onBeforeChange;
                    b && b(a.html(), a)
                },
                i = this.triggerOnChange = function(a) {
                    var b = a.data("callbacks").onChange;
                    b && b(a.html(), a)
                };
            this.undo = function(a) {
                h(a), a.data("NoteHistory").undo(), i(a)
            }, this.redo = function(a) {
                h(a), a.data("NoteHistory").redo(), i(a)
            };
            for (var l = this.beforeCommand = function(a) {
                h(a)
            }, n = this.afterCommand = function(a) {
                a.data("NoteHistory").recordUndo(), i(a)
            }, s = ["bold", "italic", "underline", "strikethrough", "superscript", "subscript", "justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "formatBlock", "removeFormat", "backColor", "foreColor", "insertHorizontalRule", "fontName"], t = 0, u = s.length; u > t; t++) this[s[t]] = function(a) {
                return function(b, c) {
                    l(b), document.execCommand(a, !1, c), n(b)
                }
            }(s[t]);
            this.tab = function(a, b) {
                var e = k.create();
                e.isCollapsed() && e.isOnCell() ? c.tab(e) : (l(a), d.insertTab(a, e, b.tabsize), n(a))
            }, this.untab = function() {
                var a = k.create();
                a.isCollapsed() && a.isOnCell() && c.tab(a, !0)
            }, this.insertParagraph = function(a) {
                l(a), d.insertParagraph(a), n(a)
            }, this.insertOrderedList = function(a) {
                l(a), f.insertOrderedList(a), n(a)
            }, this.insertUnorderedList = function(a) {
                l(a), f.insertUnorderedList(a), n(a)
            }, this.indent = function(a) {
                l(a), f.indent(a), n(a)
            }, this.outdent = function(a) {
                l(a), f.outdent(a), n(a)
            }, this.insertImage = function(a, b, c) {
                m.createImage(b, c).then(function(b) {
                    l(a), b.css({
                        display: "",
                        width: Math.min(a.width(), b.width())
                    }), k.create().insertNode(b[0]), k.createFromNode(b[0]).collapse().select(), n(a)
                }).fail(function() {
                    var b = a.data("callbacks");
                    b.onImageUploadError && b.onImageUploadError()
                })
            }, this.insertNode = function(a, b) {
                l(a);
                var c = this.createRange(a);
                c.insertNode(b), k.createFromNode(b).collapse().select(), n(a)
            }, this.insertText = function(a, b) {
                l(a);
                var c = this.createRange(a),
                    d = c.insertNode(j.createText(b));
                k.create(d, j.nodeLength(d)).select(), n(a)
            }, this.formatBlock = function(a, b) {
                l(a), b = e.isMSIE ? "<" + b + ">" : b, document.execCommand("FormatBlock", !1, b), n(a)
            }, this.formatPara = function(a) {
                l(a), this.formatBlock(a, "P"), n(a)
            };
            for (var t = 1; 6 >= t; t++) this["formatH" + t] = function(a) {
                return function(b) {
                    this.formatBlock(b, "H" + a)
                }
            }(t);
            this.fontSize = function(a, b) {
                l(a), document.execCommand("fontSize", !1, 3), e.isFF ? a.find("font[size=3]").removeAttr("size").css("font-size", b + "px") : a.find("span").filter(function() {
                        return "medium" === this.style.fontSize
                    }).css("font-size", b + "px"), n(a)
            }, this.lineHeight = function(a, c) {
                l(a), b.stylePara(k.create(), {
                    lineHeight: c
                }), n(a)
            }, this.unlink = function(a) {
                var b = k.create();
                if (b.isOnAnchor()) {
                    var c = j.ancestor(b.sc, j.isAnchor);
                    b = k.createFromNode(c), b.select(), l(a), document.execCommand("unlink"), n(a)
                }
            }, this.createLink = function(c, d, e) {
                var f = d.url,
                    h = d.text,
                    i = d.newWindow,
                    j = d.range,
                    m = j.toString() !== h;
                l(c), e.onCreateLink && (f = e.onCreateLink(f));
                var o;
                if (m) {
                    var p = j.insertNode(a("<A>" + h + "</A>")[0]);
                    o = [p]
                } else o = b.styleNodes(j, {
                    nodeName: "A",
                    expandClosestSibling: !0,
                    onlyPartialContains: !0
                });
                a.each(o, function(b, c) {
                    a(c).attr({
                        href: f,
                        target: i ? "_blank" : ""
                    })
                });
                var q = k.createFromNode(g.head(o)).collapse(!0),
                    r = q.getStartPoint(),
                    s = k.createFromNode(g.last(o)).collapse(),
                    t = s.getEndPoint();
                k.create(r.node, r.offset, t.node, t.offset).select(), n(c)
            }, this.getLinkInfo = function(b) {
                b.focus();
                var c = k.create().expand(j.isAnchor),
                    d = a(g.head(c.nodes(j.isAnchor)));
                return {
                    range: c,
                    text: c.toString(),
                    isNewWindow: d.length ? "_blank" === d.attr("target") : !0,
                    url: d.length ? d.attr("href") : ""
                }
            }, this.color = function(a, b) {
                var c = JSON.parse(b),
                    d = c.foreColor,
                    e = c.backColor;
                l(a), d && document.execCommand("foreColor", !1, d), e && document.execCommand("backColor", !1, e), n(a)
            }, this.insertTable = function(a, b) {
                var d = b.split("x");
                l(a);
                var e = k.create();
                e = e.deleteContents(), e.insertNode(c.createTable(d[0], d[1])), n(a)
            }, this.floatMe = function(a, b, c) {
                l(a), c.css("float", b), n(a)
            }, this.imageShape = function(a, b, c) {
                l(a), c.removeClass("img-rounded img-circle img-thumbnail"), b && c.addClass(b), n(a)
            }, this.resize = function(a, b, c) {
                l(a), c.css({
                    width: 100 * b + "%",
                    height: ""
                }), n(a)
            }, this.resizeTo = function(a, b, c) {
                var d;
                if (c) {
                    var e = a.y / a.x,
                        f = b.data("ratio");
                    d = {
                        width: f > e ? a.x : a.y / f,
                        height: f > e ? a.x * f : a.y
                    }
                } else d = {
                    width: a.x,
                    height: a.y
                };
                b.css(d)
            }, this.removeMedia = function(a, b, c) {
                l(a), c.detach();
                var d = a.data("callbacks");
                d && d.onMediaDelete && d.onMediaDelete(c, this, a), n(a)
            }
        },
        t = function(a) {
            var b = [],
                c = -1,
                d = a[0],
                e = function() {
                    var b = k.create(),
                        c = {
                            s: {
                                path: [0],
                                offset: 0
                            },
                            e: {
                                path: [0],
                                offset: 0
                            }
                        };
                    return {
                        contents: a.html(),
                        bookmark: b ? b.bookmark(d) : c
                    }
                },
                f = function(b) {
                    null !== b.contents && a.html(b.contents), null !== b.bookmark && k.createFromBookmark(d, b.bookmark).select()
                };
            this.undo = function() {
                c > 0 && (c--, f(b[c]))
            }, this.redo = function() {
                b.length - 1 > c && (c++, f(b[c]))
            }, this.recordUndo = function() {
                c++, b.length > c && (b = b.slice(0, c)), b.push(e())
            }, this.recordUndo()
        },
        u = function() {
            this.update = function(b, c) {
                var d = function(b, c) {
                        b.find(".dropdown-menu li a").each(function() {
                            var b = a(this).data("value") + "" == c + "";
                            this.className = b ? "checked" : ""
                        })
                    },
                    e = function(a, c) {
                        var d = b.find(a);
                        d.toggleClass("active", c())
                    };
                if (c.image) {
                    var f = a(c.image);
                    e('button[data-event="imageShape"][data-value="img-rounded"]', function() {
                        return f.hasClass("img-rounded")
                    }), e('button[data-event="imageShape"][data-value="img-circle"]', function() {
                        return f.hasClass("img-circle")
                    }), e('button[data-event="imageShape"][data-value="img-thumbnail"]', function() {
                        return f.hasClass("img-thumbnail")
                    }), e('button[data-event="imageShape"]:not([data-value])', function() {
                        return !f.is(".img-rounded, .img-circle, .img-thumbnail")
                    });
                    var h = f.css("float");
                    e('button[data-event="floatMe"][data-value="left"]', function() {
                        return "left" === h
                    }), e('button[data-event="floatMe"][data-value="right"]', function() {
                        return "right" === h
                    }), e('button[data-event="floatMe"][data-value="none"]', function() {
                        return "left" !== h && "right" !== h
                    });
                    var i = f.attr("style");
                    return e('button[data-event="resize"][data-value="1"]', function() {
                        return !!/(^|\s)(max-)?width\s*:\s*100%/.test(i)
                    }), e('button[data-event="resize"][data-value="0.5"]', function() {
                        return !!/(^|\s)(max-)?width\s*:\s*50%/.test(i)
                    }), void e('button[data-event="resize"][data-value="0.25"]', function() {
                        return !!/(^|\s)(max-)?width\s*:\s*25%/.test(i)
                    })
                }
                var j = b.find(".note-fontname");
                if (j.length) {
                    var k = c["font-family"];
                    k && (k = g.head(k.split(",")), k = k.replace(/\'/g, ""), j.find(".note-current-fontname").text(k), d(j, k))
                }
                var l = b.find(".note-fontsize");
                l.find(".note-current-fontsize").text(c["font-size"]), d(l, parseFloat(c["font-size"]));
                var m = b.find(".note-height");
                d(m, parseFloat(c["line-height"])), e('button[data-event="bold"]', function() {
                    return "bold" === c["font-bold"]
                }), e('button[data-event="italic"]', function() {
                    return "italic" === c["font-italic"]
                }), e('button[data-event="underline"]', function() {
                    return "underline" === c["font-underline"]
                }), e('button[data-event="strikethrough"]', function() {
                    return "strikethrough" === c["font-strikethrough"]
                }), e('button[data-event="superscript"]', function() {
                    return "superscript" === c["font-superscript"]
                }), e('button[data-event="subscript"]', function() {
                    return "subscript" === c["font-subscript"]
                }), e('button[data-event="justifyLeft"]', function() {
                    return "left" === c["text-align"] || "start" === c["text-align"]
                }), e('button[data-event="justifyCenter"]', function() {
                    return "center" === c["text-align"]
                }), e('button[data-event="justifyRight"]', function() {
                    return "right" === c["text-align"]
                }), e('button[data-event="justifyFull"]', function() {
                    return "justify" === c["text-align"]
                }), e('button[data-event="insertUnorderedList"]', function() {
                    return "unordered" === c["list-style"]
                }), e('button[data-event="insertOrderedList"]', function() {
                    return "ordered" === c["list-style"]
                })
            }, this.updateRecentColor = function(b, c, d) {
                var e = a(b).closest(".note-color"),
                    f = e.find(".note-recent-color"),
                    g = JSON.parse(f.attr("data-value"));
                g[c] = d, f.attr("data-value", JSON.stringify(g));
                var h = "backColor" === c ? "background-color" : "color";
                f.find("i").css(h, d)
            }
        },
        v = function() {
            var a = new u;
            this.update = function(b, c) {
                a.update(b, c)
            }, this.updateRecentColor = function(b, c, d) {
                a.updateRecentColor(b, c, d)
            }, this.activate = function(a) {
                a.find("button").not('button[data-event="codeview"]').removeClass("disabled")
            }, this.deactivate = function(a) {
                a.find("button").not('button[data-event="codeview"]').addClass("disabled")
            }, this.updateFullscreen = function(a, b) {
                var c = a.find('button[data-event="fullscreen"]');
                c.toggleClass("active", b)
            }, this.updateCodeview = function(a, b) {
                var c = a.find('button[data-event="codeview"]');
                c.toggleClass("active", b)
            }
        },
        w = function() {
            var b = new u,
                c = function(b, c) {
                    var d = a(b),
                        e = c ? d.offset() : d.position(),
                        f = d.outerHeight(!0);
                    return {
                        left: e.left,
                        top: e.top + f
                    }
                },
                d = function(a, b) {
                    a.css({
                        display: "block",
                        left: b.left,
                        top: b.top
                    })
                },
                e = 20;
            this.update = function(h, i, j) {
                b.update(h, i);
                var k = h.find(".note-link-popover");
                if (i.anchor) {
                    var l = k.find("a"),
                        m = a(i.anchor).attr("href");
                    l.attr("href", m).html(m), d(k, c(i.anchor, j))
                } else k.hide();
                var n = h.find(".note-image-popover");
                i.image ? d(n, c(i.image, j)) : n.hide();
                var o = h.find(".note-air-popover");
                if (j && !i.range.isCollapsed()) {
                    var p = g.last(i.range.getClientRects());
                    if (p) {
                        var q = f.rect2bnd(p);
                        d(o, {
                            left: Math.max(q.left + q.width / 2 - e, 0),
                            top: q.top + q.height
                        })
                    }
                } else o.hide()
            }, this.updateRecentColor = function(a, b, c) {
                a.updateRecentColor(a, b, c)
            }, this.hide = function(a) {
                a.children().hide()
            }
        },
        x = function() {
            this.update = function(b, c, d) {
                var e = b.find(".note-control-selection");
                if (c.image) {
                    var f = a(c.image),
                        g = d ? f.offset() : f.position(),
                        h = {
                            w: f.outerWidth(!0),
                            h: f.outerHeight(!0)
                        };
                    e.css({
                        display: "block",
                        left: g.left,
                        top: g.top,
                        width: h.w,
                        height: h.h
                    }).data("target", c.image);
                    var i = h.w + "x" + h.h;
                    e.find(".note-control-selection-info").text(i)
                } else e.hide()
            }, this.hide = function(a) {
                a.children().hide()
            }
        },
        y = function() {
            var b = function(a, b) {
                a.toggleClass("disabled", !b), a.attr("disabled", !b)
            };
            this.showImageDialog = function(c, d) {

                return a.Deferred(function(a) {
                    var c = d.find(".note-image-dialog"),
                        e = d.find(".note-image-input"),
                        f = d.find(".note-image-url"),
                        g = d.find(".note-image-btn");

                    c.one("shown.bs.modal", function() {
                        e.replaceWith(e.clone().on("change", function() {
                            a.resolve(this.files || this.value), c.modal("hide")
                        }).val("")), g.click(function(b) {
                            b.preventDefault(), a.resolve(f.val()), c.modal("hide")
                        }), f.on("keyup paste", function(a) {
                            var c;
                            c = "paste" === a.type ? a.originalEvent.clipboardData.getData("text") : f.val(), b(g, c)
                        }).val("").trigger("focus")
                    }).one("hidden.bs.modal", function() {
                        e.off("change"), f.off("keyup paste"), g.off("click"), "pending" === a.state() && a.reject()
                    }).modal("show")
                })
            }, this.showLinkDialog = function(c, d, e) {
                return a.Deferred(function(a) {
                    var c = d.find(".note-link-dialog"),
                        f = c.find(".note-link-text"),
                        g = c.find(".note-link-url"),
                        h = c.find(".note-link-btn"),
                        i = c.find("input[type=checkbox]");
                    c.one("shown.bs.modal", function() {
                        f.val(e.text), f.on("input", function() {
                            e.text = f.val()
                        }), e.url || (e.url = e.text, b(h, e.text)), g.on("input", function() {
                            b(h, g.val()), e.text || f.val(g.val())
                        }).val(e.url).trigger("focus").trigger("select"), i.prop("checked", e.newWindow), h.one("click", function(b) {
                            b.preventDefault(), a.resolve({
                                range: e.range,
                                url: g.val(),
                                text: f.val(),
                                newWindow: i.is(":checked")
                            }), c.modal("hide")
                        })
                    }).one("hidden.bs.modal", function() {
                        f.off("input"), g.off("input"), h.off("click"), "pending" === a.state() && a.reject()
                    }).modal("show")
                }).promise()
            }, this.showHelpDialog = function(b, c) {
                return a.Deferred(function(a) {
                    var b = c.find(".note-help-dialog");
                    b.one("hidden.bs.modal", function() {
                        a.resolve()
                    }).modal("show")
                }).promise()
            }
        };
    e.hasCodeMirror && (e.isSupportAmd ? require(["CodeMirror"], function(a) {
            b = a
        }) : b = window.CodeMirror);
    var z = function() {
            var c = a(window),
                d = a(document),
                f = a("html, body"),
                h = new s,
                i = new v,
                k = new w,
                l = new x,
                o = new y;
            this.getEditor = function() {
                return h
            };
            var p = function(b) {
                    var c = a(b).closest(".note-editor, .note-air-editor, .note-air-layout");
                    if (!c.length) return null;
                    var d;
                    return d = c.is(".note-editor, .note-air-editor") ? c : a("#note-editor-" + g.last(c.attr("id").split("-"))), j.buildLayoutInfo(d)
                },
                q = function(b, c) {
                    var d = b.editor(),
                        e = b.editable(),
                        f = e.data("callbacks"),
                        g = d.data("options");
                    f.onImageUpload ? f.onImageUpload(c, h, e) : a.each(c, function(a, b) {
                            var c = b.name;
                            g.maximumImageFileSize && g.maximumImageFileSize < b.size ? f.onImageUploadError ? f.onImageUploadError(g.langInfo.image.maximumFileSizeError) : alert(g.langInfo.image.maximumFileSizeError) : m.readFileAsDataURL(b).then(function(a) {
                                    h.insertImage(e, a, c)
                                }).fail(function() {
                                    f.onImageUploadError && f.onImageUploadError()
                                })
                        })
                },
                r = {
                    showLinkDialog: function(a) {
                        var b = a.editor(),
                            c = a.dialog(),
                            d = a.editable(),
                            e = h.getLinkInfo(d),
                            f = b.data("options");
                        h.saveRange(d), o.showLinkDialog(d, c, e).then(function(b) {
                            h.restoreRange(d), h.createLink(d, b, f), k.hide(a.popover())
                        }).fail(function() {
                            h.restoreRange(d)
                        })
                    },
                    showImageDialog: function(a) {
                        var b = a.dialog(),
                            c = a.editable();
                        h.saveRange(c), o.showImageDialog(c, b).then(function(b) {
                            h.restoreRange(c), "string" == typeof b ? h.insertImage(c, b) : q(a, b)
                        }).fail(function() {
                            h.restoreRange(c)
                        })
                    },
                    showHelpDialog: function(a) {
                        var b = a.dialog(),
                            c = a.editable();
                        h.saveRange(c, !0), o.showHelpDialog(c, b).then(function() {
                            h.restoreRange(c)
                        })
                    },
                    fullscreen: function(a) {
                        var b = a.editor(),
                            d = a.toolbar(),
                            e = a.editable(),
                            g = a.codable(),
                            h = function(a) {
                                e.css("height", a.h), g.css("height", a.h), g.data("cmeditor") && g.data("cmeditor").setsize(null, a.h)
                            };
                        b.toggleClass("fullscreen");
                        var j = b.hasClass("fullscreen");
                        j ? (e.data("orgheight", e.css("height")), c.on("resize", function() {
                                h({
                                    h: c.height() - d.outerHeight()
                                })
                            }).trigger("resize"), f.css("overflow", "hidden")) : (c.off("resize"), h({
                                h: e.data("orgheight")
                            }), f.css("overflow", "visible")), i.updateFullscreen(d, j)
                    },
                    codeview: function(a) {
                        var c, d, f = a.editor(),
                            g = a.toolbar(),
                            h = a.editable(),
                            m = a.codable(),
                            n = a.popover(),
                            o = a.handle(),
                            p = f.data("options");
                        f.toggleClass("codeview");
                        var q = f.hasClass("codeview");
                        q ? (m.val(j.html(h, p.prettifyHtml)), m.height(h.height()), i.deactivate(g), k.hide(n), l.hide(o), m.focus(), e.hasCodeMirror && (c = b.fromTextArea(m[0], p.codemirror), p.codemirror.tern && (d = new b.TernServer(p.codemirror.tern), c.ternServer = d, c.on("cursorActivity", function(a) {
                                d.updateArgHints(a)
                            })), c.setSize(null, h.outerHeight()), m.data("cmEditor", c))) : (e.hasCodeMirror && (c = m.data("cmEditor"), m.val(c.getValue()), c.toTextArea()), h.html(j.value(m, p.prettifyHtml) || j.emptyPara), h.height(p.height ? m.height() : "auto"), i.activate(g), h.focus()), i.updateCodeview(a.toolbar(), q)
                    }
                },
                u = function(a) {
                    j.isImg(a.target) && a.preventDefault()
                },
                z = function(a) {
                    setTimeout(function() {
                        var b = p(a.currentTarget || a.target),
                            c = h.currentStyle(a.target);
                        if (c) {
                            var d = b.editor().data("options").airMode;
                            d || i.update(b.toolbar(), c), k.update(b.popover(), c, d), l.update(b.handle(), c, d)
                        }
                    }, 0)
                },
                A = function(a) {
                    var b = p(a.currentTarget || a.target);
                    k.hide(b.popover()), l.hide(b.handle())
                },
                B = function(a) {
                    var b = a.originalEvent.clipboardData,
                        c = p(a.currentTarget || a.target),
                        d = c.editable();
                    if (!b || !b.items || !b.items.length) {
                        var e = d.data("callbacks");
                        if (!e.onImageUpload) return;
                        return h.saveNode(d), h.saveRange(d), d.html(""), void setTimeout(function() {
                            for (var a = d.find("img"), b = a[0].src, e = atob(b.split(",")[1]), f = new Uint8Array(e.length), g = 0; g < e.length; g++) f[g] = e.charCodeAt(g);
                            var i = new Blob([f], {
                                type: "image/png"
                            });
                            i.name = "clipboard.png", h.restoreNode(d), h.restoreRange(d), q(c, [i]), h.afterCommand(d)
                        }, 0)
                    }
                    var f = g.head(b.items),
                        i = "file" === f.kind && -1 !== f.type.indexOf("image/");
                    i && q(c, [f.getAsFile()]), h.afterCommand(d)
                },
                C = function(b) {
                    if (j.isControlSizing(b.target)) {
                        b.preventDefault(), b.stopPropagation();
                        var c = p(b.target),
                            e = c.handle(),
                            f = c.popover(),
                            g = c.editable(),
                            i = c.editor(),
                            m = e.find(".note-control-selection").data("target"),
                            n = a(m),
                            o = n.offset(),
                            q = d.scrollTop(),
                            r = i.data("options").airMode;
                        d.on("mousemove", function(a) {
                            h.resizeTo({
                                x: a.clientX - o.left,
                                y: a.clientY - (o.top - q)
                            }, n, !a.shiftKey), l.update(e, {
                                image: m
                            }, r), k.update(f, {
                                image: m
                            }, r)
                        }).one("mouseup", function() {
                            d.off("mousemove"), h.afterCommand(g)
                        }), n.data("ratio") || n.data("ratio", n.height() / n.width())
                    }
                },
                D = function(b) {
                    var c = a(b.target).closest("[data-event]");
                    c.length && b.preventDefault()
                },
                E = function(b) {
                    var c = a(b.target).closest("[data-event]");
                    if (c.length) {
                        var d, e = c.attr("data-event"),
                            f = c.attr("data-value"),
                            j = c.attr("data-hide"),
                            l = p(b.target);
                        if (-1 !== a.inArray(e, ["resize", "floatMe", "removeMedia", "imageShape"])) {
                            var m = l.handle().find(".note-control-selection");
                            d = a(m.data("target"))
                        }
                        if (j && c.parents(".popover").hide(), a.isFunction(a.summernote.pluginEvents[e])) a.summernote.pluginEvents[e](b, h, l, f);
                        else if (h[e]) {
                            var n = l.editable();
                            n.trigger("focus"), h[e](n, f, d), b.preventDefault()
                        } else r[e] && (r[e].call(this, l), b.preventDefault());
                        if (-1 !== a.inArray(e, ["backColor", "foreColor"])) {
                            var o = l.editor().data("options", o),
                                q = o.airMode ? k : i;
                            q.updateRecentColor(g.head(c), e, f)
                        }
                        z(b)
                    }
                },
                F = 24,
                G = function(a) {
                    a.preventDefault(), a.stopPropagation();
                    var b = p(a.target).editable(),
                        c = b.offset().top - d.scrollTop(),
                        e = p(a.currentTarget || a.target),
                        f = e.editor().data("options");
                    d.on("mousemove", function(a) {
                        var d = a.clientY - (c + F);
                        d = f.minHeight > 0 ? Math.max(d, f.minHeight) : d, d = f.maxHeight > 0 ? Math.min(d, f.maxHeight) : d, b.height(d)
                    }).one("mouseup", function() {
                        d.off("mousemove")
                    })
                },
                H = 18,
                I = function(b, c) {
                    var d, e = a(b.target.parentNode),
                        f = e.next(),
                        g = e.find(".note-dimension-picker-mousecatcher"),
                        h = e.find(".note-dimension-picker-highlighted"),
                        i = e.find(".note-dimension-picker-unhighlighted");
                    if (void 0 === b.offsetX) {
                        var j = a(b.target).offset();
                        d = {
                            x: b.pageX - j.left,
                            y: b.pageY - j.top
                        }
                    } else d = {
                        x: b.offsetX,
                        y: b.offsetY
                    };
                    var k = {
                        c: Math.ceil(d.x / H) || 1,
                        r: Math.ceil(d.y / H) || 1
                    };
                    h.css({
                        width: k.c + "em",
                        height: k.r + "em"
                    }), g.attr("data-value", k.c + "x" + k.r), 3 < k.c && k.c < c.insertTableMaxSize.col && i.css({
                        width: k.c + 1 + "em"
                    }), 3 < k.r && k.r < c.insertTableMaxSize.row && i.css({
                        height: k.r + 1 + "em"
                    }), f.html(k.c + " x " + k.r)
                },
                J = function(a, b) {
                    b.disableDragAndDrop ? d.on("drop", function(a) {
                            a.preventDefault()
                        }) : K(a, b)
                },
                K = function(b, c) {
                    var e = a(),
                        f = b.dropzone,
                        g = b.dropzone.find(".note-dropzone-message");
                    d.on("dragenter", function(a) {
                        var d = b.editor.hasClass("codeview");
                        d || e.length || (b.editor.addClass("dragover"), f.width(b.editor.width()), f.height(b.editor.height()), g.text(c.langInfo.image.dragImageHere)), e = e.add(a.target)
                    }).on("dragleave", function(a) {
                        e = e.not(a.target), e.length || b.editor.removeClass("dragover")
                    }).on("drop", function() {
                        e = a(), b.editor.removeClass("dragover")
                    }).on("mouseout", function(a) {
                        e = e.not(a.target), e.length || b.editor.removeClass("dragover")
                    }), f.on("dragenter", function() {
                        f.addClass("hover"), g.text(c.langInfo.image.dropImage)
                    }).on("dragleave", function() {
                        f.removeClass("hover"), g.text(c.langInfo.image.dragImageHere)
                    }), f.on("drop", function(b) {
                        b.preventDefault();
                        var c = b.originalEvent.dataTransfer,
                            d = c.getData("text/html"),
                            e = c.getData("text/plain"),
                            f = p(b.currentTarget || b.target);
                        c && c.files && c.files.length ? (f.editable().focus(), q(f, c.files)) : d ? a(d).each(function() {
                                    f.editable().focus(), h.insertNode(f.editable(), this)
                                }) : e && (f.editable().focus(), h.insertText(f.editable(), e))
                    }).on("dragover", !1)
                };
            this.bindKeyMap = function(b, c) {
                var d = b.editor,
                    e = b.editable;
                b = p(e), e.on("keydown", function(f) {
                    var g = [];
                    f.metaKey && g.push("CMD"), f.ctrlKey && !f.altKey && g.push("CTRL"), f.shiftKey && g.push("SHIFT");
                    var i = n.nameFromCode[f.keyCode];
                    i && g.push(i);
                    var j = c[g.join("+")];
                    if (j)
                        if (a.summernote.pluginEvents[j]) {
                            var k = a.summernote.pluginEvents[j];
                            a.isFunction(k) && k(f, h, b)
                        } else h[j] ? (h[j](e, d.data("options")), f.preventDefault()) : r[j] && (r[j].call(this, b), f.preventDefault());
                    else n.isEdit(f.keyCode) && h.afterCommand(e)
                })
            }, this.attach = function(a, b) {
                b.shortcuts && this.bindKeyMap(a, b.keyMap[e.isMac ? "mac" : "pc"]), a.editable.on("mousedown", u), a.editable.on("keyup mouseup", z), a.editable.on("scroll", A), a.editable.on("paste", B), a.handle.on("mousedown", C), a.popover.on("click", E), a.popover.on("mousedown", D), b.airMode || (J(a, b), a.toolbar.on("click", E), a.toolbar.on("mousedown", D), b.disableResizeEditor || a.statusbar.on("mousedown", G));
                var c = b.airMode ? a.popover : a.toolbar,
                    d = c.find(".note-dimension-picker-mousecatcher");
                d.css({
                    width: b.insertTableMaxSize.col + "em",
                    height: b.insertTableMaxSize.row + "em"
                }).on("mousemove", function(a) {
                    I(a, b)
                }), a.editor.data("options", b), e.isMSIE || setTimeout(function() {
                    document.execCommand("styleWithCSS", 0, b.styleWithSpan)
                }, 0);
                var f = new t(a.editable);
                if (a.editable.data("NoteHistory", f), b.onenter && a.editable.keypress(function(a) {
                        a.keyCode === n.ENTER && b.onenter(a)
                    }), b.onfocus && a.editable.focus(b.onfocus), b.onblur && a.editable.blur(b.onblur), b.onkeyup && a.editable.keyup(b.onkeyup), b.onkeydown && a.editable.keydown(b.onkeydown), b.onpaste && a.editable.on("paste", b.onpaste), b.onToolbarClick && a.toolbar.click(b.onToolbarClick), b.onChange) {
                    var g = function() {
                        h.triggerOnChange(a.editable)
                    };
                    if (e.isMSIE) {
                        var i = "DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted";
                        a.editable.on(i, g)
                    } else a.editable.on("input", g)
                }
                a.editable.data("callbacks", {
                    onBeforeChange: b.onBeforeChange,
                    onChange: b.onChange,
                    onAutoSave: b.onAutoSave,
                    onImageUpload: b.onImageUpload,
                    onImageUploadError: b.onImageUploadError,
                    onFileUpload: b.onFileUpload,
                    onFileUploadError: b.onFileUpload,
                    onMediaDelete: b.onMediaDelete
                })
            }, this.detach = function(a, b) {
                a.editable.off(), a.popover.off(), a.handle.off(), a.dialog.off(), b.airMode || (a.dropzone.off(), a.toolbar.off(), a.statusbar.off())
            }
        },
        A = function() {
            var b = function(a, b) {
                    var c = b.event,
                        d = b.value,
                        e = b.title,
                        f = b.className,
                        g = b.dropdown,
                        h = b.hide;
                    return '<button type="button" class="btn btn-default btn-sm btn-small' + (f ? " " + f : "") + (g ? " dropdown-toggle" : "") + '"' + (g ? ' data-toggle="dropdown"' : "") + (e ? ' title="' + e + '"' : "") + (c ? ' data-event="' + c + '"' : "") + (d ? " data-value='" + d + "'" : "") + (h ? " data-hide='" + h + "'" : "") + ' tabindex="-1">' + a + (g ? ' <span class="caret"></span>' : "") + "</button>" + (g || "")
                },
                c = function(a, c) {
                    var d = '<i class="' + a + '"></i>';
                    return b(d, c)
                },
                d = function(a, b) {
                    return '<div class="' + a + ' popover bottom in" style="display: none;"><div class="arrow"></div><div class="popover-content">' + b + "</div></div>"
                },
                g = function(a, b, c, d) {
                    return '<div class="' + a + ' modal" aria-hidden="false"><div class="modal-dialog"><div class="modal-content">' + (b ? '<div class="modal-header"><button type="button" class="close" aria-hidden="true" tabindex="-1">&times;</button><h4 class="modal-title">' + b + "</h4></div>" : "") + '<form class="note-modal-form"><div class="modal-body">' + c + "</div>" + (d ? '<div class="modal-footer">' + d + "</div>" : "") + "</form></div></div></div>"
                },
                h = {
                    picture: function(a) {
                        return c("fa fa-picture-o", {
                            event: "showImageDialog",
                            title: a.image.image,
                            hide: !0
                        })
                    },
                    link: function(a) {
                        return c("fa fa-link", {
                            event: "showLinkDialog",
                            title: a.link.link,
                            hide: !0
                        })
                    },
                    table: function(a) {
                        var b = '<ul class="note-table dropdown-menu"><div class="note-dimension-picker"><div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div><div class="note-dimension-picker-highlighted"></div><div class="note-dimension-picker-unhighlighted"></div></div><div class="note-dimension-display"> 1 x 1 </div></ul>';
                        return c("fa fa-table", {
                            title: a.table.table,
                            dropdown: b
                        })
                    },
                    style: function(a, b) {
                        var d = b.styleTags.reduce(function(b, c) {
                            var d = a.style["p" === c ? "normal" : c];
                            return b + '<li><a data-event="formatBlock" href="#" data-value="' + c + '">' + ("p" === c || "pre" === c ? d : "<" + c + ">" + d + "</" + c + ">") + "</a></li>"
                        }, "");
                        return c("fa fa-magic", {
                            title: a.style.style,
                            dropdown: '<ul class="dropdown-menu">' + d + "</ul>"
                        })
                    },
                    fontname: function(a, c) {
                        var d = c.fontNames.reduce(function(a, b) {
                                return e.isFontInstalled(b) || -1 !== c.fontNamesIgnoreCheck.indexOf(b) ? a + '<li><a data-event="fontName" href="#" data-value="' + b + '" style="font-family:\'' + b + '\'"><i class="fa fa-check"></i> ' + b + "</a></li>" : a
                            }, ""),
                            f = '<span class="note-current-fontname">' + c.defaultFontName + "</span>";
                        return b(f, {
                            title: a.font.name,
                            dropdown: '<ul class="dropdown-menu">' + d + "</ul>"
                        })
                    },
                    color: function(a) {
                        var c = '<i class="fa fa-font" style="color:black;background-color:yellow;"></i>',
                            d = b(c, {
                                className: "note-recent-color",
                                title: a.color.recent,
                                event: "color",
                                value: '{"backColor":"yellow"}'
                            }),
                            e = '<ul class="dropdown-menu"><li><div class="btn-group"><div class="note-palette-title">' + a.color.background + '</div><div class="note-color-reset" data-event="backColor" data-value="inherit" title="' + a.color.transparent + '">' + a.color.setTransparent + '</div><div class="note-color-palette" data-target-event="backColor"></div></div><div class="btn-group"><div class="note-palette-title">' + a.color.foreground + '</div><div class="note-color-reset" data-event="foreColor" data-value="inherit" title="' + a.color.reset + '">' + a.color.resetToDefault + '</div><div class="note-color-palette" data-target-event="foreColor"></div></div></li></ul>',
                            f = b("", {
                                title: a.color.more,
                                dropdown: e
                            });
                        return d + f
                    },
                    bold: function(a) {
                        return c("fa fa-bold", {
                            event: "bold",
                            title: a.font.bold
                        })
                    },
                    italic: function(a) {
                        return c("fa fa-italic", {
                            event: "italic",
                            title: a.font.italic
                        })
                    },
                    underline: function(a) {
                        return c("fa fa-underline", {
                            event: "underline",
                            title: a.font.underline
                        })
                    },
                    clear: function(a) {
                        return c("fa fa-eraser", {
                            event: "removeFormat",
                            title: a.font.clear
                        })
                    },
                    ul: function(a) {
                        return c("fa fa-list-ul", {
                            event: "insertUnorderedList",
                            title: a.lists.unordered
                        })
                    },
                    ol: function(a) {
                        return c("fa fa-list-ol", {
                            event: "insertOrderedList",
                            title: a.lists.ordered
                        })
                    },
                    paragraph: function(a) {
                        var b = c("fa fa-align-left", {
                                title: a.paragraph.left,
                                event: "justifyLeft"
                            }),
                            d = c("fa fa-align-center", {
                                title: a.paragraph.center,
                                event: "justifyCenter"
                            }),
                            e = c("fa fa-align-right", {
                                title: a.paragraph.right,
                                event: "justifyRight"
                            }),
                            f = c("fa fa-align-justify", {
                                title: a.paragraph.justify,
                                event: "justifyFull"
                            }),
                            g = c("fa fa-outdent", {
                                title: a.paragraph.outdent,
                                event: "outdent"
                            }),
                            h = c("fa fa-indent", {
                                title: a.paragraph.indent,
                                event: "indent"
                            }),
                            i = '<div class="dropdown-menu"><div class="note-align btn-group">' + b + d + e + f + '</div><div class="note-list btn-group">' + h + g + "</div></div>";
                        return c("fa fa-align-left", {
                            title: a.paragraph.paragraph,
                            dropdown: i
                        })
                    },
                    height: function(a, b) {
                        var d = b.lineHeights.reduce(function(a, b) {
                            return a + '<li><a data-event="lineHeight" href="#" data-value="' + parseFloat(b) + '"><i class="fa fa-check"></i> ' + b + "</a></li>"
                        }, "");
                        return c("fa fa-text-height", {
                            title: a.font.height,
                            dropdown: '<ul class="dropdown-menu">' + d + "</ul>"
                        })
                    },
                    help: function(a) {
                        return c("fa fa-question", {
                            event: "showHelpDialog",
                            title: a.options.help,
                            hide: !0
                        })
                    },
                    fullscreen: function(a) {
                        return c("fa fa-arrows-alt", {
                            event: "fullscreen",
                            title: a.options.fullscreen
                        })
                    },
                    codeview: function(a) {
                        return c("fa fa-code", {
                            event: "codeview",
                            title: a.options.codeview
                        })
                    },
                    undo: function(a) {
                        return c("fa fa-undo", {
                            event: "undo",
                            title: a.history.undo
                        })
                    },
                    redo: function(a) {
                        return c("fa fa-repeat", {
                            event: "redo",
                            title: a.history.redo
                        })
                    },
                    hr: function(a) {
                        return c("fa fa-minus", {
                            event: "insertHorizontalRule",
                            title: a.hr.insert
                        })
                    }
                },
                i = function(a, e) {
                    var f = function() {
                            var b = c("fa fa-edit", {
                                    title: a.link.edit,
                                    event: "showLinkDialog",
                                    hide: !0
                                }),
                                e = c("fa fa-unlink", {
                                    title: a.link.unlink,
                                    event: "unlink"
                                }),
                                f = '<a href="http://www.google.com" target="_blank">www.google.com</a>&nbsp;&nbsp;<div class="note-insert btn-group">' + b + e + "</div>";
                            return d("note-link-popover", f)
                        },
                        g = function() {
                            var e = b('<span class="note-fontsize-10">100%</span>', {
                                    title: a.image.resizeFull,
                                    event: "resize",
                                    value: "1"
                                }),
                                f = b('<span class="note-fontsize-10">50%</span>', {
                                    title: a.image.resizeHalf,
                                    event: "resize",
                                    value: "0.5"
                                }),
                                g = b('<span class="note-fontsize-10">25%</span>', {
                                    title: a.image.resizeQuarter,
                                    event: "resize",
                                    value: "0.25"
                                }),
                                h = c("fa fa-align-left", {
                                    title: a.image.floatLeft,
                                    event: "floatMe",
                                    value: "left"
                                }),
                                i = c("fa fa-align-right", {
                                    title: a.image.floatRight,
                                    event: "floatMe",
                                    value: "right"
                                }),
                                j = c("fa fa-align-justify", {
                                    title: a.image.floatNone,
                                    event: "floatMe",
                                    value: "none"
                                }),
                                k = c("fa fa-square", {
                                    title: a.image.shapeRounded,
                                    event: "imageShape",
                                    value: "img-rounded"
                                }),
                                l = c("fa fa-circle-o", {
                                    title: a.image.shapeCircle,
                                    event: "imageShape",
                                    value: "img-circle"
                                }),
                                m = c("fa fa-picture-o", {
                                    title: a.image.shapeThumbnail,
                                    event: "imageShape",
                                    value: "img-thumbnail"
                                }),
                                n = c("fa fa-times", {
                                    title: a.image.shapeNone,
                                    event: "imageShape",
                                    value: ""
                                }),
                                o = c("fa fa-trash-o", {
                                    title: a.image.remove,
                                    event: "removeMedia",
                                    value: "none"
                                }),
                                p = '<div class="btn-group">' + e + f + g + '</div><div class="btn-group">' + h + i + j + '</div><div class="btn-group">' + k + l + m + n + '</div><div class="btn-group">' + o + "</div>";
                            return d("note-image-popover", p)
                        },
                        i = function() {
                            for (var b = "", c = 0, f = e.airPopover.length; f > c; c++) {
                                var g = e.airPopover[c];
                                b += '<div class="note-' + g[0] + ' btn-group">';
                                for (var i = 0, j = g[1].length; j > i; i++) b += h[g[1][i]](a, e);
                                b += "</div>"
                            }
                            return d("note-air-popover", b)
                        };
                    return '<div class="note-popover">' + f() + g() + (e.airMode ? i() : "") + "</div>"
                },
                k = function() {
                    return '<div class="note-handle"><div class="note-control-selection"><div class="note-control-selection-bg"></div><div class="note-control-holder note-control-nw"></div><div class="note-control-holder note-control-ne"></div><div class="note-control-holder note-control-sw"></div><div class="note-control-sizing note-control-se"></div><div class="note-control-selection-info"></div></div></div>'
                },
                l = function(a, b) {
                    var c = "note-shortcut-col col-xs-6 note-shortcut-",
                        d = [];
                    for (var e in b) b.hasOwnProperty(e) && d.push('<div class="' + c + 'key">' + b[e].kbd + '</div><div class="' + c + 'name">' + b[e].text + "</div>");
                    return '<div class="note-shortcut-row row"><div class="' + c + 'title col-xs-offset-6">' + a + '</div></div><div class="note-shortcut-row row">' + d.join('</div><div class="note-shortcut-row row">') + "</div>"
                },
                m = function(a) {
                    var b = [{
                        kbd: "⌘ + B",
                        text: a.font.bold
                    }, {
                        kbd: "⌘ + I",
                        text: a.font.italic
                    }, {
                        kbd: "⌘ + U",
                        text: a.font.underline
                    }, {
                        kbd: "⌘ + \\",
                        text: a.font.clear
                    }];
                    return l(a.shortcut.textFormatting, b)
                },
                n = function(a) {
                    var b = [{
                        kbd: "⌘ + Z",
                        text: a.history.undo
                    }, {
                        kbd: "⌘ + ⇧ + Z",
                        text: a.history.redo
                    }, {
                        kbd: "⌘ + ]",
                        text: a.paragraph.indent
                    }, {
                        kbd: "⌘ + [",
                        text: a.paragraph.outdent
                    }, {
                        kbd: "⌘ + ENTER",
                        text: a.hr.insert
                    }];
                    return l(a.shortcut.action, b)
                },
                o = function(a) {
                    var b = [{
                        kbd: "⌘ + ⇧ + L",
                        text: a.paragraph.left
                    }, {
                        kbd: "⌘ + ⇧ + E",
                        text: a.paragraph.center
                    }, {
                        kbd: "⌘ + ⇧ + R",
                        text: a.paragraph.right
                    }, {
                        kbd: "⌘ + ⇧ + J",
                        text: a.paragraph.justify
                    }, {
                        kbd: "⌘ + ⇧ + NUM7",
                        text: a.lists.ordered
                    }, {
                        kbd: "⌘ + ⇧ + NUM8",
                        text: a.lists.unordered
                    }];
                    return l(a.shortcut.paragraphFormatting, b)
                },
                p = function(a) {
                    var b = [{
                        kbd: "⌘ + NUM0",
                        text: a.style.normal
                    }, {
                        kbd: "⌘ + NUM1",
                        text: a.style.h1
                    }, {
                        kbd: "⌘ + NUM2",
                        text: a.style.h2
                    }, {
                        kbd: "⌘ + NUM3",
                        text: a.style.h3
                    }, {
                        kbd: "⌘ + NUM4",
                        text: a.style.h4
                    }, {
                        kbd: "⌘ + NUM5",
                        text: a.style.h5
                    }, {
                        kbd: "⌘ + NUM6",
                        text: a.style.h6
                    }];
                    return l(a.shortcut.documentStyle, b)
                },
                q = function(a, b) {
                    var c = b.extraKeys,
                        d = [];
                    for (var e in c) c.hasOwnProperty(e) && d.push({
                        kbd: e,
                        text: c[e]
                    });
                    return l(a.shortcut.extraKeys, d)
                },
                r = function(a, b) {
                    var c = 'class="note-shortcut note-shortcut-col col-sm-6 col-xs-12"',
                        d = ["<div " + c + ">" + n(a, b) + "</div><div " + c + ">" + m(a, b) + "</div>", "<div " + c + ">" + p(a, b) + "</div><div " + c + ">" + o(a, b) + "</div>"];
                    return b.extraKeys && d.push("<div " + c + ">" + q(a, b) + "</div>"), '<div class="note-shortcut-row row">' + d.join('</div><div class="note-shortcut-row row">') + "</div>"
                },
                s = function(a) {
                    return a.replace(/⌘/g, "Ctrl").replace(/⇧/g, "Shift")
                },
                t = {
                    image: function(a, b) {
                        var c = "";
                        if (b.maximumImageFileSize) {
                            var d = Math.floor(Math.log(b.maximumImageFileSize) / Math.log(1024)),
                                e = 1 * (b.maximumImageFileSize / Math.pow(1024, d)).toFixed(2) + " " + " KMGTP" [d] + "B";
                            c = "<small>" + a.image.maximumFileSize + " : " + e + "</small>"
                        }
                        var f = '<div class="form-group row-fluid note-group-select-from-files"><label>' + a.image.selectFromFiles + '</label><input class="note-image-input" type="file" name="files" accept="image/*" multiple="multiple" />' + c + '</div><div class="form-group row-fluid"><label>' + a.image.url + '</label><input class="note-image-url form-control span12" type="text" /></div>',
                            h = '<button href="#" class="btn btn-primary note-image-btn disabled" disabled>' + a.image.insert + "</button>";
                        return g("note-image-dialog", a.image.insert, f, h)
                    },
                    link: function(a, b) {
                        var c = '<div class="form-group row-fluid"><label>' + a.link.textToDisplay + '</label><input class="note-link-text form-control span12" type="text" /></div><div class="form-group row-fluid"><label>' + a.link.url + '</label><input class="note-link-url form-control span12" type="text" /></div>' + (b.disableLinkTarget ? "" : '<div class="checkbox"><label><input type="checkbox" checked> ' + a.link.openInNewWindow + "</label></div>"),
                            d = '<button href="#" class="btn btn-primary note-link-btn disabled" disabled>' + a.link.insert + "</button>";
                        return g("note-link-dialog", a.link.insert, c, d)
                    },
                    help: function(a, b) {
                        var c = '<a class="modal-close pull-right" aria-hidden="true" tabindex="-1">' + a.shortcut.close + '</a><div class="title">' + a.shortcut.shortcuts + "</div>" + (e.isMac ? r(a, b) : s(r(a, b))) + '<p class="text-center"><a href="//summernote.org/" target="_blank">Summernote 0.6.1</a> · <a href="//github.com/summernote/summernote" target="_blank">Project</a> · <a href="//github.com/summernote/summernote/issues" target="_blank">Issues</a></p>';
                        return g("note-help-dialog", "", c, "")
                    }
                },
                u = function(b, c) {
                    var d = "";
                    return a.each(t, function(a, e) {
                        d += e(b, c)
                    }), '<div class="note-dialog">' + d + "</div>"
                },
                v = function() {
                    return '<div class="note-resizebar"><div class="note-icon-bar"></div><div class="note-icon-bar"></div><div class="note-icon-bar"></div></div>'
                },
                w = function(a) {
                    return e.isMac && (a = a.replace("CMD", "⌘").replace("SHIFT", "⇧")), a.replace("BACKSLASH", "\\").replace("SLASH", "/").replace("LEFTBRACKET", "[").replace("RIGHTBRACKET", "]")
                },
                x = function(b, c, d) {
                    var e = f.invertObject(c),
                        g = b.find("button");
                    g.each(function(b, c) {
                        var d = a(c),
                            f = e[d.data("event")];
                        f && d.attr("title", function(a, b) {
                            return b + " (" + w(f) + ")"
                        })
                    }).tooltip({
                        container: "body",
                        trigger: "hover",
                        placement: d || "top"
                    }).on("click", function() {
                        a(this).tooltip("hide")
                    })
                },
                y = function(b, c) {
                    var d = c.colors;
                    b.find(".note-color-palette").each(function() {
                        for (var b = a(this), c = b.attr("data-target-event"), e = [], f = 0, g = d.length; g > f; f++) {
                            for (var h = d[f], i = [], j = 0, k = h.length; k > j; j++) {
                                var l = h[j];
                                i.push(['<button type="button" class="note-color-btn" style="background-color:', l, ';" data-event="', c, '" data-value="', l, '" title="', l, '" data-toggle="button" tabindex="-1"></button>'].join(""))
                            }
                            e.push('<div class="note-color-row">' + i.join("") + "</div>")
                        }
                        b.html(e.join(""))
                    })
                };
            this.createLayoutByAirMode = function(b, c) {
                var d = c.langInfo,
                    g = c.keyMap[e.isMac ? "mac" : "pc"],
                    h = f.uniqueId();
                b.addClass("note-air-editor note-editable"), b.attr({
                    id: "note-editor-" + h,
                    contentEditable: !0
                });
                var j = document.body,
                    l = a(i(d, c));
                l.addClass("note-air-layout"), l.attr("id", "note-popover-" + h), l.appendTo(j), x(l, g), y(l, c);
                var m = a(k());
                m.addClass("note-air-layout"), m.attr("id", "note-handle-" + h), m.appendTo(j);
                var n = a(u(d, c));
                n.addClass("note-air-layout"), n.attr("id", "note-dialog-" + h), n.find("button.close, a.modal-close").click(function() {
                    a(this).closest(".modal").modal("hide")
                }), n.appendTo(j)
            }, this.createLayoutByFrame = function(b, c) {
                var d = c.langInfo,
                    f = a('<div class="note-editor"></div>');
                c.width && f.width(c.width), c.height > 0 && a('<div class="note-statusbar">' + (c.disableResizeEditor ? "" : v()) + "</div>").prependTo(f);
                var g = !b.is(":disabled"),
                    l = a('<div class="note-editable" contentEditable="' + g + '"></div>').prependTo(f);
                c.height && l.height(c.height), c.direction && l.attr("dir", c.direction);
                var m = b.attr("placeholder") || c.placeholder;
                m && l.attr("data-placeholder", m), l.html(j.html(b)), a('<textarea class="note-codable"></textarea>').prependTo(f);
                for (var n = "", o = 0, p = c.toolbar.length; p > o; o++) {
                    var q = c.toolbar[o][0],
                        r = c.toolbar[o][1];
                    n += '<div class="note-' + q + ' btn-group">';
                    for (var s = 0, t = r.length; t > s; s++) {
                        var w = h[r[s]];
                        a.isFunction(w) && (n += w(d, c))
                    }
                    n += "</div>"
                }
                n = '<div class="note-toolbar btn-toolbar">' + n + "</div>";
                var z = a(n).prependTo(f),
                    A = c.keyMap[e.isMac ? "mac" : "pc"];
                y(z, c), x(z, A, "bottom");
                var B = a(i(d, c)).prependTo(f);
                y(B, c), x(B, A), a(k()).prependTo(f);
                var C = a(u(d, c)).prependTo(f);
                C.find("button.close, a.modal-close").click(function() {
                    a(this).closest(".modal").modal("hide")
                }), a('<div class="note-dropzone"><div class="note-dropzone-message"></div></div>').prependTo(f), f.insertAfter(b), b.hide()
            }, this.noteEditorFromHolder = function(b) {
                return b.hasClass("note-air-editor") ? b : b.next().hasClass("note-editor") ? b.next() : a()
            }, this.createLayout = function(a, b) {
                this.noteEditorFromHolder(a).length || (b.airMode ? this.createLayoutByAirMode(a, b) : this.createLayoutByFrame(a, b))
            }, this.layoutInfoFromHolder = function(a) {
                var b = this.noteEditorFromHolder(a);
                if (b.length) {
                    var c = j.buildLayoutInfo(b);
                    for (var d in c) c.hasOwnProperty(d) && (c[d] = c[d].call());
                    return c
                }
            }, this.removeLayout = function(a, b, c) {
                c.airMode ? (a.removeClass("note-air-editor note-editable").removeAttr("id contentEditable"), b.popover.remove(), b.handle.remove(), b.dialog.remove()) : (a.html(b.editable.html()), b.editor.remove(), a.show())
            }, this.getTemplate = function() {
                return {
                    button: b,
                    iconButton: c,
                    dialog: g
                }
            }, this.addButtonInfo = function(a, b) {
                h[a] = b
            }, this.addDialogInfo = function(a, b) {
                t[a] = b
            }
        };
    a.summernote = a.summernote || {}, a.extend(a.summernote, l);
    var B = new A,
        C = new z;
    a.extend(a.summernote, {
        renderer: B,
        eventHandler: C,
        core: {
            agent: e,
            dom: j,
            range: k
        },
        pluginEvents: {}
    }), a.summernote.addPlugin = function(b) {
        b.buttons && a.each(b.buttons, function(a, b) {
            B.addButtonInfo(a, b)
        }), b.dialogs && a.each(b.dialogs, function(a, b) {
            B.addDialogInfo(a, b)
        }), b.events && a.each(b.events, function(b, c) {
            a.summernote.pluginEvents[b] = c
        }), b.langs && a.each(b.langs, function(b, c) {
            a.summernote.lang[b] && a.extend(a.summernote.lang[b], c)
        }), b.options && a.extend(a.summernote.options, b.options)
    }, a.fn.extend({
        summernote: function(b) {
            if (b = a.extend({}, a.summernote.options, b), b.langInfo = a.extend(!0, {}, a.summernote.lang["en-US"], a.summernote.lang[b.lang]), this.each(function(c, d) {
                    var e = a(d);
                    B.createLayout(e, b);
                    var f = B.layoutInfoFromHolder(e);
                    C.attach(f, b), j.isTextarea(e[0]) && e.closest("form").submit(function() {
                        var a = e.code();
                        e.val(a), b.onsubmit && b.onsubmit(a)
                    })
                }), this.first().length && b.focus) {
                var c = B.layoutInfoFromHolder(this.first());
                c.editable.focus()
            }
            return this.length && b.oninit && b.oninit(), this
        },
        code: function(b) {
            if (void 0 === b) {
                var c = this.first();
                if (!c.length) return;
                var d = B.layoutInfoFromHolder(c);
                if (d && d.editable) {
                    var f = d.editor.hasClass("codeview");
                    return f && e.hasCodeMirror && d.codable.data("cmEditor").save(), f ? d.codable.val() : d.editable.html()
                }
                return j.isTextarea(c[0]) ? c.val() : c.html()
            }
            return this.each(function(c, d) {
                var e = B.layoutInfoFromHolder(a(d));
                e && e.editable && e.editable.html(b)
            }), this
        },
        destroy: function() {
            return this.each(function(b, c) {
                var d = a(c),
                    e = B.layoutInfoFromHolder(d);
                if (e && e.editable) {
                    var f = e.editor.data("options");
                    C.detach(e, f), B.removeLayout(d, e, f)
                }
            }), this
        }
    })
});