let express = require("express")
let router = express.Router()
let mongo = require("mongodb")
let dbClient = mongo.MongoClient
let dbUrl = "mongodb://127.0.0.1:27017"
let dbName = "Form"

dbClient.connect(dbUrl,(err,connection)=>{
    if(err){
        console.log("Cannot connnect to Database...");
    }
    else{
        console.log("Database connected...");
        dbConnection = connection.db(dbName)
    }
})

router.post("/feedback",(req,res)=>{
    console.log("Feedback API getting hit...");
    dbConnection.collection("feedback").find({usr:req.body.usr}).toArray((err,data)=>{
        if(err){
            console.log("Cannot send data to database...");
        }
        else{
            dbConnection.collection("feedback").insertOne({
                ...req.body
            })
            res.send("Feedback Inserted!")
        }
    })
})

router.get("/displayfeedback",(req,res)=>{
    console.log("Display feedback API getting hit...");
    dbConnection.collection("feedback").find({}).toArray((err,data)=>{
        if(err){
            console.log("Cannot display data...");
        }
        else{
            res.send(data)
        }
    })
})

module.exports = router