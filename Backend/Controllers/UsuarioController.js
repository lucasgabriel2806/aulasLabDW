import Usuario from "./../Models/Usuario.js";
import argon2 from "argon2";

export default class UsuarioController {
    static async Create(req, res) {
        
        const{nome, email, senha} = req.body;

        if(!nome || !email || !senha) {
            return res.status(422).json({message: "Todos os dados são obrigatórios"});
        }

        try {

            const hashPassword = await argon2.hash(senha);

            const usuario = new Usuario({
                nome,
                email,
                senha:hashPassword,
            });

            const novoUsuario = await usuario.save();
            res.status(200).json({message: "Usuario inserido com sucesso", novoUsuario});
            return;
        } catch (error) {
            return res.status(500).json({message: "Problema ao inserir um usuário", error});
        }

    } // Fim create
}