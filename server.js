const express = require('express');
require('./config/database.js'); 
// const model = require('./model');

const app = express();

app.post('/api/users/register', async(req,res)=>{
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

app.post('/api/users/login', async(req,res)=>{
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

app.get('/api/users/profile/:id', async(req,res)=>{
  try{
    res.json({
      status :"success",
      data : "Profile routr",
    });
  }
  catch(err){
    res.json(error.message);   
  }
});

app.get('/api/users', async(req,res)=>{
  try{
    res.json({
      status :"success",
      data : "users route",
    });
  }
  catch(err){
    res.json(error.message);   
  }
});

app.delete('/api/users/:id', async(req,res)=>{
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

app.put('/api/users/:id', async(req,res)=>{
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


app.post('/api/posts', async(req,res)=>{
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

app.get('/api/posts/:id', async(req,res)=>{
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

app.get('/api/posts', async(req,res)=>{
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

app.delete('/api/posts/:id', async(req,res)=>{
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

app.put('/api/posts/:id', async(req,res)=>{
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


app.post('/api/comments', async(req,res)=>{
  try{
    res.json({
      status :"success",
      data : "post comment successfully",
    });
  }
  catch(err){
    res.json(error.message);   
  }
});


app.get('/api/comments/:id', async(req,res)=>{
try{
res.json({
  status :"success",
  data : "Comment route",
});
}
catch(err){
res.json(error.message);   
}
});

app.delete('/api/comments/:id', async(req,res)=>{
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

app.put('/api/comments/:id', async(req,res)=>{
try{
res.json({
  status :"success",
  data : "update comments route",
});
}
catch(err){
res.json(error.message);   
}
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



