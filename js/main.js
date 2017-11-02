"use strict";
! function () {
    if ("3000" !== window.location.port) {
        var e = document.querySelectorAll(".navigation .popover-link"),
            t = void 0;
        for (t = 0; t < e.length; t++) e[t].href.match(/#/g) && (e[t].href = "https://milligram.io/#" + e[t].href.split("#")[1])
    }
}(),
function () {
    if ("3000" !== window.location.port) {
        ! function (e, t, o, n, r, i, c) {
            e.GoogleAnalyticsObject = r, e[r] = e[r] || function () {
                (e[r].q = e[r].q || []).push(arguments)
            }, e[r].l = 1 * new Date, i = t.createElement(o), c = t.getElementsByTagName(o)[0], i.async = 1, i.src = n, c.parentNode.insertBefore(i, c)
        }(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-24389952-15", "auto"), ga("send", "pageview")
    }
}(),
function () {
    if ("localhost" !== window.location.hostname) {
        ! function (e, t, o, n, r, i, c, a) {
            a = t.createElement(o), a.async = 1, a.src = n, a.setAttribute("data-org-id", r), a.setAttribute("data-app-id", i), c = t.getElementsByTagName(o)[document.querySelectorAll(o).length - 1], c.parentNode.insertBefore(a, c)
        }(window, document, "script", "https://d3tvtfb6518e3e.cloudfront.net/3/opbeat.min.js", "bfc2d2b1867d4ade86c9030c6985cfa2", "39e235ed58")
    }
}(),
function () {
    function e(e) {
        for (r = 0; r < n.length; r++) n[r].classList.remove("popover-open")
    }

    function t(t) {
        t.preventDefault(), document.querySelector(this.getAttribute("href")).classList.contains("popover-open") ? document.querySelector(this.getAttribute("href")).classList.remove("popover-open") : (e(), document.querySelector(this.getAttribute("href")).classList.add("popover-open")), t.stopImmediatePropagation()
    }
    var o = document.querySelectorAll("[data-popover]"),
        n = document.querySelectorAll(".popover"),
        r = void 0;
    for (r = 0; r < o.length; r++) o[r].addEventListener("click", t);
    document.addEventListener("click", e)
}(),
function () {
    var e = document.querySelectorAll(".code-content"),
        t = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        },
        o = void 0;
    for (o = 0; o < e.length; o++) e[o].innerHTML = function (e) {
        return String(e).replace(/[&<>"']/g, function (e) {
            return t[e]
        })
    }(e[o].innerHTML);
    ! function (e, t, o, n, r, i) {
        r = t.createElement(o), r.async = 1, r.src = "https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js", i = t.getElementsByTagName(o)[document.querySelectorAll(o).length - 1], i.parentNode.insertBefore(r, i)
    }(window, document, "script")
}(),
function () {
    function e() {
        this.status < 200 && this.status >= 400 && console.error("[error] There was a connection error of some sort"), i = JSON.parse(this.response).version, t && (t.innerHTML = t.innerHTML + " <br><i><small>Currently v" + i + "</small></i>"), o.setAttribute("href", "https://github.com/" + r + "/archive/v" + i + ".zip")
    }
    var t = document.querySelector(".description"),
        o = document.querySelector(".download"),
        n = new window.XMLHttpRequest,
        r = "milligram/milligram",
        i = void 0;
    t && o && (n.open("GET", "//cdn.rawgit.com/" + r + "/master/package.json", !0), n.onload = e, n.send())
}();