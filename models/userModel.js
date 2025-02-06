const mangoose = require('mongoose');
const userSchema = mangoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already exists"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
},
{
    timestamps: true
}
);

module.exports = mangoose.model("User", userSchema);