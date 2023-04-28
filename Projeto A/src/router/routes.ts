import { Router } from "express";
import { FolhaController } from "../controllers/folha_controller";

const router: Router = Router();

router.post("/folha/cadastrar", new FolhaController().Cadastrar);
router.get("/folha/calcular", new FolhaController().Calcular);

export { router };