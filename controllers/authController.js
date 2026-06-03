const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");


// REGISTER
exports.register = async(req,res)=>{

  try{

    const {
      name,
      email,
      password
    } = req.body;

    const existingUser =
    await User.findOne({email});

    if(existingUser){

      return res.status(400).json({
        message:"Email already exists"
      });

    }

    const hashedPassword =
    await bcrypt.hash(password,10);

    await User.create({

      name,
      email,
      password:hashedPassword

    });

    res.json({
      message:"Registered successfully"
    });

  }catch(err){

    console.log(err);

    res.status(500).json({
      message:"Server error"
    });

  }

};


// LOGIN
exports.login = async(req,res)=>{

  try{

    const {
      email,
      password
    } = req.body;

    const user =
    await User.findOne({email});

    if(!user){

      return res.status(400).json({
        message:"User not found"
      });

    }

    const match =
    await bcrypt.compare(
      password,
      user.password
    );

    if(!match){

      return res.status(400).json({
        message:"Wrong password"
      });

    }

    const token = jwt.sign(

      {
        id:user._id,
        isAdmin:user.isAdmin
      },

      process.env.JWT_SECRET,

      {
        expiresIn:"1d"
      }

    );

    res.json({
      token
    });

  }catch(err){

    console.log(err);

    res.status(500).json({
      message:"Server error"
    });

  }

};