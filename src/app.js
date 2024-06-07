const express = require('express')

const app = express()


app.get('/testNode',(req,res)=>{
    res.status(200).send("welcome to node js")
})

module.exports = app    