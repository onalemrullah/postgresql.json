const express=require('express')
const router=express.Router()
const User=require('../models/user')

router.get("/",(req,res)=>{
    User.findAll().then((users)=>res.json(users)).catch((err)=>console.log(err))
})
module.exports=router