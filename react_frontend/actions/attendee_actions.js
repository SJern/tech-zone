var Dispatcher = require('../dispatcher/dispatcher');
var AttendeeStore = require('../stores/attendee_store');

var AttendeeActions = {
  fetchAttendence: function(eventId) {
    //
  },

  receiveAttendence: function(attendees) {
    Dispatcher.dispatch({
      actionType: "ATTENDEES RECEIVED",
      attendees: attendees
    });
  },  
};

module.exports = AttendeeActions;
