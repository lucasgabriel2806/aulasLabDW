/** 
O Mongoose facilita trabalhar com MongoDB no Node.js. Ele permite, por exemplo:
conectar ao MongoDB, criar modelos, definir estruturas para os documentos, inserir, buscar, alterar e excluir dados. 

Node.js → Mongoose → MongoDB

O Mongoose funciona como uma espécie de intermediário entre seu código JavaScript e o banco MongoDB.
*/
import mongoose from "mongoose";

// Função para conectar no banco de dados
async function main() {
    // mongodb:// Indica que estamos usando uma conexão com MongoDB.
    // 127.0.0.1 ou localhost É o endereço do próprio computador.
    // :27017 É a porta padrão do MongoDB
    // /ToDo É o Banco de Dados 

    await mongoose.connect('mongodb://127.0.0.1:27017/ToDo');

    console.log("Conectou MongoDb");
}

main().catch((err)=>{
    console.log(err);    
});

// Quero disponibilizar o mongoose para outros arquivos do meu projeto poderem importá-lo.
export default mongoose;