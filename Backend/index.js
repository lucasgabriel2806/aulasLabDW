// Express é um framework usado para criar o servidor HTTP e a API
import express from "express";

// CORS (Cross-Origin Resource Sharing) Ele controla quais 
// aplicações podem fazer requisições para seu backend
import cors from "cors";

// Importa suas rotas de outro arquivo
import routes from "./Routes/routes.js";

// Biblioteca responsável por mostrar o Swagger no navegador
import swaggerUi from "swagger-ui-express";

/**
Está importando uma função do próprio Node.js.
Ela permite usar o sistema tradicional require() dentro de um projeto que está usando ES Modules (import).
 */
import { createRequire } from "module";

// Suporte para importar arquivos json usando ESModules
const require = createRequire(import.meta.url);

// Esse JSON contém a descrição da sua API para o Swagger
const swaggerDocument = require("./swagger-output.json");

// Aqui você cria uma instância do Express 
// app representa seu servidor/aplicação
const app = new express();

// Comunicação entre front e back usar json
// Ela diz ao Express: "Quando receber uma requisição contendo JSON,
// transforme esse JSON em um objeto JavaScript que eu possa acessar."
app.use(express.json());

// Configurando o CORS: Apenas o frontend que estiver rodando em 
// http://localhost:5173 pode fazer requisições ao backend através do 
// navegador
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));

// Obrigatoriamente o swagger deve vir antes das rotas
// Cria a página do Swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Tudo que estiver dentro de routes será acessível começando por /ToDo
app.use("/ToDo", routes);

// Iniciando o servidor: Express começar a escutar requisições na porta 5000.
app.listen(5000);