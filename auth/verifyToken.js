
var config = require('../config/config');

var jwt = require('jsonwebtoken');

function verifyToken(req, res, next){
    var token = req.header['x-access-token'];
    jwt.verify(token, config.secret,function(err,decoded){
        res.userId = decoded.id;
    });
}

module.exports = verifyToken;
