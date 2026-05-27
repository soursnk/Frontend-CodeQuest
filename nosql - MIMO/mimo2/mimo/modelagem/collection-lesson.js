const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
      trim: true  
    },

    descricao: {
      type: String,
      required: true
    },

    linguagem: {
      type: String,
      required: true,
      enum: ["JavaScript", "Python", "Java", "Csharp", "Cobol", "PHP"]
    },

    dificuldade: {
      type: String,
      required: true,
      enum: ["iniciante", "intermediario", "avancado"]
    },

    categoria: {
      type: String,
      required: true,
      enum: [
        "variavel",
        "funcoes",
        "lacos de repeticao",
        "objetos",
        "arrays"
      ]
    },

    ordemLicao: {
      type: Number,
      required: true
    },

    xp: {
      type: Number,
      default: 10
    },

    tempoEstimado: {
      type: Number
    },

    bloqueioLicao: {
      type: Boolean,
      default: true
    },

    licaoPublicada: {
      type: Boolean,
      default: true
    }
  },

  {
    timestamps: true
  }
);

module.exports = mongoose.model("Lesson", lessonSchema);
