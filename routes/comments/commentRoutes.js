const express = require('express');

const commentRouter = express.Router();

commentRouter.post('/', async(req,res)=>{
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

commentRouter.get('/:id', async(req,res)=>{
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


commentRouter.delete('/:id', async(req,res)=>{
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

commentRouter.put('/:id', async(req,res)=>{
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

module.exports = commentRouter;