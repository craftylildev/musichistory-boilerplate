"use strict";

// toggle between List Music View and Add Music View
$(document).ready(function() { 

  $("#add-music-link").click(function() {
    $("#list-music-view").hide();
    $("#add-music-view").show();
  });

});
