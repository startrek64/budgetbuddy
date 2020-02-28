var express = require('express');
var app = express();

app.use(express.static('./public'));

app.listen(8080);

console.log("Running on, Localhost: 8080")
