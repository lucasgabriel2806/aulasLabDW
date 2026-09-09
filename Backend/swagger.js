/** 
Para acessar o swagger

ToDo/Backend/

npm start

localhost:5000/docs
*/

// Esse arquivo gera uma documentação

// Ela consegue analisar suas rotas e gerar 
// automaticamente um arquivo de documentação
import swaggerAutogen from "swagger-autogen";

// Contém informações gerais sobre sua API que serão utilizadas pelo Swagger
const doc = {
    info:{
        title: 'API ToDo List',
        description: 'Documentação para a geração automática dos testes'
    },
    host: 'localhost:5000',
    basePath: '/ToDo',
}

//nome do arquivo que será gerado automaticamente
const outputFile = './swagger-output.json';

//caminho para as rotas
// Aqui você está dizendo: Swagger, procure as rotas neste arquivo
const endpointsFiles = [
  './Routes/routesUsuario.js',
  './Routes/routesTarefa.js'
];

// Onde salvar, onde estão as rotas, informações gerais da API
swaggerAutogen()(outputFile, endpointsFiles, doc);