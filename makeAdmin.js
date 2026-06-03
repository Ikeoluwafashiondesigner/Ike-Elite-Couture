require("dotenv").config();

const mongoose = require("mongoose");
const User = require("./models/User");

async function makeAdmin() {

    try {

        await mongoose.connect(process.env.MONGO_URI);

        const email = "danieladepoju446@gmail.com";

        const user = await User.findOneAndUpdate(
            { email },
            { isAdmin: true },
            { new: true }
        );

        if (!user) {
            console.log("User not found");
            process.exit();
        }

        console.log("✅ Admin granted:");
        console.log(user);

        process.exit();

    } catch (err) {

        console.log(err);
        process.exit();

    }
}

makeAdmin();