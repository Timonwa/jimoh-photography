const menu = document.querySelector(".burger-menu");
menu.addEventListener("click", function () {
    if (document.querySelector(".open").style.display === "block") {
        document.querySelector(".open").style.display = "none";
        document.querySelector(".close").style.display = "block";
        document.querySelector(".nav-bar").style.zIndex = "1";
    }
    else {
        document.querySelector(".open").style.display = "block";
        document.querySelector(".close").style.display = "none";
        document.querySelector(".nav-bar").style.zIndex = "-1";
    }
});

const navLinks = document.querySelectorAll(".nav-link");
for (i of navLinks) {
    var path = window.location.href;
        if (i.href === path) {
            i.classList.add("active");
        }
}