! function(t) {
    var n = {};

    function e(i) { if (n[i]) return n[i].exports; var r = n[i] = { i: i, l: !1, exports: {} }; return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports }
    e.m = t, e.c = n, e.d = function(t, n, i) { e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: i }) }, e.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, e.t = function(t, n) {
        if (1 & n && (t = e(t)), 8 & n) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (e.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: t }), 2 & n && "string" != typeof t)
            for (var r in t) e.d(i, r, function(n) { return t[n] }.bind(null, r));
        return i
    }, e.n = function(t) { var n = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(n, "a", n), n }, e.o = function(t, n) { return Object.prototype.hasOwnProperty.call(t, n) }, e.p = "/__assets/", e(e.s = 586)
}({
    1: function(t, n, e) {
        "use strict";
        e.d(n, "c", (function() { return r })), e.d(n, "a", (function() { return o })), e.d(n, "f", (function() { return s })), e.d(n, "b", (function() { return a })), e.d(n, "d", (function() { return u })), e.d(n, "g", (function() { return c })), e.d(n, "e", (function() { return f }));
        /*! *****************************************************************************
        Copyright (c) Microsoft Corporation.

        Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted.

        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
        AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
        INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
        LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
        OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        PERFORMANCE OF THIS SOFTWARE.
        ***************************************************************************** */
        var i = function(t, n) {
            return (i = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, n) { t.__proto__ = n } || function(t, n) { for (var e in n) Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]) })(t, n)
        };

        function r(t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

            function e() { this.constructor = t }
            i(t, n), t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype, new e)
        }
        var o = function() {
            return (o = Object.assign || function(t) {
                for (var n, e = 1, i = arguments.length; e < i; e++)
                    for (var r in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                return t
            }).apply(this, arguments)
        };

        function s(t, n) { var e = {}; for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && n.indexOf(i) < 0 && (e[i] = t[i]); if (null != t && "function" == typeof Object.getOwnPropertySymbols) { var r = 0; for (i = Object.getOwnPropertySymbols(t); r < i.length; r++) n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[r]) && (e[i[r]] = t[i[r]]) } return e }

        function a(t, n, e, i) {
            return new(e || (e = Promise))((function(r, o) {
                function s(t) { try { u(i.next(t)) } catch (t) { o(t) } }

                function a(t) { try { u(i.throw(t)) } catch (t) { o(t) } }

                function u(t) {
                    var n;
                    t.done ? r(t.value) : (n = t.value, n instanceof e ? n : new e((function(t) { t(n) }))).then(s, a)
                }
                u((i = i.apply(t, n || [])).next())
            }))
        }

        function u(t, n) {
            var e, i, r, o, s = { label: 0, sent: function() { if (1 & r[0]) throw r[1]; return r[1] }, trys: [], ops: [] };
            return o = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (e) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (e = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, { value: o[1], done: !1 };
                                case 5:
                                    s.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = s.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) { s = 0; continue }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) { s.label = o[1]; break }
                                    if (6 === o[0] && s.label < r[1]) { s.label = r[1], r = o; break }
                                    if (r && s.label < r[2]) { s.label = r[2], s.ops.push(o); break }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = n.call(t, s)
                        } catch (t) { o = [6, t], i = 0 } finally { e = r = 0 }
                        if (5 & o[0]) throw o[1];
                        return { value: o[0] ? o[1] : void 0, done: !0 }
                    }([o, a])
                }
            }
        }
        Object.create;

        function c(t, n, e) {
            if (e || 2 === arguments.length)
                for (var i, r = 0, o = n.length; r < o; r++) !i && r in n || (i || (i = Array.prototype.slice.call(n, 0, r)), i[r] = n[r]);
            return t.concat(i || Array.prototype.slice.call(n))
        }

        function f(t, n) { return Object.defineProperty ? Object.defineProperty(t, "raw", { value: n }) : t.raw = n, t }
        Object.create
    },
    106: function(t, n, e) {
        t.exports = function(t) {
            var n = {};

            function e(i) { if (n[i]) return n[i].exports; var r = n[i] = { i: i, l: !1, exports: {} }; return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports }
            return e.m = t, e.c = n, e.d = function(t, n, i) { e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: i }) }, e.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, e.t = function(t, n) {
                if (1 & n && (t = e(t)), 8 & n) return t;
                if (4 & n && "object" == typeof t && t && t.__esModule) return t;
                var i = Object.create(null);
                if (e.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: t }), 2 & n && "string" != typeof t)
                    for (var r in t) e.d(i, r, function(n) { return t[n] }.bind(null, r));
                return i
            }, e.n = function(t) { var n = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(n, "a", n), n }, e.o = function(t, n) { return Object.prototype.hasOwnProperty.call(t, n) }, e.p = "", e(e.s = 0)
        }([function(t, n, e) {
            (function(n) { t.exports = n.Phoenix = e(2) }).call(this, e(1))
        }, function(t, n) {
            var e;
            e = function() { return this }();
            try { e = e || new Function("return this")() } catch (t) { "object" == typeof window && (e = window) }
            t.exports = e
        }, function(t, n, e) {
            "use strict";

            function i(t) { return function(t) { if (Array.isArray(t)) return a(t) }(t) || function(t) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || s(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function r(t) { return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

            function o(t, n) {
                return function(t) { if (Array.isArray(t)) return t }(t) || function(t, n) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var e = [],
                            i = !0,
                            r = !1,
                            o = void 0;
                        try { for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (e.push(s.value), !n || e.length !== n); i = !0); } catch (t) { r = !0, o = t } finally { try { i || null == a.return || a.return() } finally { if (r) throw o } }
                        return e
                    }
                }(t, n) || s(t, n) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
            }

            function s(t, n) { if (t) { if ("string" == typeof t) return a(t, n); var e = Object.prototype.toString.call(t).slice(8, -1); return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(e) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? a(t, n) : void 0 } }

            function a(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var e = 0, i = new Array(n); e < n; e++) i[e] = t[e];
                return i
            }

            function u(t, n) { if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function") }

            function c(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var i = n[e];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function f(t, n, e) { return n && c(t.prototype, n), e && c(t, e), t }
            e.r(n), e.d(n, "Channel", (function() { return C })), e.d(n, "Serializer", (function() { return M })), e.d(n, "Socket", (function() { return R })), e.d(n, "LongPoll", (function() { return F })), e.d(n, "Ajax", (function() { return K })), e.d(n, "Presence", (function() { return U }));
            var h = "undefined" != typeof self ? self : null,
                l = "undefined" != typeof window ? window : null,
                v = h || l || void 0,
                d = 0,
                p = 1,
                m = 2,
                O = 3,
                b = "closed",
                T = "errored",
                g = "joined",
                I = "joining",
                E = "leaving",
                k = "phx_close",
                A = "phx_error",
                w = "phx_join",
                y = "phx_reply",
                _ = "phx_leave",
                S = [k, A, w, y, _],
                N = "longpoll",
                D = "websocket",
                P = function(t) { return "function" == typeof t ? t : function() { return t } },
                j = function() {
                    function t(n, e, i, r) { u(this, t), this.channel = n, this.event = e, this.payload = i || function() { return {} }, this.receivedResp = null, this.timeout = r, this.timeoutTimer = null, this.recHooks = [], this.sent = !1 }
                    return f(t, [{ key: "resend", value: function(t) { this.timeout = t, this.reset(), this.send() } }, { key: "send", value: function() { this.hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({ topic: this.channel.topic, event: this.event, payload: this.payload(), ref: this.ref, join_ref: this.channel.joinRef() })) } }, { key: "receive", value: function(t, n) { return this.hasReceived(t) && n(this.receivedResp.response), this.recHooks.push({ status: t, callback: n }), this } }, { key: "reset", value: function() { this.cancelRefEvent(), this.ref = null, this.refEvent = null, this.receivedResp = null, this.sent = !1 } }, {
                        key: "matchReceive",
                        value: function(t) {
                            var n = t.status,
                                e = t.response;
                            t.ref, this.recHooks.filter((function(t) { return t.status === n })).forEach((function(t) { return t.callback(e) }))
                        }
                    }, { key: "cancelRefEvent", value: function() { this.refEvent && this.channel.off(this.refEvent) } }, { key: "cancelTimeout", value: function() { clearTimeout(this.timeoutTimer), this.timeoutTimer = null } }, {
                        key: "startTimeout",
                        value: function() {
                            var t = this;
                            this.timeoutTimer && this.cancelTimeout(), this.ref = this.channel.socket.makeRef(), this.refEvent = this.channel.replyEventName(this.ref), this.channel.on(this.refEvent, (function(n) { t.cancelRefEvent(), t.cancelTimeout(), t.receivedResp = n, t.matchReceive(n) })), this.timeoutTimer = setTimeout((function() { t.trigger("timeout", {}) }), this.timeout)
                        }
                    }, { key: "hasReceived", value: function(t) { return this.receivedResp && this.receivedResp.status === t } }, { key: "trigger", value: function(t, n) { this.channel.trigger(this.refEvent, { status: t, response: n }) } }]), t
                }(),
                C = function() {
                    function t(n, e, i) {
                        var r = this;
                        u(this, t), this.state = b, this.topic = n, this.params = P(e || {}), this.socket = i, this.bindings = [], this.bindingRef = 0, this.timeout = this.socket.timeout, this.joinedOnce = !1, this.joinPush = new j(this, w, this.params, this.timeout), this.pushBuffer = [], this.stateChangeRefs = [], this.rejoinTimer = new x((function() { r.socket.isConnected() && r.rejoin() }), this.socket.rejoinAfterMs), this.stateChangeRefs.push(this.socket.onError((function() { return r.rejoinTimer.reset() }))), this.stateChangeRefs.push(this.socket.onOpen((function() { r.rejoinTimer.reset(), r.isErrored() && r.rejoin() }))), this.joinPush.receive("ok", (function() { r.state = g, r.rejoinTimer.reset(), r.pushBuffer.forEach((function(t) { return t.send() })), r.pushBuffer = [] })), this.joinPush.receive("error", (function() { r.state = T, r.socket.isConnected() && r.rejoinTimer.scheduleTimeout() })), this.onClose((function() { r.rejoinTimer.reset(), r.socket.hasLogger() && r.socket.log("channel", "close ".concat(r.topic, " ").concat(r.joinRef())), r.state = b, r.socket.remove(r) })), this.onError((function(t) { r.socket.hasLogger() && r.socket.log("channel", "error ".concat(r.topic), t), r.isJoining() && r.joinPush.reset(), r.state = T, r.socket.isConnected() && r.rejoinTimer.scheduleTimeout() })), this.joinPush.receive("timeout", (function() { r.socket.hasLogger() && r.socket.log("channel", "timeout ".concat(r.topic, " (").concat(r.joinRef(), ")"), r.joinPush.timeout), new j(r, _, P({}), r.timeout).send(), r.state = T, r.joinPush.reset(), r.socket.isConnected() && r.rejoinTimer.scheduleTimeout() })), this.on(y, (function(t, n) { r.trigger(r.replyEventName(n), t) }))
                    }
                    return f(t, [{ key: "join", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.timeout; if (this.joinedOnce) throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance"); return this.timeout = t, this.joinedOnce = !0, this.rejoin(), this.joinPush } }, { key: "onClose", value: function(t) { this.on(k, t) } }, { key: "onError", value: function(t) { return this.on(A, (function(n) { return t(n) })) } }, { key: "on", value: function(t, n) { var e = this.bindingRef++; return this.bindings.push({ event: t, ref: e, callback: n }), e } }, { key: "off", value: function(t, n) { this.bindings = this.bindings.filter((function(e) { return !(e.event === t && (void 0 === n || n === e.ref)) })) } }, { key: "canPush", value: function() { return this.socket.isConnected() && this.isJoined() } }, { key: "push", value: function(t, n) { var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.timeout; if (!this.joinedOnce) throw new Error("tried to push '".concat(t, "' to '").concat(this.topic, "' before joining. Use channel.join() before pushing events")); var i = new j(this, t, (function() { return n }), e); return this.canPush() ? i.send() : (i.startTimeout(), this.pushBuffer.push(i)), i } }, {
                        key: "leave",
                        value: function() {
                            var t = this,
                                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.timeout;
                            this.rejoinTimer.reset(), this.joinPush.cancelTimeout(), this.state = E;
                            var e = function() { t.socket.hasLogger() && t.socket.log("channel", "leave ".concat(t.topic)), t.trigger(k, "leave") },
                                i = new j(this, _, P({}), n);
                            return i.receive("ok", (function() { return e() })).receive("timeout", (function() { return e() })), i.send(), this.canPush() || i.trigger("ok", {}), i
                        }
                    }, { key: "onMessage", value: function(t, n, e) { return n } }, { key: "isLifecycleEvent", value: function(t) { return S.indexOf(t) >= 0 } }, { key: "isMember", value: function(t, n, e, i) { return !(this.topic !== t || i && i !== this.joinRef() && this.isLifecycleEvent(n) && (this.socket.hasLogger() && this.socket.log("channel", "dropping outdated message", { topic: t, event: n, payload: e, joinRef: i }), 1)) } }, { key: "joinRef", value: function() { return this.joinPush.ref } }, {
                        key: "rejoin",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.timeout;
                            this.isLeaving() || (this.socket.leaveOpenTopic(this.topic), this.state = I, this.joinPush.resend(t))
                        }
                    }, { key: "trigger", value: function(t, n, e, i) { var r = this.onMessage(t, n, e, i); if (n && !r) throw new Error("channel onMessage callbacks must return the payload, modified or unmodified"); for (var o = this.bindings.filter((function(n) { return n.event === t })), s = 0; s < o.length; s++) o[s].callback(r, e, i || this.joinRef()) } }, { key: "replyEventName", value: function(t) { return "chan_reply_".concat(t) } }, { key: "isClosed", value: function() { return this.state === b } }, { key: "isErrored", value: function() { return this.state === T } }, { key: "isJoined", value: function() { return this.state === g } }, { key: "isJoining", value: function() { return this.state === I } }, { key: "isLeaving", value: function() { return this.state === E } }]), t
                }(),
                M = {
                    HEADER_LENGTH: 1,
                    META_LENGTH: 4,
                    KINDS: { push: 0, reply: 1, broadcast: 2 },
                    encode: function(t, n) { if (t.payload.constructor === ArrayBuffer) return n(this.binaryEncode(t)); var e = [t.join_ref, t.ref, t.topic, t.event, t.payload]; return n(JSON.stringify(e)) },
                    decode: function(t, n) { if (t.constructor === ArrayBuffer) return n(this.binaryDecode(t)); var e = o(JSON.parse(t), 5); return n({ join_ref: e[0], ref: e[1], topic: e[2], event: e[3], payload: e[4] }) },
                    binaryEncode: function(t) {
                        var n = t.join_ref,
                            e = t.ref,
                            i = t.event,
                            r = t.topic,
                            o = t.payload,
                            s = this.META_LENGTH + n.length + e.length + r.length + i.length,
                            a = new ArrayBuffer(this.HEADER_LENGTH + s),
                            u = new DataView(a),
                            c = 0;
                        u.setUint8(c++, this.KINDS.push), u.setUint8(c++, n.length), u.setUint8(c++, e.length), u.setUint8(c++, r.length), u.setUint8(c++, i.length), Array.from(n, (function(t) { return u.setUint8(c++, t.charCodeAt(0)) })), Array.from(e, (function(t) { return u.setUint8(c++, t.charCodeAt(0)) })), Array.from(r, (function(t) { return u.setUint8(c++, t.charCodeAt(0)) })), Array.from(i, (function(t) { return u.setUint8(c++, t.charCodeAt(0)) }));
                        var f = new Uint8Array(a.byteLength + o.byteLength);
                        return f.set(new Uint8Array(a), 0), f.set(new Uint8Array(o), a.byteLength), f.buffer
                    },
                    binaryDecode: function(t) {
                        var n = new DataView(t),
                            e = n.getUint8(0),
                            i = new TextDecoder;
                        switch (e) {
                            case this.KINDS.push:
                                return this.decodePush(t, n, i);
                            case this.KINDS.reply:
                                return this.decodeReply(t, n, i);
                            case this.KINDS.broadcast:
                                return this.decodeBroadcast(t, n, i)
                        }
                    },
                    decodePush: function(t, n, e) {
                        var i = n.getUint8(1),
                            r = n.getUint8(2),
                            o = n.getUint8(3),
                            s = this.HEADER_LENGTH + this.META_LENGTH - 1,
                            a = e.decode(t.slice(s, s + i));
                        s += i;
                        var u = e.decode(t.slice(s, s + r));
                        s += r;
                        var c = e.decode(t.slice(s, s + o));
                        return s += o, { join_ref: a, ref: null, topic: u, event: c, payload: t.slice(s, t.byteLength) }
                    },
                    decodeReply: function(t, n, e) {
                        var i = n.getUint8(1),
                            r = n.getUint8(2),
                            o = n.getUint8(3),
                            s = n.getUint8(4),
                            a = this.HEADER_LENGTH + this.META_LENGTH,
                            u = e.decode(t.slice(a, a + i));
                        a += i;
                        var c = e.decode(t.slice(a, a + r));
                        a += r;
                        var f = e.decode(t.slice(a, a + o));
                        a += o;
                        var h = e.decode(t.slice(a, a + s));
                        a += s;
                        var l = t.slice(a, t.byteLength);
                        return { join_ref: u, ref: c, topic: f, event: y, payload: { status: h, response: l } }
                    },
                    decodeBroadcast: function(t, n, e) {
                        var i = n.getUint8(1),
                            r = n.getUint8(2),
                            o = this.HEADER_LENGTH + 2,
                            s = e.decode(t.slice(o, o + i));
                        o += i;
                        var a = e.decode(t.slice(o, o + r));
                        return o += r, { join_ref: null, ref: null, topic: s, event: a, payload: t.slice(o, t.byteLength) }
                    }
                },
                R = function() {
                    function t(n) {
                        var e = this,
                            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        u(this, t), this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] }, this.channels = [], this.sendBuffer = [], this.ref = 0, this.timeout = i.timeout || 1e4, this.transport = i.transport || v.WebSocket || F, this.defaultEncoder = M.encode.bind(M), this.defaultDecoder = M.decode.bind(M), this.closeWasClean = !1, this.unloaded = !1, this.binaryType = i.binaryType || "arraybuffer", this.transport !== F ? (this.encode = i.encode || this.defaultEncoder, this.decode = i.decode || this.defaultDecoder) : (this.encode = this.defaultEncoder, this.decode = this.defaultDecoder), l && l.addEventListener && l.addEventListener("unload", (function(t) { e.conn && (e.unloaded = !0, e.abnormalClose("unloaded")) })), this.heartbeatIntervalMs = i.heartbeatIntervalMs || 3e4, this.rejoinAfterMs = function(t) { return i.rejoinAfterMs ? i.rejoinAfterMs(t) : [1e3, 2e3, 5e3][t - 1] || 1e4 }, this.reconnectAfterMs = function(t) { return e.unloaded ? 100 : i.reconnectAfterMs ? i.reconnectAfterMs(t) : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][t - 1] || 5e3 }, this.logger = i.logger || null, this.longpollerTimeout = i.longpollerTimeout || 2e4, this.params = P(i.params || {}), this.endPoint = "".concat(n, "/").concat(D), this.vsn = i.vsn || "2.0.0", this.heartbeatTimer = null, this.pendingHeartbeatRef = null, this.reconnectTimer = new x((function() { e.teardown((function() { return e.connect() })) }), this.reconnectAfterMs)
                    }
                    return f(t, [{ key: "protocol", value: function() { return location.protocol.match(/^https/) ? "wss" : "ws" } }, { key: "endPointURL", value: function() { var t = K.appendParams(K.appendParams(this.endPoint, this.params()), { vsn: this.vsn }); return "/" !== t.charAt(0) ? t : "/" === t.charAt(1) ? "".concat(this.protocol(), ":").concat(t) : "".concat(this.protocol(), "://").concat(location.host).concat(t) } }, { key: "disconnect", value: function(t, n, e) { this.closeWasClean = !0, this.reconnectTimer.reset(), this.teardown(t, n, e) } }, {
                        key: "connect",
                        value: function(t) {
                            var n = this;
                            t && (console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"), this.params = P(t)), this.conn || (this.closeWasClean = !1, this.conn = new this.transport(this.endPointURL()), this.conn.binaryType = this.binaryType, this.conn.timeout = this.longpollerTimeout, this.conn.onopen = function() { return n.onConnOpen() }, this.conn.onerror = function(t) { return n.onConnError(t) }, this.conn.onmessage = function(t) { return n.onConnMessage(t) }, this.conn.onclose = function(t) { return n.onConnClose(t) })
                        }
                    }, { key: "log", value: function(t, n, e) { this.logger(t, n, e) } }, { key: "hasLogger", value: function() { return null !== this.logger } }, { key: "onOpen", value: function(t) { var n = this.makeRef(); return this.stateChangeCallbacks.open.push([n, t]), n } }, { key: "onClose", value: function(t) { var n = this.makeRef(); return this.stateChangeCallbacks.close.push([n, t]), n } }, { key: "onError", value: function(t) { var n = this.makeRef(); return this.stateChangeCallbacks.error.push([n, t]), n } }, { key: "onMessage", value: function(t) { var n = this.makeRef(); return this.stateChangeCallbacks.message.push([n, t]), n } }, { key: "onConnOpen", value: function() { this.hasLogger() && this.log("transport", "connected to ".concat(this.endPointURL())), this.unloaded = !1, this.closeWasClean = !1, this.flushSendBuffer(), this.reconnectTimer.reset(), this.resetHeartbeat(), this.stateChangeCallbacks.open.forEach((function(t) { return (0, o(t, 2)[1])() })) } }, {
                        key: "resetHeartbeat",
                        value: function() {
                            var t = this;
                            this.conn && this.conn.skipHeartbeat || (this.pendingHeartbeatRef = null, clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval((function() { return t.sendHeartbeat() }), this.heartbeatIntervalMs))
                        }
                    }, {
                        key: "teardown",
                        value: function(t, n, e) {
                            var i = this;
                            if (!this.conn) return t && t();
                            this.waitForBufferDone((function() { i.conn && (n ? i.conn.close(n, e || "") : i.conn.close()), i.waitForSocketClosed((function() { i.conn && (i.conn.onclose = function() {}, i.conn = null), t && t() })) }))
                        }
                    }, {
                        key: "waitForBufferDone",
                        value: function(t) {
                            var n = this,
                                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                            5 !== e && this.conn && this.conn.bufferedAmount ? setTimeout((function() { n.waitForBufferDone(t, e + 1) }), 150 * e) : t()
                        }
                    }, {
                        key: "waitForSocketClosed",
                        value: function(t) {
                            var n = this,
                                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                            5 !== e && this.conn && this.conn.readyState !== O ? setTimeout((function() { n.waitForSocketClosed(t, e + 1) }), 150 * e) : t()
                        }
                    }, { key: "onConnClose", value: function(t) { this.hasLogger() && this.log("transport", "close", t), this.triggerChanError(), clearInterval(this.heartbeatTimer), this.closeWasClean || this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach((function(n) { return (0, o(n, 2)[1])(t) })) } }, { key: "onConnError", value: function(t) { this.hasLogger() && this.log("transport", t), this.triggerChanError(), this.stateChangeCallbacks.error.forEach((function(n) { return (0, o(n, 2)[1])(t) })) } }, { key: "triggerChanError", value: function() { this.channels.forEach((function(t) { t.isErrored() || t.isLeaving() || t.isClosed() || t.trigger(A) })) } }, {
                        key: "connectionState",
                        value: function() {
                            switch (this.conn && this.conn.readyState) {
                                case d:
                                    return "connecting";
                                case p:
                                    return "open";
                                case m:
                                    return "closing";
                                default:
                                    return "closed"
                            }
                        }
                    }, { key: "isConnected", value: function() { return "open" === this.connectionState() } }, { key: "remove", value: function(t) { this.off(t.stateChangeRefs), this.channels = this.channels.filter((function(n) { return n.joinRef() !== t.joinRef() })) } }, { key: "off", value: function(t) { for (var n in this.stateChangeCallbacks) this.stateChangeCallbacks[n] = this.stateChangeCallbacks[n].filter((function(n) { var e = o(n, 1)[0]; return -1 === t.indexOf(e) })) } }, { key: "channel", value: function(t) { var n = new C(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, this); return this.channels.push(n), n } }, {
                        key: "push",
                        value: function(t) {
                            var n = this;
                            if (this.hasLogger()) {
                                var e = t.topic,
                                    i = t.event,
                                    r = t.payload,
                                    o = t.ref,
                                    s = t.join_ref;
                                this.log("push", "".concat(e, " ").concat(i, " (").concat(s, ", ").concat(o, ")"), r)
                            }
                            this.isConnected() ? this.encode(t, (function(t) { return n.conn.send(t) })) : this.sendBuffer.push((function() { return n.encode(t, (function(t) { return n.conn.send(t) })) }))
                        }
                    }, { key: "makeRef", value: function() { var t = this.ref + 1; return t === this.ref ? this.ref = 0 : this.ref = t, this.ref.toString() } }, {
                        key: "sendHeartbeat",
                        value: function() {
                            if (this.isConnected()) {
                                if (this.pendingHeartbeatRef) return this.pendingHeartbeatRef = null, this.hasLogger() && this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), void this.abnormalClose("heartbeat timeout");
                                this.pendingHeartbeatRef = this.makeRef(), this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: this.pendingHeartbeatRef })
                            }
                        }
                    }, { key: "abnormalClose", value: function(t) { this.closeWasClean = !1, this.conn.readyState === p && this.conn.close(1e3, t) } }, { key: "flushSendBuffer", value: function() { this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((function(t) { return t() })), this.sendBuffer = []) } }, {
                        key: "onConnMessage",
                        value: function(t) {
                            var n = this;
                            this.decode(t.data, (function(t) {
                                var e = t.topic,
                                    i = t.event,
                                    r = t.payload,
                                    s = t.ref,
                                    a = t.join_ref;
                                s && s === n.pendingHeartbeatRef && (n.pendingHeartbeatRef = null), n.hasLogger() && n.log("receive", "".concat(r.status || "", " ").concat(e, " ").concat(i, " ").concat(s && "(" + s + ")" || ""), r);
                                for (var u = 0; u < n.channels.length; u++) {
                                    var c = n.channels[u];
                                    c.isMember(e, i, r, a) && c.trigger(i, r, s, a)
                                }
                                for (var f = 0; f < n.stateChangeCallbacks.message.length; f++)(0, o(n.stateChangeCallbacks.message[f], 2)[1])(t)
                            }))
                        }
                    }, {
                        key: "leaveOpenTopic",
                        value: function(t) {
                            var n = this.channels.find((function(n) { return n.topic === t && (n.isJoined() || n.isJoining()) }));
                            n && (this.hasLogger() && this.log("transport", 'leaving duplicate topic "'.concat(t, '"')), n.leave())
                        }
                    }]), t
                }(),
                F = function() {
                    function t(n) { u(this, t), this.endPoint = null, this.token = null, this.skipHeartbeat = !0, this.onopen = function() {}, this.onerror = function() {}, this.onmessage = function() {}, this.onclose = function() {}, this.pollEndpoint = this.normalizeEndpoint(n), this.readyState = d, this.poll() }
                    return f(t, [{ key: "normalizeEndpoint", value: function(t) { return t.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + D), "$1/" + N) } }, { key: "endpointURL", value: function() { return K.appendParams(this.pollEndpoint, { token: this.token }) } }, { key: "closeAndRetry", value: function() { this.close(), this.readyState = d } }, { key: "ontimeout", value: function() { this.onerror("timeout"), this.closeAndRetry() } }, {
                        key: "poll",
                        value: function() {
                            var t = this;
                            this.readyState !== p && this.readyState !== d || K.request("GET", this.endpointURL(), "application/json", null, this.timeout, this.ontimeout.bind(this), (function(n) {
                                if (n) {
                                    var e = n.status,
                                        i = n.token,
                                        r = n.messages;
                                    t.token = i
                                } else e = 0;
                                switch (e) {
                                    case 200:
                                        r.forEach((function(n) { return t.onmessage({ data: n }) })), t.poll();
                                        break;
                                    case 204:
                                        t.poll();
                                        break;
                                    case 410:
                                        t.readyState = p, t.onopen(), t.poll();
                                        break;
                                    case 403:
                                        t.onerror(), t.close();
                                        break;
                                    case 0:
                                    case 500:
                                        t.onerror(), t.closeAndRetry();
                                        break;
                                    default:
                                        throw new Error("unhandled poll status ".concat(e))
                                }
                            }))
                        }
                    }, {
                        key: "send",
                        value: function(t) {
                            var n = this;
                            K.request("POST", this.endpointURL(), "application/json", t, this.timeout, this.onerror.bind(this, "timeout"), (function(t) { t && 200 === t.status || (n.onerror(t && t.status), n.closeAndRetry()) }))
                        }
                    }, { key: "close", value: function(t, n) { this.readyState = O, this.onclose() } }]), t
                }(),
                K = function() {
                    function t() { u(this, t) }
                    return f(t, null, [{
                        key: "request",
                        value: function(t, n, e, i, r, o, s) {
                            if (v.XDomainRequest) {
                                var a = new XDomainRequest;
                                this.xdomainRequest(a, t, n, i, r, o, s)
                            } else {
                                var u = new v.XMLHttpRequest;
                                this.xhrRequest(u, t, n, e, i, r, o, s)
                            }
                        }
                    }, {
                        key: "xdomainRequest",
                        value: function(t, n, e, i, r, o, s) {
                            var a = this;
                            t.timeout = r, t.open(n, e), t.onload = function() {
                                var n = a.parseJSON(t.responseText);
                                s && s(n)
                            }, o && (t.ontimeout = o), t.onprogress = function() {}, t.send(i)
                        }
                    }, {
                        key: "xhrRequest",
                        value: function(t, n, e, i, r, o, s, a) {
                            var u = this;
                            t.open(n, e, !0), t.timeout = o, t.setRequestHeader("Content-Type", i), t.onerror = function() { a && a(null) }, t.onreadystatechange = function() {
                                if (t.readyState === u.states.complete && a) {
                                    var n = u.parseJSON(t.responseText);
                                    a(n)
                                }
                            }, s && (t.ontimeout = s), t.send(r)
                        }
                    }, { key: "parseJSON", value: function(t) { if (!t || "" === t) return null; try { return JSON.parse(t) } catch (n) { return console && console.log("failed to parse JSON response", t), null } } }, {
                        key: "serialize",
                        value: function(t, n) {
                            var e = [];
                            for (var i in t)
                                if (t.hasOwnProperty(i)) {
                                    var o = n ? "".concat(n, "[").concat(i, "]") : i,
                                        s = t[i];
                                    "object" === r(s) ? e.push(this.serialize(s, o)) : e.push(encodeURIComponent(o) + "=" + encodeURIComponent(s))
                                }
                            return e.join("&")
                        }
                    }, { key: "appendParams", value: function(t, n) { if (0 === Object.keys(n).length) return t; var e = t.match(/\?/) ? "&" : "?"; return "".concat(t).concat(e).concat(this.serialize(n)) } }]), t
                }();
            K.states = { complete: 4 };
            var U = function() {
                    function t(n) {
                        var e = this,
                            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        u(this, t);
                        var r = i.events || { state: "presence_state", diff: "presence_diff" };
                        this.state = {}, this.pendingDiffs = [], this.channel = n, this.joinRef = null, this.caller = { onJoin: function() {}, onLeave: function() {}, onSync: function() {} }, this.channel.on(r.state, (function(n) {
                            var i = e.caller,
                                r = i.onJoin,
                                o = i.onLeave,
                                s = i.onSync;
                            e.joinRef = e.channel.joinRef(), e.state = t.syncState(e.state, n, r, o), e.pendingDiffs.forEach((function(n) { e.state = t.syncDiff(e.state, n, r, o) })), e.pendingDiffs = [], s()
                        })), this.channel.on(r.diff, (function(n) {
                            var i = e.caller,
                                r = i.onJoin,
                                o = i.onLeave,
                                s = i.onSync;
                            e.inPendingSyncState() ? e.pendingDiffs.push(n) : (e.state = t.syncDiff(e.state, n, r, o), s())
                        }))
                    }
                    return f(t, [{ key: "onJoin", value: function(t) { this.caller.onJoin = t } }, { key: "onLeave", value: function(t) { this.caller.onLeave = t } }, { key: "onSync", value: function(t) { this.caller.onSync = t } }, { key: "list", value: function(n) { return t.list(this.state, n) } }, { key: "inPendingSyncState", value: function() { return !this.joinRef || this.joinRef !== this.channel.joinRef() } }], [{
                        key: "syncState",
                        value: function(t, n, e, i) {
                            var r = this,
                                o = this.clone(t),
                                s = {},
                                a = {};
                            return this.map(o, (function(t, e) { n[t] || (a[t] = e) })), this.map(n, (function(t, n) {
                                var e = o[t];
                                if (e) {
                                    var i = n.metas.map((function(t) { return t.phx_ref })),
                                        u = e.metas.map((function(t) { return t.phx_ref })),
                                        c = n.metas.filter((function(t) { return u.indexOf(t.phx_ref) < 0 })),
                                        f = e.metas.filter((function(t) { return i.indexOf(t.phx_ref) < 0 }));
                                    c.length > 0 && (s[t] = n, s[t].metas = c), f.length > 0 && (a[t] = r.clone(e), a[t].metas = f)
                                } else s[t] = n
                            })), this.syncDiff(o, { joins: s, leaves: a }, e, i)
                        }
                    }, {
                        key: "syncDiff",
                        value: function(t, n, e, r) {
                            var o = n.joins,
                                s = n.leaves,
                                a = this.clone(t);
                            return e || (e = function() {}), r || (r = function() {}), this.map(o, (function(t, n) {
                                var r = a[t];
                                if (a[t] = n, r) {
                                    var o, s = a[t].metas.map((function(t) { return t.phx_ref })),
                                        u = r.metas.filter((function(t) { return s.indexOf(t.phx_ref) < 0 }));
                                    (o = a[t].metas).unshift.apply(o, i(u))
                                }
                                e(t, r, n)
                            })), this.map(s, (function(t, n) {
                                var e = a[t];
                                if (e) {
                                    var i = n.metas.map((function(t) { return t.phx_ref }));
                                    e.metas = e.metas.filter((function(t) { return i.indexOf(t.phx_ref) < 0 })), r(t, e, n), 0 === e.metas.length && delete a[t]
                                }
                            })), a
                        }
                    }, { key: "list", value: function(t, n) { return n || (n = function(t, n) { return n }), this.map(t, (function(t, e) { return n(t, e) })) } }, { key: "map", value: function(t, n) { return Object.getOwnPropertyNames(t).map((function(e) { return n(e, t[e]) })) } }, { key: "clone", value: function(t) { return JSON.parse(JSON.stringify(t)) } }]), t
                }(),
                x = function() {
                    function t(n, e) { u(this, t), this.callback = n, this.timerCalc = e, this.timer = null, this.tries = 0 }
                    return f(t, [{ key: "reset", value: function() { this.tries = 0, clearTimeout(this.timer) } }, {
                        key: "scheduleTimeout",
                        value: function() {
                            var t = this;
                            clearTimeout(this.timer), this.timer = setTimeout((function() { t.tries = t.tries + 1, t.callback() }), this.timerCalc(this.tries + 1))
                        }
                    }]), t
                }()
        }])
    },
    14: function(t, n, e) {
        "use strict";
        e.r(n), e.d(n, "forEach", (function() { return o.a })), e.d(n, "map", (function() { return a })), e.d(n, "clone", (function() { return u })), e.d(n, "omit", (function() { return c })), e.d(n, "filter", (function() { return f })), e.d(n, "findEntry", (function() { return h })), e.d(n, "find", (function() { return l })), e.d(n, "findKey", (function() { return v })), e.d(n, "count", (function() { return d })), e.d(n, "isEmpty", (function() { return p })), e.d(n, "updateIn", (function() { return m })), e.d(n, "setIn", (function() { return O })), e.d(n, "mapEntries", (function() { return b })), e.d(n, "groupBy", (function() { return T })), e.d(n, "promiseAll", (function() { return g })), e.d(n, "isPojo", (function() { return I })), e.d(n, "deepMap", (function() { return E }));
        var i = e(50),
            r = e(67),
            o = e(26),
            s = function() {
                return (s = Object.assign || function(t) {
                    for (var n, e = 1, i = arguments.length; e < i; e++)
                        for (var r in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                    return t
                }).apply(this, arguments)
            };

        function a(t, n) {
            return b(t, (function(t) {
                var e = t[0],
                    i = t[1];
                return [e, n(i, e)]
            }))
        }

        function u(t) { return s({}, t) }

        function c(t) { for (var n = [], e = 1; e < arguments.length; e++) n[e - 1] = arguments[e]; var i = {}; return Object(o.a)(t, (function(t, e) {-1 === n.indexOf(e) && (i[e] = t) })), i }

        function f(t, n) { var e = {}; return Object(o.a)(t, (function(t, i) { n(t, i) && (e[i] = t) })), e }

        function h(t, n) {
            for (var e in t)
                if (Object.prototype.hasOwnProperty.call(t, e)) { var i = [e, t[e]]; if (n(t[e], e)) return i }
        }

        function l(t, n) { var e = h(t, n); return e && e[1] }

        function v(t, n) { var e = h(t, n); return e && e[0] }

        function d(t) { return Object.keys(t).length }

        function p(t) {
            for (var n in t)
                if (t.hasOwnProperty(n)) return !1;
            return !0
        }

        function m(t, n, e) {
            var i, r = n[0],
                o = n.slice(1);
            if (!r) return e(t);
            var a = t[r] || (o[0] ? {} : void 0);
            return s(s({}, t), ((i = {})[r] = m(a, o, e), i))
        }

        function O(t, n, e) { return m(t, n, (function() { return e })) }

        function b(t, n) {
            var e = {},
                i = 0;
            return Object(o.a)(t, (function(t, r) {
                var o = n([r, t], i++),
                    s = o[0],
                    a = o[1];
                e[s] = a
            })), e
        }

        function T(t, n) {
            var e = {},
                i = 0;
            return Object(o.a)(t, (function(t, r) {
                var o = n([r, t], i++),
                    s = o[0],
                    a = o[1],
                    u = e[s];
                e[s] = u ? u.concat(a) : [a]
            })), e
        }

        function g(t) { return Promise.all(Object(i.a)(t, (function(t, n) { return t.then((function(t) { return [n, t] })) }))).then(r.a) }

        function I(t) { return null !== t && "object" == typeof t && Object.getPrototypeOf(t) === Object.prototype }

        function E(t, n) { return Array.isArray(t) ? t.map((function(t) { return E(t, n) })) : I(t) ? a(n(t), (function(t) { return E(t, n) })) : t }
    },
    142: function(t, n, e) {
        "use strict";

        function i() {
            var t = document.documentElement,
                n = document.body;
            return { width: t.clientWidth || n.clientWidth, height: window.innerHeight }
        }
        e.d(n, "a", (function() { return i }))
    },
    15: function(t, n, e) {
        "use strict";
        e.d(n, "n", (function() { return o })), e.d(n, "e", (function() { return s })), e.d(n, "k", (function() { return a })), e.d(n, "d", (function() { return u })), e.d(n, "g", (function() { return c })), e.d(n, "m", (function() { return f })), e.d(n, "f", (function() { return h })), e.d(n, "h", (function() { return l })), e.d(n, "l", (function() { return v })), e.d(n, "b", (function() { return d })), e.d(n, "j", (function() { return m })), e.d(n, "i", (function() { return O })), e.d(n, "c", (function() { return b }));
        var i = e(17),
            r = e(20);

        function o() {
            var t = window.crypto,
                n = t ? function() { return t.getRandomValues(new Uint8Array(1))[0] } : function() { return Math.floor(255 * Math.random()) };
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (function(t) { return (t ^ n() & 15 >> t / 4).toString(16) }))
        }

        function s() {
            var t = {},
                n = new i.a((function(n, e) { t.resolve = n, t.reject = e }));
            return t.promise = n, t
        }

        function a(t, n) {
            var e = function(i) { "string" == typeof i.data && i.data === t && (n(), window.removeEventListener("message", e)) };
            window.addEventListener("message", e, !1)
        }

        function u(t) { return n = JSON.stringify(t), btoa(unescape(encodeURIComponent(n))); var n }

        function c(t, n, e) {
            return new i.a((function(i, r) {
                var o = new XMLHttpRequest;
                o.onreadystatechange = function() {
                    if (4 == o.readyState) {
                        if (o.status >= 200 && o.status < 400) { var t = o.response; return void i(t) }
                        if (!o.status) return void r("Error: Unable to connect");
                        if (o.status >= 400 && o.status < 500) try { var n = JSON.parse(o.responseText); if (n.error) return void r({ userError: n.error }) } catch (t) {}
                        r(o.responseText)
                    }
                }, o.open(t, n), o.setRequestHeader("Content-Type", "application/json"), o.send(e)
            }))
        }

        function f(t, n) { document.cookie = t + "=" + n + ";path=/" }

        function h(t) {
            var n = l(t);
            document.cookie = t + "=" + n + ";expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/"
        }

        function l(t) { var n; try { n = document.cookie } catch (t) { return } for (var e = 0, i = n.split("; ").map((function(t) { return t.split("=") })).map((function(t) { return { name: t[0], value: t[1] } })); e < i.length; e++) { var r = i[e]; if (r.name === t) return r.value } }

        function v(t, n) { for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e]) }
        e.d(n, "a", (function() { return r.a }));
        var d = function() {
                function t(t) { this.u = t }
                return t.prototype.add = function(n, e) {
                    return new t(this.u.concat([
                        [n, e]
                    ]))
                }, t.prototype.split = function() { return Object(r.g)(this.O()) }, t.prototype.O = function() {
                    return this.T || (this.T = this.u.map((function(t) {
                        var n = t[0],
                            e = t[1];
                        return null == e && (e = ""), "object" == typeof e && (e = u(e)), n + "=" + encodeURIComponent(e)
                    }))), this.T
                }, t.prototype.toString = function() { return this.O().join("&") }, t
            }(),
            p = { ByV39eoc: 1, B1FxElnd: 1, aW4c49tW: 1, qGfuGtx: 1, SbERe5ee: 1, ilaVEa15: 1, FOlWOSaH: 1, dao5gGmT: 1, DLUgAhzL: 1, fqXFumr6: 1, FtiWHMYT: 1, "66iWOyWt": 1, "1375amYi": 1, mWbJgzpt: 1, jO7GqAvL: 1, SkFIKxo5: 1, "2z4ILc3y": 1, aDr8oPL1: 1, Hku1c4Pt: 1 };

        function m(t) { return !Object(i.b)(t, "t") && !p[t] }

        function O() { return !!window.cordova }
        var b = function() {
            function t(t, n) {
                this.I = !1, this.A = 0;
                var e = this;
                this.callback = function() { if (e.A++, e.A > 1) throw new Error("[TalkJS] Cannot call " + t + " more than once"); if (e.I) throw new Error("[TalkJS] Cannot call " + t + " asynchronously"); return n.apply(null, arguments) }
            }
            return t.prototype.expire = function() { this.I = !0 }, t
        }()
    },
    158: function(t, n, e) {
        "use strict";
        var i;
        ! function(r) {
            function o(t, n, e) {
                var i, r, o, s, d, p, m, g, I, E = 0,
                    k = [],
                    A = 0,
                    w = !1,
                    y = [],
                    _ = [],
                    S = !1;
                if (i = (e = e || {}).encoding || "UTF8", (I = e.numRounds || 1) !== parseInt(I, 10) || 1 > I) throw Error("numRounds must a integer >= 1");
                if ("SHA-1" !== t) throw Error("Chosen SHA variant is not supported");
                d = 512, p = b, m = T, s = 160, g = function(t) { return t.slice() }, o = v(n, i), r = O(t), this.setHMACKey = function(n, e, o) {
                    var a;
                    if (!0 === w) throw Error("HMAC key already set");
                    if (!0 === S) throw Error("Cannot set HMAC key after calling update");
                    for (n = (e = v(e, i = (o || {}).encoding || "UTF8")(n)).binLen, e = e.value, o = (a = d >>> 3) / 4 - 1, a < n / 8 && (e = m(e, n, 0, O(t), s)); e.length <= o;) e.push(0);
                    for (n = 0; n <= o; n += 1) y[n] = 909522486 ^ e[n], _[n] = 1549556828 ^ e[n];
                    r = p(y, r), E = d, w = !0
                }, this.update = function(t) {
                    var n, e, i, s = 0,
                        a = d >>> 5;
                    for (t = (n = o(t, k, A)).binLen, e = n.value, n = t >>> 5, i = 0; i < n; i += a) s + d <= t && (r = p(e.slice(i, i + a), r), s += d);
                    E += s, k = e.slice(s >>> 5), A = t % d, S = !0
                }, this.getHash = function(n, e) {
                    var i, o, v, d;
                    if (!0 === w) throw Error("Cannot call getHash after setting HMAC key");
                    switch (v = l(e), n) {
                        case "HEX":
                            i = function(t) { return a(t, s, v) };
                            break;
                        case "B64":
                            i = function(t) { return u(t, s, v) };
                            break;
                        case "BYTES":
                            i = function(t) { return c(t, s) };
                            break;
                        case "ARRAYBUFFER":
                            try { o = new ArrayBuffer(0) } catch (t) { throw Error("ARRAYBUFFER not supported by this environment") }
                            i = function(t) { return f(t, s) };
                            break;
                        case "UINT8ARRAY":
                            try { o = new Uint8Array(0) } catch (t) { throw Error("UINT8ARRAY not supported by this environment") }
                            i = function(t) { return h(t, s) };
                            break;
                        default:
                            throw Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")
                    }
                    for (d = m(k.slice(), A, E, g(r), s), o = 1; o < I; o += 1) d = m(d, s, 0, O(t), s);
                    return i(d)
                }, this.getHMAC = function(n, e) {
                    var i, o, v, b;
                    if (!1 === w) throw Error("Cannot call getHMAC without first setting HMAC key");
                    switch (v = l(e), n) {
                        case "HEX":
                            i = function(t) { return a(t, s, v) };
                            break;
                        case "B64":
                            i = function(t) { return u(t, s, v) };
                            break;
                        case "BYTES":
                            i = function(t) { return c(t, s) };
                            break;
                        case "ARRAYBUFFER":
                            try { i = new ArrayBuffer(0) } catch (t) { throw Error("ARRAYBUFFER not supported by this environment") }
                            i = function(t) { return f(t, s) };
                            break;
                        case "UINT8ARRAY":
                            try { i = new Uint8Array(0) } catch (t) { throw Error("UINT8ARRAY not supported by this environment") }
                            i = function(t) { return h(t, s) };
                            break;
                        default:
                            throw Error("outputFormat must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")
                    }
                    return o = m(k.slice(), A, E, g(r), s), b = p(_, O(t)), i(b = m(o, s, d, b, s))
                }
            }

            function s(t, n, e) { var i, r, o, s; for (n = n || [0], r = (e = e || 0) >>> 3, i = 0; i < t.length; i += 1) o = (s = i + r) >>> 2, n.length <= o && n.push(0), n[o] |= t[i] << 8 * (3 + s % 4 * -1); return { value: n, binLen: 8 * t.length + e } }

            function a(t, n, e) { var i, r, o = ""; for (n /= 8, i = 0; i < n; i += 1) r = t[i >>> 2] >>> 8 * (3 + i % 4 * -1), o += "0123456789abcdef".charAt(r >>> 4 & 15) + "0123456789abcdef".charAt(15 & r); return e.outputUpper ? o.toUpperCase() : o }

            function u(t, n, e) {
                var i, r, o, s = "",
                    a = n / 8;
                for (i = 0; i < a; i += 3)
                    for (r = i + 1 < a ? t[i + 1 >>> 2] : 0, o = i + 2 < a ? t[i + 2 >>> 2] : 0, o = (t[i >>> 2] >>> 8 * (3 + i % 4 * -1) & 255) << 16 | (r >>> 8 * (3 + (i + 1) % 4 * -1) & 255) << 8 | o >>> 8 * (3 + (i + 2) % 4 * -1) & 255, r = 0; 4 > r; r += 1) s += 8 * i + 6 * r <= n ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(o >>> 6 * (3 - r) & 63) : e.b64Pad;
                return s
            }

            function c(t, n) {
                var e, i, r = "",
                    o = n / 8;
                for (e = 0; e < o; e += 1) i = t[e >>> 2] >>> 8 * (3 + e % 4 * -1) & 255, r += String.fromCharCode(i);
                return r
            }

            function f(t, n) {
                var e, i, r = n / 8,
                    o = new ArrayBuffer(r);
                for (i = new Uint8Array(o), e = 0; e < r; e += 1) i[e] = t[e >>> 2] >>> 8 * (3 + e % 4 * -1) & 255;
                return o
            }

            function h(t, n) {
                var e, i = n / 8,
                    r = new Uint8Array(i);
                for (e = 0; e < i; e += 1) r[e] = t[e >>> 2] >>> 8 * (3 + e % 4 * -1) & 255;
                return r
            }

            function l(t) { var n = { outputUpper: !1, b64Pad: "=", shakeLen: -1 }; if (t = t || {}, n.outputUpper = t.outputUpper || !1, !0 === t.hasOwnProperty("b64Pad") && (n.b64Pad = t.b64Pad), "boolean" != typeof n.outputUpper) throw Error("Invalid outputUpper formatting option"); if ("string" != typeof n.b64Pad) throw Error("Invalid b64Pad formatting option"); return n }

            function v(t, n) {
                var e;
                switch (n) {
                    case "UTF8":
                    case "UTF16BE":
                    case "UTF16LE":
                        break;
                    default:
                        throw Error("encoding must be UTF8, UTF16BE, or UTF16LE")
                }
                switch (t) {
                    case "HEX":
                        e = function(t, n, e) {
                            var i, r, o, s, a, u = t.length;
                            if (0 != u % 2) throw Error("String of HEX type must be in byte increments");
                            for (n = n || [0], a = (e = e || 0) >>> 3, i = 0; i < u; i += 2) {
                                if (r = parseInt(t.substr(i, 2), 16), isNaN(r)) throw Error("String of HEX type contains invalid characters");
                                for (o = (s = (i >>> 1) + a) >>> 2; n.length <= o;) n.push(0);
                                n[o] |= r << 8 * (3 + s % 4 * -1)
                            }
                            return { value: n, binLen: 4 * u + e }
                        };
                        break;
                    case "TEXT":
                        e = function(t, e, i) {
                            var r, o, s, a, u, c, f, h, l = 0;
                            if (e = e || [0], u = (i = i || 0) >>> 3, "UTF8" === n)
                                for (h = 3, s = 0; s < t.length; s += 1)
                                    for (o = [], 128 > (r = t.charCodeAt(s)) ? o.push(r) : 2048 > r ? (o.push(192 | r >>> 6), o.push(128 | 63 & r)) : 55296 > r || 57344 <= r ? o.push(224 | r >>> 12, 128 | r >>> 6 & 63, 128 | 63 & r) : (s += 1, r = 65536 + ((1023 & r) << 10 | 1023 & t.charCodeAt(s)), o.push(240 | r >>> 18, 128 | r >>> 12 & 63, 128 | r >>> 6 & 63, 128 | 63 & r)), a = 0; a < o.length; a += 1) {
                                        for (c = (f = l + u) >>> 2; e.length <= c;) e.push(0);
                                        e[c] |= o[a] << 8 * (h + f % 4 * -1), l += 1
                                    } else if ("UTF16BE" === n || "UTF16LE" === n)
                                        for (h = 2, o = "UTF16LE" === n || "UTF16LE" !== n && !1, s = 0; s < t.length; s += 1) {
                                            for (r = t.charCodeAt(s), !0 === o && (r = (a = 255 & r) << 8 | r >>> 8), c = (f = l + u) >>> 2; e.length <= c;) e.push(0);
                                            e[c] |= r << 8 * (h + f % 4 * -1), l += 2
                                        }
                            return { value: e, binLen: 8 * l + i }
                        };
                        break;
                    case "B64":
                        e = function(t, n, e) {
                            var i, r, o, s, a, u, c, f = 0;
                            if (-1 === t.search(/^[a-zA-Z0-9=+\/]+$/)) throw Error("Invalid character in base-64 string");
                            if (r = t.indexOf("="), t = t.replace(/\=/g, ""), -1 !== r && r < t.length) throw Error("Invalid '=' found in base-64 string");
                            for (n = n || [0], u = (e = e || 0) >>> 3, r = 0; r < t.length; r += 4) {
                                for (a = t.substr(r, 4), o = s = 0; o < a.length; o += 1) s |= (i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(a.charAt(o))) << 18 - 6 * o;
                                for (o = 0; o < a.length - 1; o += 1) {
                                    for (i = (c = f + u) >>> 2; n.length <= i;) n.push(0);
                                    n[i] |= (s >>> 16 - 8 * o & 255) << 8 * (3 + c % 4 * -1), f += 1
                                }
                            }
                            return { value: n, binLen: 8 * f + e }
                        };
                        break;
                    case "BYTES":
                        e = function(t, n, e) { var i, r, o, s, a; for (n = n || [0], o = (e = e || 0) >>> 3, r = 0; r < t.length; r += 1) i = t.charCodeAt(r), s = (a = r + o) >>> 2, n.length <= s && n.push(0), n[s] |= i << 8 * (3 + a % 4 * -1); return { value: n, binLen: 8 * t.length + e } };
                        break;
                    case "ARRAYBUFFER":
                        try { e = new ArrayBuffer(0) } catch (t) { throw Error("ARRAYBUFFER not supported by this environment") }
                        e = function(t, n, e) { return s(new Uint8Array(t), n, e) };
                        break;
                    case "UINT8ARRAY":
                        try { e = new Uint8Array(0) } catch (t) { throw Error("UINT8ARRAY not supported by this environment") }
                        e = function(t, n, e) { return s(t, n, e) };
                        break;
                    default:
                        throw Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")
                }
                return e
            }

            function d(t, n) { return t << n | t >>> 32 - n }

            function p(t, n) { var e = (65535 & t) + (65535 & n); return ((t >>> 16) + (n >>> 16) + (e >>> 16) & 65535) << 16 | 65535 & e }

            function m(t, n, e, i, r) { var o = (65535 & t) + (65535 & n) + (65535 & e) + (65535 & i) + (65535 & r); return ((t >>> 16) + (n >>> 16) + (e >>> 16) + (i >>> 16) + (r >>> 16) + (o >>> 16) & 65535) << 16 | 65535 & o }

            function O(t) { if ("SHA-1" !== t) throw Error("No SHA variants supported"); return [1732584193, 4023233417, 2562383102, 271733878, 3285377520] }

            function b(t, n) { var e, i, r, o, s, a, u, c = []; for (e = n[0], i = n[1], r = n[2], o = n[3], s = n[4], u = 0; 80 > u; u += 1) c[u] = 16 > u ? t[u] : d(c[u - 3] ^ c[u - 8] ^ c[u - 14] ^ c[u - 16], 1), a = 20 > u ? m(d(e, 5), i & r ^ ~i & o, s, 1518500249, c[u]) : 40 > u ? m(d(e, 5), i ^ r ^ o, s, 1859775393, c[u]) : 60 > u ? m(d(e, 5), i & r ^ i & o ^ r & o, s, 2400959708, c[u]) : m(d(e, 5), i ^ r ^ o, s, 3395469782, c[u]), s = o, o = r, r = d(i, 30), i = e, e = a; return n[0] = p(e, n[0]), n[1] = p(i, n[1]), n[2] = p(r, n[2]), n[3] = p(o, n[3]), n[4] = p(s, n[4]), n }

            function T(t, n, e, i) { var r; for (r = 15 + (n + 65 >>> 9 << 4); t.length <= r;) t.push(0); for (t[n >>> 5] |= 128 << 24 - n % 32, n += e, t[r] = 4294967295 & n, t[r - 1] = n / 4294967296 | 0, n = t.length, r = 0; r < n; r += 16) i = b(t.slice(r, r + 16), i); return i }
            void 0 === (i = function() { return o }.call(n, e, n, t)) || (t.exports = i)
        }()
    },
    159: function(t, n) {
        /**@license MIT-promiscuous-Â©Ruben Verborgh*/
        ! function(n, e) {
            function i(t, n) { return (typeof n)[0] == t }

            function r(t, e) {
                return (e = function s(a, u, c, f, h, l) {
                    if (f = s.q, a != i) return r((function(t, n) { f.push({ p: this, r: t, j: n, 1: a, 0: u }) }));
                    if (c && i(n, c) | i("o", c)) try { h = c.then } catch (t) { u = 0, c = t }
                    if (i(n, h)) {
                        function v(t) { return function(n) { h && (h = 0, s(i, t, n)) } }
                        try { h.call(c, v(1), u = v(0)) } catch (t) { u(t) }
                    } else
                        for (e = function(e, s) { return i(n, e = u ? e : s) ? r((function(t, n) { o(this, t, n, c, e) })) : t }, l = 0; l < f.length;) h = f[l++], i(n, a = h[u]) ? o(h.p, h.r, h.j, c, a) : (u ? h.r : h.j)(c)
                }).q = [], t.call(t = { then: function(t, n) { return e(t, n) }, catch: function(t) { return e(0, t) } }, (function(t) { e(i, 1, t) }), (function(t) { e(i, 0, t) })), t
            }

            function o(t, e, r, o, s) { setTimeout((function() { try { o = s(o), s = o && i("o", o) | i(n, o) && o.then, i(n, s) ? o == t ? r(TypeError()) : s.call(o, e, r) : e(o) } catch (t) { r(t) } })) }

            function s(t) { return r((function(n) { n(t) })) }
            t.exports = r, r.resolve = s, r.reject = function(t) { return r((function(n, e) { e(t) })) }, r.all = function(t) { return r((function(n, e, i, r) { r = [], i = t.length || n(r), t.map((function(t, o) { s(t).then((function(t) { r[o] = t, --i || n(r) }), e) })) })) }, r.race = function(t) { return r((function(n, e) { t.map((function(t) { s(t).then(n, e) })) })) }
        }("f")
    },
    17: function(t, n, e) {
        "use strict";
        e.d(n, "a", (function() { return i })), e.d(n, "b", (function() { return r }));
        var i = e(159);

        function r(t, n, e) { return e = e || 0, t.substr(e, n.length) === n }
    },
    172: function(t, n, e) {
        "use strict";

        function i(t) {
            var n = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",
                e = 0,
                i = [],
                r = t === e;
            e = t;
            for (var o = new Array(8), s = 7; s >= 0; s--) o[s] = n.charAt(t % 64), t = Math.floor(t / 64);
            if (0 !== t) throw new Error("We should have converted the entire timestamp.");
            var a = o.join("");
            if (r) {
                for (s = 11; s >= 0 && 63 === i[s]; s--) i[s] = 0;
                i[s]++
            } else
                for (var s = 0; s < 12; s++) i[s] = Math.floor(64 * Math.random());
            for (s = 0; s < 12; s++) a += n.charAt(i[s]);
            if (20 != a.length) throw new Error("Length should be 20.");
            return a
        }
        e.d(n, "a", (function() { return i }))
    },
    20: function(t, n, e) {
        "use strict";
        e.d(n, "h", (function() { return r })), e.d(n, "c", (function() { return o })), e.d(n, "d", (function() { return s })), e.d(n, "b", (function() { return a })), e.d(n, "f", (function() { return u })), e.d(n, "e", (function() { return f })), e.d(n, "a", (function() { return h })), e.d(n, "g", (function() { return l }));
        var i = e(47);

        function r(t) { return function() { try { return t.apply(this, arguments) } catch (t) { 0 } } }

        function o(t) { var n = t.replace(/%2F/g, "/").replace(/^.*?\/([^\/]+?)(?:\?.*)?$/, "$1"); return decodeURIComponent(n) }

        function s(t) { return /(gif|png|jpg|jpeg|svg|bmp)$/i.test(t) }

        function a(t, n, e) { return Object(i.a)(t + "_" + n + "_" + (e || "GLOBAL")) }

        function u(t) { return new Promise((function(n) { return setTimeout(n, t) })) }
        var c = function() { return !0 };

        function f(t, n, e) {
            var i = void 0 === e ? {} : e,
                r = i.delay,
                o = void 0 === r ? 0 : r,
                s = i.log,
                a = i.retriedCount,
                h = void 0 === a ? 0 : a,
                l = i.shouldRetry,
                v = void 0 === l ? c : l;
            return n().catch((function(e) { if (s && s("[TalkJS] Retries left: " + t + ". Error: " + JSON.stringify(e) + "."), 0 === t) throw e; if (!v(e)) throw e; return u(1e3 * o * Math.pow(2, h)).then((function() { return f(t - 1, n, { retriedCount: h + 1, delay: o, log: s }) })) }))
        }
        var h = 1900;

        function l(t) {
            var n = t.slice().sort((function(t, n) { return t.length - n.length })),
                e = 0,
                r = 0;
            for (r = 0; r !== n.length && !((e += n[r].length + "&".length) > h); r++);
            var o = n.slice(0, r).join("&"),
                s = n.slice(r).join("&");
            return { short: o, long: s, key: s ? Object(i.a)(s) : void 0 }
        }
    },
    26: function(t, n, e) {
        "use strict";

        function i(t, n) { for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && n(t[e], e) }
        e.d(n, "a", (function() { return i }))
    },
    29: function(t, n, e) {
        "use strict";
        e.d(n, "d", (function() { return r })), e.d(n, "b", (function() { return s })), e.d(n, "a", (function() { return u })), e.d(n, "c", (function() { return f })), e.d(n, "e", (function() { return h }));
        var i = e(17);

        function r(t, n, e) {
            if (!(n instanceof Array)) throw console.error("`params` must be array"), new Error("`params` must be array");
            a({ params: n, method: t, ___talkjs: !0 }, e)
        }
        var o = 0;

        function s(t, n, e) {
            return new i.a((function(i, r) {
                var s = "respond_" + o++,
                    c = {},
                    f = function(t) { return u(t, { sourceWindow: e, handlers: c }) },
                    h = function() { return window.removeEventListener("message", f) };
                c[s] = function(t) { h(), i(t) }, c["error_" + s] = function(t) {
                    h(), r(function(t) {
                        if (t && t.__fakeError) {
                            var n = t.__fakeError,
                                e = n.message,
                                i = n.stack;
                            t = new Error(e), i && (t.stack = i)
                        }
                        return t
                    }(t))
                }, window.addEventListener("message", f), a({ method: t, params: n, responseMethod: s, ___talkjs: !0 }, e)
            }))
        }

        function a(t, n) { n.postMessage(t, "*") }

        function u(t, n) {
            var e = n.sourceWindow,
                o = n.handlers,
                s = n.prefix,
                a = void 0 === s ? "" : s;
            if (t.data && (!t.data || "object" == typeof t.data) && t.data.___talkjs) {
                var u = t.data;
                if (u.method && u.params) {
                    var f = o[a + u.method];
                    if (f && e === t.source) {
                        var h;
                        try { h = i.a.resolve(f.apply(o, u.params)) } catch (t) { h = i.a.reject(t) }
                        var l = u.responseMethod;
                        l ? h.then((function(t) { return r(l, [t], e) }), (function(t) { return r("error_" + l, [c(t)], e) })) : h.catch((function(t) { throw t }))
                    }
                }
            }
        }

        function c(t) { return t && t.message && t.stack ? { __fakeError: { message: t.message, stack: t.stack } } : t }

        function f(t, n) { var e = function(e) { u(e, { sourceWindow: n(), handlers: t }) }; return window.addEventListener("message", e), { callback: e } }

        function h(t) { window.removeEventListener("message", t.callback) }
    },
    343: function(t, n, e) { t.exports = e(487) },
    42: function(t, n, e) {
        "use strict";
        var i = e(1),
            r = function(t) {
                function n(n, e) {
                    var i = this.constructor;
                    void 0 === e && (e = n);
                    var r = t.call(this, n) || this;
                    return r.userMessage = e, Object.setPrototypeOf && Object.setPrototypeOf(r, i.prototype), r
                }
                return Object(i.c)(n, t), n
            }(Error);
        n.a = r
    },
    46: function(t, n, e) {
        "use strict";
        var i = e(67);
        e.d(n, "a", (function() { return i.a })), e.d(n, "b", (function() { return i.b })), e.d(n, "c", (function() { return i.c }))
    },
    47: function(t, n, e) {
        "use strict";
        e.d(n, "a", (function() { return r }));
        var i = e(158);

        function r(t) { var n = new i("SHA-1", "TEXT"); return n.update(t), n.getHash("HEX").substr(0, 20) }
    },
    //486: function(t, n, e) { t.exports = e.p + "5e83cb28291edefe5f467e9b31453b97.mp3" },
    487: function(t, n, e) {
        var i, r;
        (r = function() {
            "use strict";
            var t = { DAY: 864e5, HOUR: 36e5, MINUTE: 6e4, SECOND: 1e3, BASELINE_YEAR: 2014, MAX_SCORE: 864e6, AMBIGUITIES: { "America/Denver": ["America/Mazatlan"], "Europe/London": ["Africa/Casablanca"], "America/Chicago": ["America/Mexico_City"], "America/Asuncion": ["America/Campo_Grande", "America/Santiago"], "America/Montevideo": ["America/Sao_Paulo", "America/Santiago"], "Asia/Beirut": ["Asia/Amman", "Asia/Jerusalem", "Europe/Helsinki", "Asia/Damascus", "Africa/Cairo", "Asia/Gaza", "Europe/Minsk"], "Pacific/Auckland": ["Pacific/Fiji"], "America/Los_Angeles": ["America/Santa_Isabel"], "America/New_York": ["America/Havana"], "America/Halifax": ["America/Goose_Bay"], "America/Godthab": ["America/Miquelon"], "Asia/Dubai": ["Asia/Yerevan"], "Asia/Jakarta": ["Asia/Krasnoyarsk"], "Asia/Shanghai": ["Asia/Irkutsk", "Australia/Perth"], "Australia/Sydney": ["Australia/Lord_Howe"], "Asia/Tokyo": ["Asia/Yakutsk"], "Asia/Dhaka": ["Asia/Omsk"], "Asia/Baku": ["Asia/Yerevan"], "Australia/Brisbane": ["Asia/Vladivostok"], "Pacific/Noumea": ["Asia/Vladivostok"], "Pacific/Majuro": ["Asia/Kamchatka", "Pacific/Fiji"], "Pacific/Tongatapu": ["Pacific/Apia"], "Asia/Baghdad": ["Europe/Minsk", "Europe/Moscow"], "Asia/Karachi": ["Asia/Yekaterinburg"], "Africa/Johannesburg": ["Asia/Gaza", "Africa/Cairo"] } },
                n = function(t) { var n = -t.getTimezoneOffset(); return null !== n ? n : 0 },
                e = function() {
                    var e = n(new Date(t.BASELINE_YEAR, 0, 2)),
                        i = n(new Date(t.BASELINE_YEAR, 5, 2)),
                        r = e - i;
                    return r < 0 ? e + ",1" : r > 0 ? i + ",1,s" : e + ",0"
                },
                i = function(t) {
                    for (var n = new Date(t, 0, 1, 0, 0, 1, 0).getTime(), e = new Date(t, 12, 31, 23, 59, 59).getTime(), i = n, r = new Date(i).getTimezoneOffset(), s = null, a = null; i < e - 864e5;) {
                        var u = new Date(i),
                            c = u.getTimezoneOffset();
                        c !== r && (c < r && (s = u), c > r && (a = u), r = c), i += 864e5
                    }
                    return !(!s || !a) && { s: o(s).getTime(), e: o(a).getTime() }
                },
                o = function n(e, i, r) {
                    void 0 === i && (i = t.DAY, r = t.HOUR);
                    for (var o = new Date(e.getTime() - i).getTime(), s = e.getTime() + i, a = new Date(o).getTimezoneOffset(), u = o, c = null; u < s - r;) {
                        var f = new Date(u);
                        if (f.getTimezoneOffset() !== a) { c = f; break }
                        u += r
                    }
                    return i === t.DAY ? n(c, t.HOUR, t.MINUTE) : i === t.HOUR ? n(c, t.MINUTE, t.SECOND) : c
                },
                s = function(n) {
                    var e = function() {
                        for (var t = [], n = 0; n < r.olson.dst_rules.years.length; n++) {
                            var e = i(r.olson.dst_rules.years[n]);
                            t.push(e)
                        }
                        return t
                    }();
                    return function(t) {
                        for (var n = 0; n < t.length; n++)
                            if (!1 !== t[n]) return !0;
                        return !1
                    }(e) ? function(n, e) {
                        for (var i = function(i) {
                                for (var r = 0, o = 0; o < n.length; o++)
                                    if (i.rules[o] && n[o]) { if (!(n[o].s >= i.rules[o].s && n[o].e <= i.rules[o].e)) { r = "N/A"; break } if (r = 0, r += Math.abs(n[o].s - i.rules[o].s), (r += Math.abs(i.rules[o].e - n[o].e)) > t.MAX_SCORE) { r = "N/A"; break } }
                                return function(t, n, e, i) { if ("N/A" !== e) return e; if ("Asia/Beirut" === n) { if ("Africa/Cairo" === i.name && 13983768e5 === t[6].s && 14116788e5 === t[6].e) return 0; if ("Asia/Jerusalem" === i.name && 13959648e5 === t[6].s && 14118588e5 === t[6].e) return 0 } else if ("America/Santiago" === n) { if ("America/Asuncion" === i.name && 14124816e5 === t[6].s && 1397358e6 === t[6].e) return 0; if ("America/Campo_Grande" === i.name && 14136912e5 === t[6].s && 13925196e5 === t[6].e) return 0 } else if ("America/Montevideo" === n) { if ("America/Sao_Paulo" === i.name && 14136876e5 === t[6].s && 1392516e6 === t[6].e) return 0 } else if ("Pacific/Auckland" === n && "Pacific/Fiji" === i.name && 14142456e5 === t[6].s && 13961016e5 === t[6].e) return 0; return e }(n, e, r, i)
                            }, o = {}, s = r.olson.dst_rules.zones, a = s.length, u = t.AMBIGUITIES[e], c = 0; c < a; c++) {
                            var f = s[c],
                                h = i(s[c]);
                            "N/A" !== h && (o[f.name] = h)
                        }
                        for (var l in o)
                            if (o.hasOwnProperty(l))
                                for (var v = 0; v < u.length; v++)
                                    if (u[v] === l) return l;
                        return e
                    }(e, n) : n
                };
            return { determine: function() { var i = function() { var t, n; if ("undefined" != typeof Intl && void 0 !== Intl.DateTimeFormat && void 0 !== (t = Intl.DateTimeFormat()) && void 0 !== t.resolvedOptions) return (n = t.resolvedOptions().timeZone) && (n.indexOf("/") > -1 || "UTC" === n) && 0 != n.indexOf("Etc") ? n : void 0 }(); return i || (i = r.olson.timezones[e()], void 0 !== t.AMBIGUITIES[i] && (i = s(i))), { name: function() { return i }, stdTimezoneOffset: function() { return -e().split(",")[0] }, timezoneOffset: function() { return -n(new Date) } } } }
        }()).olson = r.olson || {}, r.olson.timezones = { "-720,0": "Etc/GMT+12", "-660,0": "Pacific/Pago_Pago", "-660,1,s": "Pacific/Apia", "-600,1": "America/Adak", "-600,0": "Pacific/Honolulu", "-570,0": "Pacific/Marquesas", "-540,0": "Pacific/Gambier", "-540,1": "America/Anchorage", "-480,1": "America/Los_Angeles", "-480,0": "Pacific/Pitcairn", "-420,0": "America/Phoenix", "-420,1": "America/Denver", "-360,0": "America/Guatemala", "-360,1": "America/Chicago", "-360,1,s": "Pacific/Easter", "-300,0": "America/Bogota", "-300,1": "America/New_York", "-270,0": "America/Caracas", "-240,1": "America/Halifax", "-240,0": "America/Santo_Domingo", "-240,1,s": "America/Asuncion", "-210,1": "America/St_Johns", "-180,1": "America/Godthab", "-180,0": "America/Argentina/Buenos_Aires", "-180,1,s": "America/Montevideo", "-120,0": "America/Noronha", "-120,1": "America/Noronha", "-60,1": "Atlantic/Azores", "-60,0": "Atlantic/Cape_Verde", "0,0": "UTC", "0,1": "Europe/London", "60,1": "Europe/Berlin", "60,0": "Africa/Lagos", "60,1,s": "Africa/Windhoek", "120,1": "Asia/Beirut", "120,0": "Africa/Johannesburg", "180,0": "Asia/Baghdad", "180,1": "Europe/Moscow", "210,1": "Asia/Tehran", "240,0": "Asia/Dubai", "240,1": "Asia/Baku", "270,0": "Asia/Kabul", "300,1": "Asia/Yekaterinburg", "300,0": "Asia/Karachi", "330,0": "Asia/Kolkata", "345,0": "Asia/Kathmandu", "360,0": "Asia/Dhaka", "360,1": "Asia/Omsk", "390,0": "Asia/Rangoon", "420,1": "Asia/Krasnoyarsk", "420,0": "Asia/Jakarta", "480,0": "Asia/Shanghai", "480,1": "Asia/Irkutsk", "525,0": "Australia/Eucla", "525,1,s": "Australia/Eucla", "540,1": "Asia/Yakutsk", "540,0": "Asia/Tokyo", "570,0": "Australia/Darwin", "570,1,s": "Australia/Adelaide", "600,0": "Australia/Brisbane", "600,1": "Asia/Vladivostok", "600,1,s": "Australia/Sydney", "630,1,s": "Australia/Lord_Howe", "660,1": "Asia/Kamchatka", "660,0": "Pacific/Noumea", "690,0": "Pacific/Norfolk", "720,1,s": "Pacific/Auckland", "720,0": "Pacific/Majuro", "765,1,s": "Pacific/Chatham", "780,0": "Pacific/Tongatapu", "780,1,s": "Pacific/Apia", "840,0": "Pacific/Kiritimati" }, r.olson.dst_rules = { years: [2008, 2009, 2010, 2011, 2012, 2013, 2014], zones: [{ name: "Africa/Cairo", rules: [{ e: 12199572e5, s: 12090744e5 }, { e: 1250802e6, s: 1240524e6 }, { e: 12858804e5, s: 12840696e5 }, !1, !1, !1, { e: 14116788e5, s: 1406844e6 }] }, { name: "Africa/Casablanca", rules: [{ e: 12202236e5, s: 12122784e5 }, { e: 12508092e5, s: 12438144e5 }, { e: 1281222e6, s: 12727584e5 }, { e: 13120668e5, s: 13017888e5 }, { e: 13489704e5, s: 1345428e6 }, { e: 13828392e5, s: 13761e8 }, { e: 14142888e5, s: 14069448e5 }] }, { name: "America/Asuncion", rules: [{ e: 12050316e5, s: 12243888e5 }, { e: 12364812e5, s: 12558384e5 }, { e: 12709548e5, s: 12860784e5 }, { e: 13024044e5, s: 1317528e6 }, { e: 1333854e6, s: 13495824e5 }, { e: 1364094e6, s: 1381032e6 }, { e: 13955436e5, s: 14124816e5 }] }, { name: "America/Campo_Grande", rules: [{ e: 12032172e5, s: 12243888e5 }, { e: 12346668e5, s: 12558384e5 }, { e: 12667212e5, s: 1287288e6 }, { e: 12981708e5, s: 13187376e5 }, { e: 13302252e5, s: 1350792e6 }, { e: 136107e7, s: 13822416e5 }, { e: 13925196e5, s: 14136912e5 }] }, { name: "America/Goose_Bay", rules: [{ e: 122559486e4, s: 120503526e4 }, { e: 125704446e4, s: 123648486e4 }, { e: 128909886e4, s: 126853926e4 }, { e: 13205556e5, s: 129998886e4 }, { e: 13520052e5, s: 13314456e5 }, { e: 13834548e5, s: 13628952e5 }, { e: 14149044e5, s: 13943448e5 }] }, { name: "America/Havana", rules: [{ e: 12249972e5, s: 12056436e5 }, { e: 12564468e5, s: 12364884e5 }, { e: 12885012e5, s: 12685428e5 }, { e: 13211604e5, s: 13005972e5 }, { e: 13520052e5, s: 13332564e5 }, { e: 13834548e5, s: 13628916e5 }, { e: 14149044e5, s: 13943412e5 }] }, { name: "America/Mazatlan", rules: [{ e: 1225008e6, s: 12074724e5 }, { e: 12564576e5, s: 1238922e6 }, { e: 1288512e6, s: 12703716e5 }, { e: 13199616e5, s: 13018212e5 }, { e: 13514112e5, s: 13332708e5 }, { e: 13828608e5, s: 13653252e5 }, { e: 14143104e5, s: 13967748e5 }] }, { name: "America/Mexico_City", rules: [{ e: 12250044e5, s: 12074688e5 }, { e: 1256454e6, s: 12389184e5 }, { e: 12885084e5, s: 1270368e6 }, { e: 1319958e6, s: 13018176e5 }, { e: 13514076e5, s: 13332672e5 }, { e: 13828572e5, s: 13653216e5 }, { e: 14143068e5, s: 13967712e5 }] }, { name: "America/Miquelon", rules: [{ e: 12255984e5, s: 12050388e5 }, { e: 1257048e6, s: 12364884e5 }, { e: 12891024e5, s: 12685428e5 }, { e: 1320552e6, s: 12999924e5 }, { e: 13520016e5, s: 1331442e6 }, { e: 13834512e5, s: 13628916e5 }, { e: 14149008e5, s: 13943412e5 }] }, { name: "America/Santa_Isabel", rules: [{ e: 12250116e5, s: 1207476e6 }, { e: 12564612e5, s: 12389256e5 }, { e: 12885156e5, s: 12703752e5 }, { e: 13199652e5, s: 13018248e5 }, { e: 13514148e5, s: 13332744e5 }, { e: 13828644e5, s: 13653288e5 }, { e: 1414314e6, s: 13967784e5 }] }, { name: "America/Santiago", rules: [{ e: 1206846e6, s: 1223784e6 }, { e: 1237086e6, s: 12552336e5 }, { e: 127035e7, s: 12866832e5 }, { e: 13048236e5, s: 13138992e5 }, { e: 13356684e5, s: 13465584e5 }, { e: 1367118e6, s: 13786128e5 }, { e: 13985676e5, s: 14100624e5 }] }, { name: "America/Sao_Paulo", rules: [{ e: 12032136e5, s: 12243852e5 }, { e: 12346632e5, s: 12558348e5 }, { e: 12667176e5, s: 12872844e5 }, { e: 12981672e5, s: 1318734e6 }, { e: 13302216e5, s: 13507884e5 }, { e: 13610664e5, s: 1382238e6 }, { e: 1392516e6, s: 14136876e5 }] }, { name: "Asia/Amman", rules: [{ e: 1225404e6, s: 12066552e5 }, { e: 12568536e5, s: 12381048e5 }, { e: 12883032e5, s: 12695544e5 }, { e: 13197528e5, s: 13016088e5 }, !1, !1, { e: 14147064e5, s: 13959576e5 }] }, { name: "Asia/Damascus", rules: [{ e: 12254868e5, s: 120726e7 }, { e: 125685e7, s: 12381048e5 }, { e: 12882996e5, s: 12701592e5 }, { e: 13197492e5, s: 13016088e5 }, { e: 13511988e5, s: 13330584e5 }, { e: 13826484e5, s: 1364508e6 }, { e: 14147028e5, s: 13959576e5 }] }, { name: "Asia/Dubai", rules: [!1, !1, !1, !1, !1, !1, !1] }, { name: "Asia/Gaza", rules: [{ e: 12199572e5, s: 12066552e5 }, { e: 12520152e5, s: 12381048e5 }, { e: 1281474e6, s: 126964086e4 }, { e: 1312146e6, s: 130160886e4 }, { e: 13481784e5, s: 13330584e5 }, { e: 13802292e5, s: 1364508e6 }, { e: 1414098e6, s: 13959576e5 }] }, { name: "Asia/Irkutsk", rules: [{ e: 12249576e5, s: 12068136e5 }, { e: 12564072e5, s: 12382632e5 }, { e: 12884616e5, s: 12697128e5 }, !1, !1, !1, !1] }, { name: "Asia/Jerusalem", rules: [{ e: 12231612e5, s: 12066624e5 }, { e: 1254006e6, s: 1238112e6 }, { e: 1284246e6, s: 12695616e5 }, { e: 131751e7, s: 1301616e6 }, { e: 13483548e5, s: 13330656e5 }, { e: 13828284e5, s: 13645152e5 }, { e: 1414278e6, s: 13959648e5 }] }, { name: "Asia/Kamchatka", rules: [{ e: 12249432e5, s: 12067992e5 }, { e: 12563928e5, s: 12382488e5 }, { e: 12884508e5, s: 12696984e5 }, !1, !1, !1, !1] }, { name: "Asia/Krasnoyarsk", rules: [{ e: 12249612e5, s: 12068172e5 }, { e: 12564108e5, s: 12382668e5 }, { e: 12884652e5, s: 12697164e5 }, !1, !1, !1, !1] }, { name: "Asia/Omsk", rules: [{ e: 12249648e5, s: 12068208e5 }, { e: 12564144e5, s: 12382704e5 }, { e: 12884688e5, s: 126972e7 }, !1, !1, !1, !1] }, { name: "Asia/Vladivostok", rules: [{ e: 12249504e5, s: 12068064e5 }, { e: 12564e8, s: 1238256e6 }, { e: 12884544e5, s: 12697056e5 }, !1, !1, !1, !1] }, { name: "Asia/Yakutsk", rules: [{ e: 1224954e6, s: 120681e7 }, { e: 12564036e5, s: 12382596e5 }, { e: 1288458e6, s: 12697092e5 }, !1, !1, !1, !1] }, { name: "Asia/Yekaterinburg", rules: [{ e: 12249684e5, s: 12068244e5 }, { e: 1256418e6, s: 1238274e6 }, { e: 12884724e5, s: 12697236e5 }, !1, !1, !1, !1] }, { name: "Asia/Yerevan", rules: [{ e: 1224972e6, s: 1206828e6 }, { e: 12564216e5, s: 12382776e5 }, { e: 1288476e6, s: 12697272e5 }, { e: 13199256e5, s: 13011768e5 }, !1, !1, !1] }, { name: "Australia/Lord_Howe", rules: [{ e: 12074076e5, s: 12231342e5 }, { e: 12388572e5, s: 12545838e5 }, { e: 12703068e5, s: 12860334e5 }, { e: 13017564e5, s: 1317483e6 }, { e: 1333206e6, s: 13495374e5 }, { e: 13652604e5, s: 1380987e6 }, { e: 139671e7, s: 14124366e5 }] }, { name: "Australia/Perth", rules: [{ e: 12068136e5, s: 12249576e5 }, !1, !1, !1, !1, !1, !1] }, { name: "Europe/Helsinki", rules: [{ e: 12249828e5, s: 12068388e5 }, { e: 12564324e5, s: 12382884e5 }, { e: 12884868e5, s: 1269738e6 }, { e: 13199364e5, s: 13011876e5 }, { e: 1351386e6, s: 13326372e5 }, { e: 13828356e5, s: 13646916e5 }, { e: 14142852e5, s: 13961412e5 }] }, { name: "Europe/Minsk", rules: [{ e: 12249792e5, s: 12068352e5 }, { e: 12564288e5, s: 12382848e5 }, { e: 12884832e5, s: 12697344e5 }, !1, !1, !1, !1] }, { name: "Europe/Moscow", rules: [{ e: 12249756e5, s: 12068316e5 }, { e: 12564252e5, s: 12382812e5 }, { e: 12884796e5, s: 12697308e5 }, !1, !1, !1, !1] }, { name: "Pacific/Apia", rules: [!1, !1, !1, { e: 13017528e5, s: 13168728e5 }, { e: 13332024e5, s: 13489272e5 }, { e: 13652568e5, s: 13803768e5 }, { e: 13967064e5, s: 14118264e5 }] }, { name: "Pacific/Fiji", rules: [!1, !1, { e: 12696984e5, s: 12878424e5 }, { e: 13271544e5, s: 1319292e6 }, { e: 1358604e6, s: 13507416e5 }, { e: 139005e7, s: 1382796e6 }, { e: 14215032e5, s: 14148504e5 }] }, { name: "Europe/London", rules: [{ e: 12249828e5, s: 12068388e5 }, { e: 12564324e5, s: 12382884e5 }, { e: 12884868e5, s: 1269738e6 }, { e: 13199364e5, s: 13011876e5 }, { e: 1351386e6, s: 13326372e5 }, { e: 13828356e5, s: 13646916e5 }, { e: 14142852e5, s: 13961412e5 }] }] }, void 0 !== t.exports ? t.exports = r : null !== e(488) && null != e(489) ? void 0 === (i = function() { return r }.apply(n, [])) || (t.exports = i) : window.jstz = r
    },
    488: function(t, n) { t.exports = function() { throw new Error("define cannot be used indirect") } },
    489: function(t, n) {
        (function(n) { t.exports = n }).call(this, {})
    },
    490: function(t, n, e) { t.exports = e.p + "a456dac518f91d4f4cd3c6de4367c25d.css" },
    491: function(t, n, e) {
        "use strict";
        e.r(n), n.default = { ar: { DESKTOP_NOTIFICATIONS_ERROR: "Ù„Ø§ ÙŠÙ…ÙƒÙ† ØªÙ…ÙƒÙŠÙ† Ø¥Ø´Ø¹Ø§Ø±Ø§Øª Ø³Ø·Ø­ Ø§Ù„Ù…ÙƒØªØ¨ Ù†Ø¸Ø±Ù‹Ø§ Ù„Ø£Ù† Ø§Ù„Ù…ØªØµÙØ­ ÙŠØ¹Ù…Ù„ Ø¹Ù„Ù‰ Ø­Ø¸Ø±Ù‡Ø§ Ø¨Ø´ÙƒÙ„ Ù†Ø´Ø·. Ø¬Ø±Ù‘Ø¨ Ø§Ù„Ø¨Ø­Ø« ÙÙŠ Ø§Ù„Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø£Ùˆ Ø§Ø³ØªØ®Ø¯Ø§Ù… Ù…ØªØµÙØ­ Ø¢Ø®Ø±.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "Ø¥Ø¹Ù„Ø§Ù… $APPNAME Ø§Ù„ØªØ¬Ø±ÙŠØ¨ÙŠ", DESKTOP_NOTIFICATIONS_DEMO_BODY: "Ø¥Ø°Ø§ Ø£Ø¨Ù‚ÙŠØª Ø¹Ù„Ø§Ù…Ø© ØªØ¨ÙˆÙŠØ¨ Ø§Ù„Ù…ØªØµÙØ­ Ù…ÙØªÙˆØ­Ø© ØŒ ÙØ³ØªØ±Ù‰ Ù‡Ø°Ø§ ÙŠÙ†Ø¨Ø«Ù‚ Ø¹Ù†Ø¯Ù…Ø§ ÙŠØªØ­Ø¯Ø« Ø´Ø®Øµ Ù…Ø¹Ùƒ." }, bg: { DESKTOP_NOTIFICATIONS_ERROR: "ÐÐµ Ð¼Ð¾Ð¶ÐµÑ‚Ðµ Ð´Ð° Ð°ÐºÑ‚Ð¸Ð²Ð¸Ñ€Ð°Ñ‚Ðµ Ð¸Ð·Ð²ÐµÑÑ‚Ð¸ÑÑ‚Ð° Ð½Ð° Ñ€Ð°Ð±Ð¾Ñ‚Ð½Ð¸Ñ Ð¿Ð»Ð¾Ñ‚, Ð·Ð°Ñ‰Ð¾Ñ‚Ð¾ Ð±Ñ€Ð°ÑƒÐ·ÑŠÑ€ÑŠÑ‚ Ð²Ð¸ Ð°ÐºÑ‚Ð¸Ð²Ð½Ð¾ Ð³Ð¸ Ð±Ð»Ð¾ÐºÐ¸Ñ€Ð°. ÐžÐ¿Ð¸Ñ‚Ð°Ð¹Ñ‚Ðµ Ð´Ð° Ð¿Ð¾Ð³Ð»ÐµÐ´Ð½ÐµÑ‚Ðµ Ð² Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸Ñ‚Ðµ Ð¸Ð»Ð¸ Ð´Ð° Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ñ‚Ðµ Ð´Ñ€ÑƒÐ³ Ð±Ñ€Ð°ÑƒÐ·ÑŠÑ€.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME Ð´ÐµÐ¼Ð¾ Ð¸Ð·Ð²ÐµÑÑ‚Ð¸Ðµ", DESKTOP_NOTIFICATIONS_DEMO_BODY: "ÐÐºÐ¾ Ð´ÑŠÑ€Ð¶Ð¸Ñ‚Ðµ Ñ€Ð°Ð·Ð´ÐµÐ»Ð° Ð½Ð° Ð±Ñ€Ð°ÑƒÐ·ÑŠÑ€Ð° ÑÐ¸ Ð¾Ñ‚Ð²Ð¾Ñ€ÐµÐ½, Ñ‰Ðµ Ð²Ð¸Ð´Ð¸Ñ‚Ðµ Ñ‚Ð¾Ð·Ð¸ Ð¸Ð·ÑÐºÐ°Ñ‡Ð°Ñ‰ Ð¿Ñ€Ð¾Ð·Ð¾Ñ€ÐµÑ†, ÐºÐ¾Ð³Ð°Ñ‚Ð¾ Ð½ÑÐºÐ¾Ð¹ Ð³Ð¾Ð²Ð¾Ñ€Ð¸ Ñ Ð²Ð°Ñ." }, bs: { DESKTOP_NOTIFICATIONS_ERROR: "Desktop notifikacije nisu omoguÄ‡ene jer ih vaÅ¡ preglednik aktivno blokira. PokuÅ¡ajte pogledati postavke ili koristiti neki drugi preglednik.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME demo notifikacija", DESKTOP_NOTIFICATIONS_DEMO_BODY: "Ako karticu preglednika ostavite otvorenu, pojavit Ä‡e se ovaj pop-up kada netko razgovara s vama." }, cs: { DESKTOP_NOTIFICATIONS_ERROR: "Nelze povolit upozornÄ›nÃ­ na ploÅ¡e, protoÅ¾e vÃ¡Å¡ prohlÃ­Å¾eÄ je aktivnÄ› blokuje. Zkuste se podÃ­vat na nastavenÃ­ nebo zkuste pouÅ¾Ã­t jinÃ½ prohlÃ­Å¾eÄ.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME demo notifikace", DESKTOP_NOTIFICATIONS_DEMO_BODY: "Pokud nechÃ¡te kartu prohlÃ­Å¾eÄe otevÅ™enou, uvidÃ­te tento popup jakmile s vÃ¡mi bude nÄ›kdo mluvit." }, da: { DESKTOP_NOTIFICATIONS_ERROR: "Kan ikke aktivere skrivebordsmeddelelser, fordi din browser aktivt blokerer dem. PrÃ¸v at kigge i indstillingerne eller benyt en anden browser.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME demomeddelelse", DESKTOP_NOTIFICATIONS_DEMO_BODY: "Hvis du holder dit browser-faneblad Ã¥ben, vil du se det her komme op, nÃ¥r nogen taler til dig." }, de: { DESKTOP_NOTIFICATIONS_ERROR: "Desktop-Benachrichtigungen kÃ¶nnen nicht aktiviert werden, da Ihr Browser sie aktiv blockiert. Versuchen Sie, in den Einstellungen nachzuschlagen oder einen anderen Browser zu verwenden.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME Demo-Benachrichtigung", DESKTOP_NOTIFICATIONS_DEMO_BODY: "Wenn Sie Ihre Browser-Registerkarte geÃ¶ffnet lassen, wird dies angezeigt, wenn jemand mit Ihnen spricht." }, el: { DESKTOP_NOTIFICATIONS_ERROR: "Î”ÎµÎ½ ÎµÎ¯Î½Î±Î¹ Î´Ï…Î½Î±Ï„Î® Î· ÎµÎ½ÎµÏÎ³Î¿Ï€Î¿Î¯Î·ÏƒÎ· Ï„Ï‰Î½ ÎµÎ¹Î´Î¿Ï€Î¿Î¹Î®ÏƒÎµÏ‰Î½ Ï„Î·Ï‚ ÎµÏ€Î¹Ï†Î¬Î½ÎµÎ¹Î±Ï‚ ÎµÏÎ³Î±ÏƒÎ¯Î±Ï‚,ÎµÏ€ÎµÎ¹Î´Î® Ï„Î¿ Ï€ÏÏŒÎ³ÏÎ±Î¼Î¼Î± Ï€ÎµÏÎ¹Î®Î³Î·ÏƒÎ·Ï‚ Ï„Î¹Ï‚ Î¼Ï€Î»Î¿ÎºÎ¬ÏÎµÎ¹. Î”Î¿ÎºÎ¹Î¼Î¬ÏƒÏ„Îµ Î½Î± Ï„ÏƒÎµÎºÎ¬ÏÎµÏ„Îµ Ï„Î¹Ï‚ ÏÏ…Î¸Î¼Î¯ÏƒÎµÎ¹Ï‚ Î· Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î®ÏƒÏ„Îµ Î¬Î»Î»Î¿ Ï€ÏÏŒÎ³ÏÎ±Î¼Î¼Î± Ï€ÎµÏÎ¹Î®Î³Î·ÏƒÎ·Ï‚.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME Î”Î¿ÎºÎ¹Î¼Î±ÏƒÏ„Î¹ÎºÎ® ÎµÏ€Î¯Î´ÎµÎ¹Î¾Î·", DESKTOP_NOTIFICATIONS_DEMO_BODY: "Î‘Î½ Î´Î¹Î±Ï„Î·ÏÎ®ÏƒÎµÏ„Îµ Î±Î½Î¿Î¹Ï‡Ï„Î® Ï„Î· ÏƒÎµÎ»Î¯Î´Î± Ï„Î¿Ï… Ï€ÏÎ¿Î³ÏÎ¬Î¼Î¼Î±Ï„Î¿Ï‚ Ï€ÎµÏÎ¹Î®Î³Î·ÏƒÎ·Ï‚, Î¸Î± Î´ÎµÎ¯Ï„Îµ Î±Ï…Ï„ÏŒ Ï„Î¿ pop up (Ï€Î±ÏÎ¬Î¸Ï…ÏÎ¿) ÏŒÏ„Î±Î½ ÎºÎ¬Ï€Î¿Î¹Î¿Ï‚ ÏƒÎ±Ï‚ Î¼Î¹Î»Î¬ÎµÎ¹." }, en: { DESKTOP_NOTIFICATIONS_ERROR: "Can't enable desktop notifications because your browser actively blocks them. Try looking in the settings or using a different browser.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME demo notification", DESKTOP_NOTIFICATIONS_DEMO_BODY: "If you keep your browser tab open, you'll see this pop up when someone talks to you." }, es: { DESKTOP_NOTIFICATIONS_ERROR: "No se logrÃ³ habilitar las notificaciones de escritorio, comprueba que tu navegador no las estÃ© bloqueando o intenta con otro navegador.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME notificaciÃ³n de prueba", DESKTOP_NOTIFICATIONS_DEMO_BODY: "Si dejas esta pestaÃ±a abierta, verÃ¡s este pop up cuando alguien te hable." }, et: { DESKTOP_NOTIFICATIONS_ERROR: "TÃ¶Ã¶laua teavitusi ei saa lubada, kuna Teie brauser blokeerib need aktiivselt. Proovige muuta seadeid vÃµi kasutada mÃµnda muud brauserit.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME demo teavitus", DESKTOP_NOTIFICATIONS_DEMO_BODY: "Kui hoiate oma brauseri vahekaardi lahti ja nÃ¤ete seda hÃ¼pikakent, siis keegi soovib Teiega rÃ¤Ã¤kida." }, fa: { DESKTOP_NOTIFICATIONS_ERROR: "Ø®Ø·Ø§ Ø¯Ø± ÙØ¹Ø§Ù„ Ø³Ø§Ø²ÛŒ Ø§Ø¹Ù„Ø§Ù† Ù‡Ø§ÛŒ Ø¯Ø³Ú©ØªØ§â€ŒÙ¾ØŒ Ù…Ø±ÙˆØ±Ú¯Ø± Ø´Ù…Ø§ Ø¢Ù†Ù‡Ø§ Ø±Ø§ Ù…Ø³Ø¯ÙˆØ¯ Ù…ÛŒ Ú©Ù†Ø¯ Ø³Ø¹ÛŒ Ú©Ù†ÛŒØ¯ ØªÙ†Ø¸ÛŒÙ…Ø§Øª Ù…Ø±ÙˆØ±Ú¯Ø± Ø±Ø§ ØªØºÛŒÛŒØ± Ø¯Ù‡Ø¯ÛŒØ¯ ÛŒØ§ Ø§Ø² ÛŒÚ© Ù…Ø±ÙˆØ±Ú¯Ø± Ø¯ÛŒÚ¯Ø± Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "Ù†ÙˆØªÛŒÙÛŒÚ©ÛŒØ´Ù† Ø¯Ù…Ùˆ $APPNAME", DESKTOP_NOTIFICATIONS_DEMO_BODY: "Ø§Ú¯Ø± ØµÙØ­Ù‡ ÛŒ Ù…Ø±ÙˆØ±Ú¯Ø± Ø±Ø§ Ø¨Ø§Ø² Ù†Ú¯Ù‡Ø¯Ø§Ø±ÛŒØ¯ Ø§ÛŒÙ† Ø±Ø§ Ù…ÙˆÙ‚Ø¹Ù‡ Ø§ÛŒ Ú©Ù‡ Ú©Ø³ÛŒ Ø¨Ø§ Ø´Ù…Ø§ ØµØ­Ø¨Øª Ú©Ù†Ø¯ Ø®ÙˆØ§Ù‡ÛŒØ¯ Ø¯ÛŒØ¯" }, fi: { DESKTOP_NOTIFICATIONS_ERROR: "TyÃ¶pÃ¶ydÃ¤n ilmoituksia ei voitu kytkeÃ¤ pÃ¤Ã¤lle, koska selaimesi estÃ¤Ã¤ sen. Koeta tutkia sen asetuksia tai vaihda selainta.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME demo ilmoitus", DESKTOP_NOTIFICATIONS_DEMO_BODY: "Jos pidÃ¤t tÃ¤mÃ¤n sivun auki, nÃ¤et vastaavan ilmoituksen kun joku puhuu sinulle." }, fr: { DESKTOP_NOTIFICATIONS_ERROR: "Impossible d'activer les notifications sur votre ordinateur car votre navigateur les bloque. Essayez de changer ses paramÃ¨tres ou de changer de navigateur.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "Notification de dÃ©monstration $APPNAME", DESKTOP_NOTIFICATIONS_DEMO_BODY: "Si vous maintenez l'onglet ouvert dans votre navigateur vous verrez apparaÃ®tre une alerte lorsque quelqu'un vous parlera." }, he: { DESKTOP_NOTIFICATIONS_ERROR: "×œ× × ×™×ª×Ÿ ×œ×”×¤×¢×™×œ ×”×ª×¨××•×ª ×‘×©×•×œ×—×Ÿ ×”×¢×‘×•×“×” ×ž×›×™×•×•×Ÿ ×©×”×“×¤×“×¤×Ÿ ×©×œ×š ×—×•×¡× ××•×ª×Ÿ ×‘××•×¤×Ÿ ×¤×¢×™×œ. × ×¡×” ×œ×”×¡×ª×›×œ ×‘×”×’×“×¨×•×ª ××• ×œ×”×©×ª×ž×© ×‘×“×¤×“×¤×Ÿ ××—×¨.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME ×”×•×“×¢×” ×¢×œ ×”×“×’×ž×”", DESKTOP_NOTIFICATIONS_DEMO_BODY: "×× ××ª×” ×©×•×ž×¨ ×¢×œ ×›×¨×˜×™×¡×™×™×ª ×”×“×¤×“×¤×Ÿ ×©×œ×š ×¤×ª×•×—×”, ×ª×¨××” ××ª ×–×” ×¦×¥ ×›×©×ž×™×©×”×• ×™×“×‘×¨ ××™×ª×š." }, hi: { DESKTOP_NOTIFICATIONS_ERROR: "à¤¡à¥‡à¤¸à¥à¤•à¤Ÿà¥‰à¤ª à¤¸à¥‚à¤šà¤¨à¤¾à¤à¤‚ à¤¸à¤•à¥à¤·à¤® à¤¨à¤¹à¥€à¤‚ à¤•à¤° à¤¸à¤•à¤¤à¤¾ à¤•à¥à¤¯à¥‹à¤‚à¤•à¤¿ à¤†à¤ªà¤•à¤¾ à¤¬à¥à¤°à¤¾à¤‰à¤œà¤¼à¤° à¤¸à¤•à¥à¤°à¤¿à¤¯ à¤°à¥‚à¤ª à¤¸à¥‡ à¤‰à¤¨à¥à¤¹à¥‡à¤‚ à¤¬à¥à¤²à¥‰à¤• à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤¸à¥‡à¤Ÿà¤¿à¤‚à¤—à¥à¤¸ à¤®à¥‡à¤‚ à¤¦à¥‡à¤–à¤¨à¥‡ à¤¯à¤¾ à¤à¤• à¤…à¤²à¤— à¤¬à¥à¤°à¤¾à¤‰à¤œà¤¼à¤° à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¤¨à¥‡ à¤•à¤¾ à¤ªà¥à¤°à¤¯à¤¾à¤¸ à¤•à¤°à¥‡à¤‚à¥¤", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME à¤¡à¥‡à¤®à¥‹ à¤…à¤§à¤¿à¤¸à¥‚à¤šà¤¨à¤¾", DESKTOP_NOTIFICATIONS_DEMO_BODY: "à¤¯à¤¦à¤¿ à¤†à¤ª à¤…à¤ªà¤¨à¤¾ à¤¬à¥à¤°à¤¾à¤‰à¤œà¤¼à¤° à¤Ÿà¥ˆà¤¬ à¤–à¥à¤²à¤¾ à¤°à¤–à¤¤à¥‡ à¤¹à¥ˆà¤‚, à¤¤à¥‹ à¤¯à¤¹ à¤ªà¥‰à¤ª à¤…à¤ª à¤†à¤ªà¤•à¥‹ à¤¤à¤¬ à¤¦à¤¿à¤–à¤¾à¤ˆ à¤¦à¥‡à¤—à¤¾ à¤œà¤¬ à¤•à¥‹à¤ˆ à¤†à¤ªà¤¸à¥‡ à¤¬à¤¾à¤¤ à¤•à¤°à¥‡à¤—à¤¾à¥¤" }, hr: { DESKTOP_NOTIFICATIONS_ERROR: "Desktop notifikacije nisu omoguÄ‡ene jer ih vaÅ¡ preglednik aktivno blokira. PokuÅ¡ajte pogledati postavke ili koristiti neki drugi preglednik.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME demo notifikacija", DESKTOP_NOTIFICATIONS_DEMO_BODY: "Ako karticu preglednika ostavite otvorenu, pojavit Ä‡e se ovaj pop-up kada netko razgovara s vama." }, hu: { DESKTOP_NOTIFICATIONS_ERROR: "AzÃ©rt nem tudja bekapcsolni az asztali Ã©rtesÃ­tÃ©sek funkciÃ³t, mert bÃ¶ngÃ©szÅ‘je aktÃ­van blokkolja azt. Tekintse meg a beÃ¡llÃ­tÃ¡sokat vagy hasznÃ¡ljon mÃ¡sik bÃ¶ngÃ©szÅ‘t.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME demo Ã©rtesÃ­tÃ©s", DESKTOP_NOTIFICATIONS_DEMO_BODY: "Ha nyitva hagyja bÃ¶ngÃ©szÅ‘jÃ©t, felugrÃ³ ablak fog megjelenni, ha valaki beszÃ©lni szeretne Ã–nnel." }, id: { DESKTOP_NOTIFICATIONS_ERROR: "Tidak dapat mengaktifkan pemberitahuan desktop karena browser Anda secara aktif memblokir mereka. Coba cari di pengaturan atau menggunakan browser yang berbeda.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "pemberitahuan demo $APPNAME", DESKTOP_NOTIFICATIONS_DEMO_BODY: "Jika Anda membiarkan tab browser tetap terbuka, Anda akan melihat ini muncul ketika seseorang berbicara kepada Anda." }, it: { DESKTOP_NOTIFICATIONS_ERROR: "Impossibile abilitare le notifiche desktop perchÃ© il browser le blocca attivamente. Prova a cercare le impostazioni o utilizzare un browser diverso.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME demo notification", DESKTOP_NOTIFICATIONS_DEMO_BODY: "Se si mantiene aperta la scheda del browser, questo verrÃ  visualizzato quando qualcuno ti parla." }, ja: { DESKTOP_NOTIFICATIONS_ERROR: "ãƒ‡ã‚¹ã‚¯ãƒˆãƒƒãƒ—ã®é€šçŸ¥ã¯ãƒ–ãƒ­ãƒƒã‚¯ã•ã‚Œã¦ã„ã‚‹ãŸã‚ã€ãƒ‡ã‚¹ã‚¯ãƒˆãƒƒãƒ—ã®é€šçŸ¥ã‚’æœ‰åŠ¹ã«ã§ãã¾ã›ã‚“ã€‚è¨­å®šã‚’ç¢ºèªã™ã‚‹ã‹ã€åˆ¥ã®ãƒ–ãƒ©ã‚¦ã‚¶ã‚’ä½¿ç”¨ã—ã¦ãã ã•ã„ã€‚", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME ãƒ‡ãƒ¢é€šçŸ¥", DESKTOP_NOTIFICATIONS_DEMO_BODY: "ãƒ–ãƒ©ã‚¦ã‚¶ã®ã‚¿ãƒ–ã‚’é–‹ã„ãŸã¾ã¾ã«ã—ã¦ãŠãã¨ã€èª°ã‹ãŒã‚ãªãŸã«è©±ã—ã‹ã‘ãŸã¨ãã«ã“ã®ãƒãƒƒãƒ—ã‚¢ãƒƒãƒ—ãŒè¡¨ç¤ºã•ã‚Œã¾ã™ã€‚" }, ka: { DESKTOP_NOTIFICATIONS_ERROR: "áƒ¨áƒ”áƒ£áƒ«áƒšáƒ”áƒ‘áƒ”áƒšáƒ˜áƒ áƒ“áƒ”áƒ¡áƒ™áƒ¢áƒáƒžáƒ˜áƒ¡ áƒ¨áƒ”áƒ¢áƒ™áƒáƒ‘áƒ˜áƒœáƒ”áƒ‘áƒ”áƒ‘áƒ˜áƒ¡ áƒ©áƒáƒ áƒ—áƒ•áƒ. áƒ”áƒ¡ áƒ‘áƒ áƒáƒ£áƒ–áƒ”áƒ áƒ˜ áƒ‘áƒšáƒáƒ™áƒáƒ•áƒ¡ áƒ›áƒáƒ—. áƒ¡áƒªáƒáƒ“áƒ” áƒªáƒ•áƒšáƒ˜áƒšáƒ”áƒ‘áƒ áƒáƒžáƒªáƒ˜áƒ”áƒ‘áƒ˜áƒ“áƒáƒœ áƒáƒœ áƒ’áƒáƒ›áƒáƒ˜áƒ§áƒ”áƒœáƒ” áƒ¡áƒ®áƒ•áƒ áƒ‘áƒ áƒáƒ£áƒ–áƒ”áƒ áƒ˜.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME áƒ¨áƒ”áƒ¢áƒ§áƒáƒ‘áƒ˜áƒœáƒ”áƒ‘áƒ”áƒ‘áƒ˜áƒ¡ áƒ“áƒ”áƒ›áƒ áƒ•áƒ”áƒ áƒ¡áƒ˜áƒ", DESKTOP_NOTIFICATIONS_DEMO_BODY: "áƒ—áƒ£ áƒ“áƒáƒ¢áƒáƒ•áƒ”áƒ‘ áƒ‘áƒ áƒáƒ£áƒ–áƒ”áƒ áƒ˜áƒ¡ áƒ¤áƒáƒœáƒ¯áƒáƒ áƒáƒ¡ áƒ’áƒáƒ®áƒ¡áƒœáƒ˜áƒšáƒ¡, áƒ áƒáƒªáƒ áƒ•áƒ˜áƒ¦áƒáƒª áƒ›áƒáƒ’áƒ¬áƒ”áƒ áƒ¡ áƒ¡áƒáƒ£áƒ‘áƒáƒ áƒ˜ áƒáƒ›áƒáƒ•áƒáƒ áƒ“áƒ”áƒ‘áƒ áƒ“áƒ”áƒ¡áƒ™áƒ¢áƒáƒžáƒ–áƒ”." }, ko: { DESKTOP_NOTIFICATIONS_ERROR: "ë°ìŠ¤í¬í†± ì•Œë¦¼ì„ í‘œì‹œí•  ìˆ˜ ì—†ìŠµë‹ˆë‹¤. ë¸Œë¼ìš°ì € ì„¤ì •ì„ í™•ì¸í•˜ê±°ë‚˜ ë‹¤ë¥¸ ë¸Œë¼ìš°ì €ë¥¼ ì‚¬ìš©í•´ì£¼ì„¸ìš”.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME ë°ëª¨ ì•Œë¦¼", DESKTOP_NOTIFICATIONS_DEMO_BODY: "ë¸Œë¼ìš°ì € íƒ­ì„ ì—´ì–´ ë‘” ìƒíƒœì—ì„œ ëˆ„êµ°ê°€ ëŒ€í™” í•  ë•Œ ì´ íŒì—…ì´ í‘œì‹œë©ë‹ˆë‹¤." }, nb: { DESKTOP_NOTIFICATIONS_ERROR: "Kan ikke aktivere skrivebords varsler fordi nettleseren din aktivt blokkerer dem. PrÃ¸v Ã¥ se i innstillingene eller bruke en annen nettleser.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME demo varslinger", DESKTOP_NOTIFICATIONS_DEMO_BODY: "Hvis du holder nettleservinduet Ã¥pent, vil du se dette varsel nÃ¥r noen snakker til deg." }, nl: { DESKTOP_NOTIFICATIONS_ERROR: "Desktop notificaties kunnen niet geactiveerd worden omdat de browser het blokkeert. Check de instellingen van je browser of probeer een andere browser.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME demo notificatie", DESKTOP_NOTIFICATIONS_DEMO_BODY: "Als je je browser open houdt, zie je deze popup als iemand tegen je praat." }, pl: { DESKTOP_NOTIFICATIONS_ERROR: "Nie moÅ¼na aktywowaÄ‡ powiadomieÅ„, poniewaÅ¼ twoja przeglÄ…darka je blokuje. ProszÄ™ zmieniÄ‡ ustawienie lub sprÃ³bowaÄ‡ innej przeglÄ…darki.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME przykÅ‚adowe powiadomienie", DESKTOP_NOTIFICATIONS_DEMO_BODY: "JeÅ›li zostawisz tÄ™ kartÄ™ otwartÄ…, zobaczysz takie powiadomienie, gdy ktoÅ› napisze do Ciebie." }, pt: { DESKTOP_NOTIFICATIONS_ERROR: "NÃ£o Ã© possÃ­vel ativar as notificaÃ§Ãµes da Ã¡rea de trabalho porque seu navegador as bloqueia. Tente procurar nas configuraÃ§Ãµes ou usar um navegador diferente.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME notificaÃ§Ã£o de demonstraÃ§Ã£o", DESKTOP_NOTIFICATIONS_DEMO_BODY: "Se vocÃª mantiver a guia do navegador aberta, verÃ¡ essa mensagem quando alguÃ©m falar com vocÃª." }, ro: { DESKTOP_NOTIFICATIONS_ERROR: "Nu se pot activa notificÄƒrile de pe desktop deoarece browserul dvs. le blocheazÄƒ Ã®n mod activ. ÃŽncercaÈ›i sÄƒ cÄƒutaÈ›i Ã®n setÄƒri sau utilizÃ¢nd un alt browser.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "Notificare de debit $APPNAME", DESKTOP_NOTIFICATIONS_DEMO_BODY: "DacÄƒ È›ineÈ›i fiÈ™a browserului deschis, veÈ›i vedea acest pop-up atunci cÃ¢nd cineva vorbeÈ™te cu dvs." }, ru: { DESKTOP_NOTIFICATIONS_ERROR: "ÐÐµÐ²Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ð¾ Ð²ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÑŒ Ð¾Ð¿Ð¾Ð²ÐµÑ‰ÐµÐ½Ð¸Ñ, Ð¿Ð¾Ñ‚Ð¾Ð¼Ñƒ Ñ‡Ñ‚Ð¾ Ð²Ð°Ñˆ Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€ Ð°ÐºÑ‚Ð¸Ð²Ð½Ð¾ Ð±Ð»Ð¾ÐºÐ¸Ñ€ÑƒÐµÑ‚ Ð¸Ñ…. ÐŸÑ€Ð¾Ð²ÐµÑ€ÑŒÑ‚Ðµ Ð²Ð°ÑˆÐ¸ Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸ Ð¸Ð»Ð¸ Ð¿Ð¾Ð¿Ñ€Ð¾Ð±ÑƒÐ¹Ñ‚Ðµ Ð´Ñ€ÑƒÐ³Ð¾Ð¹ Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME Ð´ÐµÐ¼Ð¾-Ð¾Ð¿Ð¾Ð²ÐµÑ‰ÐµÐ½Ð¸Ðµ", DESKTOP_NOTIFICATIONS_DEMO_BODY: "Ð•ÑÐ»Ð¸ Ð²ÐºÐ»Ð°Ð´ÐºÐ° Ð²Ð°ÑˆÐµÐ³Ð¾ Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€Ð° Ð¾Ñ‚ÐºÑ€Ñ‹Ñ‚Ð°, Ð²Ñ‹ ÑƒÐ²Ð¸Ð´Ð¸Ñ‚Ðµ Ð²ÑÐ¿Ð»Ñ‹Ð²Ð°ÑŽÑ‰ÐµÐµ Ð¾ÐºÐ¾ÑˆÐºÐ¾ Ð¾Ð¿Ð¾Ð²ÐµÑ‰ÐµÐ½Ð¸Ñ ÐºÐ¾Ð³Ð´Ð° ÐºÑ‚Ð¾-Ñ‚Ð¾ Ð¾Ñ‚Ð¿Ñ€Ð°Ð²Ð¸Ñ‚ Ð²Ð°Ð¼ ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ðµ." }, sq: { DESKTOP_NOTIFICATIONS_ERROR: "Nuk mund tÃ« aktivizohen njoftimet nÃ« desktop sepse shfletuesi juaj i bllokon ato nÃ« mÃ«nyrÃ« aktive. Provoni tÃ« shikoni cilÃ«simet ose pÃ«rdorni njÃ« shfletues tÃ« ndryshÃ«m.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME njoftime nÃ« desktop", DESKTOP_NOTIFICATIONS_DEMO_BODY: "LÃ«nia e skedÃ«s sÃ« shfletuesit tuaj tÃ« hapur do tÃ« pop-up kur dikush flet me ju." }, sr: { DESKTOP_NOTIFICATIONS_ERROR: "Desktop notifikacije nisu omoguÄ‡ene jer ih vaÅ¡ pregledaÄ aktivno blokira. PokuÅ¡ajte pogledati postavke ili koristiti neki drugi pregledaÄ.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME demo notifikacija", DESKTOP_NOTIFICATIONS_DEMO_BODY: "Ako karticu pregledaÄa ostavite otvorenu, pojaviÄ‡e se ovaj pop-up kada neko razgovara s vama." }, sv: { DESKTOP_NOTIFICATIONS_ERROR: "Kan inte aktivera notiser eftersom din webblÃ¤sare aktivt blockerar dem. Se Ã¶ver instÃ¤llningarna eller anvÃ¤nd en annan webblÃ¤sare.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME demonotis", DESKTOP_NOTIFICATIONS_DEMO_BODY: "Om du har fliken i webblÃ¤saren Ã¶ppen sÃ¥ kommer den hÃ¤r notisen visas nÃ¤r nÃ¥gon pratar med dig." }, tr: { DESKTOP_NOTIFICATIONS_ERROR: "TarayÄ±cÄ±nÄ±z aktif olarak engellediÄŸinden masaÃ¼stÃ¼ bildirimlerini etkinleÅŸtiremiyoruz. AyarlarÄ± kontrol etmeyi veya farklÄ± bir tarayÄ±cÄ± kullanmayÄ± deneyebilirsiniz.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME test bildirimi", DESKTOP_NOTIFICATIONS_DEMO_BODY: "EÄŸer tarayÄ±cÄ±nÄ±zÄ±n penceresini aÃ§Ä±k tutarsanÄ±z biri mesaj yazdÄ±ÄŸÄ±nda bu bildirimi gÃ¶receksiniz." }, uk: { DESKTOP_NOTIFICATIONS_ERROR: "ÐÐµÐ¼Ð¾Ð¶Ð»Ð¸Ð²Ð¾ Ð²Ð²Ñ–Ð¼ÐºÐ½ÑƒÑ‚Ð¸ ÑÐ¿Ð¾Ð²Ñ–Ñ‰ÐµÐ½Ð½Ñ Ð½Ð° Ñ€Ð¾Ð±Ð¾Ñ‡Ð¾Ð¼Ñƒ ÑÑ‚Ð¾Ð»Ñ–, Ð¾ÑÐºÑ–Ð»ÑŒÐºÐ¸ Ð²Ð°Ñˆ Ð²ÐµÐ±-Ð¿ÐµÑ€ÐµÐ³Ð»ÑÐ´Ð°Ñ‡ Ð°ÐºÑ‚Ð¸Ð²Ð½Ð¾ Ñ—Ñ… Ð±Ð»Ð¾ÐºÑƒÑ”. Ð¡Ð¿Ñ€Ð¾Ð±ÑƒÐ¹Ñ‚Ðµ Ð¿ÐµÑ€ÐµÐ³Ð»ÑÐ½ÑƒÑ‚Ð¸ Ð½Ð°Ð»Ð°ÑˆÑ‚ÑƒÐ²Ð°Ð½Ð½Ñ Ð°Ð±Ð¾ Ð²Ð¸ÐºÐ¾Ñ€Ð¸ÑÑ‚Ð¾Ð²ÑƒÐ²Ð°Ñ‚Ð¸ Ñ–Ð½ÑˆÐ¸Ð¹ Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "Ð”ÐµÐ¼Ð¾-Ð¿Ð¾Ð²Ñ–Ð´Ð¾Ð¼Ð»ÐµÐ½Ð½Ñ Ð¿Ñ€Ð¾ $APPNAME", DESKTOP_NOTIFICATIONS_DEMO_BODY: "Ð¯ÐºÑ‰Ð¾ Ð²Ð¸ Ð²Ñ–Ð´ÐºÑ€Ð¸Ñ”Ñ‚Ðµ Ð²ÐºÐ»Ð°Ð´ÐºÑƒ Ð²ÐµÐ±-Ð¿ÐµÑ€ÐµÐ³Ð»ÑÐ´Ð°Ñ‡Ð° Ð²Ñ–Ð´ÐºÑ€Ð¸Ñ‚Ð¾ÑŽ, Ð²Ð¸ Ð¿Ð¾Ð±Ð°Ñ‡Ð¸Ñ‚Ðµ Ñ†Ðµ ÑÐ¿Ð»Ð¸Ð²Ð°ÑŽÑ‡Ðµ Ð²Ñ–ÐºÐ½Ð¾, ÐºÐ¾Ð»Ð¸ Ñ…Ñ‚Ð¾ÑÑŒ ÑÐ¿Ñ–Ð»ÐºÑƒÑ”Ñ‚ÑŒÑÑ Ð· Ð²Ð°Ð¼Ð¸." }, vi: { DESKTOP_NOTIFICATIONS_ERROR: "KhÃ´ng thá»ƒ báº­t thÃ´ng bÃ¡o trÃªn mÃ n hÃ¬nh vÃ¬ trÃ¬nh duyá»‡t cá»§a báº¡n Ä‘ang táº¯t chá»©c nÄƒng nÃ y. HÃ£y thá»­ tÃ¬m trong cÃ i Ä‘áº·t trÃ¬nh duyá»‡t hoáº·c sá»­ dá»¥ng má»™t trÃ¬nh duyá»‡t khÃ¡c.", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME thÃ´ng bÃ¡o thá»­ nghiá»‡m", DESKTOP_NOTIFICATIONS_DEMO_BODY: "Náº¿u báº¡n giá»¯ tab trÃ¬nh duyá»‡t cá»§a báº¡n má»Ÿ, báº¡n sáº½ tháº¥y cá»­a sá»• báº­t lÃªn khi ai Ä‘Ã³ nÃ³i chuyá»‡n vá»›i báº¡n." }, zh: { DESKTOP_NOTIFICATIONS_ERROR: "å› æµè§ˆå™¨è®¾ç½®ä¸ºé˜»æ­¢ï¼Œæ‰€ä»¥æ— æ³•æ¿€æ´»æ¡Œé¢æé†’ ã€‚è¯·åŽ»è®¾ç½®é‡ŒæŸ¥çœ‹æˆ–è€…å°è¯•å…¶ä»–çš„æµè§ˆå™¨ã€‚", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME æ¼”ç¤ºæé†’", DESKTOP_NOTIFICATIONS_DEMO_BODY: "åªè¦ä¿æŒæµè§ˆå™¨å¼€ç€ï¼Œå¦‚æžœæœ‰äººå’Œä½ å¯¹è¯ï¼Œå°†ä¼šè‡ªåŠ¨å¼¹å‡ºå¯¹è¯çª—å£ã€‚" }, "zh-tw": { DESKTOP_NOTIFICATIONS_ERROR: "ç„¡æ³•å•Ÿç”¨æ¡Œé¢é€šçŸ¥ï¼Œå› ç‚ºæ‚¨çš„ç€è¦½å™¨ä¸»å‹•é˜»æ­¢å®ƒå€‘ã€‚ å˜—è©¦æŸ¥çœ‹è¨­ç½®æˆ–ä½¿ç”¨å…¶ä»–ç€è¦½å™¨ã€‚", DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME æ¼”ç¤ºé€šçŸ¥", DESKTOP_NOTIFICATIONS_DEMO_BODY: "å¦‚æžœæ‚¨æŒçºŒæ‰“é–‹ç€è¦½å™¨æ¨™ç±¤é ï¼Œç•¶æœ‰äººèˆ‡æ‚¨é€šè©±æ™‚ï¼Œæ‚¨æœƒçœ‹åˆ°æ­¤å½ˆå‡ºçª—å£ã€‚" } }
    },
    50: function(t, n, e) {
        "use strict";
        e.d(n, "a", (function() { return r })), e.d(n, "b", (function() { return o }));
        var i = e(26);

        function r(t, n) { var e = []; return Object(i.a)(t, (function(t, i) { e.push(n(t, i)) })), e }

        function o(t) { return r(t, (function(t, n) { return [n, t] })) }
    },
    58: function(t, n, e) {
        "use strict";
        e.d(n, "b", (function() { return r })), e.d(n, "c", (function() { return o })), e.d(n, "d", (function() { return s })), e.d(n, "a", (function() { return a }));
        var i = function(t, n, e) {
            if (e || 2 === arguments.length)
                for (var i, r = 0, o = n.length; r < o; r++) !i && r in n || (i || (i = Array.prototype.slice.call(n, 0, r)), i[r] = n[r]);
            return t.concat(i || Array.prototype.slice.call(n))
        };

        function r(t, n) { return t.reduce((function(t, e, i) { return t.concat(n(e, i)) }), []) }

        function o(t, n) {
            return i([], t, !0).sort((function(t, e) {
                var i = n(t),
                    r = n(e);
                return i < r ? -1 : i == r ? 0 : 1
            }))
        }

        function s(t, n) { for (var e = [], i = Math.min(t.length, n.length), r = 0; r < i; r++) e[r] = [t[r], n[r]]; return e }

        function a(t, n) { for (var e = [], i = [], r = 0; r < t.length; r++) n(t[r]) ? e.push(t[r]) : i.push(t[r]); return [e, i] }
    },
    586: function(t, n, e) {
        "use strict";
        e.r(n);
        var i, r = e(1);
        ! function(t) { t[t.NOTIFICATIONS_PERMISSION_DENIED = 0] = "NOTIFICATIONS_PERMISSION_DENIED", t[t.NOTIFICATIONS_NOT_SUPPORTED = 1] = "NOTIFICATIONS_NOT_SUPPORTED", t[t.ARGUMENT_INVALID = 2] = "ARGUMENT_INVALID" }(i || (i = {}));
        var o = function(t) {
            function n(n, e) {
                var i = this.constructor,
                    r = t.call(this, "[TalkJS] " + e) || this;
                return r.code = n, Object.setPrototypeOf && Object.setPrototypeOf(r, i.prototype), r
            }
            return Object(r.c)(n, t), n.Code = i, n
        }(Error);

        function s(t, n, e, r) { void 0 === r && (r = []); var s = v(t); if (-1 === n.indexOf(s)) throw new o(i.ARGUMENT_INVALID, e); for (var a = 0, u = r; a < u.length; a++) { if (!(0, u[a])(t)) throw new o(i.ARGUMENT_INVALID, e) } return t }

        function a(t, n, e) { if (-1 === n.indexOf(t)) throw new o(i.ARGUMENT_INVALID, e) }

        function u(t, n, e) { for (var i in t) s(t[i], n, e(i, t[i])) }

        function c(t, n, e, i, r, o) { void 0 === o && (o = []), void 0 !== e && (t[n] = s(e, i, r, o)) }

        function f(t) { return "" !== t }

        function h(t) { return !t || /^[a-z]{1,3}(-.+)?$/.test(t) }

        function l(t) { return !(["ios", "android"].indexOf(t) < 0) }

        function v(t) { if (null === t) return "null"; var n = typeof t; return "object" !== n ? n : t instanceof Array ? t.length ? v(t[0]) + "[]" : "[]" : n }
        var d = function(t, n) {
                this.user = t;
                var e = (n = s(n, ["undefined", "object"], 'Conversation.setParticipants: optional field "settings" is given but not an object.')) || { access: void 0, notify: void 0 },
                    i = e.access,
                    r = e.notify;
                i = s(i, ["undefined", "string"], 'Conversation.setParticipants: optional field "settings.access" is given but not one of "ReadWrite" or "Read".', [function(t) { return void 0 === t || "Read" === t || "ReadWrite" === t }]), r = s(r, ["undefined", "boolean"], 'Conversation.setParticipants: optional field "settings.notify" is given but not a boolean.'), this.participationSettings = { access: i, notify: r }, this.participationSetting = this.participationSettings
            },
            p = e(47);

        function m(t) { return [t = (t = s(t, ["string", "number"], 'User: required field "id" is not given or not a string or a number.', [f])).toString(), Object(p.a)(t) + "_n"] }
        var O = function(t) {
            var n, e, i, r, o;
            if (void 0 === t && (t = {}), "string" == typeof(o = t) || o instanceof String || "number" == typeof o || o instanceof Number) this.__sync = !1, n = m(t), this.id = n[0], this.internalId = n[1];
            else {
                this.__sync = !0;
                var a = t.id,
                    l = t.name,
                    v = t.email,
                    d = t.phone,
                    p = t.photoUrl,
                    O = t.welcomeMessage,
                    b = t.role,
                    T = t.configuration,
                    g = t.custom,
                    I = t.availabilityText,
                    E = t.locale;
                e = m(a), this.id = e[0], this.internalId = e[1], c(this, "email", v, ["null", "undefined", "string", "string[]"], "User " + a + ': optional field "email" is not a string or array of strings. Pass `null` if you\'re sure the user should never get emails', [f]), c(this, "phone", d, ["null", "undefined", "string", "string[]"], "User " + a + ': optional field "phone" is given but not a string or array of strings.', [f]);
                for (var k = 0, A = [].concat(void 0 === this.phone || null === this.phone ? [] : this.phone); k < A.length; k++) { var w = A[k]; if (!/^\+[1-9]\d{1,14}$/.test(w)) throw new Error("User " + a + ': optional field "phone" does not conform E.164 standard. Numbers should start with a plus, followed by a country code and then the phone number. Numbers must not have any other special characters like dashes or spaces. For example, a UK phone number 0123456789 would be formatted as "+44123456789" (' + w + ").") }
                this.name = s(l, ["string"], "User " + a + ': required field "name" is not given or not a string or is an empty string.', [f]), c(this, "welcomeMessage", O, ["null", "undefined", "string"], "User " + a + ': optional field "welcomeMessage" is given but not a string or is an empty string.', [f]), c(this, "role", b, ["null", "undefined", "string"], "User " + a + ': optional field "role" is given but not a string or is an empty string.', [f]), c(this, "configuration", T, ["null", "undefined", "string"], "User " + a + ': optional field "configuration" is given but not a string or is an empty string.', [f]), c(this, "custom", g, ["null", "undefined", "object"], "User " + a + ': optional field "custom" is given but not an object.'), (p = s(p, ["null", "undefined", "string"], "User " + a + ': optional field "photoUrl" is given but not a string or is an empty string.', [f])) && (this.photoUrl = (i = p, (r = document.createElement("a")).href = i, r.href)), c(this, "availabilityText", I, ["null", "undefined", "string"], "User " + a + ': optional field "availabilityText" is given but not a string or is an empty string.', [f]), c(this, "locale", E, ["null", "undefined", "string"], "User " + a + ': optional field "locale" is given but not a string or is an empty string or does not conform the BCP 47 format.', [f, h]), this.custom && u(this.custom, ["string", "null"], (function(t) { return "User " + a + ': optional field "custom.' + t + '" is given but not a string.' })), this.configuration || this.role || console.warn("[TalkJS] No role is set for user " + a + ". TalkJS will work, but with some features disabled (such as email notifications)."), this.configuration && this.role && console.warn("[TalkJS] A configuration and role was set for the user " + a + ", the assigned role will take presedence over a configuration."), this.role && (this.configuration = this.role)
            }
        };

        function b(t) { return !t || "string" == typeof t || "string" == typeof t.id }
        var T, g, I = function(t) {
                var n = t.conversationId,
                    e = t.participants,
                    i = t.topicId,
                    r = t.subject,
                    o = t.photoUrl,
                    a = t.welcomeMessages,
                    h = t.custom;
                this.participants = [], this.id = s(n, ["string"], "Conversation: field conversationId cannot be empty.", [f]);
                for (var l = 0, v = e; l < v.length; l++) {
                    var d = v[l];
                    this.participants.map((function(t) { return t.user.id })).indexOf(d.user.id) < 0 && this.participants.push(d)
                }
                c(this, "subject", r, ["null", "undefined", "string"], 'Conversation: optional field "subject" is given but not an string.'), c(this, "photoUrl", o, ["null", "undefined", "string"], 'Conversation: optional field "photoUrl" is given but not an string or is an empty string.', [f]), c(this, "welcomeMessages", a, ["null", "undefined", "string[]"], 'Conversation: optional field "welcomeMessages" is given but not an array of strings.'), c(this, "custom", h, ["null", "undefined", "object"], 'Conversation: optional field "custom" is given but not an object.'), this.custom && u(this.custom, ["string"], (function(t) { return 'Field "custom.' + t + '" must be a string.' })), void 0 !== (i = null != i ? i.toString() : void 0) && (this.topicId = s(i, ["string"], 'Conversation: optional field "topicId" is given but not an string or is an empty string.', [f])), this.internalId = A(this.id)
            },
            E = function() {
                function t(t, n) { this._ = n, this.participants = [], this.id = s(t, ["string"], "Conversation: field conversationId cannot be empty.", [f]), this.internalId = A(this.id) }
                return t.prototype.setParticipant = function(t, n) {
                    if (this._.S(), !(t instanceof O)) throw new Error("[TalkJS] The first argument of ConversationBuilder#setParticipant should be of type Talk.User. For example:\n            \nvar user = new Talk.User(data);\nconversation.setParticipant(user);\n            \nFor more information check our documentation https://talkjs.com/docs/Reference/JavaScript_Chat_SDK/ConversationBuilder.html#setparticipant\n            ");
                    this.participants = this.participants.filter((function(n) { return n.user.id !== t.id })), this.participants.push(new d(t, n))
                }, t.prototype.setAttributes = function(t) { this._.S(), c(this, "subject", t.subject, ["null", "undefined", "string"], 'Conversation.setAttributes: optional field "subject" is given but not an string.'), c(this, "custom", t.custom, ["null", "undefined", "object"], 'Conversation.setAttributes: optional field "custom" is given but not an object.'), c(this, "photoUrl", t.photoUrl, ["null", "undefined", "string"], 'Conversation.setAttributes: optional field "photoUrl" is given but not an string or is an empty string.', [f]), c(this, "welcomeMessages", t.welcomeMessages, ["null", "undefined", "string[]"], 'Conversation.setAttributes:Conversation: optional field "welcomeMessages" is given but not an array of strings'), this.custom && u(this.custom, ["null", "string"], (function(t) { return 'Conversation.setAttributes: Field "custom.' + t + '" must be a string.' })) }, t.prototype.sendMessage = function(t, n) {
                    var e = (void 0 === n ? {} : n).custom;
                    this._.S(), t = s(t, ["string"], "sendMessage() accepts a single String value representing the text of the message"), e && u(e, ["string"], (function(t) { return 'Field "custom.' + t + '" must be a string.' }));
                    var i = this.internalId;
                    return this._.N.then((function(n) { return n.sendMessage({ text: t, custom: e }, i) }))
                }, t
            }();

        function k(t, n, e) {
            return "string" == typeof t && (t = new O(t)), "string" == typeof n && (n = new O(n)),
                function(t, n) {
                    var e = t.map((function(t) { return t.id }));
                    e.sort();
                    var i = { p: e };
                    return void 0 !== n && (i.t = n), JSON.stringify(i)
                }([t, n], e)
        }

        function A(t) { return Object(p.a)(t) }

        function w(t, n) { return n.filter((function(n) { return !0 === t.participants[n.id].canRead })).map(y) }

        function y(t) { return { id: t.externalId, name: t.name, welcomeMessage: t.welcomeMessage, photoUrl: t.photoUrl, role: t.configuration, configuration: t.configuration, custom: t.custom, availabilityText: t.availabilityText, locale: t.locale, email: "<suppressed>", phone: "<suppressed>" } }

        function _(t) { return { custom: t.custom, id: t.externalId, photoUrl: t.photoUrl, subject: t.subject, topicId: t.topicId, welcomeMessages: t.welcomeMessages } }! function(t) { t[t.Inbox = 0] = "Inbox", t[t.Chatbox = 1] = "Chatbox", t[t.Popup = 2] = "Popup" }(T || (T = {})),
        function(t) { t[t.Widget = 0] = "Widget", t[t.Popover = 1] = "Popover" }(g || (g = {}));
        var S = e(59),
            N = e(20);

        function D() {
            var t = function() { if (document.currentScript) return document.currentScript.src; try { throw new Error } catch (t) { return t.stack.match(/https?:\/\/.*\.js/)[0] } }(),
                n = document.createElement("a");
            return n.href = t, n
        }
        var P, j = (P = D().host).match(/^cdn[\.-]/) ? P.replace(/^cdn/, "app") : P,
            C = D().protocol,
            M = e(17),
            R = "talkjs:desktop_notify",
            F = function() { try { return Audio && new Audio(C + "//" + j + e(486)) } catch (t) { return null } }();

        function K() { return window.Notification && "granted" === Notification.permission }
        var U = [];

        function x(t, n) {
            var e = void 0 === t ? {} : t,
                i = e.title,
                r = e.body;
            e.conversationId;
            if (r) {
                if (F) try { F.play() } catch (t) {}
                var o = new Notification(i || "", { body: r, icon: H() });
                o.onclick = function() { window.focus(), n() }, U.push(o)
            }
        }
        window.addEventListener("focus", (function() { U.forEach(Object(N.h)((function(t) { return t.close() }))), U = [] }));
        var B, L = !1,
            J = 0;

        function Y(t, n) {
            var e = n.locale,
                i = n.alertOnFailure,
                r = n.appName;
            return S.a.set(R, t), t ? (K() ? M.a.resolve(!0) : window.Notification ? new M.a((function(t) { Notification.requestPermission((function() { t(K()) })) })) : M.a.reject(new o(o.Code.NOTIFICATIONS_NOT_SUPPORTED, "The browser doesn't support desktop notifications."))).then((function(t) { if (!t || r) { if (!t || !r) throw S.a.set(R, !1), new o(o.Code.NOTIFICATIONS_PERMISSION_DENIED, "The user or the browser denied permission to send notifications.");! function(t, n) { x({ title: n.t("DESKTOP_NOTIFICATIONS_DEMO_TITLE", { APPNAME: t }), body: n.t("DESKTOP_NOTIFICATIONS_DEMO_BODY") }, (function() {})) }(r, e) } })).catch((function(t) { throw i && alert(e.t("DESKTOP_NOTIFICATIONS_ERROR")), t })) : M.a.resolve()
        }

        function z() { return K() && Boolean(S.a.get(R)) }

        function H() { if (B) return B; for (var t = document.getElementsByTagName("head")[0].getElementsByTagName("link"), n = [], e = t.length - 1; e >= 0; e--) /(^|\s)icon(\s|$)/i.test(t[e].getAttribute("rel") || "") && n.push(t[e]); var i = n.reduce((function(t, n) { return $(t) > $(n) ? t : n }), void 0); return B = i && i.getAttribute("href") || void 0 }

        function $(t) { return parseInt(t && (t.getAttribute("sizes") || "").split("x")[0] || "0") }
        var q = function() {
                function t(t) { for (var n in this.D = {}, t) t.hasOwnProperty(n) && (this.D[n] = []) }
                return t.prototype.emit = function(t, n) { for (var e = 0, i = this.D[t]; e < i.length; e++) { var r = i[e]; try { r(n) } catch (n) { console.error("[TalkJS] '" + t + "' handler threw an error:", n) } } }, t.prototype.supports = function(t) { return t in this.D }, t.prototype.on = function(t, n) {
                    if (!this.supports(t)) throw new Error("Unknown event type '" + t + "'");
                    this.D[t].push(n)
                }, t.prototype.off = function(t, n) { if (!(t in this.D)) throw new Error("Unknown event type '" + t + "'"); var e = this.D[t].indexOf(n); - 1 !== e && this.D[t].splice(e, 1) }, t.prototype.removeAllListeners = function() { for (var t in this.D) this.D[t] = [] }, t.prototype.handles = function(t) { return this.D[t].length > 0 }, t
            }(),
            G = e(15);

        function W(t) {
            var n, e, i = t.side,
                r = t.sender;
            return null === r ? (n = null, e = null) : (n = r.externalId, e = y(r)), { conversation: X(i), isByMe: i.isByMe, senderId: n, sender: e, body: i.lastMessageBody, type: i.lastMessageType, timestamp: i.lastMessageTs, read: i.lastMessageRead, origin: i.lastMessageOrigin, custom: i.lastMessageCustom, attachment: i.lastMessageAttachment, location: i.lastMessageLocation }
        }

        function X(t) { return { id: t.conversationExternalId, custom: t.conversationCustom, topicId: t.conversationTopicId, subject: t.conversationSubject, welcomeMessages: t.conversationWelcomeMessages, photoUrl: t.conversationPhotoUrl } }
        var V = function() {
                function t(t, n, e) {
                    var i = this;
                    this.P = n, this.C = e, this.M = new q({ change: function(t) {} }), this.R = {}, this.F = G.e(), this.K = void 0, this.U = !1, this.B = function(t) {
                        var n = t.id;
                        t.data;
                        delete i.R[n]
                    }, this.L = function(t, n) {
                        for (var e = n.emitNewMessageEvent, r = [], o = 0, s = t || []; o < s.length; o++) {
                            var a = s[o],
                                u = i.R[a.id];
                            !e || u && u.lastMessageTs === a.lastMessageTs || r.push(a), i.R[a.id] = a
                        }
                        i.F.resolve(void 0);
                        var c = Object.keys(i.R).map((function(t) { return i.R[t] })).filter((function(t) { return t.canIRead && !1 === t.lastMessageRead })),
                            f = i.J(c);
                        M.a.all(f).then((function(t) {
                            M.a.all(i.J(r)).then((function(n) {
                                i.Y(t);
                                for (var e = 0, r = n.filter((function(t) { return !t.side.lastMessageRead })); e < r.length; e++) {
                                    var o = r[e];
                                    i.H(o)
                                }
                                i.$(n)
                            }))
                        }))
                    }, t.then((function(t) { i.G = t, i.W({ amount: 20 }) }))
                }
                return t.prototype.X = function() { return this.G.getOrJoinChannel("seq/sides/" + this.G.me.internalId) }, t.prototype.W = function(t) {
                    var n = this,
                        e = t.amount;
                    this.F = G.e();
                    var i = this.X();
                    i.on("recordUpdated", (function(t) { return n.L(t.data, { emitNewMessageEvent: !0 }) })), i.on("recordDeleted", (function(t) { return n.B(t) })), i.push("get_all", { limit: e }).receive("ok", (function(t) { return n.L(t.data, { emitNewMessageEvent: !1 }) }))
                }, t.prototype.V = function(t) { var n = this; return this.F.promise.then((function() { return n.Z(t) })).then((function() { return X(n.R[t]) })) }, t.prototype.Z = function(t) { var n = this; return this.R[t] ? M.a.resolve() : new M.a((function(e) { n.X().push("get_one", { itemId: t }).receive("ok", (function(t) { n.L([t.data], { emitNewMessageEvent: !1 }), e() })) })) }, t.prototype.J = function(t) { var n = this; return t.filter((function(t) { return null !== t.lastMessageSenderId })).map((function(t) { return n.G.getNym(t.lastMessageSenderId).then((function(n) { return { side: t, sender: n } })) })) }, t.prototype.tt = function(t, n) {
                    if (t.length !== n.length) return !0;
                    for (var e = function(t) {
                            var e = n.filter((function(n) { return n.lastMessage.conversation.id === t.lastMessage.conversation.id }))[0];
                            if (!e) return { value: !0 };
                            var i = t.lastMessage,
                                r = e.lastMessage;
                            return i.body !== r.body || i.conversation.id !== r.conversation.id || i.isByMe !== r.isByMe || i.read !== r.read || i.timestamp !== r.timestamp || i.type !== r.type ? { value: !0 } : void 0
                        }, i = 0, r = t; i < r.length; i++) { var o = e(r[i]); if ("object" == typeof o) return o.value }
                    return !1
                }, t.prototype.Y = function(t) {
                    var n = t.map((function(t) { return { lastMessage: W(t) } }));
                    this.K && !this.tt(n, this.K) || this.M.emit("change", n), this.K = n
                }, t.prototype.$ = function(t) {
                    for (var n = 0, e = t; n < e.length; n++) {
                        var i = e[n];
                        this.P(W(i))
                    }
                }, t.prototype.H = function(t) {
                    var n, e, i, r = this,
                        o = t.side,
                        s = t.sender,
                        a = Date.now();
                    if (null !== o.lastMessageSenderId && null !== s) {
                        this.nt = { body: this.rt(o), title: s.name };
                        var u = Date.now() - a;
                        n = function() { return r.nt }, e = Math.max(0, 500 - u), i = function() { return r.C(X(o)) }, void 0 === e && (e = 500), !L && z() && (J + 100 > Date.now() || (L = !0, setTimeout((function() {
                            try {
                                if (!document.hasFocus()) {
                                    var t = n();
                                    t && x(t, i)
                                }
                            } finally { L = !1, J = Date.now() }
                        }), e)))
                    }
                }, t.prototype.ot = function(t) {
                    return function(n) {
                        var e, i = [];
                        for (t.lastIndex = 0; e = t.exec(n);) {
                            var r = e[0],
                                o = e.index;
                            i.push({ offset: o, matchedText: r, regexMatch: e })
                        }
                        return i
                    }
                }, t.prototype.rt = function(t) {
                    if ("text" === t.lastMessageType) { if ("rest" === t.lastMessageOrigin) this.ot(/<((?:https?|mailto):.*?)\|(.*?)>/gi)(t.lastMessageBody).forEach((function(n) { t.lastMessageBody = t.lastMessageBody.replace(n.regexMatch[0], n.regexMatch[2]) })); return t.lastMessageBody }
                    if ("location" === t.lastMessageType) return "ðŸ“ Shared location";
                    if ("media" === t.lastMessageType && t.lastMessageAttachment) {
                        var n = t.lastMessageAttachment.url,
                            e = Object(N.c)(n);
                        return Object(N.d)(e) ? "ðŸ“· " + e : "[â†“] " + e
                    }
                    return ""
                }, t.prototype.on = function(t, n) { this.S(), this.M.on(t, n) }, t.prototype.off = function(t, n) { this.M.off(t, n) }, t.prototype.S = function() { if (this.U) throw new Error("[TalkJS] This object has been destroyed, please create a new Session.") }, t.prototype.st = function() { this.U = !0, this.G && this.G.disconnect(), this.M.removeAllListeners() }, t
            }(),
            Q = function(t, n) { t.then((function(t) { return t.getOrJoinChannel("me:" + t.me.internalId + ":" + n) })) },
            Z = e(72),
            tt = e(29),
            nt = e(14),
            et = function() {
                function t(t, n) {
                    var e = this;
                    this.at = t, this.ut = n, this.ct = [], this.ft = {}, this.ht = function(t) { return function(n, i) { tt.d("xsp.onRejoin", [t, i], e.at()) } }, this.D = {
                        "xsp.joinTopic": function(t, n, i) {
                            var r = e.ut.getOrJoin(t, n, e.ht(t));
                            e.ft[t] = r;
                            for (var o = 0, s = i; o < s.length; o++) {
                                var a = s[o];
                                e.D["xsp.listen"](t, a)
                            }
                        },
                        "xsp.listen": function(t, n) {
                            var i = e.ft[t];
                            if (!i) throw new Error("Can't find channel for topic " + t);
                            var r = i.on(n, (function(i) { tt.d("xsp.on", [t, n, i], e.at()) }));
                            e.ct.push({ topic: t, event: n, ref: r })
                        },
                        "xsp.push": function(t, n, i, r, o) { return new Promise((function(s) { for (var a = e.ft[t].push(n, i, o), u = function(t) { a.receive(t, (function(n) { s({ status: t, response: n }) })) }, c = 0, f = r; c < f.length; c++) { u(f[c]) } })) }
                    }, this.lt = tt.c(this.D, t)
                }
                return t.prototype.destroy = function() {
                    for (var t = 0, n = this.ct; t < n.length; t++) {
                        var e = n[t];
                        this.ft[e.topic].off(e.event, e.ref)
                    }
                    nt.forEach(this.ft, (function(t) { 0 === t.bindings.length && t.leave() })), tt.e(this.lt)
                }, t
            }(),
            it = e(172),
            rt = function(t, n, e) {
                var i = this;
                this.G = t, this.X = this.G.getOrJoinChannel("record/" + n + "/" + e), this.loaded = new M.a((function(t, n) { i.X.push("get", {}).receive("ok", (function(n) { i.value = n.data, t() })).receive("error", (function(t) { return n(t) })).receive("timeout", (function() { return n("timeout") })), i.X.on("recordUpdated", (function(t) { return i.value = t.data })) }))
            },
            ot = function() {
                function t(t, n, e, i, r, o) {
                    var s;
                    void 0 === o && (o = 0), this.boken = t, this.me = n, this.appId = e, this.appLocale = i, this.vt = r, this.version = o, this.dt = {}, this.Ot = new Z.a((s = j, C.replace("http:", "ws:").replace("https:", "wss:") + "//" + s), { appId: this.appId }), this.Ot.connect({ boken: this.boken })
                }
                return t.prototype.makeXdmServer = function(t) { return new et(t, this.Ot) }, t.prototype.url = function(t) { var n = -1 === t.indexOf("?") ? "?" : "&"; return C + "//" + j + "/api/v" + this.version + "/" + this.appId + t + n + "authToken=" + this.boken }, t.prototype.getNym = function(t) { t in this.dt || (this.dt[t] = new rt(this, "nyms", t)); var n = this.dt[t]; return n.loaded.then((function() { return n.value })) }, t.prototype.post = function(t, n) { return Object(G.g)("POST", this.url(t), JSON.stringify(n)) }, t.prototype.put = function(t, n) { var e = this; return this.bt((function() { return Object(G.g)("PUT", e.url(t), JSON.stringify(n)) })) }, t.prototype.delete = function(t) { var n = this; return this.bt((function() { return Object(G.g)("DELETE", n.url(t)) })) }, t.prototype.getOrJoinChannel = function(t, n) { void 0 === n && (n = {}); var e = Object(r.a)(Object(r.a)({}, n), { origin: "JSSDK" }); return this.Ot.getOrJoin(t, e) }, t.prototype.bt = function(t, n) {
                    var e = void 0 === n ? {} : n,
                        i = e.retries,
                        r = void 0 === i ? 10 : i,
                        o = e.delay,
                        s = void 0 === o ? .2 : o;
                    return Object(N.e)(r, t, { delay: s, log: void 0, shouldRetry: function(t) { return !t || !t.userError } })
                }, t.prototype.sendMessage = function(t, n) {
                    var e = t.text,
                        i = t.custom,
                        r = this.vt,
                        o = { text: e, custom: i, nymId: this.me.internalId, idempotencyKey: Object(it.a)(Date.now()) };
                    return this.post("/say/" + n + "/?sessionId=" + r, o).then(JSON.parse).then((function(t) { t.id }))
                }, t.prototype.disconnect = function() { this.Ot.disconnect() }, t
            }();

        function st(t, n) { return C + "//" + j + "/api/v0/" + t + "/" + n }
        var at = function() {
                function t(t) {
                    var n = this;
                    this.getSourceWindow = t, this.D = {}, this.router = function(t) { return tt.a(t, { sourceWindow: n.getSourceWindow(), handlers: n.D, prefix: "on_" }) }, window.addEventListener("message", this.router)
                }
                return t.prototype.destroy = function() { window.removeEventListener("message", this.router) }, t.prototype.listen = function(t, n, e) { this.D["on_" + e] = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; return n.apply(void 0, t) } }, t.prototype.unlisten = function() { for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]; for (var e in this.D) - 1 !== t.indexOf(this.D[e]) && delete this.D[e] }, t
            }(),
            ut = [
                [2, 1],
                [2],
                [],
                [3, 4, 5]
            ],
            ct = function() {
                function t(t, n, e, i) {
                    var o = this;
                    this.Tt = t, this.gt = n, this.initialPath = e, this.queryStringData = i, this.It = !1, this.Et = G.e(), this.post = function(t, n) { return o.Et.promise.then((function() { tt.d(t, n, o.kt.contentWindow) })) }, this.ask = function(t, n) { return o.Et.promise.then((function() { return tt.b(t, n, o.kt.contentWindow) })) }, this.nav = function(t, n, e) {
                        if (void 0 === n && (n = {}), void 0 === e && (e = {}), o.It) {
                            var i = new ft(Object(r.a)({ dbSyncData: n }, e));
                            o.post("nav", [o.At(t), i.toString()])
                        } else {
                            i = new ft(Object(r.a)(Object(r.a)(Object(r.a)({}, o.queryStringData), { dbSyncData: n }), e));
                            o.wt(t, i)
                        }
                    }, this.mount = function(t, n) { t !== o.yt && (o.yt = t, o._t(), n(o.kt.style)) }, this.St = C + "//" + j, this.kt = document.createElement("iframe"), this.kt.scrolling = "no", this.kt.name = "____talkjs__chat__ui_internal", this.kt.style.border = "none", this.kt.setAttribute("aria-label", "TalkJS iframe"), this.kt.allow = "fullscreen", this.Nt(this.kt);
                    var s = new ft(this.queryStringData);
                    this.wt(this.initialPath, s), G.k("__talkjs:appready", (function() { o.Et.resolve(void 0) }))
                }
                return t.prototype.Nt = function(t) {
                    var n = this;
                    t.onload = function(t) { n.It = !0 }
                }, t.prototype.Dt = function(t) { return this.St + "/app/" + this.Tt + this.At(t) }, t.prototype.At = function(t) { return "/user/" + this.gt + "/" + t }, t.prototype.contentWindow = function() { return this.kt.contentWindow }, t.prototype.patchQueryString = function(t) { return this.ask("patchQueryString", [t]) }, t.prototype.wt = function(t, n) {
                    var e = n.toString();
                    if (e.length > G.a) {
                        var i = n.split(),
                            r = i.short,
                            o = i.long,
                            s = i.key;
                        G.g("PUT", this.St + "/__buffer/" + s, JSON.stringify({ value: o })), e = "bufferKey=" + s + "&" + r
                    }
                    this.kt.src = this.Dt(t + "?" + e)
                }, t.prototype.patchLocalSettings = function(t) { return this.patchQueryString({ localSettings: t }) }, t.prototype._t = function() { this.yt.appendChild(this.kt) }, t.prototype.cleanupContainer = function() { if (this.yt.hasChildNodes()) { for (; this.yt.firstChild && this.yt.firstChild !== this.kt;) this.yt.removeChild(this.yt.firstChild); for (; this.yt.lastChild && this.yt.lastChild !== this.kt;) this.yt.removeChild(this.yt.lastChild) } }, t.prototype.destroy = function() {
                    var t = this.kt.parentNode;
                    t && t.removeChild(this.kt)
                }, t.prototype.isZombie = function() { return !!this.It && !document.body.contains(this.kt) }, t
            }(),
            ft = function(t) {
                function n(n) {
                    var e = n.dbSyncData,
                        i = n.localSettings,
                        r = n.clientHeight,
                        o = n.signature,
                        s = n.externalUserId,
                        a = n.thirdparties,
                        u = n.sessionId,
                        c = [];
                    return e && c.push(["syncPlease", e]), i && c.push(["localSettings", i]), c.push(["clientHeight", r]), c.push(["sessionId", u]), c.push(["signature", o]), c.push(["thirdparties", a]), c.push(["id", s]), t.call(this, c) || this
                }
                return Object(r.c)(n, t), n
            }(G.b);

        function ht(t, n, e) {
            void 0 === e && (e = []);
            var i = document.createElement(t),
                o = n.style,
                s = Object(r.f)(n, ["style"]);
            Object.assign(i, s), Object.assign(i.style, o);
            for (var a = 0, u = e; a < u.length; a++) {
                var c = u[a];
                i.appendChild(c)
            }
            return i
        }
        var lt = e(142),
            vt = function(t, n) { if (e = t, isNaN(parseFloat(e)) || !isFinite(e)) throw new Error("[TalkJS][HtmlPanel] " + (n || "value") + " must be a number."); var e; return Number(t) },
            dt = function() {
                function t(t, n) {
                    if (this.Pt = !1, this.panelLoaded = Object(G.e)(), this.jt = Object(G.e)(), this.Ct = Object(G.e)(), !n.url) throw new Error("[TalkJS] URL is required for the `HTMLPanel`.");
                    var e = n.url,
                        i = n.show,
                        r = void 0 === i || i,
                        o = n.height,
                        s = void 0 === o ? 100 : o,
                        a = n.conversation,
                        u = document.createElement("a");
                    u.href = e, this.Mt = { url: u.href, show: r, height: vt(s, "height"), conversation: "object" == typeof a ? a.id : a }, this.Rt = t, this.DOMContentLoadedPromise = this.jt.promise, this.windowLoadedPromise = this.Ct.promise
                }
                return t.prototype.show = function() { this.S(), !1 === this.Mt.show && (this.Mt.show = !0, this.Ft()) }, t.prototype.hide = function() { this.S(), !0 === this.Mt.show && (this.Mt.show = !1, this.Ft()) }, t.prototype.setHeight = function(t) { this.S(), this.Mt.height = vt(t, "height"), this.Ft() }, t.prototype.isVisible = function() { return this.S(), !this.Pt && !0 === this.Mt.show }, t.prototype.S = function() { if (this.Rt.S(), this.Pt) throw new Error("[TalkJS] This HTML Panel has been destroyed, and you cannot use it anymore. Please create a new HTML Panel.") }, t.prototype.destroy = function() { return this.Mt.show = !1, this.Mt.url = "", this.Pt = !0, this.Ft() }, t.prototype.Kt = function() {
                    var t = this,
                        n = Object(N.b)(this.Mt.url, this.Rt.sessionId, this.Mt.conversation);
                    return Object(G.k)("__talkjs:htmlPanelLoaded_" + n, (function() { t.panelLoaded.resolve(void 0) })), this.Ft().then((function() {
                        return t.panelLoaded.promise.then((function() {
                            var e = t.Ut(n);
                            if (!e) throw new Error("[TalkJS][HtmlPanel]: Couldn't get a reference to the window property of the HTML panel iframe.");
                            t.window = e;
                            try { t.window.scrollBy(0, 0) } catch (n) { return void console.warn("[TalkJS] HTML Panel on url " + t.Mt.url + " is not on the same origin as the current page, functionality may be limited. DOMContentLoadedPromise and windowLoadedPromise will never resolve. See https://talkjs.com/docs/Features/Customizations/HTML_Panels.html#page_HTML-Panel-Limitations for more information.") }
                            var i = function(t, n) { n.resolve(void 0) },
                                r = function() { return t.window.addEventListener("load", (function() { return i(0, t.Ct) }), !0) };
                            "loading" === t.window.document.readyState ? (t.window.document.addEventListener("DOMContentLoaded", (function() { return i(0, t.jt) }), !0), r()) : "complete" === t.window.document.readyState ? (i(0, t.jt), i(0, t.Ct)) : (i(0, t.jt), r())
                        }))
                    }))
                }, t.prototype.Ft = function() { var t = this; return this.Rt.contentLoaded().then((function() { return t.Rt.xt() })) }, t.prototype.Ut = function(t) { var n = this.Bt(); return null !== n ? n.frames[t] : null }, t.prototype.Bt = function() { var t = this.Rt.Lt(); return t || null }, t
            }(),
            pt = function() {
                function t(t) { this.Rt = t }
                return t.prototype.focus = function() { this.Rt.Jt("focusEntryBox", [], "[TalkJS] Cannot focus the message field on an unmounted UI.") }, t.prototype.setText = function(t) { this.Rt.Jt("setText", [t], "[TalkJS] Cannot set message field text on an unmounted UI.") }, t.prototype.typeText = function(t) { this.Rt.Jt("typeText", [t], "[TalkJS] Cannot type into message field on an unmounted UI.") }, t.prototype.getText = function() { return this.Rt.Yt("getText", [], "[TalkJS] Cannot retrieve message field content on an unmounted UI.") }, t.prototype.setVisible = function(t) { this.Rt.zt("messageField", { visible: t }) }, t
            }();

        function mt(t, n) {
            var e = n || {},
                i = e.hasUnreadMessages,
                o = e.custom,
                a = e.access,
                u = Object(r.f)(e, ["hasUnreadMessages", "custom", "access"]);
            if (s(i, ["boolean", "undefined"], t + ".hasUnreadMessages must be boolean."), s(o, ["object", "undefined"], t + ".custom must be an object."), o)
                for (var c = 0, f = Object.getOwnPropertyNames(o); c < f.length; c++) { bt(t + ".custom." + (h = f[c]), o[h]) }
            for (var h in s(a, ["string[]", "undefined"], t + ".access must be an array."), a && bt(t + ".access", a, ["ReadWrite", "Read", "None"]), u) console.warn("[TalkJS] " + t + "." + h + " is not a valid field.")
        }

        function Ot(t, n) {
            var e = n || {},
                i = e.origin,
                o = e.type,
                a = e.custom,
                u = Object(r.f)(e, ["origin", "type", "custom"]);
            if (s(i, ["string[]", "undefined"], t + ".origin must be a string."), i && bt(t + ".origin", i, ["web", "rest", "email", "import"]), s(o, ["string[]", "undefined"], t + ".type must be a string."), o && bt(t + ".type", o, ["SystemMessage", "UserMessage"]), s(a, ["object", "undefined"], t + ".custom must be an object."), a)
                for (var c = 0, f = Object.getOwnPropertyNames(a); c < f.length; c++) { bt(t + ".custom." + (h = f[c]), a[h]) }
            for (var h in u) console.warn("[TalkJS] " + t + "." + h + " is not a valid field.")
        }

        function bt(t, n, e) {
            var i = t + " must be a valid predicate. See the docs for all available options.";
            if ("string" != typeof n) {
                if (2 !== n.length) throw new Error("[TalkJS] " + i);
                var r = n[0],
                    o = n[1];
                if (a(r, ["==", "!=", "oneOf", "!oneOf"], i), "oneOf" === r || "!oneOf" === r) {
                    if (s(o, ["string[]"], i), e)
                        for (var u = 0, c = o; u < c.length; u++) { a(c[u], e, i) }
                } else s(o, ["string"], i), e && a(o, e, i)
            } else a(n, ["exists", "!exists"], i)
        }
        var Tt = e(46),
            gt = e(343);

        function It() {
            var t = Object(lt.a)(),
                n = t.width,
                e = t.height;
            return n < 420 || e < 420 ? g.Popover : g.Widget
        }
        var Et = { sendMessage: function(t) {}, focus: function(t) {}, blur: function(t) {}, translationToggled: function(t) {}, keyup: function(t) {} },
            kt = function() {
                function t(t, n, e, i) {
                    var r = this,
                        o = void 0 === n ? {} : n,
                        a = o.selectedConversation,
                        c = o.hideHub,
                        f = void 0 !== c && c;
                    this.Ht = { perConv: Object.create(null) }, this.$t = !1, this.qt = G.e(), this.M = new q(Et), this.sessionId = G.n(), this.messageField = new pt(this), this.onUIBoxFocusChange = function(t) {
                        var n = t.focused;
                        r.M.emit(n ? "focus" : "blur", {})
                    }, this.onTranslationToggled = function(t) {
                        var n = t.conversation,
                            e = t.isEnabled;
                        r.M.emit("translationToggled", { isEnabled: e, conversation: _(n) })
                    }, this.onKeyup = function(t) { r.M.emit("keyup", t) }, this.onSendMessage = function(t) {
                        var n = t.meId,
                            e = t.conversationId,
                            i = t.text,
                            o = t.attachment,
                            a = t.location,
                            c = r.Gt({ id: n }),
                            f = r._.Wt.V(e);
                        return M.a.all([c, f]).then((function(t) {
                            var n = t[0],
                                e = t[1],
                                c = { id: void 0, conversationId: e.id, type: "UserMessage", readBy: [], senderId: n.id, text: i, origin: "web", attachment: o, location: a, createdAt: void 0 },
                                f = { text: i, custom: {} },
                                h = new G.c("SendMessageEvent.override", (function(t) {
                                    var n = t.text,
                                        e = t.custom;
                                    n && (s(n, ["string"], "'text' should be a single string value representing the text of the message, got: `" + n + "`"), f.text = n), e && (u(e, ["string"], (function(t) { return 'Field "custom.' + t + '" must be a string.' })), f.custom = e)
                                })),
                                l = { me: n, message: c, conversation: e, override: h.callback };
                            return r.M.emit("sendMessage", l), h.expire(), f
                        })).catch((function(t) { return console.error(t) }))
                    }, this.onShowMoreChats = function(t) {
                        var n = t.amount;
                        r._.Wt.W({ amount: n })
                    }, this._ = t, this.Xt = new at((function() { if (r.Vt) return r.Vt.contentWindow() }));
                    var h = i.dir;
                    !h && document.documentElement.dir && "auto" !== document.documentElement.dir && (h = document.documentElement.dir), this.Qt = { hideHub: f, dir: h }, this.boxType = e, this.Zt = i, this.select(a)
                }
                return t.prototype.contentLoaded = function() { return this.qt.promise }, t.prototype.select = function(t, n) {
                    void 0 === n && (n = {}), s(t, ["null", "undefined", "string", "object"], "Expected 1st parameter to `select` to be a conversation ID, a ConversationBuilder, null, or undefined. More info on https://talkjs.com/docs/Reference/JavaScript_Chat_SDK/Chatbox.html#Chatbox.select", [b]), this.S();
                    var e = this.Zt,
                        i = this.Zt,
                        r = this.Zt,
                        o = e.messageField || {};
                    if (e.messageField && void 0 !== e.messageField.visible && "boolean" != typeof e.messageField.visible && mt("messageField.visible", e.messageField.visible), this.tn = { desktopNotify: z(), dir: this.Qt.dir, htmlPanelOptions: this.nn(), feedFilter: void 0 === i.feedFilter ? {} : i.feedFilter, messageFilter: void 0 === i.messageFilter ? {} : i.messageFilter, useBrowserHistory: void 0 === i.useBrowserHistory || i.useBrowserHistory, translationOptions: this.rn(), highlight: [], chatHeaderState: "profile", theme: this.Zt.theme, messageField: { enterSendsMessage: void 0 === o.enterSendsMessage || o.enterSendsMessage, placeholder: o.placeholder, spellcheck: void 0 !== o.spellcheck && o.spellcheck, visible: void 0 === o.visible || o.visible, autofocus: !1 !== o.autofocus }, view: { mode: this.getMode(), hideHub: this.Qt.hideHub || !1, isInsideMobileApp: G.i(), captureKeyboardEvents: !!e.captureKeyboardEvents, showChatHeader: void 0 === e.showChatHeader || e.showChatHeader, showFeedHeader: void 0 === i.showFeedHeader || i.showFeedHeader, searchInConv: this._.sn(3), chatTitleMode: void 0 === e.chatTitleMode ? "participants" : e.chatTitleMode, chatSubtitleMode: void 0 === e.chatSubtitleMode ? "subject" : null === e.chatSubtitleMode ? "none" : e.chatSubtitleMode, feedConversationTitleMode: void 0 === i.feedConversationTitleMode ? "auto" : i.feedConversationTitleMode, showCloseInHeader: void 0 === r.showCloseInHeader ? "auto" : r.showCloseInHeader, legacyNoChatsPage: this._.sn(2), timeZone: gt.determine().name(), showMobileBackButton: void 0 === i.showMobileBackButton || i.showMobileBackButton } }, this.an = this.un(t), this.cn = this.fn(t, n), this.Vt) {
                        var a = { localSettings: this.tn };
                        this.Vt.nav(this.cn, this.an, a)
                    }
                    var u = n.messageSuggestion || e.messageSuggestion;
                    u && this.Jt("setText", [u], "[TalkJS] Unexpected error")
                }, t.prototype.createHtmlPanel = function(t) {
                    this.S();
                    var n = new dt(this, t),
                        e = t.conversation;
                    e ? this.Ht.perConv["object" == typeof e ? e.id : e] = n : this.Ht.global = n;
                    var i = n.Kt();
                    return this.xt(), i.then((function() { return n }))
                }, t.prototype.setTranslationEnabledForConversation = function(t, n) {
                    var e;
                    e = "string" == typeof t ? A(t) : t.internalId, this.tn.translationOptions.perConv[e] = n, this.hn({ translationOptions: this.tn.translationOptions })
                }, t.prototype.setTranslationEnabledDefault = function(t) { this.tn.translationOptions.global = t, this.hn({ translationOptions: this.tn.translationOptions }) }, t.prototype.on = function(t, n) { this.S(), this.M.on(t, n) }, t.prototype.off = function(t, n) { this.M.off(t, n) }, t.prototype.ln = function(t, n) { return G.l(this.Zt, t), this.hn(n) }, t.prototype.hn = function(t) { var n = this; return G.l(this.tn, t), this.contentLoaded().then((function() { return n.Vt.patchLocalSettings(t) })) }, t.prototype.vn = function(t) { var n = this; return this.contentLoaded().then((function() { return n.Vt.patchQueryString(t) })) }, t.prototype.dn = function(t) { var n = this; return this.S(), this.contentLoaded().then((function() { var e = n.Vt; if (null == e ? void 0 : e.isZombie()) throw new Error(t); return e })) }, t.prototype.Jt = function(t, n, e) { return this.dn(e).then((function(e) { return e.post(t, n) })) }, t.prototype.Yt = function(t, n, e) { return this.dn(e).then((function(e) { return e.ask(t, n) })) }, t.prototype.zt = function(t, n) {
                    var e, i = this;
                    G.l(this.tn[t], n);
                    var r = ((e = {})[t] = this.tn[t], e);
                    return this.contentLoaded().then((function() { return i.Vt.patchLocalSettings(r) }))
                }, t.prototype.setPresence = function(t) {
                    var n = void 0 === t ? {} : t,
                        e = n.visible,
                        i = n.custom;
                    this.S(), s(e, ["undefined", "boolean"], "UIBox.setPresence: field visible has to be boolean."), i && u(i, ["string"], (function(t) { return 'UIBox.setPresence: Field "custom.' + t + '" must be a string.' })), this.Vt.post("setPresence", [{ custom: i, visible: e }])
                }, t.prototype.setHighlightedWords = function(t) { return this.hn({ highlight: t }) }, t.prototype.pn = function(t) { return this.M.supports(t) }, t.prototype.Lt = function() { return this.Vt ? this.Vt.contentWindow() : null }, t.prototype.un = function(t) {
                    var n = this,
                        e = { me: this._.me };
                    return "object" == typeof t && null !== t && (e.others = t.participants.filter((function(t) { return t.user.id !== n._.me.id })).map((function(t) { return t.user })), e.conversation = { internalId: t.internalId, id: t.id, participants: t.participants, subject: t.subject, custom: t.custom, welcomeMessages: t.welcomeMessages, photoUrl: t.photoUrl, topicId: t instanceof I ? t.topicId : void 0 }), e
                }, t.prototype.fn = function(t, n) { var e = n.asGuest ? "/g" : ""; return null === t ? "inbox/chats/hubOnly" : "object" == typeof t ? "inbox/" + t.internalId + e : "string" == typeof t ? "inbox/" + A(t) + e : "inbox/chats" }, t.prototype.S = function() { if (this._.S(), this.$t) throw new Error("[TalkJS] This UI object has been destroyed, and you cannot use it anymore. This object has been deleted before (either by calling destroy(), by a user closing the popup, or by external code removing the TalkJS Iframe from the DOM), and is now in an invalid state. Please call createInbox, createChatbox or createPopup again.") }, t.prototype.mn = function(t) {
                    var n = this;
                    this.S();
                    var e = t,
                        i = e && e.jquery && e.length ? e[0] : t;
                    if (this.Vt) throw new Error("[TalkJS] Cannot mount UI more than once. Please call createInbox, createChatbox or createPopup again if you want to create a new UI.");
                    if (!i) throw new Error("[TalkJS] Cannot mount UI: container element not found");
                    if (!this.cn) throw new Error("[TalkJS] Internal Error: cannot mount UI without URL");
                    var r = this._.legacyThemePath;
                    return r ? G.g("GET", r).then((function(t) { return n.tn.rawV1Theme = t.replace(/\/\*[^@]+?\*\//gm, "") })).then((function() { return n.mountIframe(i) })).then((function() { return n.qt.promise })) : (this.mountIframe(i), this.qt.promise)
                }, t.prototype.rn = function() { return this.tn && this.tn.translationOptions ? this.tn.translationOptions : ("auto" !== this.Zt.translateConversations && s(this.Zt.translateConversations, ["object[]", "string[]", "boolean", "undefined"], "translateConversations should either be a boolean or an array of ConversationBuilders or conversation ids as strings."), "auto" !== this.Zt.showTranslationToggle && s(this.Zt.showTranslationToggle, ["boolean", "undefined"], 'showTranslationToggle should either be a boolean or "auto".'), Array.isArray(this.Zt.translateConversations) ? { global: !1, perConv: Object(Tt.b)(this.Zt.translateConversations, (function(t) { return "string" == typeof t ? [A(t), !0] : [t.internalId, !0] })), showToggle: this.Zt.showTranslationToggle || !1 } : { global: this.Zt.translateConversations || !1, perConv: {}, showToggle: this.Zt.showTranslationToggle || !1 }) }, t.prototype.nn = function() {
                    var t = function(t) { return { show: t.show, url: t.url, height: t.height } },
                        n = this.Ht,
                        e = n.global,
                        i = n.perConv,
                        r = { perConv: {} };
                    for (var o in e && (r.global = t(e.Mt)), i) r.perConv[o] = t(i[o].Mt);
                    return r
                }, t.prototype.xt = function() { this.hn({ htmlPanelOptions: this.nn() }) }, t.prototype.On = function() { this.Xt.listen(this.Vt, this.onShowImagePopup, "showImagePopup"), this.Xt.listen(this.Vt, this.onGetCurrentLocation, "getCurrentLocation"), this.Xt.listen(this.Vt, this.onOpenExternalLink, "openExternalLink"), this.Xt.listen(this.Vt, this.onShowMoreChats, "showMoreChats"), this.Xt.listen(this.Vt, this.onSendMessage, "sendMessage"), this.Xt.listen(this.Vt, this.onUIBoxFocusChange, "uiBoxFocusChange"), this.Xt.listen(this.Vt, this.onHasParentFocus, "hasParentFocus"), this.Xt.listen(this.Vt, this.onTranslationToggled, "translationToggled"), this.Xt.listen(this.Vt, this.onKeyup, "keyup") }, t.prototype.mountIframe = function(t) {
                    var n = this,
                        e = Object(lt.a)().height,
                        i = { dbSyncData: this.an, localSettings: this.tn, clientHeight: e, sessionId: this.sessionId, thirdparties: this.Zt.thirdparties, signature: this._.signature, externalUserId: this._.me.id };
                    if (this.Vt = new ct(this._.appId, this._.me.internalId, this.cn, i), this.bn(), this.On(), "full" === this.tn.view.mode) {
                        var r = void 0;
                        if (this._.sn(1)) {
                            var o = function(t) {
                                var n = document.createElement("div");
                                At(t, n);
                                var e = t.style.boxSizing;
                                t.style.boxSizing = "content-box";
                                var i = parseInt(getComputedStyle(t).height);
                                return t.style.boxSizing = e, At(n, t), i > 1
                            }(t);
                            r = function(e) { e.width = "100%", n.Tn(t, e, o), e.marginLeft = "auto", e.marginRight = "auto", e.visibility = "visible", "ti8AJFWH" !== n._.appId && "LfC1CcQC" !== n._.appId && (e.minHeight = "500px") }
                        } else r = function(t) { t.width = "100%", t.height = "100%", t.marginLeft = "auto", t.marginRight = "auto", t.visibility = "visible" };
                        this.Vt.mount(t, r)
                    } else this.Vt.mount(t, (function(t) { t.width = t.height = "0", t.minWidth = t.maxWidth = t.minHeight = t.maxHeight = "100%", t.visibility = "visible" }));
                    this._.N.then((function(t) { n.gn = t.makeXdmServer((function() { return n.Vt.contentWindow() })) }))
                }, t.prototype.Tn = function(t, n, e) {
                    if (e) n.height = "100%";
                    else {
                        var i = t.getBoundingClientRect().top + window.pageYOffset,
                            r = window.innerHeight,
                            o = r - i;
                        if (window.innerWidth >= 1010) {
                            var s = getComputedStyle(t);
                            o -= parseInt(s.paddingTop) + parseInt(s.paddingBottom) || 10
                        }
                        n.height = o > 500 ? Math.round(o) + "px" : Math.round(.75 * r) + "px"
                    }
                }, t.prototype.bn = function() {
                    var t = this;
                    G.k("__talkjs:hello", (function() { t.Vt.cleanupContainer(), t.qt.resolve(void 0) }))
                }, t.prototype.onShowImagePopup = function(t) {
                    ! function(t) {
                        var n = document.getElementById("___talkjs_image_popup");
                        n && n.parentNode.removeChild(n);
                        var e, i, o = Math.min(window.innerWidth, window.innerHeight) < 500 ? { padding: "0", maxWidth: "100%", maxHeight: "100%" } : { padding: "5px", maxWidth: "95%", maxHeight: "95%", background: "#fff" },
                            s = ht("div", { tabIndex: -1, style: { boxSizing: "border-box", padding: "0", backgroundColor: "rgba(0,0,0,0.85)", opacity: "0", transition: "opacity 0.2s ease-out", overflow: "hidden", position: "fixed", zIndex: "54321", left: "0", top: "0", right: "0", bottom: "0" } }, [ht("img", { src: t, style: Object(r.a)(Object(r.a)({}, o), { opacity: "0", transition: "opacity 0.1s ease-out", margin: "auto", position: "absolute", top: "0", bottom: "0", right: "0", left: "0" }) }), ht("span", { style: { cursor: "pointer", color: "#fff", font: "4vmin sans-serif", position: "absolute", right: "0px", top: "0px", padding: "10px" } }, [(e = "â¨¯", document.createTextNode(e))])]),
                            a = function(t) { t.preventDefault(), s.parentNode.removeChild(s), document.body.removeEventListener("keydown", i) };
                        i = function(t) { return 27 === t.keyCode && a(t) }, s.addEventListener("click", a), document.body.addEventListener("keydown", i);
                        var u = window.requestAnimationFrame || function(t) { return setTimeout(t, 20) };
                        u((function() { return u((function() { return s.style.opacity = "1" })) })), s.getElementsByTagName("img")[0].onload = function(t) { return t.target.style.opacity = "1" }, document.body.appendChild(s), s.focus()
                    }(t.url)
                }, t.prototype.Gt = function(t) { return this._.N.then((function(n) { return n.getNym(t.id) })).then(y) }, t.prototype.onGetCurrentLocation = function(t) { return new M.a((function(t, n) { navigator.geolocation.getCurrentPosition((function(n) { return t([n.coords.latitude, n.coords.longitude]) }), (function(t) { return n(t.message) })) })) }, t.prototype.onOpenExternalLink = function(t) {
                    var n = t.url;
                    window.open(n, "_system", "location=yes")
                }, t.prototype.onHasParentFocus = function() { return document.hasFocus() }, t.prototype.toggleDesktopNotifications = function(t) { return this._.setDesktopNotificationEnabled(t) }, t.prototype.In = function(t) { return this.hn({ desktopNotify: t }) }, t.prototype.destroy = function() { this.Xt.unlisten(this.onShowImagePopup, this.onSendMessage), this.Xt.destroy(), this._.forgetUIBox(this), this.M.removeAllListeners(), this.gn && this.gn.destroy(), this.Vt && this.Vt.destroy(), this.$t = !0 }, t.prototype.isZombie = function() { return !this.Vt || this.Vt && this.Vt.isZombie() }, t.prototype.onWindowVisibleChanged = function(t) { this.isZombie() || this.Vt.post("windowVisibleChanged", [t]) }, t.prototype.getMode = function() { if (this.boxType === T.Popup) { if (It() === g.Widget) return "widget"; if (It() === g.Popover) return "popover"; throw new Error("[TalkJS]: Unknown mode.") } return "full" }, t.prototype.setMessageFilter = function(t) { this.S(), Ot("filter", t), this.ln({ messageFilter: t }, { messageFilter: t }) }, t
            }();

        function At(t, n) { for (; t.hasChildNodes();) n.appendChild(t.firstChild) }
        var wt = function(t) {
                function n(n, e, i) {
                    void 0 === e && (e = {});
                    var r = t.call(this, n, e, T.Inbox, i) || this;
                    return r.En = new q({ selectConversation: function(t) {}, conversationSelected: function(t) {}, desktopNotificationToggled: function(t) {} }), r.onSelectConversation = function(t) {
                        var n = y(t.me),
                            e = _(t.conversation),
                            i = w(t.conversation, t.others),
                            o = { stop: !1 },
                            s = new G.c("SelectConversationEvent.preventDefault", (function() { o.stop = !0 }));
                        return r.En.emit("selectConversation", { conversation: e, me: n, others: i, preventDefault: s.callback }), s.expire(), o
                    }, r.onConversationSelected = function(t) {
                        var n = y(t.me);
                        if (null !== t.conversation) {
                            var e = _(t.conversation),
                                i = w(t.conversation, t.others);
                            r.En.emit("conversationSelected", { me: n, conversation: e, other: i[0], others: i, conversationId: t.conversation.id })
                        } else r.En.emit("conversationSelected", { me: n, conversation: null, conversationId: null })
                    }, r.onDesktopNotifyChange = function(t) {
                        var n = t.isEnabled,
                            e = t.appName;
                        Y(n, { locale: r._.kn, alertOnFailure: !0, appName: e }).then((function() { r.En.emit("desktopNotificationToggled", { isEnabled: n }) }), (function() { r._.setDesktopNotificationEnabled(!1) }))
                    }, r
                }
                return Object(r.c)(n, t), n.prototype.mount = function(n) { return t.prototype.mn.call(this, n) }, n.prototype.select = function(n, e) {
                    if (null == e ? void 0 : e.asGuest) throw new Error("[TalkJS] Cannot select a conversation as guest in the Inbox UI. Please use a Popup or a Chatbox.");
                    t.prototype.select.call(this, n, e)
                }, n.prototype.On = function() { t.prototype.On.call(this), this.Xt.listen(this.Vt, this.onConversationSelected, "selectedConversationChanged"), this.Xt.listen(this.Vt, this.onSelectConversation, "selectConversation"), this.Xt.listen(this.Vt, this.onDesktopNotifyChange, "desktopNotifyChanged") }, n.prototype.setFeedFilter = function(t) { mt("filter", t), this.ln({ feedFilter: t }, { feedFilter: t }) }, n.prototype.on = function(n, e) { this.S(), t.prototype.pn.call(this, n) ? t.prototype.on.call(this, n, e) : this.En.on(n, e) }, n.prototype.off = function(n, e) { t.prototype.pn.call(this, n) ? t.prototype.off.call(this, n, e) : this.En.off(n, e) }, n.prototype.destroy = function() { this.Xt.unlisten(this.onConversationSelected, this.onDesktopNotifyChange), t.prototype.destroy.call(this), this.En.removeAllListeners() }, n
            }(kt),
            yt = function(t) {
                function n(n, e, i) {
                    var r = t.call(this, n, { hideHub: !0, selectedConversation: e }, T.Popup, i) || this;
                    return r.conversation = e, r.An = i, r.wn = new q({ close: function(t) {}, open: function(t) {} }), r.yn = !1, r._n = function() {
                        if (r.$t) throw new Error("[TalkJS] Can't hide a popup that's been destroyed. Please create and mount a new one.");
                        var t = r.Sn();
                        r.Nn(t), r.wn.emit("close", {})
                    }, r
                }
                return Object(r.c)(n, t), n.prototype.select = function(n, e) { this.conversation = n, e && void 0 !== e.asGuest && s(e.asGuest, ["boolean"], 'Chatbox#select: field "asGuest" is given but not a boolean.'), t.prototype.select.call(this, n, e) }, n.prototype.On = function() { t.prototype.On.call(this), this.Xt.listen(this.Vt, this._n, "closePopover") }, n.prototype.mount = function(n) {
                    var e = this,
                        i = (void 0 === n ? { show: !0 } : n).show,
                        r = this.Dn(i),
                        o = r[0],
                        s = r[1];
                    return document.body.insertBefore(o, document.body.firstChild), t.prototype.mn.call(this, s).then((function() { i ? e.Pn(r) : e.setPresence({ visible: !1 }) }))
                }, n.prototype.destroy = function() {
                    var n = this.jn();
                    n && n[0] && document.body.removeChild(n[0]), this.restorePageHeight(), this.forgetMe(), this.Xt.unlisten(this._n), this._.forgetUIBox(this), t.prototype.destroy.call(this)
                }, n.prototype.show = function() {
                    this.S();
                    var t = this.Sn();
                    this.Pn(t)
                }, n.prototype.hide = function() {
                    this.S();
                    var t = this.Sn();
                    this.Nn(t)
                }, n.prototype.on = function(n, e) { this.S(), t.prototype.pn.call(this, n) ? t.prototype.on.call(this, n, e) : this.wn.on(n, e) }, n.prototype.off = function(n, e) { t.prototype.off.call(this, n, e), this.wn.off(n, e) }, n.prototype.jn = function() {
                    var t = document.getElementById("__talkjs_popup_container_" + this.sessionId);
                    if (t) {
                        var n = t.getElementsByTagName("span")[0],
                            e = t.getElementsByClassName("__talkjs_launcher")[0];
                        return [t, n, e]
                    }
                }, n.prototype.Sn = function() { var t = this.jn(); if (!t) { throw Error("[TalkJS] Unexpected error: Could not find popup container. Maybe something, other than TalkJS, removed it from the DOM?") } return t }, n.prototype.Pn = function(t) {
                    for (var n = t[0], e = t[1], i = t[2], r = 0, o = this._.Cn(T.Popup); r < o.length; r++) {
                        var s = o[r];
                        this !== s && s.hide()
                    }
                    e.style.display = "", i && (i.className = i.className.replace("closed", "open"), i.style.display = "", i.setAttribute("aria-label", "Close chat popup")), n.style.display = "", this.rememberMe(), It() === g.Popover && this.fixPageHeight(n), this.yn = !0, this.setPresence({ visible: !0 }), this.messageField.focus()
                }, n.prototype.Nn = function(t) {
                    var n = t[0],
                        e = t[1],
                        i = t[2];
                    "always" === this.An.launcher ? (e.style.display = "none", i && (i.className = i.className.replace("open", "closed"), i.setAttribute("aria-label", "Open chat popup"))) : n.style.display = "none", this.restorePageHeight(), this.forgetMe(), this.yn = !1, this.setPresence({ visible: !1 })
                }, n.prototype.Dn = function(t) {
                    var n = this,
                        i = document.createElement("span"),
                        r = document.createElement("link");
                    r.type = "text/css", r.rel = "stylesheet";
                    var o = e(490);
                    r.href = C + "//" + j + o;
                    var s, a = document.createElement("div");
                    a.id = "__talkjs_popup_container_" + this.sessionId, i.style.display = "none", i.className = "__talkjs_popup", a.appendChild(r), a.appendChild(i);
                    var u = [a, i, void 0];
                    return "never" !== this.An.launcher && (s = document.createElement("a"), u[2] = s, s.href = "#", s.className = "__talkjs_launcher " + (t ? "open" : "closed"), (t || "close-only" === this.An.launcher) && (s.style.display = "none"), s.id = "__talkjs_launcher", s.addEventListener("click", (function(t) { t.preventDefault(), t.target.className.match(/open/) ? (n.Nn(u), n.wn.emit("close", {})) : (n.Pn(u), n.wn.emit("open", {})) })), a.appendChild(s)), u
                }, n.prototype.rememberMe = function() {
                    if (this.An.keepOpen) {
                        var t;
                        t = this.conversation instanceof I || this.conversation instanceof E ? this.conversation.id : this.conversation;
                        var n = JSON.stringify({ conversationId: t, options: this.An });
                        G.m(_t(this._.appId, this._.me.id, "v2-"), n)
                    }
                }, n.prototype.fixPageHeight = function(t) {
                    var n = document.body,
                        e = document.documentElement;
                    this.Mn = { Rn: n.style.overflow, Fn: n.style.height, Kn: n.style.width, Un: n.style.position, xn: window.scrollY, Bn: window.scrollX, Ln: e.style.height, Jn: e.style.overflow }, t.style.top = t.style.left = "0px", window.scrollTo(0, 0), n.style.height = e.style.height = "100%", n.style.width = "100%", e.style.overflow = n.style.overflow = "hidden", n.style.position = "relative"
                }, n.prototype.restorePageHeight = function() {
                    if (this.Mn) {
                        var t = document.body,
                            n = document.documentElement;
                        t.style.overflow = this.Mn.Rn, t.style.width = this.Mn.Kn, t.style.height = this.Mn.Fn, t.style.position = this.Mn.Un, n.style.height = this.Mn.Ln, n.style.overflow = this.Mn.Jn, window.scrollTo(this.Mn.Bn, this.Mn.xn)
                    }
                }, n.prototype.forgetMe = function() { G.f(_t(this._.appId, this._.me.internalId)), G.f(_t(this._.appId, this._.me.id, "v2-")) }, n
            }(kt);

        function _t(t, n, e) { return void 0 === e && (e = ""), "talkjs-popup-" + e + n + "-" + t }
        var St, Nt = function(t) {
                function n(n, e, i) { var r = (void 0 === e ? {} : e).selectedConversation; return t.call(this, n, { hideHub: !0, selectedConversation: r }, T.Chatbox, i) || this }
                return Object(r.c)(n, t), n.prototype.mount = function(n) { return t.prototype.mn.call(this, n) }, n.prototype.destroy = function() { t.prototype.destroy.call(this) }, n.prototype.select = function(n, e) { e && void 0 !== e.asGuest && s(e.asGuest, ["boolean"], 'Chatbox#select: field "asGuest" is given but not a boolean.'), t.prototype.select.call(this, n, e) }, n
            }(kt),
            Dt = e(8);
        St = e(491).default;
        var Pt = {};
        for (var jt in St) Pt[jt] = new Dt.a({ values: St[jt] });
        var Ct = Pt,
            Mt = function() {
                function t(n) {
                    var e = this,
                        i = n.appId,
                        r = n.me,
                        o = n.signature;
                    if (this.M = new q({ message: function(t) {}, desktopNotificationClicked: function(t) {} }), this.Yn = [], this.zn = !0, this.vt = Object(G.n)(), this.C = function(t) {
                            if (e.M.handles("desktopNotificationClicked")) setTimeout((function() { e.M.emit("desktopNotificationClicked", { conversation: t }) }), 0);
                            else { var n = e.getInboxes(); if (1 === n.length) n[0].select(t.id) }
                        }, this.Hn = ut[t.$n], !this.Hn) throw new Error("[TalkJS] Unexpected error at TalkJS startup.");
                    if (!(r instanceof O)) throw new Error("[TalkJS] The `me` property in the Session#constructor has to be of type Talk.User. For example:\n\nvar user = new Talk.User(data);\nvar session = new Talk.Session({\n    me: user,\n    appId: ...\n})\n\nFor more information check our documentation https://talkjs.com/docs/Reference/JavaScript_Chat_SDK/Session.html#Session.constructor");
                    this.appId = s(i, ["string"], "Session: required field 'appId' is not given, is not a string or it's empty.", [f, function(t) { return "YOUR_APP_ID" !== t }]), this.me = s(r, ["object"], "Session: required field 'me' is not given or not a Talk.User object"), this.signature = s(o, ["string", "undefined"], "Session: optional field 'signature' is not a string.", [f]), this.N = function(t, n, e, i) {
                        var r = new G.b([
                                ["signature", e]
                            ]),
                            o = st(t, "bokens/" + encodeURIComponent(n.id) + "?" + r.toString());
                        return Object(G.g)("GET", o).then((function(t) { return JSON.parse(t) })).then((function(e) { return new ot(e.boken, n, t, e.appLocale, i) }))
                    }(this.appId, this.me, this.signature, this.vt), this.Wt = new V(this.N, (function(t) { return e.M.emit("message", t) }), this.C), this.unreads = this.Wt, new Q(this.N, this.vt), this.qn(), this.Gn(), this.kn = Dt.a.decide(Ct, "en", this.me.locale), this.N.then((function(t) { return t.getNym(e.me.internalId).then((function(n) { n.locale === e.me.locale && null !== n.locale || (e.kn = Dt.a.decide(Ct, t.appLocale, n.locale)) })) }))
                }
                return t.prototype.hasValidCredentials = function() { return this.S(), this.N.then((function() { return !0 }), (function() { return !1 })) }, t.prototype.qn = function() {
                    var t = G.h("talkjs-popup-" + this.me.internalId + "-" + this.appId),
                        n = G.h("talkjs-popup-v2-" + this.me.id + "-" + this.appId);
                    if (t || n) {
                        if (n) {
                            var e = JSON.parse(n),
                                i = e.conversationId,
                                r = e.options;
                            this.createPopup(i, r).mount({ show: !0 })
                        }
                        if (t) this.createPopup(t).mount({ show: !0 })
                    }
                }, t.prototype.Gn = function() {
                    var t = this,
                        n = function(n) { for (var e = 0, i = t.Yn; e < i.length; e++) { i[e].onWindowVisibleChanged(n) } };
                    window.addEventListener("focus", (function() { return n(!0) })), window.addEventListener("blur", (function() { return n(!1) }))
                }, t.prototype.getOrStartConversation = function(t, n) {
                    var e = void 0 === n ? {} : n,
                        i = e.participants,
                        r = e.topicId,
                        o = e.subject,
                        a = e.custom,
                        u = e.welcomeMessages,
                        c = e.photoUrl;
                    if (this.S(), t instanceof O) {
                        var h = t,
                            l = [this.me, h];
                        return this.getOrStartConversation(k(this.me, h, r), { participants: l, topicId: r, subject: o, welcomeMessages: u, custom: a, photoUrl: c })
                    }
                    var v = t;
                    s(v, ["string"], "conversationId cannot be empty", [f]);
                    var p = (i = i || []).map((function(t) { return new d(t) }));
                    return p = this.Wn(p, this.me), new I({ conversationId: v, participants: p, topicId: r, subject: o, welcomeMessages: u, custom: a, photoUrl: c })
                }, t.prototype.Wn = function(t, n) { var e, i = this; return t.filter((function(t) { return t.user.id === i.me.id }))[0] ? t : (e = new d(this.me), Object(r.g)([e], t, !0)) }, t.prototype.getOrCreateConversation = function(t) { return this.S(), new E(t, this) }, t.prototype.createInbox = function(t) {
                    void 0 === t && (t = {}), s(t, ["object"], "Expected 1st parameter to createInbox, if present, to be an object. More info on https://talkjs.com/docs/Reference/JavaScript_Chat_SDK/Session.html#Session.createInbox"), s(t.selected, ["null", "undefined", "string", "object"], "Expected the createInbox `selected` option, if present, to be a conversation ID, a ConversationBuilder or null. More info on https://talkjs.com/docs/Reference/JavaScript_Chat_SDK/Session.html#Session.createInbox", [b]), this.S(), t.feedFilter && mt("feedFilter", t.feedFilter), t.messageFilter && Ot("feedFilter", t.messageFilter);
                    var n = t.selected,
                        e = new wt(this, { selectedConversation: n }, t);
                    return this.rememberUIBox(e), e
                }, t.prototype.createChatbox = function(t, n) {
                    var e, i;
                    void 0 === n && (n = {}), b(t) ? (e = t, i = n) : (e = void 0, i = null != t ? t : n), s(e, ["null", "undefined", "string", "object"], "Expected 1st parameter to createChatbox to be a conversation ID, a ConversationBuilder, null, or undefined. More info on https://talkjs.com/docs/Reference/JavaScript_Chat_SDK/Session.html#Session.createChatbox", [b]), s(i, ["object"], "Expected 2nd parameter to createChatbox, if present, to be an object. More info on https://talkjs.com/docs/Reference/JavaScript_Chat_SDK/Session.html#Session.createChatbox"), this.S();
                    var r = new Nt(this, { selectedConversation: e }, i);
                    return this.rememberUIBox(r), r
                }, t.prototype.createPopup = function(t, n) {
                    var e, i;
                    void 0 === n && (n = {}), b(t) ? (e = t, i = n) : (e = void 0, i = null != t ? t : n), s(e, ["null", "undefined", "string", "object"], "Expected 1st parameter to createPopup to be a conversation ID, a ConversationBuilder, null, or undefined. More info on https://talkjs.com/docs/Reference/JavaScript_Chat_SDK/Session.html#Session.createPopup", [b]), s(i, ["object"], "Expected 2nd parameter to createPopup, if present, to be an object. More info on https://talkjs.com/docs/Reference/JavaScript_Chat_SDK/Session.html#Session.createPopup"), this.S();
                    var o = { keepOpen: !this.sn(4), launcher: this.sn(5) ? "always" : "close-only" };
                    i = Object(r.a)(Object(r.a)({}, o), i);
                    var a = new yt(this, e, i);
                    return this.rememberUIBox(a), a
                }, t.prototype.rememberUIBox = function(t) { this.Yn.push(t) }, t.prototype.syncThemeForLocalDev = function(t) { this.S(), G.j(this.appId) ? console.warn("[TalkJS]: syncThemeForLocalDev does not work in live mode, please copy your theme to the TalkJS dashboard!") : this.legacyThemePath = t }, t.prototype.forgetUIBox = function(t) {
                    var n = this.Yn.indexOf(t);
                    n >= 0 && this.Yn.splice(n, 1)
                }, t.prototype.setDesktopNotificationEnabled = function(t, n) {
                    var e = this,
                        i = (void 0 === n ? {} : n).alertOnFailure,
                        r = void 0 === i || i;
                    this.S();
                    var o = function(t) { e.Xn(), e.Yn.forEach((function(n) { return n.In(t) })) };
                    return Y(t, { locale: this.kn, alertOnFailure: r }).then((function() { return o(t) })).catch((function(t) { throw o(!1), t }))
                }, t.prototype.Xn = function() { this.Yn.filter((function(t) { return t.isZombie() })).forEach((function(t) { return t.destroy() })) }, t.prototype.registerDevice = function(t) {
                    var n = this,
                        e = t.platform,
                        i = t.pushRegistrationId;
                    return this.S(), e = s(e, ["string"], 'Session.registerDevice: Platform should be a string containing "ios" or "android" values.', [l]), i = s(i, ["string"], "Session.registerDevice: Push registration id should be a not empty string.", [f]), this.N.then((function(t) { return t.put("/nyms/" + n.me.internalId + "/push_registration", { platform: e, pushRegistrationId: i }) })).then((function() {})).catch((function(t) { throw console.error("[TalkJS]", "Something went wrong: Cannot register this device.\n\nNote that you must ensure that the user exists in the TalkJS database before you call this method. The simplest way to do that is to call it after you mount a chatbox, inbox or popup."), t }))
                }, t.prototype.unregisterDevice = function() { var t = this; return this.S(), this.N.then((function(n) { return n.delete("/nyms/" + t.me.internalId + "/push_registration") })).then((function() {})).catch((function(t) { throw console.error("[TalkJS]", "Cannot unregister this device. Please contact us to get more information."), t })) }, t.prototype.on = function(t, n) { this.S(), this.M.on(t, n) }, t.prototype.off = function(t, n) { this.M.off(t, n) }, t.prototype.destroy = function() {
                    this.zn = !1;
                    for (var t = 0, n = this.Yn; t < n.length; t++) { n[t].destroy() }
                    this.Wt.st(), this.M.removeAllListeners(), this.N.then((function(t) { return t.disconnect() }))
                }, t.prototype.getPopups = function() { return this.Cn(T.Popup) }, t.prototype.getInboxes = function() { return this.Cn(T.Inbox) }, t.prototype.getChatboxes = function() { return this.Cn(T.Chatbox) }, t.prototype.Cn = function(t) { return this.Xn(), this.Yn.filter((function(n) { return n.boxType === t })) }, t.prototype.S = function() { if (!this.zn) throw new Error("[TalkJS] The Talk.Session instance related to this operation has been destroyed, and it cannot be used anymore. Please create a new Session.") }, t.prototype.Vn = function(t) { var n = this; return function(t) { return n.N.then((function(n) { return n.post("/_t", t) })) }(t) }, t.prototype.sn = function(t) { return -1 !== this.Hn.indexOf(t) }, t
            }();
        var Rt = window;
        if (Rt.Talk || (Rt.Talk = {}), Mt.$n = Rt.Talk.v || 0, Rt.Talk.User = O, Rt.Talk.Session = Mt, Rt.Talk.Error = o, Rt.Talk.TalkError = o, Rt.Talk.oneOnOneId = function(t, n) { return t instanceof O && (t = t.id), n instanceof O && (n = n.id), Object(p.a)(JSON.stringify([t, n].sort())) }, Rt.Talk.getAppMetadata = function(t) { var n = st(t, ""); return G.g("GET", n).then((function(t) { return JSON.parse(t) })).then((function(n) { if (n.custom) return { id: t, custom: n.custom }; throw new Error("Unexpected error") })) }, Rt.onTalkLoaded && Rt.onTalkLoaded(), Rt.onTalkUiLoaded && Rt.onTalkUiLoaded(), Rt.Talk.ready) {
            var Ft = M.a.resolve(),
                Kt = Rt.Talk.ready;
            Kt.c.forEach((function(t) {
                var n = t[0],
                    e = t[1],
                    i = t[2];
                Ft.then(n).then(e).catch(i)
            })), Kt.Qn = [], Kt.then = Ft.then.bind(Ft), Kt.catch = Ft.catch.bind(Ft)
        }
    },
    59: function(t, n, e) {
        "use strict";
        var i = function() { var t = void 0; try { t = window.localStorage; var n = "__storage_test__"; return t.setItem(n, n), t.removeItem(n), !0 } catch (n) { return n instanceof DOMException && (22 === n.code || 1014 === n.code || "QuotaExceededError" === n.name || "NS_ERROR_DOM_QUOTA_REACHED" === n.name) && t && 0 !== t.length } return !1 }(),
            r = {};
        i ? (r.setItem = window.localStorage.setItem.bind(window.localStorage), r.getItem = window.localStorage.getItem.bind(window.localStorage), r.removeItem = window.localStorage.removeItem.bind(window.localStorage), r.isSupported = !0) : (r.setItem = function() {}, r.getItem = function() { return null }, r.removeItem = function() {}, r.isSupported = !1), r.set = function(t, n) { return r.setItem(t, JSON.stringify(n)) }, r.get = function(t) { return JSON.parse(r.getItem(t) || "null") }, n.a = r
    },
    67: function(t, n, e) {
        "use strict";
        e.d(n, "b", (function() { return r })), e.d(n, "a", (function() { return o })), e.d(n, "c", (function() { return s }));
        var i = e(58);
        e(50);

        function r(t, n) {
            var e = {};
            return t.forEach((function(t, i) {
                var r = n(t, i),
                    o = r[0],
                    s = r[1];
                e[o] = s
            })), e
        }

        function o(t) { return r(t, (function(t) { return t })) }

        function s(t, n) { return o(Object(i.d)(t, n)) }
    },
    72: function(t, n, e) {
        "use strict";
        e.d(n, "a", (function() { return a })), e.d(n, "b", (function() { return c }));
        var i = e(1),
            r = e(106),
            o = e(42),
            s = window.WebSocket,
            a = function() {
                function t(t, n) { this.Zn = n, this.te = [t, "api", "v0", n.appId, "socket"].join("/"), this.ut = null, this.ft = {} }
                return t.prototype.connect = function(t) { var n = Object(i.a)(Object(i.a)({}, this.Zn), t); try { this.ut = new r.Socket(this.te, { params: n, transport: s }), this.ut.connect() } catch (t) { throw t } }, t.prototype.leaveChannel = function(t) {
                    var n = this.ne(t);
                    this.ft[n].phoenixChannel.leave(), delete this.ft[n]
                }, t.prototype.disconnect = function() { this.ut && (this.ee(), this.ie()) }, t.prototype.ee = function() {
                    for (var t = 0, n = Object.keys(this.ft); t < n.length; t++) {
                        var e = n[t];
                        this.ft[e].phoenixChannel.leave()
                    }
                    this.ft = {}
                }, t.prototype.ie = function() { this.ut && (this.ut.disconnect(void 0, 1e3), this.ut.reconnectTimer.reset(), clearInterval(this.ut.heartbeatTimer)) }, t.prototype.getOrJoin = function(t, n, e, i) {
                    if (void 0 === n && (n = {}), !this.ut) throw new Error("[TalkJS] Socket not connected");
                    var r = this.ne(t),
                        o = this.ft[r];
                    return o || (o = new u(this.ut, r, { initialData: n, onRejoin: e, onJoin: i }), this.ft[r] = o), o.phoenixChannel
                }, t.prototype.ne = function(t) { return t + ":" + this.Zn.appId }, t
            }(),
            u = function(t, n, e) {
                var i = this,
                    r = e.initialData,
                    o = e.onRejoin,
                    s = e.onJoin;
                this.phoenixChannel = t.channel(n, r), this.phoenixChannel.onError((function(t) { return !1 })), this.phoenixChannel.onClose((function(t) { return !1 }));
                var a = void 0;
                this.phoenixChannel.join().receive("ok", (function(t) {
                    var n = a;
                    if (a = (t || {}).backend_instance_id || "not_implemented", void 0 !== n) {
                        var e = n !== a;
                        o && o(i.phoenixChannel, e)
                    }
                })).receive("error", (function(t) { return !1 })), s && s(this.phoenixChannel)
            };

        function c(t, n) {
            return new Promise((function(e, i) {
                t.receive("ok", (function(t) { return e(t) })).receive("error", (function(t) { return t && t.api_error ? i(new o.a(t.api_error)) : i(t) })).receive("timeout", (function() {
                    var t = "[TalkJS] Network issues for " + n + ".";
                    console.warn(t), i(t)
                }))
            }))
        }
    },
    8: function(t, n, e) {
        "use strict";
        e.d(n, "a", (function() { return r }));
        var i = e(1);
        var r = function() {
            function t(t, n) {
                var e = n ? Object(i.a)(Object(i.a)({}, n.values), t.values) : t.values;
                this.values = e, this.meta = t.meta, this.t = function(t, n) { return void 0 === n && (n = void 0), n ? function(t, n) { for (var e in n) t = t.replace("$" + e, n[e]); return t }(e[t], n) : e[t] }
            }
            return t.decide = function(t, n, e) { void 0 === n && (n = "en"); var i = o(t, e); if (i) return i; var r = o(t, n); return r || t.en }, t
        }();

        function o(t, n) { if (n) { var e = t[n = n.replace(/_/g, "-").toLowerCase()]; return e || t[n.substring(0, 2)] } }
    }
});