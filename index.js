const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product.routes");
require("dotenv").config();
const cors = require('cors'); 

const routes = require("./routes/index.js");

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
const app = express();
app.use(cors());  

app.use(express.json());
app.use("/api", routes);

mongoose
  .connect(DB_URL)
  .then()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
