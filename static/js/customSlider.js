"use strict";
function _instanceof(e, t) {
  return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance]
    ? !!t[Symbol.hasInstance](e)
    : e instanceof t;
}
function _classCallCheck(e, t) {
  if (!_instanceof(e, t))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, t) {
  for (var a = 0; a < t.length; a++) {
    var i = t[a];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(e, i.key, i);
  }
}
function _createClass(e, t, a) {
  return (
    t && _defineProperties(e.prototype, t), a && _defineProperties(e, a), e
  );
}
var BeerSlider = (function () {
    function i(e) {
      var t =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "50",
        a =
          2 < arguments.length && void 0 !== arguments[2]
            ? arguments[2]
            : "udesly-before-after";
      _classCallCheck(this, i),
        (this.start = parseInt(t)
          ? Math.min(100, Math.max(0, parseInt(t)))
          : 50),
        (this.prefix = a),
        (this.element = e),
        this.element.classList.add("udesly-before-after-slider"),
        (this.imageLeft = this.element.querySelector('[image="left"]')),
        (this.imageRight = this.element.querySelector('[image="right"]')),
        (this.labelLeft = this.element.querySelector('[image="left-label"]')),
        (this.labelRight = this.element.querySelector('[image="right-label"]')),
        (this.revealContainerImage = document.createElement("div")),
        this.revealContainerImage.classList.add(
          "".concat(this.prefix, "-reveal"),
        ),
        this.revealContainerImage.appendChild(this.imageLeft),
        this.element.appendChild(this.revealContainerImage),
        (this.range = this.addElement("input", {
          type: "range",
          class: "".concat(this.prefix, "-range"),
          "aria-label": "Percent of revealed content",
          "aria-valuemin": "0",
          "aria-valuemax": "200",
          "aria-valuenow": this.start,
          value: this.start,
          min: "0",
          max: "100",
        })),
        (this.handle = this.element.querySelector('[before-after="handle"]')),
        this.handle.classList.add("udesly-before-after-handle"),
        this.onImagesLoad();
    }
    return (
      _createClass(i, [
        {
          key: "init",
          value: function () {
            this.element.classList.add("".concat(this.prefix, "-ready")),
              this.setImgWidth(),
              this.move(),
              this.addListeners();
          },
        },
        {
          key: "loadingImg",
          value: function (i) {
            return new Promise(function (e, t) {
              i || e();
              var a = new Image();
              (a.onload = function () {
                return e();
              }),
                (a.onerror = function () {
                  return t();
                }),
                (a.src = i);
            });
          },
        },
        {
          key: "loadedBoth",
          value: function () {
            var e = this.imageRight.src,
              t = this.imageLeft.src;
            return Promise.all([this.loadingImg(e), this.loadingImg(t)]);
          },
        },
        {
          key: "onImagesLoad",
          value: function () {
            var e = this;
            this.loadedBoth().then(
              function () {
                e.init();
              },
              function () {
                console.error(
                  "Some errors occurred and images are not loaded.",
                );
              },
            );
          },
        },
        {
          key: "addElement",
          value: function (e, t) {
            var a = document.createElement(e);
            return (
              Object.keys(t).forEach(function (e) {
                a.setAttribute(e, t[e]);
              }),
              this.element.appendChild(a),
              a
            );
          },
        },
        {
          key: "setImgWidth",
          value: function () {
            this.imageLeft.style.width = getComputedStyle(this.element).width;

            // custom height
            let customHeight = this.element.getAttribute("slider-height");
            this.imageLeft.style.height = customHeight;
            this.imageRight.style.height = customHeight;
            this.element.style.height = customHeight;
          },
        },
        {
          key: "addListeners",
          value: function () {
            var t = this;
            ["input", "change"].forEach(function (e) {
              t.range.addEventListener(e, function () {
                t.move();
              });
            }),
              window.addEventListener("resize", function () {
                t.setImgWidth();
              });
          },
        },
        {
          key: "move",
          value: function () {
            (this.revealContainerImage.style.width = "".concat(
              this.range.value,
              "%",
            )),
              (this.handle.style.left = "".concat(this.range.value, "%")),
              this.range.setAttribute("aria-valuenow", this.range.value),
              this.labelRight && 60 < this.range.value
                ? (this.labelRight.style = "opacity: 0;")
                : this.labelLeft && this.range.value < 40
                  ? (this.labelLeft.style = "opacity:0;")
                  : (this.labelLeft && (this.labelLeft.style = "opacity:1;"),
                    this.labelRight && (this.labelRight.style = "opacity: 1;"));
          },
        },
      ]),
      i
    );
  })(),
  style = document.createElement("style");
style.innerHTML = `
    .udesly-before-after-slider{display:inline-block;overflow:hidden;position:relative}
    .udesly-before-after-reveal{left:0;opacity:0;overflow:hidden;position:absolute;right:50%;top:0;transition:opacity 0.35s;z-index:1}
    .udesly-before-after-reveal>:first-child{height:100vh;max-width:none;width:200%}
    .udesly-before-after-range{bottom:0;cursor:grab;height:100vh;left:-1px;margin:0;opacity:0;position:absolute;top:0;touch-action:auto;width:calc(100% + 2px);z-index:2}
    .udesly-before-after-handle{left:50%;pointer-events:none;position:absolute;top:50%;transform:translate3d(-50%,-50%,0);transition:background 0.3s,box-shadow 0.3s,opacity 0.5s 0.25s;z-index:3}
    .udesly-before-after-ready .udesly-before-after-handle,.udesly-before-after-ready .udesly-before-after-reveal{opacity:1}
    .udesly-before-after-ready img{ width: 100%; height: 100vh;}
    .udesly-before-after-ready [image="left"] {position: relative;}
    .udesly-before-after-ready [image="right"] {position: absolute;}
`;
document.head.appendChild(style),
  document.querySelectorAll("[udesly-before-after]").forEach(function (e) {
    var t = Number(e.getAttribute("udesly-before-after")) || 50;
    new BeerSlider(e, t);
  });
