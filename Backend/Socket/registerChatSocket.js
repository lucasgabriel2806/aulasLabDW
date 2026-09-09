import ChatController from "../Controllers/ChatController.js";

export default function registerChatSocket(io, socket) {

    // Entrar em um chat específico (de uma tarefa)
    socket.on("join_task", (tarefaId) => {
        socket.join(`tarefa_${tarefaId}`),
        console.log(`socket ${socket.id} entrou no char da tarefa ${tarefaId}`);
    });

    // Enviar a mensagem 
    socket.on("send_message", (data) => {
        ChatController.sendSaveMessage(io, socket, data);
    });

    // Sair do chat
    socket.on("leave_task", (tarefaId) => {
        socket.leave(`tarefa_${tarefaId}`);
    });

}