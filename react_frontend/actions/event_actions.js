var Dispatcher = require('../dispatcher/dispatcher');
var EventStore = require('../stores/event_store');

var EventActions = {
  fetchEvents: function() {
    //
  },

  receiveEvents: function(events) {
    Dispatcher.dispatch({
      actionType: "EVENTS RECEIVED",
      events: events
    });
  },
};
