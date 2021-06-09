window.addEventListener("scroll", function () {
  if (window.pageYOffset != 0) {
    document.getElementById("header").style.backgroundColor = "#ffffffff";
    this.document.querySelector(".logo__text").style.color = "#000";
    document.querySelector(".black-line").style.fill = "black";
    const elements = document.querySelectorAll(
      ".nav-bar > a:not(.nav-bar__button--active)"
    );

  } else if (window.pageYOffset == 0) {
    document.getElementById("header").style.backgroundColor = "#ffffff00";
    this.document.querySelector(".logo__text").style.color = "#ffffffff";
    const path =  document.querySelectorAll(".cross > svg > path");
    [...path].forEach((el) => {
      el.style.fill = "black";
    });
    $(window).on('resize', function () {
      if ($(window).width() < 570) {

        const elements = document.querySelectorAll(
          ".nav-bar > a:not(.nav-bar__button--active)"
        );
        [...elements].forEach((el) => {
          el.style.color = "white";
        });
      }
    });
  }
});



const anchors = document.querySelectorAll("a.scroll-to");

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const elements = document.querySelectorAll(".nav-bar > a");
    [...elements].forEach((el) => {
      el.classList.remove("nav-bar__button--active");
      el.classList.add("nav-bar__button");
    });
    e.target.classList.add("nav-bar__button--active");
    e.target.style.color = "#ffffffff";

    const blockID = anchor.getAttribute("href");

    const yOffset = document.querySelector('#header').getBoundingClientRect().height;
    const element = document.querySelector(blockID);
    const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  });
}


$(document).ready(function () {
  $('#open').click(function () {
    $('.burger-menu').toggleClass('show_burger');
    $('.header').toggleClass('show_header');
  })
  $('#close').click(function () {
    $('.header').toggleClass('show_header');
    $('.burger-menu').toggleClass('show_burger');
  })
})