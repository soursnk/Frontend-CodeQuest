const Quiz = require("../modelagem/collection-quiz");


// Criar Quiz
exports.criarQuiz = async (req, res) => {
  try {

    const novoQuiz = await Quiz.create(req.body);

    res.status(201).json({
      mensagem: "Quiz criado com sucesso",
      dados: novoQuiz
    });

  } catch (error) {

    res.status(500).json({
      mensagem: "Erro ao criar quiz",
      erro: error.message
    });

  }
};


// Listar todos os quizzes
exports.listarQuiz = async (req, res) => {
  try {

    const quizzes = await Quiz.find();

    res.status(200).json(quizzes);

  } catch (error) {

    res.status(500).json({
      mensagem: "Erro ao listar quizzes",
      erro: error.message
    });

  }
};


// Buscar quiz por ID
exports.buscarQuizPorId = async (req, res) => {
  try {

    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({
        mensagem: "Quiz não encontrado"
      });
    }

    res.status(200).json(quiz);

  } catch (error) {

    res.status(500).json({
      mensagem: "Erro ao buscar quiz",
      erro: error.message
    });

  }
};


// Responder Quiz
exports.responderQuiz = async (req, res) => {
  try {

    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({
        mensagem: "Quiz não encontrado"
      });
    }

    const respostaUsuario = req.body.resposta;

    const acertou = respostaUsuario === quiz.respostaCorreta;

    res.status(200).json({
      correto: acertou,

      mensagem: acertou
        ? "Resposta correta!"
        : "Resposta incorreta!",

      respostaCorreta: quiz.respostaCorreta
    });

  } catch (error) {

    res.status(500).json({
      mensagem: "Erro ao responder quiz",
      erro: error.message
    });

  }
};