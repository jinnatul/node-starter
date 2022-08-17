import jwt from "jsonwebtoken";

const CreateJWT = (data) => {
  const token = jwt.sign(
    data,
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
  return token;
};

export default CreateJWT;
