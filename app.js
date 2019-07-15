var express = require('express');
var app = express();
var db = require('./DB/db');


var globalRoot = __dirname + "/";

app.use(express.static('upload'));

app.get('/api', function(req,res){
    res.send("Hello this is API ");
});

var bookList = require('./book/bookController');
app.use('/api/book', bookList);

var auth = require('./auth/authController');
app.use('/api/auth', auth);

var fileUpload = require('./image/imageController');
app.use('/api/uploadFile', fileUpload);



app.listen(process.env.PORT || 2020);

