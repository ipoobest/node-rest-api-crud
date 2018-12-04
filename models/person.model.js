const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PersonSchema = new Schema({
    firstname: { type:String, require: true, max:100 },
    lastname: { type:String },
    age: {type: Number}
});

//Export the model
module.exports = mongoose.model('Person', PersonSchema);