// toggle between List Music View and Add Music View

var addLink = document.getElementById("add-music-link");
var addView = document.getElementById("add-music-view");

addLink.addEventListener("click", function() {
  listView.classList.add("hidden");

  addView.classList.add("visible");
  addView.classList.remove("hidden");
});