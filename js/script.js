// * burger menu toggle
// burger menu div
const menu = document.querySelector(".burger-menu");
// add event listener to toggle burger menu
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

//* adding active state to current webpage viewed by the user
// if current file path of webpage in view is same as the file path of the nav link that was clicked, then that nav link should have a class of .active
const navLinks = document.querySelectorAll(".nav-link");
for (i of navLinks) {
    var path = window.location.href;
    if (i.href === path) {
        i.classList.add("active");
    }
}

//* gallery dropdown
// gallery dropdown on click
document.querySelector('.gallery-dropdown').addEventListener("click", function () {
    if (document.querySelector('.arrowopen').style.display === "inline-block") {
        document.querySelector('.arrowopen').style.display = "none";
        document.querySelector('.arrowclose').style.display = "inline-block";
        document.querySelector('.sub-links').style.display = "block";
    }
    else {
        document.querySelector('.arrowopen').style.display = "inline-block";
        document.querySelector('.arrowclose').style.display = "none";
        document.querySelector('.sub-links').style.display = "none";
    }
});

//* gallery sublink on click
// adding event listener to the accordion toggle button
for (i of btnToggle) {
    i.addEventListener('click', toggleFunction);
}
// ! here the other bodies automatically close then the current one is open
function toggleFunction() {
    for (i of btnToggle) {
        i.nextElementSibling.style.display = "none";
        i.children[0].style.display = "inline-block";
        i.children[1].style.display = "none";
    };
    if (this.nextElementSibling.style.display == "none") {
        this.nextElementSibling.style.display = "block";
        this.children[0].style.display = "none";
        this.children[1].style.display = "inline-block";
    };
};