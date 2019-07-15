var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');


var verifyToken = require('./verifyToken');
//router.use(bodyParser.urlencoded({ extended: false }));
var bodyParser = require('body-parser');

var User = require('../user/User');

router.use(bodyParser.json());

var config = require('../config/config');


router.post('/userRegistration',function(req,res){
    console.log("Hello this is user reg");
   
    User.create({
            name: req.body.user.name,
            email: req.body.user.email,
            password: req.body.user.password,
            role:req.body.user.role,
             mobile:req.body.user.mobile
     },
    function(err, user){ jwt.sign({},config.secret,function(err,token) { res.send(user  + " : "+ token);})});
});

router.post('/login',function(req,res,next){
User.find({},null,{sort:{"name":'desc'}},function(err,docs,next){
    var userList= [];
    
   // userList.length = docs.length;
    
        
    for(var i = 0; i <=docs.length-1; i++){
      // userList[i] = "Mr." + docs[i].name;
      console.log(i);
      const username = docs[i].name;
      const pass = docs[i].password;
      console.log(username + " ====== " + pass);
      //const test = username.name;
      if(req.body.name == username && req.body.password == pass ){
          res.send(username + " logged in success");
      }
    }
    
})
});

module.exports = router;
