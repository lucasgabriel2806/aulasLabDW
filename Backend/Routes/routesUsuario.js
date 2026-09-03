// Rotas da API de tarefas, ele pega as requisições que chegam e direciona 
// cada uma para o método correto do UsuarioController.
import {Router} from "express";
import UsuarioController from "../Controllers/UsuarioController.js";
import UserMiddleware from "../Middleware/UserMiddleware.js";

const routesUsuario = new Router();

routesUsuario.post("/createUsuario", UsuarioController.Create);
routesUsuario.post("/login", UsuarioController.Login);
routesUsuario.post("/logout", UsuarioController.Logout);
routesUsuario.post("/resetPassword", UsuarioController.ResetPassword);
routesUsuario.post("/forgotPassword", UsuarioController.ForgotPassword);
routesUsuario.get("/me", UserMiddleware, UsuarioController.Profile);
routesUsuario.get("/getAllUsers", UserMiddleware, UsuarioController.getAllExceptLogged);

export default routesUsuario;