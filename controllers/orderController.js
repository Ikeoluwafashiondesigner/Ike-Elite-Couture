const Order = require("../models/Order");
const { verifyPaystackPayment } = require("../utils/paystack");

// CREATE ORDER
exports.createOrder = async (req, res) => {

    try {

        const {
            style,
            color,
            fabric,
            qty,
            measurements,
            reference
        } = req.body;

        const existing = await Order.findOne({ reference });

        if (existing) {
            return res.status(400).json({
                message: "Order already exists"
            });
        }

        const price = 20000 * qty;

        const order = await Order.create({
            user: req.user.id,
            style,
            color,
            fabric,
            qty,
            price,
            reference,
            paid: true,
            status: "pending",
            measurements
        });

        res.json({
            message: "Order saved",
            order
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error creating order" });
    }
};


// USER ORDERS
exports.myOrders = async (req, res) => {

    try {

        const orders = await Order.find({ user: req.user.id });

        res.json(orders);

    } catch (err) {
        res.status(500).json({ message: "Error fetching orders" });
    }
};


// ADMIN ORDERS
exports.allOrders = async (req, res) => {

    try {

        if (!req.user.isAdmin) {
            return res.status(403).json({ message: "Access denied" });
        }

        const orders = await Order.find().sort({ createdAt: -1 });

        res.json(orders);

    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};