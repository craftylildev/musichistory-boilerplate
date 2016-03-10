"use strict";

var myFirebaseRef = new Firebase("https://incandescent-inferno-4575.firebaseio.com/");


function getSongs() {
  console.log("test");
  $.ajax ({
    url: "https://incandescent-inferno-4575.firebaseio.com/track_list/.json",
    method: "GET"
  }).done(function (songList) {
    let songEl = $("#all-songs");
    songEl.empty();
    for (let song in songList) { // for in loop - iterates over objects keys
      var currentSong = songList[song]; // bracket notation because we are passing in a variable
      songEl.append(`<li id="new-song-${song}" class="listTrack">
                      <p class="listSong">${currentSong.song}</p>
                      <span class="listAlbum">${currentSong.album}</span>
                      <span class="listArtist">${currentSong.artist}</span>
                      <span class="listGenre">${currentSong.genre}</span>
                      <button class="deleteTrack" id="delete${song}">x</button>
                     </li>`
      );

      $(`#delete${song}`).click(function() {
          
        $.ajax({
          url: `https://incandescent-inferno-4575.firebaseio.com/track_list/${song}.json`,
          method: "DELETE"
        }).done(function() {
          $(`#new-song-${song}`).remove();
        });
      });
    }

  });
}
// getSongs();

$("#add-button").click(function() {
    // get text input values from Add Music View
    var newSong = {
      "song": $("#input-song").val(),
      "artist": $("#input-artist").val(),
      "album": $("#input-album").val(),
      "genre": $("#input-genre").val()
    };
    console.log("newSong", newSong);

  $.ajax({
    url: "https://incandescent-inferno-4575.firebaseio.com/track_list.json",
    method: "POST",
    data: JSON.stringify(newSong) 
  }).done(function(addedSong) {
    getSongs();

    console.log("Your new song is", addedSong);
  });
});