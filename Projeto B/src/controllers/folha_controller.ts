import { Response, Request } from 'express';
import axios from "axios";

export class FolhaBController{

async listar(request: Request, response: Response){
    await axios.get("http://localhost:3001/folha/calcular")
    .then
    (function (resposta) {
           
            console.log(resposta.data);

          })
          .catch(function (error) {
            console.log(error);
          })
          return response.status(201).json({
            message: "Dados buscados com sucesso!",
        })
    }

}