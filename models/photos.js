const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");


let photoCollectionScheme = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required:true},
    description: {type: String, required:true},
    imageUrl: {type: String, required:true},
    createdAt: Date
});

photoCollectionScheme.plugin(validator);
module.exports = mongoose.model("Photo", photoCollectionScheme);
