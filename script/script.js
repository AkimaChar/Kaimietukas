window.addEventListener('scroll', function () {
    if (window.pageYOffset != 0) {
        document.getElementById("header").style.backgroundColor = "#ffffffff";
        this.document.querySelector(".logo__text").style.color = "#000"
        var elements = document.querySelectorAll(".nav-bar > a:not(:first-of-type)");
        Array.prototype.forEach.call(elements, function (el, i) {
            el.style.color = "black";
        });
    } else if (window.pageYOffset == 0) {
        document.getElementById("header").style.backgroundColor = "#ffffff00";
        this.document.querySelector(".logo__text").style.color = "#ffffffff"
        var elements = document.querySelectorAll(".nav-bar > a:not(:first-of-type)");
        Array.prototype.forEach.call(elements, function (el, i) {
            el.style.color = "white";
        });
    }
})


