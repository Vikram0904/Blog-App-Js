const express = require('express');

const postRouter = express.Router();

postRouter.post('/', async(req,res)=>{
    try{
    res.json({
        status :"success",
        data : "post created successfully",
    });
    }
    catch(err){
    res.json(error.message);   
    }
});

postRouter.get('/:id', async(req,res)=>{
    try{
    res.json({
    status :"success",
    data : "Post route",
});
}
catch(err){
res.json(error.message);   
}
});

postRouter.get('/', async(req,res)=>{
try{
res.json({
    status :"success",
    data : "posts route",
});
}
catch(err){
res.json(error.message);   
}
});

postRouter.delete('/:id', async(req,res)=>{
try{
res.json({
    status :"success",
    data : "delete posts route",
});
}
catch(err){
res.json(error.message);   
}
});

postRouter.put('/:id', async(req,res)=>{
try{
res.json({
status :"success",
data : "update posts route",
});
}
catch(err){
res.json(error.message);   
}
});