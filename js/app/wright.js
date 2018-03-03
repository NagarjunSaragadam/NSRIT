function getPosition() {		
   var options = {
      enableHighAccuracy: true,
      maximumAge: 3600000
   }
   var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
   function onSuccess(position) {      
	   var deviceid=device.uuid;
	   var Rootref= firebase.database().ref().child(deviceid);
	   Rootref.set({		   
		   Cordinates:position.coords.latitude+','+position.coords.longitude
	   });
	   var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	   marker.setPosition(latlng);
	   document.getElementById("locationid").innerHTML=position.coords.latitude+','+position.coords.longitude;	   
	   return document.getElementById("locationid").innerHTML;
   };
   function onError(error) {
      alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
	   return error.message;
   }
}


function Runtimer() {
	alert("Testing...");
	 var options = {
      enableHighAccuracy: true,
      maximumAge: 3600000
   }
   var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
   function onSuccess(position) {
      //alert('Latitude: '          + position.coords.latitude          + '\n' +
        // 'Longitude: '         + position.coords.longitude         + '\n' +
         //'Altitude: '          + position.coords.altitude          + '\n' +
         //'Accuracy: '          + position.coords.accuracy          + '\n' +
         //'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
         //'Heading: '           + position.coords.heading           + '\n' +
         //'Speed: '             + position.coords.speed             + '\n' +
         //'Timestamp: '         + position.timestamp                + '\n');
	   var deviceid=device.uuid;
	   var Rootref= firebase.database().ref().child(deviceid);
	   Rootref.set({		   
		   Cordinates:position.coords.latitude+','+position.coords.longitude
	   });
	   var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	   marker.setPosition(latlng);	   
	   document.getElementById("locationid").innerHTML=position.coords.latitude+','+position.coords.longitude;
   };
   function onError(error) {
      alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
   }
}


function watchPosition() {
   var options = {
      maximumAge: 3600000,
      timeout: 10000,
      enableHighAccuracy: true,
   }
   var deviceid=device.uuid;
   var Rootref= firebase.database().ref().child(deviceid);
   var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
   function onSuccess(position) {
	   Rootref.set({		   
		   Cordinates:deviceid+','+position.coords.latitude+','+position.coords.longitude
	   });
	   var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	   marker.setPosition(latlng);	   
	   document.getElementById("locationid").innerHTML=position.coords.latitude+','+position.coords.longitude+':'+position.timestamp;
     //alert('Latitude: '          + position.coords.latitude          + '\n' +
      //'Longitude: '         + position.coords.longitude         + '\n' +
      //'Altitude: '          + position.coords.altitude          + '\n' +
         //'Accuracy: '          + position.coords.accuracy          + '\n' +
         //'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
         //'Heading: '           + position.coords.heading           + '\n' +
         //'Speed: '             + position.coords.speed             + '\n' +
         //'Timestamp: '         + position.timestamp                + '\n');
   };

   function onError(error) {
      alert('code: '    + error.code    + '\n' +'message: ' + error.message + '\n');
   }
}



function watchuserPosition() {
   var options = {
      maximumAge: 3600000,
      timeout: 10000,
      enableHighAccuracy: true,
   }  
   
   var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
   function onSuccess(position) {	   
	   var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);	   	   
	   usermarker.setPosition(latlng);	   
	   document.getElementById("locationid").innerHTML=position.coords.latitude+','+position.coords.longitude;	   
   };
   function onError(error) {
      alert('code: '    + error.code    + '\n' +'message: ' + error.message + '\n');
   }
}





