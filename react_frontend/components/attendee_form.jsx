var React = require('react');

var AttendeeForm = React.createClass({
  getInitialState: function() {
    return {name: "", bootcamp: "", event_id: undefined};
  },

  setName: function(event) {
    this.setState({name: event.target.value});
  },

  setBootcamp: function(event) {
    this.setState({bootcamp: event.target.value});
  },

  handleSubmit: function(event) {
    event.preventDefault();
    // UserActions[this.state.form]({
    //   username: this.state.username,
    //   password: this.state.password
    // });
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name
          <input
            type="text"
            value={this.state.name}
            onChange={this.setName}>
          </input>
        </label>
        <label>Bootcamp
          <input
            type="text"
            value={this.state.bootcamp}
            onChange={this.setBootcamp}>
          </input>
        </label>
        <input type="submit"></input>
      </form>
    );
  }
});

module.exports = AttendeeForm;
