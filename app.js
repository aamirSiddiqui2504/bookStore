var express = require('express');
var app = express();

var globalRoot = __dirname + "/";

app.get('/api', function(req,res){
    res.send("Hello this is API ");
});

var bookList = require('./book/bookController');
app.use('/api/book', bookList);


app.listen(process.env.PORT || 2020);

