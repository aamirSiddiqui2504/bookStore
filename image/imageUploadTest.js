var express = require('express');
var router = express.Router();
var multer = require('multer');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

router.use(bodyParser.json());

var Files = require('./image');
var testing =  Files.Files;
var upload = multer({dest:'uploads'}); // this is destination where fils will try ti install 

router.post('/file',upload.single('productImage'), function(req,res){
    console.log("here isd fle req ======");
    console.log(req);
    console.log("here isd fle response ======");
    
    
    var FileDetails = new Files({
     path : req.body.path,
     originalname : req.body.originalname,
     productImage : req.body.productImage
 });
    
 FileDetails.save();
})



module.exports = router;

