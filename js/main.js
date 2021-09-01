import { albumImages } from "./gallery-photo.js";

// variable
const albumCntr = document.querySelector('.album');
for (var i = 0; i < albumImages.length; i++) {
    albumCntr.innerHTML += '<span><img src="' + albumImages[i] + '"></span>'
}
