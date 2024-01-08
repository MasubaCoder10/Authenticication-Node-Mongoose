const userModel = require("../model/usersSchema")
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

module.exports.signup_get = (req, res)=>{
    
    try{
        res.send("i'm in th get signup page")
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}
module.exports.signup_post = async(req, res)=>{
    const {name, email, password} = req.body;
    try{
       
        let user = await userModel.findOne({email});
        if(user){
            return res.status(404).json("User with this given email already exit");
        }
        if(!name || !password || !email) {
            return res.status(404).json("All filed are required");
        }
        if(!validator.isEmail(email)){
            return res.status(404).json("Email must be validation email")
        }
        if(!validator.isStrongPassword(password)){
            return res.status(404).json("Password must be strong")
        } 
       
        user = new userModel({name, email, password});
        await user.save();
        res.status(200).json({_id: user._id, name: name, email: email, password: password})
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}
module.exports.login_get = (req, res)=>{
    res.send("i'm in th login get page")
    try{

    }catch(error){

    }
}
module.exports.login_post = (req, res)=>{
    try{

    }catch(error){

    }
}