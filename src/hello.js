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

ReactDOM.render(<Goodbye/>, document.getElementById('goodbye'));

var comments = [{author: "Aileen", text: "Hello Aileen"}, {author: "Lee", text: "Hello Lee"}];

var Comment = React.createClass({
  render: function(){
    return(
      <div>
        <h1>{ this.props.author }</h1>
        <p>{ this.props.text }</p>
      </div> 
    );
  }
});

ReactDOM.render(<Comment author={comments[0].author} text={comments[0].text}/>, document.getElementById('comment'));