var bodyParser = require('body-parser');

// Local varibles to store infomation for reports and user current account balance

var data = [{ammount: 200, category: 'Salary', date: '01/02/2020'}, {ammount: 400, category: 'Salary', date: '01/02/2020'}];
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var valueCounter = 600.00;
var valueEdit = 0;

module.exports = function(app){

// Page routing from server to client side, both posting and getting

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




};