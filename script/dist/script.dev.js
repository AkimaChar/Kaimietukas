"use strict";

window.addEventListener('scroll', function () {
  var h_bg = document.getElementById("bgToScroll");
  h_bg.style.backgroundPositionY = window.pageYOffset - 420 + "px";
  h_bg.style.transform = "translateY(" + window.pageYOffset * -0.07 + "px)";
  h_bg.style.marginTop = window.pageYOffset * -0.1 + "px";

  if (window.pageYOffset != 0) {
    document.getElementById("header").style.backgroundColor = "#ffffffff";
    this.document.querySelector(".logo__text").style.color = "#000";
    var elements = document.querySelectorAll(".nav-bar > a:not(:first-of-type)");
    Array.prototype.forEach.call(elements, function (el, i) {
      el.style.color = "black";
    });
  } else if (window.pageYOffset == 0) {
    document.getElementById("header").style.backgroundColor = "#ffffff00";
    this.document.querySelector(".logo__text").style.color = "#ffffffff";
    var elements = document.querySelectorAll(".nav-bar > a:not(:first-of-type)");
    Array.prototype.forEach.call(elements, function (el, i) {
      el.style.color = "white";
    });
  }
});