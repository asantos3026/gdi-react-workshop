var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
  render:function(){
    return(
      <div>React is awesome!</div> 
    );
  }
});

ReactDOM.render(<Hello/>, document.getElementById('hello'));
  
var Goodbye = React.createClass({
  render:function(){
      return(
         <div><div>Goodbye!</div>
         <p>child node</p></div>  
      );
  }
}); 
