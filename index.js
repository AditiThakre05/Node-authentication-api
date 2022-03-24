const express = require("express")
const mongoose = require("mongoose")
const app = express()
const authRoute = require('./routes/auth')

const  dbURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
app.use(express.json())
app.use('/api/auth', authRoute)


mongoose.connect(dbURI , {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on("error", (err)=>{console.error(err)})
db.once("open", () => {console.log("DB started successfully")})

app.listen(2000, () => {console.log("Server started: 2000")})