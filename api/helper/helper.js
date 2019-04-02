const mongoose = require("mongoose");
// Mongoose model with scheme
const Photo = require("../../models/photos");

const MONGO_URL = "mongodb://localhost:27017/demo";
mongoose.connect(MONGO_URL, {useNewUrlParser: true})
    .then(resolved =>
        console.log("Database connected")
    ).catch(error => {
    console.log(error);
});


exports.addPhoto = async function (name, description, imageUrl) {
    return new Promise(
        function (resolve, reject) {
            const photo = new Photo({
                _id:new mongoose.Types.ObjectId(),
                name:name,
                imageUrl:imageUrl,
                description: description,
                createdAt: Date()
            });

            photo.save().then(
                result=>{
                    resolve("Inserted");
                }
            ).catch(err=>{
                resolve(err);
            })

        }
    )
};
exports.getPhoto = async function () {
    return new Promise(
        function (resolve, reject) {
            Photo.find({}).select("_id name description imageUrl createdAt")
                .then(result=>{
                    console.log(result);
                    resolve(result);
                })
                .catch(err=>{
                    console.log(err);
                    resolve(err);
                })
        }
    )
};
