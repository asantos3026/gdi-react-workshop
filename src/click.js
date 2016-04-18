var React = require('react');
var ReactDOM = require('react-dom');

var styles = {
  notLiked: {
    backgroundColor: "white"
  },
  liked: {
    backgroundColor: "blue"
  }
};

var Likes = React.createClass({
    getInitialState: function() {
      return { 
        likes: 0
      };
    },
    handleBtnClick: function() {
      this.setState({
        likes: this.state.likes + 1 
      }) 

    },
    render:function(){
      return(
      <div> 
        <button style={ styles.liked }onClick={ this.handleBtnClick } className = "btn btn-primary">
          Likes: <span className="badge">{ this.state.likes }</span>
        </button>
        <ClickCounterCaption likesName={ this.state.likes }/>
        <ClickCounterCaption2 likesName2={ this.state.likes }/>
      </div>
      );
    }
});

var ClickCounterCaption = React.createClass({
    render:function(){
      return(
          <div>Number of Clicks: { this.props.likesName }</div>
      );
    }
});

var ClickCounterCaption2 = React.createClass({
    render:function(){
      return(
        <div>Numero de Clics: { this.props.likesName2 }</div>
      );
    }
});

ReactDOM.render(
  <Likes/>,
  document.getElementById('click-counter')
);
