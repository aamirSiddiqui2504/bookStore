var express = require('express');
var router = express.Router();
var multer = require('multer');
var bodyParser = require('body-parser');

var storage = multer.diskStorage({
    destination: function(req, file,cb){
        cb(null,'upload' );
    },
    filename : function(req, file,cb){
        cb(null, file.originalname);
    }
});

var upload = multer({storage:storage});
var file = require('./image');

//var uploadPath = __dirname + "/upload" + req.files.path; 

router.use(bodyParser.json());

router.post('/upload', upload.any(), function(req, res){
        
        var filesArr = [];
        filesArr.length = req.files.length;
        filesArr = req.files;
        console.log(filesArr[0]);
        var imageData = {};
       var imagePath = filesArr[0].path;
       var imageName = filesArr[0].originalname;
       imageData.path= imagePath;
       imageData.originalname = imageName;
        console.log(imageData);
        var product = new file(imageData);
        product.save();
       res.send(req.files)
});

router.get('/getFiles', function(req,res){
    
    file.find({}, function(err, docs) {
        res.send(docs);
    });
})

module.exports = router;