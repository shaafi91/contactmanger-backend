const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({user_id: req.user.id});
    res.status(200).json(contacts);
});

//@desc Create a new contact
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
    console.log("📩 Incoming POST request to create contact...");
    console.log("📌 Request Body:", req.body);
    console.log("👤 User making request:", req.user);

    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        console.log("❌ Missing required fields!");
        res.status(400);
        return res.json({ message: "All fields are mandatory!" });
    }

    try {
        const contact = await Contact.create({
            name,
            email,
            phone,
            user_id: req.user.id
        });

        console.log("✅ Contact created:", contact);
        return res.status(201).json(contact);  // Ensure response is sent
    } catch (error) {
        console.error("❌ Error creating contact:", error);
        res.status(500);
        return res.json({ message: "Server error, contact not created" });
    }
});


//@desc Get a single contact by ID
//@route GET /api/contacts/:id
//@access private
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found!");
    }
    
    res.status(200).json(contact);
});

//@desc Update contact by ID
//@route PUT /api/contacts/:id
//@access private
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found!");
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("user dont have permision to update another user contacts");
    }

    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(updatedContact);
});

//@desc Delete contact by ID
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found!");
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("user dont have permision to delete another user contacts");
    }

    await Contact.deleteOne({ _id: req.params.id });

    res.status(200).json({ message: "Contact deleted successfully", deletedContact: contact });
});

module.exports = { getContact, createContact, getContacts, updateContact, deleteContact };
