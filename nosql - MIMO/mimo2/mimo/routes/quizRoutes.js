const express = require("express");

const router = express.Router();

const quizController = require("../controller/quizController");


// Cria
router.post("/", quizController.criarQuiz);


// Lista
router.get("/", quizController.listarQuiz);


// Busca por id
router.get("/:id", quizController.buscarQuizPorId);


// Resp do quiz
router.post("/:id/responder", quizController.responderQuiz);


module.exports = router;