const mongoose = require("mongoose");

const userSchema = new mongoose. Schema ({
    username: {
    type: String,
    required: [true, "User Name is required"],
    },
    email: {
    type: String,
    required: [true, "Email is required"],
    },
    password: {
    type: String,
    retired: [true, 'Password is required'],
    },
    active: {
      type: Boolean,
      default:true,
      },
    },
    {
      timestamps: true,
    }
    );

const User = mongoose.model('User',userSchema);
module.exports = User;