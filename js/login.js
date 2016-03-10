"use strict";

var myFirebaseRef = new Firebase("https://incandescent-inferno-4575.firebaseio.com/");

// Firebase clients expose a number of JavaScript convenience methods for account creation and management, letting you have full control over the interface for your application. Create new user accounts with the following snippet:

$("#register-btn").click(function() {  
  myFirebaseRef.createUser({
    email    : $("#username-input").val(),
    password : $("#password-input").val()
  }, function(error, userData) {
    if (error) {
      console.log("Error creating user:", error);
    } else {
      console.log("Successfully created user account with uid:", userData.uid);
    }
  });
});

// Once an account has been created, you can log a user in with the following snippet:
$("#login-btn").click(function() {  
  myFirebaseRef.authWithPassword({
    email    : $("#username-input").val(),
    password : $("#password-input").val()
  }, function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
      $("#list-music-view").show();
      $("#navigation-items").show();
      $("#login-area-view").hide();
      getSongs();
      $("#username-input").val("");
      $("#password-input").val("");
    }
  });
});

$("#logout-btn").click(function(){
  myFirebaseRef.unauth();
  $("#list-music-view").hide();
  $("#navigation-items").hide();
  $("#login-area-view").show();
});

