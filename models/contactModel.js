const mangoose = require('mongoose');

const contactSchema = mangoose.Schema({
    user_id:{
        type: mangoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },

    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    phone: {
        type: String,
        required: [true, "Phone is required"]
    },
},
    {
        timestamps: true
    }
);

module.exports = mangoose.model("Contact", contactSchema);

