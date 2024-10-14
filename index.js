const express = require('express')
const userRouter = require('./router/user')
const appointmentRouter=require("./router/appointment")
const app = express()
require('dotenv').config()

const PORT=process.env.PORT ||3000
// =====================================DB connection=============================
require('./db/dbConnection')

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: false })); 

app.use("/user",userRouter);
app.use("/appointment",appointmentRouter)

app.get("/",(req,res)=>{
    res.send("Home page")
})

app.listen(PORT,()=>{
    console.log(`pp is listing at ${PORT}`)
})