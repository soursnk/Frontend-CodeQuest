const express = require("express");

const router = express.Router();

const lessonController = require("../controller/lessonController");


router.post("/", lessonController.criarLicao);

module.exports = router;