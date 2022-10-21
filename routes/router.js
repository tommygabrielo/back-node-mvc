const express=require('express')
const usercontroller=require("../controllers/UserController")
const router = require ('express').Router();

router.get("/",(req,res,next)=>{
    res.send("Tommy")
})

router.get("/alluser",usercontroller.getalluser);

module.exports=router