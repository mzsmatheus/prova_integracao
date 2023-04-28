import express from "express";
import { router } from "./router/routes";

const app = express();

app.use (express.json());
app.use (router);


app.listen(3001, () => {
    console.clear();
    console.log("Aplicação do Projeto A - Cadastro está rodando na porta 3001");
  });

