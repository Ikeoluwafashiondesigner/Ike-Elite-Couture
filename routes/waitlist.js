const router = express.Router();
module.exports = router;
router.post("/waitlist", async (req, res) => {

  try {

    const { name, email, phone, reason } = req.body;

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "New Waitlist Signup",
      html: `
        <h2>Waitlist User</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Reason:</b> ${reason}</p>
      `
    });

    res.json({ message: "Waitlist submitted" });

  } catch (err) {
    res.status(500).json({ message: "Failed" });
  }

});