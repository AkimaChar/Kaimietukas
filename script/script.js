window.addEventListener("scroll", function () {
  if (window.pageYOffset != 0) {
    document.getElementById("header").style.backgroundColor = "#ffffffff";
    this.document.querySelector(".logo__text").style.color = "#000";
    var elements = document.querySelectorAll(
      ".nav-bar > a:not(.nav-bar__button--active)"
    );
    [...elements].forEach((el) => {
      el.style.color = "black";
    });
  } else if (window.pageYOffset == 0) {
    document.getElementById("header").style.backgroundColor = "#ffffff00";
    this.document.querySelector(".logo__text").style.color = "#ffffffff";
    const elements = document.querySelectorAll(
      ".nav-bar > a:not(.nav-bar__button--active)"
    );
    [...elements].forEach((el) => {
      el.style.color = "white";
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
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
