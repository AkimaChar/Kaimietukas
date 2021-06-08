"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

window.addEventListener("scroll", function () {
  if (window.pageYOffset != 0) {
    document.getElementById("header").style.backgroundColor = "#ffffffff";
    this.document.querySelector(".logo__text").style.color = "#000";
    var elements = document.querySelectorAll(".nav-bar > a:not(.nav-bar__button--active)");

    _toConsumableArray(elements).forEach(function (el) {
      el.style.color = "black";
    });
  } else if (window.pageYOffset == 0) {
    document.getElementById("header").style.backgroundColor = "#ffffff00";
    this.document.querySelector(".logo__text").style.color = "#ffffffff";

    var _elements = document.querySelectorAll(".nav-bar > a:not(.nav-bar__button--active)");

    _toConsumableArray(_elements).forEach(function (el) {
      el.style.color = "white";
    });
  }
});
var anchors = document.querySelectorAll("a.scroll-to");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      var elements = document.querySelectorAll(".nav-bar > a");

      _toConsumableArray(elements).forEach(function (el) {
        el.classList.remove("nav-bar__button--active");
        el.classList.add("nav-bar__button");
      });

      e.target.classList.add("nav-bar__button--active");
      e.target.style.color = "#ffffffff";
      var blockID = anchor.getAttribute("href");
      var yOffset = document.querySelector('#header').getBoundingClientRect().height;
      var element = document.querySelector(blockID);
      var y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    });
  };

  for (var _iterator = anchors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

$(document).ready(function () {
  $('#open').click(function () {
    $('.burger-menu').toggleClass('show_burger');
  });
  $('#close').click(function () {
    $('.burger-menu').toggleClass('show_burger');
  });
});