const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();
console.log("EMAIL:", process.env.EMAIL);
console.log("HAS PASS:", !!process.env.EMAIL_PASS);
const transporter = nodemailer.createTransport({

  service:"gmail",

  auth:{
    user:process.env.EMAIL,
    pass:process.env.EMAIL_PASS
  }

});
transporter.verify(function(error, success) {

  if(error){
    console.log("SMTP ERROR:", error);
  }else{
    console.log("SMTP READY");
  }

});
router.get("/email-test", (req,res)=>{

  res.json({
    email: process.env.EMAIL,
    hasPass: !!process.env.EMAIL_PASS
  });

});
// CONTACT EMAIL
router.post("/contact", async(req,res)=>{

  try{

    const {name,email,message} = req.body;

    await transporter.sendMail({

      from:process.env.EMAIL,

      to:process.env.EMAIL,

      subject:"New Contact Message",

      html:`
      <h2>New Contact Message</h2>

      <p><b>Name:</b> ${name}</p>

      <p><b>Email:</b> ${email}</p>

      <p><b>Message:</b></p>

      <p>${message}</p>
      `

    });

    res.json({
      message:"Message sent successfully"
    });

  }catch(err){

    console.log(err);

    res.status(500).json({
      message:"Failed to send message"
    });

  }

});

module.exports = router;