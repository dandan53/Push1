// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);

      init();
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

function init(){
  alert("Calling function to register mobile device on GCM");
  window.plugins.pushNotification.register(
    successHandler,
    errorHandler,
    {"senderID":"208035423032",
      "ecb":"onNotificationGCM"
    });
}
function successHandler(result){
  alert("Result" + result);
}
function errorHandler(error){
  alert("error"+ result);
}
function onNotificationGCM(e){
  alert("Message : " + e.event );
  switch(e.event){
    case 'registered':
      alert("ID: " + e.regid);
      sendRequest(e.regid);
      alert("Successfully Registered");
      break;
    case 'message':
      alert("Message: "+ e.payload.message);
      var sound = new Media("assets/www/"+e.soundname);
      sound.play();
      break;
    default:
      alert("unknown event");
  }

}
//use to send registration ID returned by GCM to our local php server
//regID should be save in our local database so that we can use regID and api-key from google to sent request to GCM
//from php server in mycase.
function sendRequest(regID){
  alert("sending request ..");
  localStorage.setItem('regId', regID);

  /*$.post("http://192.168.1.70/phpgcmserver/register.php",
    {
      regID:regID,
      name:"jitendra",
      email:"jiten.ktm@gmail.com"
    });*/
}

