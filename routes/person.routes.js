const express = require("express");
const router = express.Router();
const {
  createPersonController,
  getPersonByIdController,
  getAllPersonsController,
  deletePersonByIdController,
  updatePersonsByIdController,
} = require("../controllers/person.controller");
const {
  validId,
  validateUpdatePerson,
} = require("../middlewares/person.middleware");

const { isAdmin } = require("../middlewares/authentication.middleware");

router.post("/new", createPersonController);
router.get("/:id", validId, isAdmin, getPersonByIdController);
router.get("/", getAllPersonsController);
router.delete("/:id", validId, deletePersonByIdController);
console.log("33333333333333333333333333333333333333")

router.put(
  "/:id",
  validId,
  validateUpdatePerson,
  updatePersonsByIdController
);

module.exports = router;
