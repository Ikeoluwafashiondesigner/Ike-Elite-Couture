const express = require("express");

const router = express.Router();

const authController =
require("../controllers/authController");

const verifyToken = require("../middleware/verifyToken");

router.post(
  "/register",
  authController.register
);

router.post(
  "/login",
  authController.login
);
router.get("/me", verifyToken, async (req, res) => {

  try {

      const User = require("../models/User");

      const user = await User.findById(req.user.id)
          .select("-password");

      res.json(user);

  } catch (err) {
      res.status(500).json({ message: "Error" });
  }
});

module.exports = router;