const express = require("express");
const mongoose = require("mongoose");

const lessonRoutes = require("./routes/lessonRoutes");
const quizRoutes = require("./routes/quizRoutes");

const app = express();

app.use(express.json());


// Conexão MongoDB
mongoose.connect("") // quem ficou responsável pelo bd coloca a URL aqui pfvr
  .then(() => {
    console.log("MongoDB conectado com sucesso");
  })
  .catch((error) => {
    console.log("Erro ao conectar no MongoDB:", error);
  });


// Rotas
app.use("/lessons", lessonRoutes);

app.use("/quiz", quizRoutes);


// Vê se algo não estiver rodando me avisem
// o quanto antes, tô morrendo de sono 

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});