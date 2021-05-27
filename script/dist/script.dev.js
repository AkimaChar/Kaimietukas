"use strict";

window.addEventListener('scroll', function () {
  var h_bg = document.getElementById("bgToScroll");
  h_bg.style.backgroundPositionY = window.pageYOffset - 420 + "px";
  h_bg.style.transform = "translateY(" + window.pageYOffset * 0.1 + "px)";
});