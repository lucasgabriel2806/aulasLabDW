// Rotas da API de tarefas, ele pega as requisições que chegam e direciona 
// cada uma para o método correto do TarefaController.
import {Router} from "express";
import TarefaController from "../Controllers/TarefaController.js";

const routesTarefa = new Router();

routesTarefa.post("/create", TarefaController.Create);
routesTarefa.get("/getAll", TarefaController.getAll);

export default routesTarefa;