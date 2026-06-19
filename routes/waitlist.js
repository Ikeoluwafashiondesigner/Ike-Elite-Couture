const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();
const waitlistRoutes = require("./routes/waitlist");
app.use("/api", waitlistRoutes);
const transporter = nodemailer.createTransport({
service: "gmail",
auth: {
user: process.env.EMAIL,
pass: process.env.EMAIL_PASS
}
});

router.post("/waitlist", async (req, res) => {

try {

const { name, email, phone, interest } = req.body;

await transporter.sendMail({
from: process.env.EMAIL,
to: process.env.EMAIL,
subject: "New Waitlist Signup",
html: `

<h2>New Waitlist Member</h2>

<p><b>Name:</b> ${name}</p>
<p><b>Email:</b> ${email}</p>
<p><b>Phone:</b> ${phone}</p>
<p><b>Interest:</b> ${interest}</p>
`
});

res.json({
success: true,
message: "Successfully joined waitlist"
});

} catch (err) {
console.log(err);
res.status(500).json({
success: false,
message: "Failed to join waitlist"
});
}

});

module.exports = router;
