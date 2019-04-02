const Helper = require("../api/helper/helper");



exports.getAllPhotos = async (req, res)=>{
    const photos = await Helper.getPhoto();
    res.status(200)
        .json({
            status:200,
            photos:photos
        })
};

exports.addPhoto = async (req, res)=>{
    const photo = await Helper.addPhoto(req.body.name, req.body.description,req.file.path)
    if(photo === "Inserted"){
        res.status(200)
            .json({
              status:200,
              message:"Photo inserted"
            })
    }
};
