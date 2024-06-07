const express = require('express')

const app = express()


app.get('/testNode',(req,res)=>{
    res.status(200).send("welcome to node js")
})

app.get("/",(req,res)=>{
    res.status(200).send("This is the home page")
})

module.exports = app    