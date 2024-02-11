const express = require('express');
require('./config/database.js'); 
const userRouter = require("./routes/users/userRoutes.js");
const postRouter = require("./routes/posts/postRoutes.js");
const commentRouter = require("./routes/comments/commentRoutes.js");

const app = express();

const useAuth ={
  isLogin:false,
  isAdmin:false,
};

app.use((req,res,next)=>{
  if(useAuth.isLogin){
  next();
  }else{
    return res.json({
      msg:"Invalid login"
    });
  }
});

app.use('/api/users',userRouter);

app.use('/api/posts',postRouter);

app.use('/api/comments',commentRouter);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



