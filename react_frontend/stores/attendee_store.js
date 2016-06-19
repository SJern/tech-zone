var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var AttendeeStore = new Store(Dispatcher);

var _attendees, _errors;

AttendeeStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "ATTENDEES RECEIVED":
      AttendeeStore.setAttendence(payload.attendees);
      AttendeeStore.__emitChange();
    break;

    case "ATTENDEE ERROR":
      AttendeeStore.setErrors(payload.errors);
      AttendeeStore.__emitChange();
    break;
  }
};

AttendeeStore.setAttendence = function(attendees) {
  _attendees = attendees;
};

AttendeeStore.setErrors = function(errors) {
  _errors = errors;
};

AttendeeStore.inventory = function() {
  return _attendees.slice();
};

module.exports = AttendeeStore;
