const express = require('express');
const router = express.Router();
const {
    createContact,
    getContacts,
    getContact,
    updateContact,
    deleteContact
} = require("../controllers/contactController");
const validateToken = require('../middlewares/validateTokenHandler');

// Apply token validation middleware globally to all routes
router.use(validateToken);

// Route for getting all contacts and creating a new contact
router.route("/")
    .get(getContacts) // Get all contacts
    .post(createContact); // Create a new contact

// Route for getting, updating, and deleting a specific contact by ID
router.route("/:id")
    .get(getContact) // Get a specific contact by ID
    .put(updateContact) // Update a specific contact by ID
    .delete(deleteContact); // Delete a specific contact by ID

module.exports = router;
