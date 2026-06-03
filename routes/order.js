const express = require("express");
const router = express.Router();
const axios = require("axios");
const Order = require("../models/Order");

const orderController = require("../controllers/orderController");
const auth = require("../middleware/verifyToken");

router.post("/verify-payment", auth, async (req, res) => {

  const { reference } = req.body;

  try {

      const response = await axios.get(
          `https://api.paystack.co/transaction/verify/${reference}`,
          {
              headers: {
                  Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`
              }
          }
      );

      const data = response.data.data;

      if (data.status !== "success") {
          return res.json({ success: false });
      }



      return res.json({
          success: true,
          order
      });

  } catch (err) {
      console.log(err);
      return res.status(500).json({ success: false });
  }
});
router.post("/order", auth, orderController.createOrder);

router.get("/my-orders", auth, orderController.myOrders);

router.get("/admin/orders", auth, orderController.allOrders);

router.put("/order/:id/status", auth, async (req, res) => {

  try {

      if (!req.user.isAdmin) {
          return res.status(403).json({ message: "Access denied" });
      }

      const { status } = req.body;

      const order = await Order.findByIdAndUpdate(
          req.params.id,
          { status },
          { new: true }
      );

      res.json(order);

  } catch (err) {
      res.status(500).json({ message: "Error updating status" });
  }
});
router.get("/admin/stats", auth, async (req, res) => {

  try {

      if (!req.user.isAdmin) {
          return res.status(403).json({ message: "Access denied" });
      }

      const orders = await Order.find();

      const totalOrders = orders.length;

      const totalRevenue = orders.reduce((sum, order) => {
          return sum + (order.price || 0);
      }, 0);

      const pending = orders.filter(o => o.status === "pending").length;
      const completed = orders.filter(o => o.status === "completed").length;

      res.json({
          totalOrders,
          totalRevenue,
          pending,
          completed
      });

  } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
