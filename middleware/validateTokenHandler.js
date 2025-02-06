const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    const authHeader = req.headers.Authorization || req.headers.authorization;

    // Check if the token is present and starts with 'Bearer'
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1]; // Get the token from the header

        try {
            // Verify the token and attach user info to request
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            req.user = decoded; // Set decoded user object in request
            next(); // Proceed to the next middleware/route handler
        } catch (err) {
            res.status(401);
            throw new Error("User is not authorized"); // If verification fails, return error
        }
    } else {
        res.status(401);
        throw new Error("Not authorized, no token found");
    }
});

module.exports = validateToken;
