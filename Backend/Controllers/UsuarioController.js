import Usuario from "./../Models/Usuario.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
const JWT_EXPIRATION_MS = 24 * 60 * 60 * 1000;
const JWT_SECRET = process.env.JWT_SECRET || "sua_chave_secreta_muito_forte";
import cookieParser from "cookie-parser";

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

    static async Login(req, res) {
        
        const{email, senha} = req.body;

        if(!email || !senha) {
            return res.status(422).json({message: "Todos os dados são obrigatórios"});
        }

        try {

            const usuario = await Usuario.findOne({email}).select("+senha");

            if(!usuario)
            {
                return res.status(400).json({message: "Credênciais inválidas"})
            }

            const senhaValida = await argon2.verify(usuario.senha, senha);

            if(!senhaValida)
            {
                return res.status(400).json({message: "Credênciais inválidas"})
            }
            const tokenPayLoad = {
                id:usuario._Id,
                nome:usuario.nome,
                email:usuario.email
            };
            const token = jwt.sign(tokenPayLoad, JWT_SECRET, {expiresIn: '1h'});

            res.cookie("token", token, {
                httpOnly: true, // Evita acesso por script javascript
                secure:"false", // Tornar true em produção exige https
                sameSite:"lax", // Comunicação entre o front e o back
                maxAge: JWT_EXPIRATION_MS || 3600000 // 1h
            });

            return res.status(200).json({message: "Login efetuado com sucesso",
                usuario:{id: usuario.id, nome: usuario.nome, email: usuario.email}, 
                token
            });

        } catch (error) {
            return res.status(500).json({message: "Problema ao efetuar o Login", error});
        }

    } // Fim login
}