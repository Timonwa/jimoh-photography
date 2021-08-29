import * as galleryData from './gallery-photo.js'

// variable
const albumName = document.querySelector('.album-name');
const album1Cntr = document.querySelector('.album1');
const album2Cntr = document.querySelector('.album2');


albumName.innerHTML = galleryData.albumLinks[0];
for (var i = 1; i < galleryData.album1Images.length; i++) {
    album1Cntr.innerHTML += '<span><img src="' + galleryData.album1Images[i] + '"></span>'
}

albumName.innerHTML = galleryData.albumLinks[1];
for (var i = 1; i < galleryData.album2Images.length; i++) {
    album2Cntr.innerHTML += '<span><img src="' + galleryData.album2Images[i] + '"></span>'
}
