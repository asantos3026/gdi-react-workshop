var React = require('react');
var ReactDOM = require('react-dom');

var data = [
  {
      "author": "Michael Scott",
      "text": "Would I rather be feared or loved? Easy, both. I want people to be afraid of how much they love me."
  },
  {
      "author": "Jeff Bezos",
      "text": "In the end, we are our choices."
  }
];

var Twitter = React.createClass({
  // loadTweetsFromServer: function () {
  //   // GET updated set of tweets from database
  //   $.get(this.props.url, function (data) {
  //       // Set state in step 6 of the exercise!
  //     }.bind(this)
  //   );
  // },
  // handleTweetSubmit: function (author, text) {
  //   var tweet = { author: author, text: text };
  //
  //   // POST to add tweet to database
  //   $.post(this.props.url, tweet, function (data) {
  //       // Set state in step 10 of the exercise!
  //     }.bind(this)
  //   );
  // },
  // componentDidMount: function () {
  //   // Set this.state.data to most recent set of tweets from database
  //   this.loadTweetsFromServer();
  // },
  render: function () {
    return (
    <div>
      <div className="twitter">
        <h1>Tweets</h1>
        {/* Render TweetForm component here */}
        {/* Render TweetList component here */}
      </div>
    </div>
    );
  }
});

var TweetForm = React.createClass({
  render: function () {
    return (
      <form className="tweetForm">
        <div><TweetList/></div>
      </form>
    );
  }
});

var TweetList = React.createClass({
  render: function () {
    return (
      <div className="tweetList">
        <div><Tweet/></div>
      </div>
    );
  }
});

var Tweet = React.createClass({
  render: function () {
    return (
      <div className="tweet">
        <p>{ this.props.text }</p>
        <h1>{ this.props.author }</h1>
      </div>
    );
  }
});

ReactDOM.render(<Tweet author={data[0].author} text={data[0].text}/>, document.getElementById('tweet1'));

ReactDOM.render(<Tweet author={data[1].author} text={data[1].text}/>, document.getElementById('tweet2'));

ReactDOM.render(
  <Twitter />,
  document.getElementById('tweets')
);
