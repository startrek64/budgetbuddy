var bodyParser = require('body-parser');

var data = [{ammount: 200, category: 'Salary', date: '01/02/2020'}, {ammount: 400, category: 'Salary', date: '01/02/2020'}];
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const users = {name: 'admin', password: 'admin'};

module.exports = function(app){

app.post('/income', urlencodedParser, function(req, res){
    data.push(req.body);
    console.log(req.body);
});

app.post('/expenditure', urlencodedParser, function(req, res){
    data.push(req.body);
    console.log(req.body);
});


//app.post('/', urlencodedParser, function(req, res){
//    const user = (req.body);
//    console.log(req.body);
//    if(req.body.user == 'admin'){
//        res.redirect('/homepage')};   
//});
// attempted login - doesn't redirect properly

//app.get('/homepage', function(req, res){
//    res.render('homepage');
//    console.log('request was made on: /homepage');
//})

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

//app.get('/', function(req, res){
//    res.render('login');
//    console.log('request was made on: /');

//});




};