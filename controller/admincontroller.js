 var adminmodel = require('../model/adminmodel')

 function admincontroller(){
    this.fetchallusers =()=>{
        return new Promise((resolve, reject) => {
            adminmodel.fetchusers({})
            .then((result)=>{
                resolve(result)
            })
            .catch((err)=>{
                reject(err)
            })
        })
        
    }
 }
 module.exports=new  admincontroller();