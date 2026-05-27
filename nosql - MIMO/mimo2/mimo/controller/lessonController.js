const Lesson = require("../modelagem/collection-lesson");

exports.criarLicao = async (req, res) => {
  try {

    const novaLicao = await Lesson.create(req.body);

    res.status(201).json({
      mensagem: "Lição criada com sucesso",
      dados: novaLicao
    });

  } catch (error) {

    res.status(500).json({
      mensagem: "Erro ao criar lição",
      erro: error.message
    });

  }
};