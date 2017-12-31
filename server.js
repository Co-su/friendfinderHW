// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")

// EXPRESS CONFIGURATION

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

//require("./routes/apiRoutes")(app);
//require("./routes/htmlRoutes")(app);

// LISTENER

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});