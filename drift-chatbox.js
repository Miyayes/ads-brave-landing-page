"use strict";
!function() {
    var t = window.driftt = window.drift = window.driftt || [];
    if (!t.init) {
    if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
    t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ],
    t.factory = function(e) {
        return function() {
        var n = Array.prototype.slice.call(arguments);
        return n.unshift(e), t.push(n), t;
        };
    }, t.methods.forEach(function(e) {
        t[e] = t.factory(e);
    }), t.load = function(t) {
        var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
        o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
        var i = document.getElementsByTagName("script")[0];
        i.parentNode.insertBefore(o, i);
    };
    }
}();
drift.config({
  iframeSandbox: 'allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms'
});
drift.SNIPPET_VERSION = '0.3.1';
drift.load('khvvgg3y6e8w');