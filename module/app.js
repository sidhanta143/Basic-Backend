
const express=require('express');
const router=express.Router();
const userRouter=require('./Router/Modules');

Router.get('/users',async(req,res)=>{
  try{
const users=await userRouter.find();
res.json(users);
  } 
  catch(error){
    res.status(500).json({error:error.message});
  } 
})


module.exports=router;
