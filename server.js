var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static('public'));

app.listen(3000, function () {
  console.log("Express server is up on port " + PORT);
});
