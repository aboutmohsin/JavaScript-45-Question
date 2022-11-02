"use strict";
function makeAlbum(artistName, albumTitle) {
  let album = {
    artist: artistName,
    title: albumTitle,
  };
  return album;
}

let album = makeAlbum("Arjit singh", "Kesariya");
console.log(album);
