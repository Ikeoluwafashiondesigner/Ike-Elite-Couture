router.post("/contact", async (req, res) => {

  try {

    const { name, email, phone, style, date, message } = req.body;

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "New Enquiry Received",
      html: `
        <h2>New Enquiry</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Style:</b> ${style}</p>
        <p><b>Date:</b> ${date}</p>

        <p><b>Message:</b></p>
        <p>${message}</p>
      `
    });

    res.json({ message: "Enquiry sent successfully" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to send enquiry" });
  }

});