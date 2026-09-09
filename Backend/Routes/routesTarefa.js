// Rotas da API de tarefas, ele pega as requisições que chegam e direciona 
// cada uma para o método correto do TarefaController.
import {Router} from "express";
import TarefaController from "../Controllers/TarefaController.js";
import UserMiddleware from "../Middleware/UserMiddleware.js";

const routesTarefa = new Router();

routesTarefa.post("/create", UserMiddleware, TarefaController.Create);
routesTarefa.get("/getAll", UserMiddleware, TarefaController.getAll);

export default routesTarefa;