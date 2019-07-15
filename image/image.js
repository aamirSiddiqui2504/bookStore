var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
   
    path: {
        type: String,
        required: true,
        trim: true
        },
        originalname: {
        type: String,
        required: true
        }
   
    // path: String,
    // originalname: String,
    // productImage : Object
});
mongoose.model('Files',imageSchema);

module.exports = mongoose.model('Files');