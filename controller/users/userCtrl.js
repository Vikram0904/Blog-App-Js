
const User =require("../../model/User/User");

const userRegisterCtrl =async(req,res)=>{
    const {username,email,password} =req.body;
    try{
    const userFound = await User.findOne({email});    
    if(userFound){
        return res.json({
            msg:"User Already Exists"
        });
    }

    const user = await User.create({
        username,
        email,
        password,
    }); 
    
    res.json(
        {
        status: "success",
        data: user 
        });
    }catch(err){
    res.json(err.message);   
    }
};

const userLoginCtrl =async(req,res)=>{
    try{
    res.json({
        status :"success",
        data : "user login successfully",
    });
    }
    catch(err){
    res.json(error.message);   
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
    res.json({
        status :"success",
        data : "Profile route",
    });
    }
    catch(err){
    res.json(error.message);   
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