
  var rendererOptions = {
  draggable: false
  };
  var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
  var directionsService = new google.maps.DirectionsService();
  var map;
  var marker;
  var destino = new google.maps.LatLng(17.8719362,83.2946227);
  function initialize() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 17.8719362, lng: 83.2946227},
        zoom: 15
      });

    //var infoWindow = new google.maps.InfoWindow({map: map});
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

        //calcRoute(pos.lat, pos.lng);  
          marker = new google.maps.Marker({
          position: pos,
          map: map,          
        });
      document.getElementById("locationid").innerHTML=pos.lat+','+pos.lng; 
        //infoWindow.setPosition(pos);
        //infoWindow.setContent('Location found.');		
        map.setCenter(pos);
      },
      function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    }
    else {
    // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
                    'Error: The Geolocation service failed.' :
                    'Error: Your browser doesn\'t support geolocation.');
                  }
    directionsDisplay.setMap(map);
  }


  function calcRoute(lat, lng) {

    var origen = new google.maps.LatLng(lat, lng);

    var request = {
      origin: origen,
      destination: destino,
      travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);