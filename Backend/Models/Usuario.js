/** 
 Esse arquivo é justamente a parte que define como um usuario será armazenado no MongoDB. Esse arquivo diz: Um usuário terá estes campos, e cada campo terá este tipo e estas regras. 
*/

// Importando a conexão
import mongoose from "../db/conn.js";

const {Schema} = mongoose;

// Schema de usuário
const usuarioSchema = new Schema({
    nome:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type:String,
        required: true,
        unique: true,
        trim:true,
        lowercase:true
    },
    senha:{
        type:String,
        required:true,
        select:false
    },
    resetToken:{
        type:String,
        select:false,
    },
    resetTokenExpiry:{
        type:Date,
        select:false,
    }
},{timestamps:true});

/** 
Schema não é a mesma coisa que Model
Isso cria a Model

SCHEMA: Define como uma Tarefa deve ser
MODEL: Permite trabalhar com as Tarefas no banco
 */
const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;