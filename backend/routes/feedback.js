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
    dbConnection.collection("feedback").find({usr:req.body.usr}).toArray((err,data)=>{
        if(err){
            console.log("Cannot send data to database...");
        }
        else{
            dbConnection.collection("feedback").insertOne({
                ...req.body
            })
        }
    })
})

module.exports = router