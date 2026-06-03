const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({

    service:"gmail",

    auth:{
        user:process.env.EMAIL,
        pass:process.env.EMAIL_PASS
    }

});

exports.sendContact = async(req,res)=>{

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

            <p>${message}</p>

            `
        });

        res.json({
            message:"Message sent"
        });

    }

    catch(error){

        res.status(500).json({
            message:"Failed"
        });

    }

};