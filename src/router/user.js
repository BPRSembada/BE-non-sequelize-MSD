const express = require("express");
const router = express.Router();
const { registrasi, getUsers, login, logout } = require("../controller/userC");

const { auth } = require("../middleware/auth");

router.post("/regist", registrasi);
router.post("/login", login);
router.post("/logout", logout);
router.get("/", auth, getUsers);

module.exports = router;
