require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const orderRoutes = require("./routes/order");
const emailRoutes = require("./routes/email");
const auth = require("./middleware/verifyToken");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
.then(()=>{
  console.log("✅ MongoDB Connected");
})
.catch((err)=>{
  console.log("❌ Mongo Error:",err);
});

app.use("/api",authRoutes);
app.use("/api",orderRoutes);
app.use("/api",emailRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
  console.log("🚀 Server running on port " + PORT);
});