const express = require('express');

const useRouter = express.Router();

useRouter.post("/register",async(req,res)=>{
    try{
    res.json({
    status :"success",
    data : "user registered successfully",
    });
    }
    catch(err){
    res.json(err.message);   
    }
});


useRouter.post('/login', async(req,res)=>{
    try{
    res.json({
        status :"success",
        data : "user login successfully",
    });
    }
    catch(err){
    res.json(error.message);   
    }
});

useRouter.get('/', async(req,res)=>{
    try{
      res.json({
        status :"success",
        data : "all users route",
      });
    }
    catch(err){
      res.json(error.message);   
    }
});

useRouter.delete('/:id', async(req,res)=>{
    try{
    res.json({
        status :"success",
        data : "delete users route",
    });
    }
    catch(err){
    res.json(error.message);   
    }
});

useRouter.put('/:id', async(req,res)=>{
    try{
    res.json({
        status :"success",
        data : "update users route",
    });
    }
    catch(err){
    res.json(error.message);   
    }
});

useRouter.get('/profile/:id', async(req,res)=>{
    try{
    res.json({
        status :"success",
        data : "Profile route",
    });
    }
    catch(err){
    res.json(error.message);   
    }
});

module.exports = useRouter;