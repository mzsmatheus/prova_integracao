import { Router } from "express";
import { FolhaBController } from "../controllers/folha_controller";

const router: Router = Router();

router.get("/folha/listar", new FolhaBController().listar);

export { router };