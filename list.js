var listLink = document.getElementById("list-music-link");
var listView = document.getElementById("list-music-view");

listLink.addEventListener("click", function(event) {
  event.preventDefault();
  addView.classList.add("hidden");

  listView.classList.add("visible");
  listView.classList.remove("hidden");
});