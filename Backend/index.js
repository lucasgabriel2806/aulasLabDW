import express from "express";
import cors from "cors";
import routes from "./Routes/routes.js";
import swaggerUi from "swagger-ui-express";
import { createRequire } from "module";
// Suporte para importar arquivos json usando ESModules
const require = createRequire(import.meta.url);
const swaggerDocument = require("./swagger-output.json");

const app = new express();

// Comunicação entre front e back usar json
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));

// Obrigatoriamente o swagger deve vir antes das rotas
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/ToDo", routes);
app.listen(5000);