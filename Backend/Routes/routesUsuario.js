// Rotas da API de tarefas, ele pega as requisições que chegam e direciona 
// cada uma para o método correto do UsuarioController.
import {Router} from "express";
import UsuarioController from "../Controllers/UsuarioController.js";

const routesUsuario = new Router();

routesUsuario.post("/createUsuario", UsuarioController.Create);

export default routesUsuario;