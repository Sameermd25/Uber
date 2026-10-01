const dotenv=require("dotenv");
dotenv.config();

const express=require("express");

const cors=require("cors")
const app=express();

app.use(cors())

const PORT=process.env.PORT;

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(PORT,()=>console.log("Port:"+PORT));