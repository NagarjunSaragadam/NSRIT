(function() {
  var device_ready = false;
  var jqm_mobile_init = false;

  var initApp = function() {
    if ((device_ready && jqm_mobile_init) || (jqm_mobile_init && !mobile_system)) {
      startApp();
    }
  };

  var onDeviceReady = function() {
    device_ready = true;
    document.getElementById("getPosition").addEventListener("click", getPosition);
     document.getElementById("watchPosition").addEventListener("click", watchPosition);	
	  alert(cordova.plugins.uid.IMEI);
    initApp();
  };

  var onMobileInit = function() {
    $.support.cors = true;
    $.mobile.allowCrossDomainPages = true;
    jqm_mobile_init = true;
    //alert('jqm ready');
    initApp();
  };

  $(document).bind('mobileinit', onMobileInit);
  document.addEventListener("deviceready", onDeviceReady, false);
})();