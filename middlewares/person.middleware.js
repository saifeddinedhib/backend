const mongoose = require("mongoose");

const validateCreatePerson = (req, res, next) => {
  const {
    name,
    age,
    email,
    password,
    phone,
    deliveryAddress,
    image,
    role,
    favoriteFoods,
  } = req.body;

  if (
    !name ||
    !email ||
    !age ||
    !email ||
    !password ||
    !phone ||
    !deliveryAddress
  ) {
    return res.status(400).json({
      error:
        "Name , email , age , password , phone , deliveryAdress are required",
    });
  }

  if (typeof name !== "string" || name.trim() == "") {
    return res.status(400).json({ error: "not a valid name  " });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    typeof email !== "string" ||
    email.trim() === "" ||
    !emailRegex.test(email)
  ) {
    return res.status(400).json({ error: "not a valid email address  " });
  }

  if (typeof age !== "number" || age < 0) {
    return res.status(400).json({ error: "not a valid age  " });
  }

  if (typeof password !== "string" || password.length < 6) {
    return res.status(400).json({ error: "not a valid password  " });
  }

  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  if (
    typeof phone !== "string" ||
    phone.trim() === "" ||
    !phoneRegex.test(phone) < 0
  ) {
    return res.status(400).json({ error: "not a valid phone number  " });
  }

  if (typeof deliveryAddress !== "string" || deliveryAddress.trim() == "") {
    return res.status(400).json({ error: "not a valid address  " });
  }
  if (
    image !== undefined &&
    (typeof image !== "string" || image.trim() == "")
  ) {
    return res.status(400).json({ error: "not a valid picture  " });
  }
  if (role !== undefined && !["CUSTOMER", "ADMIN"].includes(role)) {
    return res.status(400).json({ error: "not a valid role  " });
  }

  if (favoriteFoods !== undefined) {
    if (
      !Array.isArray(favoriteFoods) ||
      !favoriteFoods.every((food) => typeof food === "string")
    ) {
      return res.status(400).json({ error: "not a valid favfood  " });
    }
  }
  next();
};

const validateUpdatePerson = (req, res, next) => {
  const {
    name,
    age,
    email,
    password,
    deliveryAddress,
    phone,
    favoriteFoods,
    image,
    role,
  } = req.body;

  if (name !== undefined) {
    if (typeof name !== "string" || name.trim() === "") {
      return res
        .status(400)
        .json({ error: "Invalid name field: must be a non-empty string" });
    }
  }

  if (email !== undefined) {
    if (typeof email !== "string") {
      return res
        .status(400)
        .json({ error: "Invalid email field: must be a non-empty string" });
    }
  }

  if (age !== undefined) {
    if (typeof age !== "number" || age < 0) {
      return res
        .status(400)
        .json({ error: "Invalid age field: must be a non-empty number" });
    }
  }

  if (password !== undefined) {
    if (typeof password !== "string") {
      return res
        .status(400)
        .json({ error: "Invalid password field: must be a non-empty number" });
    }
  }

  if (deliveryAddress !== undefined) {
    if (typeof deliveryAddress !== "string") {
      return res.status(400).json({
        error: "Invalid deliveryAddress field: must be a non-empty string",
      });
    }
  }

  if (phone !== undefined) {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    if (
      typeof phone !== "string" ||
      phone.trim() === "" ||
      !phoneRegex.test(phone) < 0
    ) {
      return res.status(400).json({ error: "not a valid phone number  " });
    }
  }

  if (favoriteFoods !== undefined) {
    console.log("favoriteFoods", favoriteFoods)
    if (
      !Array.isArray(favoriteFoods) ||
      !favoriteFoods.every((food) => typeof food === "string")
    ) {
      return res.status(400).json({ error: "not a valid favoriteFoods  " });
    }
  }

  if (image !== undefined) {
    if (typeof image !== "string") {
      return res
        .status(400)
        .json({ error: "Invalid image field: must be a non-empty number" });
    }
  }

  if (role !== undefined) {
    if (role !== undefined && !["CUSTOMER", "ADMIN"].includes(role)) {
      return res.status(400).json({ error: "not a valid role  " });
    }
  }

  if (
    name === undefined &&
    age === undefined &&
    email === undefined &&
    password === undefined &&
    phone === undefined &&
    deliveryAddress === undefined &&
    image === undefined &&
    role === undefined &&
    favoriteFoods === undefined
  ) {
    return res
      .status(400)
      .json({ error: " At Least one of fields must be provided " });
  }

  next()
};

const validId = (req, res, next) => {

  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }

  next();
};

module.exports = {
  validateCreatePerson,
  validId,
  validateUpdatePerson,
};
