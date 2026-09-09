/** 
 Esse arquivo é justamente a parte que define como uma tarefa será armazenada no MongoDB. Esse arquivo diz: Uma Tarefa terá estes campos, e cada campo terá este tipo e estas regras. 
*/

// Importando a conexão
import mongoose from "../db/conn.js";

const {Schema} = mongoose;

// Schema de tarefa
const tarefaSchema = new Schema({
    titulo:{
        type: String,
        required: true,
    },
    descricao:{
        type:String,
        required: true,
    },
    dataLimite:{
        type:Date,
        required:true,
    },
    situacao:{
        type:String,
        required:true,
    },
    criadoPor:{
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required: true,
    },
    participam:[{
        type: Schema.Types.ObjectId,
        ref: "Usuario",
    }]
},{timestamps:true});

/** 
Schema não é a mesma coisa que Model
Isso cria a Model

SCHEMA: Define como uma Tarefa deve ser
MODEL: Permite trabalhar com as Tarefas no banco
 */
const Tarefa = mongoose.model('Tarefa', tarefaSchema);

export default Tarefa;