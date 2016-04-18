var React = require('react');
var ReactDOM = require('react-dom');

var Lifecycle = React.createClass({
  getInitialState: function() {
    alert("Initial State");
    return {};
  },
  componentWillMount: function() {
    alert("Component Will Mount");
  },
  componentDidMount: function() {
    alert("Component Did Mount")
  },
  render: function(){
    alert("render");
    return (
      <div>
        Lifecycle Component
      </div>
    )
  }
});

ReactDOM.render(
  <Lifecycle/>, document.getElementById('lifecycle')
);

var Timer = React.createClass({
  getInitialState: function() {
    return { time: 0 };
  },
  
  componentWillMount: function() {
    setInterval(function() {
      this.setState({ time: this.state.time + 1 })
    }.bind(this), 1000)
  },

  render: function() {
    return (
      <div>{ this.state.time } Seconds Elapsed</div>
    );
  }
});

ReactDOM.render(<Timer/>, document.getElementById('timer'));