var express = require('express');
var app = express();
var actionController = require('./controllers/actionController')

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/login.html');
    console.log('request was made on: / ');
})

app.get('/homepage', function(req, res){
    res.sendFile(__dirname + '/public/homepage.html');
    console.log('request was made on: /homepage ');
})

app.get('/signup', function(req, res){
    res.sendFile(__dirname + '/public/signup.html');
    console.log('request was made on: /signup ');
})








// fire controller - boom boom

actionController(app);



app.listen(8080);

console.log("Yo Dog, We do be listening to Localhost: 8080")
