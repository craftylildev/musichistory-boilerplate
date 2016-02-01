var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs[songs.length] = "Tuesday's Gone > by Lynyrd Skynyrd on the Album on the album Pronunced";

songs.unshift("Abracadabra > by Steve Miller Band on the album Abracadabra");



for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace("!", "");
	songs[i] = songs[i].replace("*", "");
	songs[i] = songs[i].replace("@", "");
	songs[i] = songs[i].replace("(", "");
	songs[i] = songs[i].replace(">", "-");
    document.getElementById("newSongs").innerHTML += "<li>" + songs[i] + "</li>";
};


console.log("songs", songs);