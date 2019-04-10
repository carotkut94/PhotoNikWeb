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
    if(req.file.path!==undefined) {
        const photo = await Helper.addPhoto(req.body.name, req.body.description, req.file.path)
        if (photo === "Inserted") {
            res.status(200)
                .json({
                    status: 200,
                    message: "Photo inserted"
                })
        } else {
            res.status(401)
                .json({
                    status: 401,
                    message: "All fields are required"
                })
        }
    }else{
        res.status(401)
            .json({
                status: 401,
                message: "file is required"
            })
    }
};
