
//ADD NEW SONGS
document.getElementById("add-button").addEventListener("click", function() {
  // get text input values from Add Music View
  var inputSong = document.getElementById("input-song").value;
  var inputArtist = document.getElementById("input-artist").value;
  var inputAlbum = document.getElementById("input-album").value;
  // add new songs/artists/albums
  var newSongs = document.getElementById("new-songs");

  newSongs.innerHTML += 
  `<li>
    <p class="list-song">${inputSong}</p>
    <span class="list-artist">${inputArtist}</span>
    <span class="list-album">${inputAlbum}</span>          
    <button id="deleteTrack" class="deleteTrack">x</button>
  </li>`;
});

document.querySelector("body").addEventListener("click", function(event) {
  // console.log(event);
  if (event.target.className === "deleteTrack") {
    // console.log(event.target.parentNode);
    event.target.parentNode.remove();
  }
});

function loadPlayList () {
  var playListData = JSON.parse(this.responseText);
  // console.log("playListData", playListData.track_list);
  var defaultOutput = document.getElementById("default-songs");  
  var defaultPlayList = "";

  for (var i = 0; i < playListData.track_list.length; i++){
    // console.log("playListData", playListData.track_list[i]);
    var currentTrack = playListData.track_list[i];
    defaultPlayList +=     
    `<li>
      <p class="list-song">${currentTrack.song}</p>
      <span class="list-artist">${currentTrack.artist}</span>
      <span class="list-album">${currentTrack.album}</span>
      <span class="list-genre">${currentTrack.genre}</span>
      <button id="deleteTrack" class="deleteTrack">x</button>
    </li>`;    
  }
  defaultOutput.innerHTML = defaultPlayList;
}

var playListLoader = new XMLHttpRequest();
playListLoader.addEventListener("load", loadPlayList);
playListLoader.open("GET", "songList1.json");
playListLoader.send();

var loadMoreTracks = document.getElementById("loadMoreTracks");


loadMoreTracks.addEventListener("click",  function loadPlayList2 () {
  console.log("test");
//   var playListLoader2 = new XMLHttpRequest();

//   playListLoader2.addEventListener("load", function () {
//     inventory = JSON.parse(this.responseText);
//   });
//   playListLoader2.open("GET", "songList2.json");
//   playListLoader2.send();
// }

  });