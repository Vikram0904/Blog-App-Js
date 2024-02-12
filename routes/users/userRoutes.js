const express = require('express');
const {
    userRegisterCtrl,
    userLoginCtrl,
    usersCtrl,
    userProfileCtrl,
    userDeleteCtrl,
    userUpdateCtrl
} = require('../../controller/users/userCtrl');
const isLogin = require('../../middleware/isLogin.Js');

const userRouter = express.Router();

userRouter.post("/register",userRegisterCtrl);

userRouter.post('/login',userLoginCtrl);

userRouter.get('/',usersCtrl);

userRouter.get('/profile/',isLogin,userProfileCtrl);

userRouter.delete('/:id',userDeleteCtrl);

userRouter.put('/:id',userUpdateCtrl);



module.exports = userRouter;