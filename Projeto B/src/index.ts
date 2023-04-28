import express from "express";
import { router } from "./router/routes";

const app = express();

app.use (express.json());
app.use (router);


app.listen(3002, () => {
    console.clear();
    console.log("Aplicação do Projeto B - Listar Folhas está rodando na porta 3002");
  });

