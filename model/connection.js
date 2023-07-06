var mongoose = require('mongoose')
var url = "mongodb://https://registerapi-2nty.onrender.com/Universaldatabase"
mongoose.connect(url)
var db = mongoose.connection
console.log("Database connection successfully Done!!")
module.exports = db


