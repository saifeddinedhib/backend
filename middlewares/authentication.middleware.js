const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const validateSignIn = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    typeof email !== "string" ||
    email.trim() === "" ||
    !emailRegex.test(email)
  ) {
    return res.status(400).json({ error: "not a valid email address  " });
  }
  if (typeof password !== "string" || password.length < 6) {
    return res.status(400).json({ error: "not a valid password  " });
  }
  next();
};

const isAuthenticated = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  const SECRET_KEY = process.env.SECRET_KEY;

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.user = decoded;
    next();
  });
};

const isAdmin = (req, res, next) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ message: "Access denies .Admins only ." });
  }
  next();
};

module.exports = {
  validateSignIn,
  isAuthenticated,
  isAdmin,
};
