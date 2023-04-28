import { Folha } from "../models/folha_model";
import { FolhaController } from "../controllers/folha_controller";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export class FolhaRepository{

  async cadastrar(folha : Folha): Promise<Folha>{
    folha = await prisma.folha.create({
        data: {
          mes: folha.mes,
          ano: folha.ano,
          horas: folha.horas,
          valor: folha.valor,
          funcnome: folha.funcnome,
          funccpf: folha.funccpf
        },
      });
return folha;
}

async listar(): Promise<Folha[]> {
  return await prisma.folha.findMany();
}





}