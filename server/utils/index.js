import jwt from "jsonwebtoken";

const createJWT = (res, user) => {
  const token = jwt.sign(
    { userId: user._id, isAdmin: user.isAdmin },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "production",
    sameSite: "none",
    maxAge: 1 * 24 * 60 * 60 * 1000,
  });
};

export default createJWT;
