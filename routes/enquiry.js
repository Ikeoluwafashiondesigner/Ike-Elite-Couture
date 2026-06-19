const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();
const enquiryRoutes = require("./routes/enquiry");

app.use("/api", enquiryRoutes);
const transporter = nodemailer.createTransport({
service: "gmail",
auth: {
user: process.env.EMAIL,
pass: process.env.EMAIL_PASS
}
});

// ENQUIRY FORM
router.post("/enquiry", async (req, res) => {

try {

```
const {
  fullName,
  email,
  whatsapp,
  eventDate,
  outfitType,
  delivery,
  address,
  info
} = req.body;

await transporter.sendMail({

  from: process.env.EMAIL,

  to: process.env.EMAIL,

  subject: "New Website Enquiry",

  html: `
  <h2>New Enquiry Received</h2>

  <p><b>Name:</b> ${fullName}</p>

  <p><b>Email:</b> ${email}</p>

  <p><b>WhatsApp:</b> ${whatsapp}</p>

  <p><b>Event Date:</b> ${eventDate}</p>

  <p><b>Outfit Type:</b> ${outfitType}</p>

  <p><b>Need Delivery:</b> ${delivery}</p>

  <p><b>Address:</b> ${address}</p>

  <p><b>Additional Information:</b></p>

  <p>${info}</p>
  `
});

res.json({
  success: true,
  message: "Enquiry sent successfully"
});
```

} catch (err) {

```
console.log(err);

res.status(500).json({
  success: false,
  message: "Failed to send enquiry"
});
```

}

});

module.exports = router;
