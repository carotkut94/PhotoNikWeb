const express = require("express");

const route = express.Router();
const photoController = require('../../api/controller');

const multer = require("multer");
// const storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//         callback(null, './uploads/')
//     },
//     filename: function(req, file, callback) {
//         callback(null,Math.floor(new Date()/1000)+file.originalname)
//     }
// });
//
// const filter = (req, file, cb)=>{
//     console.log(file);
//     if(file.mimetype === 'image/jpeg' ||file.mimetype === 'image/jpg' || file.mimetype === 'image/png'){
//         cb(null, true);
//     }else{
//         cb(new Error("Invalid file type"), false);
//     }
// };


//onst upload = multer({storage, fileFilter: filter});

route.get("/", photoController.getAllPhotos);


route.put("/", photoController.addPhoto);

module.exports = route;
