/** 
 Esse arquivo é justamente a parte que define como uma mensagem será armazenada no MongoDB. Esse arquivo diz: Uma Mensagem terá estes campos, e cada campo terá este tipo e estas regras. 
*/

// Importando a conexão
import mongoose from "../db/conn.js";

const {Schema} = mongoose;

// Schema de mensagem
const mensagemSchema = new Schema({
    tarefa:{
        type: Schema.Types.ObjectId,
        ref: "Tarefa",
        required: true,
    },
    remetente:{
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required: true,
    },
    texto:{
        type: String,
        required:true,
        trim: true,
    },
    lidaPor:[{
        type: Schema.Types.ObjectId,
        ref: "Usuario",
    }]  
},{timestamps:true});

/** 
Schema não é a mesma coisa que Model
Isso cria a Model

SCHEMA: Define como uma Mensagem deve ser
MODEL: Permite trabalhar com as Mensagens no banco
 */
const Mensagem = mongoose.model('Mensagem', mensagemSchema);

export default Mensagem;