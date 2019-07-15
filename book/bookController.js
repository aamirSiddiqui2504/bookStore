
var express = require('express');

var router = express.Router();

var booklist = require('./books');


router.get('/list', function(req,res){
    
 res.send(booklist);
})

module.exports = router;

