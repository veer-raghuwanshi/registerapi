require('./connection')
var registerschemamodel =   require('../schema/registerschema')


function adminmodel(){
    this.fetchusers = (cond)=>{
        return new Promise((resolve, reject) => {
          registerschemamodel.find(cond)
          .then((result)=>{
            resolve(result)
          }).catch((error)=>{
            reject(error)
          })
        })
        
    }
}
module.exports=new  adminmodel()