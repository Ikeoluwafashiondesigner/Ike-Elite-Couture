const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  style: String,
  color: String,
  fabric: String,

  qty: Number,
  price: Number,

  reference:{
    type:String,
    default:""
 },
  paid: {
    type: Boolean,
    default: false
  },

  status: {
    type: String,
    default: "pending"
  },

  measurements: {
    bust: String,
    waist: String,
    hip: String,
    length: String
  }


}, { timestamps: true }); // 🔥 IMPORTANT ADD

module.exports = mongoose.model("Order", OrderSchema);