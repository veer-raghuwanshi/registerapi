var multer = require('multer')

var storage_engine  =  multer.diskStorage({
   destination: './public/images',
   filename: (req,file,cb)=>{
    // cb(null,'./uploads')
           cb(null,Date.now() + '_' + file.originalname)

   },
//    filename:(req, file, cb) => {
//        cb(null,Date.now() + '_' + file.originalname)
   
//    }
})
let imgupload = multer({storage:storage_engine})
module.exports = imgupload
