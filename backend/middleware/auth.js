const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
    let token = req.headers["authorization"];

    if (token) {
        token = token.split(" ")[1]; // Get token from Bearer

        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(400).json({ message: "Invalid token" });
            } else {
                req.user = decoded; // Attach decoded user to request
                next(); // Proceed to the next middleware (or controller function)
            }
        });
    } else {
        return res.status(400).json({ message: "Token is required" });
    }
};

module.exports = verifyToken;
