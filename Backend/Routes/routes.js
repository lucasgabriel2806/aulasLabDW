// Rotas da API de tarefas, ele pega as requisições que chegam e direciona 
// cada uma para o método correto do TarefaController.
import {Router} from "express";
import TarefaController from "../Controllers/TarefaController.js";

const routes = new Router();

routes.post("/create", TarefaController.Create);
routes.get("/getAll", TarefaController.getAll);

export default routes;