var express= require('express')
var router = express.Router()
 var admincontroller=require('../controller/admincontroller')


 router.get('/getallusers',(req,res)=>{
    admincontroller.fetchallusers()
    .then((result)=>{
        res.json(result)
    })
    .catch((error)=>{
        res.json({"msg ": "no user Available" , "error":error})
    })
 })
 module.exports = router