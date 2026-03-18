import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    let token = req.headers.authorization;
token = token && token.split(" ")[1]; // Extract token from
   console.log("Received token:", token);
    if (!token) {
      return res.status(401).json({ message: "Token required" });
    }

    const decoded = jwt.verify(token, "mysecretkey");
     console.log("Decoded token:", decoded);
    req.user = decoded;

    next(); // move to next middleware or controller
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(401).json({ message: "Invalid token" });
  }
};