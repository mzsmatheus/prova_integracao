import { Response, Request } from 'express';
import { FolhaRepository } from "../data/folha_repository";
import { Folha } from '../models/folha_model';
import axios from "axios";

const folhaRepository = new FolhaRepository();

export class FolhaController{


async Cadastrar(request: Request, response: Response){
    let folha: Folha = request.body;
    folha = await folhaRepository.cadastrar(folha);
    
    return response.status(201).json({
        message: "Dados da folha cadastrados com sucesso!",
    })
    }

async Calcular(request: Request, response: Response){
        const folhalista = await folhaRepository.listar();
        response.json(folhalista).status(200);
    }

}