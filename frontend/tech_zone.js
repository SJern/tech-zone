var EventCollector = require('./event_collector.js');

/* global google */
$(function(){
  var mapOptions = {
    zoom: 12,
    center: {lat: -34.397, lng: 150.644}
  };
  window.GoogleMap = new google.maps.Map(document.getElementById('map'),
  mapOptions);

  var ec = new EventCollector();
  navigator.geolocation.getCurrentPosition(function(position) {
    var centerLat = position.coords.latitude;
    var centerLng = position.coords.longitude;
    window.GoogleMap.panTo({lat: centerLat, lng: centerLng});
    ec.fetchEvents(centerLat, centerLng);
    // $('#eventList').on('mouseenter', 'li', mouseenterCallback)
  });
});
//
// function mouseenterCallback(event) {
//   var centerLat = position.coords.latitude;
//   var centerLng = position.coords.longitude;
//   window.GoogleMap.panTo({lat: centerLat, lng: centerLng});
// }
