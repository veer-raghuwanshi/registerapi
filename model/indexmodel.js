require('./connection')
var registerschemamodel =  require('../schema/registerschema')


function  indexmodel(){
    this.userregistermodel = (userdetails)=>{
        return new Promise((resolve, reject) => {
              var obj = new registerschemamodel(userdetails)

              // save
              obj.save()
              .then((result)=>{
                resolve(result)
              })
              .catch((error)=>{
                reject(error)
              })
        })
        
    }
 this.fetchusers = (cond)=>{
   return new Promise((resolve, reject) => {
     registerschemamodel.find(cond)
     .then((result)=>{
        resolve(result)
     })
     .catch((error)=>{
        reject(error)
     })
   })
 }
}

module.exports = new indexmodel()