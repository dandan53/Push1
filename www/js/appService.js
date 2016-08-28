app.service("appService", function () {

    var regId = "";

    // Return public API.
    return ({
      init: init,
      getReg: getReg,
      setReg: setReg
    });



    function getReg() {
    //  alert("from service - getReg: " + regId);
     // return regId;
    }

    function setReg(reg) {
      //alert("from service - setReg: old: " + regId + " , new: " + reg);
      //regId = reg;
    }


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

          regId = e.regid;

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
      $.post("http://192.168.1.70/phpgcmserver/register.php",
        {
          regID:regID,
          name:"jitendra",
          email:"jiten.ktm@gmail.com"
        });
    }


  }
);
