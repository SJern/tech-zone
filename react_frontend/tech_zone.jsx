var React = require('react');
var ReactDOM = require('react-dom');

var AttendeeForm = require('./components/attendee_form.jsx');

var TechZone = React.createClass({
  render: function(){
    return (
      <div>
        <p>Hello this is React</p>
        <AttendeeForm></AttendeeForm>
      </div>
    );
  }
});

var App = <TechZone></TechZone>;

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(App, document.getElementById("application"));
});
