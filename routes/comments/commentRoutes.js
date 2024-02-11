const express = require('express');

const commandRouter = express.Router();

commandRouter.post('/', async(req,res)=>{
    try{
    res.json({
        status :"success",
        data : "comment created successfully",
    });
    }
    catch(err){
    res.json(error.message);   
    }
});
commandRouter.get('/:id', async(req,res)=>{
    try{
    res.json({
    status :"success",
    data : "comment route",
});
}
catch(err){
res.json(error.message);   
}
});


commandRouter.delete('/:id', async(req,res)=>{
try{
res.json({
    status :"success",
    data : "delete comment route",
});
}
catch(err){
res.json(error.message);   
}
});

commandRouter.put('/:id', async(req,res)=>{
try{
res.json({
status :"success",
data : "update comment route",
});
}
catch(err){
res.json(error.message);   
}
});

module.exports = commandRouter;