const { signUpService } = require("../services/authentication.service");
const { getPersonByEmailService } = require("../services/person.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUpController = async (req, res) => {
  try {
    const data = req.body;
    const existingUser = await getPersonByEmailService(data.email);
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "user with this email already take" });
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;
    const newPerson = await signUpService(data);
    const token = jwt.sign(
      {
        id: newPerson._id,
        email: newPerson.email,
        role: newPerson.role,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "24h",
      }
    );
    return res.status(201).json({ newPerson, token });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `failed to sign up:${error.message}` });
  }
};

const signInController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExisting = await getPersonByEmailService(email);
    if (!userExisting) {
      return res.status(404).json({ message: "Invalid email or password" });
    }
    const isPasswordValid = await bcrypt.compare(
      password,
      userExisting.password
    );
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      {
        id: userExisting._id,
        email: userExisting.email,
        role: userExisting.role,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "24h",
      }
    );
    return res.status(200).json({ ...userExisting, token });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `failed to sign in:${error.message}` });
  }
};

module.exports = {
  signUpController,
  signInController,
};
