// Rotas da API de chat, ele pega as requisições que chegam e direciona 
// cada uma para o método correto do ChatController.
import {Router} from "express";
import ChatController from "../Controllers/ChatController.js";
import UserMiddleware from "../Middleware/UserMiddleware.js";

const routesChat = new Router();

routesChat.get("/getHistory/:tarefaId", UserMiddleware, ChatController.getHistory);

export default routesChat;