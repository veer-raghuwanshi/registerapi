var multer = require('multer')

var storage_engine  =  multer.diskStorage({
   destination: (req,file,cb)=>{
    cb(null,'./uploads')
   },
   filename:(req, file, cb) => {
       cb(null,Date.now() + '_' + file.originalname)
   
   }
})
let imgupload = multer({storage:storage_engine})
module.exports = imgupload
