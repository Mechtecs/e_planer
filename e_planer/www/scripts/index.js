// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.

function loginApi() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    $.post("http://eplan.le-styx.net/api/login.php", {
        username: user,
        password: pass
    },
    function (data, status, xhr) {
        var ar = JSON.parse(data);
        if (ar["status"] == 1) {
            document.getElementById("status").innerHTML = "Falscher Benutzername und / oder Passwort";
        } else {

        }
    });
}

(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
      /*  var element = document.getElementById("deviceready");
        element.innerHTML = 'Device Ready';
        element.className += ' ready';  */
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();