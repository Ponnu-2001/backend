//import
var express = require("express")
require("./connection")
var empModel = require("./model/employee")
var cors =require('cors')

//intiallize
var app = express()
app.use(cors())
//middleware
app.use(express.json());


//api
app.get('/trial',(req,res)=> {
    res.send("message for trial")
})

//add api
app.post('/add', async (req, res) => {
    try {
        await empModel(req.body).save()
        res.send({ message: "data added" })
    } catch (error){
        console.log(error);
    }
})
//view api

app.get("/view", async (req, res) => {
    try {
        var data = await empModel.find();
        res.send(data);
             
    } catch (error) {
        console.log(error);
        
    }
});
//api delete
app.delete("/remove/:id", async (req, res) => {
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send({message:"deleted sucessfully!!"})
    } catch (error) {
        console.log(error);
    }
})
//update api
app.put('/update/:id', async (req, res) => {
    try {
        await empModel.findByIdAndUpdate(req.params.id,req.body)
        res.send({ message: "updated sucessfully!!" })
    } catch (error ){
        console.log(error);
    }
})

//port
app.listen(3004, () => {
    console.log("port is running")
})