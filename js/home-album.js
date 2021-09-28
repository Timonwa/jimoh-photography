import { homeAlbumImages } from "./photos.js";

//* the gallery album
// select album cntr
const albumCntr = document.querySelector('.gallery-album');

// function to print out all the album images into the album and unto the screen
for (var i = 0; i < homeAlbumImages.length; i++) {
    albumCntr.innerHTML += '<span><img class="album-image" src="' + homeAlbumImages[i][0] + '" alt="' + homeAlbumImages[i][1] + '"></span>'
}

//* the modal popup
// function to add modal popup to all the images
// when you click on an image in the gallery, a popup would appear showing the enlarged image
var individualImage = document.querySelectorAll('.album-image');
for (i of individualImage) {
    i.addEventListener('click', function () {
        document.querySelector(".modal-popup").style.display = "flex";
        image.src = this.src;
        image.alt = this.alt;
    });
}

// function to close modal popup
const closeModal = document.querySelector('.close-modal');
closeModal.addEventListener('click',
    function () {
        document.querySelector(".modal-popup").style.display = "none";
    })