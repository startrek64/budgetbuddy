var express = require('express');
var app = express();

app.use(express.static('./public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/login.html');
    console.log('request was made on: / ');
})

app.get('/index', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
    console.log('request was made on: /homepage ');
})

app.get('/signup', function(req, res){
    res.sendFile(__dirname + '/public/signup.html');
    console.log('request was made on: /signup ');
})

app.get('/expenditure', function(req, res){
    res.sendFile(__dirname + '/public/expenditurepage.html');
    console.log('request was made on: /expenditure ');
})

app.get('/report', function(req, res){
    res.sendFile(__dirname + '/public/reports.html');
    console.log('request was made on: /reports ');
})

app.get('/income', function(req, res){
    res.sendFile(__dirname + '/public/incomepage.html');
    console.log('request was made on: /income ');
})

app.listen(8080);

console.log("Yo Dog, We do be listening to Localhost: 8080")
