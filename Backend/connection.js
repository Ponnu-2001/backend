var mongoose = require('mongoose')

mongoose.connect("mongodb+srv://sreelakshmi:sreelakshmi@cluster0.4e9xs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("db connected")
    })
    .catch((err)=>{
     console.log(err)
    })
    

