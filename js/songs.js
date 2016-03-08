"use strict";

$(document).ready(function() { 

// ADD NEW SONGS
  $("#add-button").click(function() {
    // get text input values from Add Music View
    var inputSong = $("#input-song").val();
    var inputArtist = $("#input-artist").val();
    var inputAlbum = $("#input-album").val();
    var inputGenre = $("#input-genre").val();

    // add new songs/artists/albums from input values
    $("#new-songs").append(
      `<li class="listTrack">
        <p class="listSong">${inputSong}</p>
        <span class="listArtist">${inputArtist}</span>
        <span class="listAlbum">${inputAlbum}</span>          
        <span class="listGenre">${inputGenre}</span>          
        <button class="deleteTrack">x</button>
      </li>`
      );
      deleteButton();
  });

  function displayPlayList (playListData) {
    // console.log("playListData", playListData.track_list);
    var defaultPlayList = "";

      // build DOM string
      playListData.track_list.forEach(function(currentTrack) {
        // console.log("playListData", playListData.track_list);
        // console.log("currentTrack", currentTrack);
        
        defaultPlayList +=     
        `<li class="listTrack">
          <p class="listSong">${currentTrack.song}</p>
          <span class="listArtist">${currentTrack.artist}</span>
          <span class="listAlbum">${currentTrack.album}</span>
          <span class="listGenre">${currentTrack.genre}</span>
          <button class="deleteTrack">x</button>
        </li>`;
    
      });
    
    $("#default-songs").append(defaultPlayList);
    deleteButton();
  }

  // load any json playlist file
  function loadPlayList(fileToLoad) {
    $.ajax({
      url: fileToLoad
    }).done(function(playListData) {
      // console.log(playListData);
      displayPlayList(playListData);
    });
  }
  // call playList1
  loadPlayList("json/playList1.json");

  // click to load & call 2nd json playlist
  $("#loadMoreTracks").click(function() {
    loadPlayList("json/playList2.json");
  });

  // delete 'this' track from DOM
  function deleteButton() {
    $(".deleteTrack").click(function() {
      $(this).closest("li").remove();    
    });
  }  

});
