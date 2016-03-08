"use strict";

    // toggle between List Music View and Add Music View
$(document).ready(function() { 

  $("#list-music-link").click(function() {
    $("#add-music-view").hide();
    $("#list-music-view").show();
  });

});
