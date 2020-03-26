var express = require('express');
var app = express();



// required modules

var bodyParser = require('body-parser');

// Local varibles to store infomation for reports and user current account balance

var data = [{ammount: 200, category: 'Salary', date: '01/02/2020'}, {ammount: 400, category: 'Salary', date: '01/02/2020'}];
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var valueCounter = 600.00;
var valueEdit = 0;

app.set('view engine', 'ejs');

app.use(express.static('./public'));

// express routes

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/login.html');
    console.log('request was made on: / ');
})

app.get('/signup', function(req, res){
    res.sendFile(__dirname + '/public/signup.html');
    console.log('request was made on: /signup ');
})

app.get('/signout', function(req, res){
    res.sendFile(__dirname + '/public/signout.html');
    console.log('request was made on: / ');
})

app.post('/income', urlencodedParser, function(req, res){
    data.push(req.body);
    valueEdit = (req.body.ammount);
    valueCounter = +valueCounter + +valueEdit;
    console.log(req.body);
});

app.post('/expenditure', urlencodedParser, function(req, res){
    data.push(req.body);
    valueEdit = (req.body.ammount);
    valueCounter = +valueCounter + +valueEdit;
    console.log(req.body);
});

app.get('/homepage', function(req, res){
   res.render('homepage', {value: valueCounter});
    console.log('request was made on: /homepage');
})

app.get('/report', function(req, res){
    res.render('reports', {repos: data});
});

app.get('/income', function(req, res){
    res.render('incomep');
});

app.get('/expenditure', function(req, res){
    res.render('expenditurepage');
    console.log('request was made on: /expenditure ');
});

app.listen(8080);

console.log("Yo Dog, We do be listening to Localhost: 8080")

//Google ID
const GoogleAuth = require('simple-google-openid');
// you can put your client ID here
app.use(GoogleAuth(process.env.GOOGLE_CLIENT_ID));

// return 'Not authorized' if we don't have a user
app.use('/api', GoogleAuth.guardMiddleware());

app.get('/api/hello', (req, res) => {
  res.send('Hello ' + (req.user.displayName || 'user without a name') + '!');

  console.log('successful authenticated request by ' + req.user.emails[0].value);
});

