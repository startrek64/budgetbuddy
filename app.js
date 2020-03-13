var express = require('express');
var app = express();
var actionController = require('./controllers/actionController')

app.set('view engine', 'ejs');

app.use(express.static('./public'));

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

// fire controller - boom boom

actionController(app);

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
