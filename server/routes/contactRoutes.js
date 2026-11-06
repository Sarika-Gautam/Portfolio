const express = require("express");
const router = express.Router();

const {
  createContact,
  getContacts,
  updateContact,
  deleteContact
} = require("../controllers/contactController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/", createContact);

router.get("/", authMiddleware, getContacts);
router.patch("/:id/read", authMiddleware, updateContact);
router.delete("/:id", authMiddleware, deleteContact);

module.exports = router;