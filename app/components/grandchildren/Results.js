//include React
var React = require("react");

//include helpers functions
var helpers = require("../../utils/helpers");
var Results = React.createClass({
  getInitialState: function() {
    return {
      title: "",
      articleURL: "",
      date: ""
    };
  },

  //this handles the click on submit to trigger search
  handleClick: function(article) {
    console.log(article);
    //this function saves article in the database
    helpers
      .postArticle(article.title, article.articleURL, article.date)
      .then(function() {
        console.log("posted");
      });
  },

  //render the component
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Search Results</h3>
              </div>
              <div className="panel-body text-center" />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

//export the component back for use in other files
module.exports = Results;
