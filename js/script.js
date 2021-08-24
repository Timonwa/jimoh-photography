const menu = document.querySelector(".burger-menu");
menu.addEventListener("click", function () {
    if (document.querySelector(".open").style.display === "block") {
        document.querySelector(".open").style.display = "none";
        document.querySelector(".close").style.display = "block";
        document.querySelector(".burger-link-cntr").style.right = "0px";
    }
    else {
        document.querySelector(".open").style.display = "block";
        document.querySelector(".close").style.display = "none";
        document.querySelector(".burger-link-cntr").style.right = "-100px";
    }
});

const navLinks = document.querySelectorAll(".nav-link");
for (i of navLinks) {
    var path = window.location.href;
        if (i.href === path) {
            i.classList.add("active");
        }
}