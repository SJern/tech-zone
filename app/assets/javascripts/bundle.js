/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var EventCollector = __webpack_require__(1);
	
	/* global google */
	$(function () {
	  var mapOptions = {
	    zoom: 12,
	    center: { lat: -34.397, lng: 150.644 }
	  };
	  window.GoogleMap = new google.maps.Map(document.getElementById('map'), mapOptions);
	
	  var ec = new EventCollector();
	  navigator.geolocation.getCurrentPosition(function (position) {
	    var centerLat = position.coords.latitude;
	    var centerLng = position.coords.longitude;
	    window.GoogleMap.panTo({ lat: centerLat, lng: centerLng });
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

/***/ },
/* 1 */
/***/ function(module, exports) {

	function EventCollector() {
	  this.events = [];
	}
	
	EventCollector.prototype.fetchEvents = function (lat, lon) {
	  var self = this;
	  $.ajax({
	    method: "GET",
	    url: "https://api.meetup.com/2/open_events",
	    data: {
	      text: "software",
	      time: ",2d",
	      lat: lat,
	      lon: lon,
	      order: "trending",
	      key: "2696a76246e504a121a16427f3477",
	      sign: true,
	      page: 50
	    },
	    crossDomain: true,
	    dataType: 'jsonp',
	    success: function (response) {
	      var eventArr = response.results;
	      for (var i = 0; i < eventArr.length; i++) {
	        self.events.push(self.slim(eventArr[i]));
	      }
	      self.appendLi();
	      self.placeMarkers();
	    },
	    error: function (response) {
	      console.log(response);
	    }
	  });
	};
	
	EventCollector.prototype.placeMarkers = function () {
	  this.events.forEach(function (e) {
	    var marker = new google.maps.Marker({
	      position: { lat: e.lat, lng: e.lon },
	      title: e.title,
	      id: e.id
	    });
	    marker.setMap(window.GoogleMap);
	  });
	};
	
	EventCollector.prototype.slim = function (eventEl) {
	  return {
	    id: eventEl.id,
	    name: eventEl.name,
	    time: eventEl.time,
	    lat: eventEl.venue ? eventEl.venue.lat : eventEl.group.group_lat,
	    lon: eventEl.venue ? eventEl.venue.lon : eventEl.group.group_lon,
	    event_url: eventEl.event_url,
	    description: eventEl.description,
	    address: eventEl.venue ? `${ eventEl.venue.address_1 }, ${ eventEl.venue.city }` : ''
	  };
	};
	
	EventCollector.prototype.appendLi = function () {
	  this.events.forEach(e => {
	    let $li = $(`<li id="${ e.id }"><a href="${ e.event_url }">${ e.name }</a></li>`);
	    $('#eventList').append($li);
	    this.appendDetails(e);
	  });
	};
	
	EventCollector.prototype.appendDetails = function (eventt) {
	  let $section = $(`<section><ul>
	    <li>Date: ${ this.readableTime(eventt.time) }</li>
	    <li>Address: ${ eventt.address }</li>
	    <li><p>Description: ${ eventt.description }</p></li>
	    </ul></section>`);
	
	  $(`#${ eventt.id }`).append($section);
	};
	
	EventCollector.prototype.readableTime = function (unix) {
	  let date = new Date(unix);
	  let year = date.getFullYear();
	  let month = date.getMonth();
	  let day = date.getDate();
	  return `${ year }-${ month }-${ day }`;
	};
	
	module.exports = EventCollector;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map