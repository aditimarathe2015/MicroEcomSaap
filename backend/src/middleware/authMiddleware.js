import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "Token required" });
    }

    const decoded = jwt.verify(token, "secret_key");

    req.user = decoded;

    next(); // move to next middleware or controller
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};