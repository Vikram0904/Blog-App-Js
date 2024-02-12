const bcrypt = require('bcryptjs')
const User =require("../../model/User/User");
const generateToken = require("../../utils/generateToken");
const getTokenFromHeader = require("../../utils/getTokenFromHeader");
const appError = require('../../utils/apperror');



const userRegisterCtrl =async(req,res,next)=>{
    const {username,email,password} =req.body;
    try{
    const userFound = await User.findOne({email});    
    if(userFound){
        return next(appError("User Already Exists",500))
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const user = await User.create({
        username,
        email,
        password:hashedPassword,
    }); 
    
    res.json(
        {
        status: "success",
        data: user ,
        });
    }catch(err){
    next(appError(err.message));   
    }
};

const userLoginCtrl =async(req,res)=>{
    const { email, password } = req.body;
    try{
        const userFound = await User.findOne({email});    

        if(!userFound){
            return res.json({
                msg:"Invalid login credentials"
            });
        }  
    
        const isPasswordMatched = bcrypt.compare(password, userFound.password);   
    
        if(!isPasswordMatched){
        return res.json({
            msg:"Invalid login credentials"
            });
        }  

    res.json({
        status :"success",
        data : {
            username : userFound.username,
            password : userFound.password,
            email : userFound.email,
            token:generateToken(userFound._id),
        },
    });
    }
    catch(err){
    res.json(err.message);   
    }
    
};

const usersCtrl = async(req,res)=>{
    try{
    res.json({
        status :"success",
        data : "all users route",
    });
    }
    catch(err){
    res.json(error.message);   
    }
}

const userProfileCtrl = async(req,res)=>{

    try{
    const user = await User.findById(req.userAuth)
    res.json({
        status :"success",
        data : user,
    });
    }
    catch(err){
    res.json(err.message);   
    }
};

const userDeleteCtrl = async(req,res)=>{
    try{
    res.json({
        status :"success",
        data : "delete users route",
    });
    }
    catch(err){
    res.json(error.message);   
    }
};

const userUpdateCtrl =  async(req,res)=>{
    try{
    res.json({
        status :"success",
        data : "update users route",
    });
    }
    catch(err){
    res.json(error.message);   
    }
}


module.exports ={
    userRegisterCtrl,userLoginCtrl,usersCtrl,userProfileCtrl,
    userDeleteCtrl,userUpdateCtrl
}