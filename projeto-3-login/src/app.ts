
import express from "express";
import type { Request, Response, NextFunction } from "express";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const app = express();

app.use(express.json());

// Interface dos dados recebidos
interface LoginBody {
    usuario: string;
    senha: string;
}

// Interface dos dados do arquivo JSON
interface DadosLogin {
    usuario: string;
    senha: string;
}

// Rota POST /login
app.post("/login", (req: Request<{}, {}, LoginBody>, res: Response) => {
    try {
        const { usuario, senha } = req.body;

        // Verificando se os campos foram preenchidos
        if (
            typeof usuario !== "string" ||
            usuario.trim() === "" ||
            typeof senha !== "string" ||
            senha.trim() === ""
        ) {
            return res.status(400).json({
                erro: "Informe o usuário e a senha."
            });
        }

        // Localizando o arquivo JSON
        const caminhoArquivo = resolve(
            process.cwd(),
            "projeto-3-login/src/dados.json"
        );

        // Lendo o arquivo JSON
        const arquivo = readFileSync(caminhoArquivo, "utf-8");

        // Convertendo o JSON em objeto
        const dados: DadosLogin = JSON.parse(arquivo);

        // Verificando as credenciais
        if (
            usuario !== dados.usuario ||
            senha !== dados.senha
        ) {
            return res.status(401).json({
                erro: "Usuário ou senha incorretos.",
                usuario: usuario
            });
        }

        // Login realizado com sucesso
        return res.status(200).json({
            mensagem: "Login realizado com sucesso!",
            usuario: usuario
        });

    } catch (error) {
        return res.status(500).json({
            erro: "Erro interno do servidor."
        });
    }
});

// Tratamento de erros
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    if (
        error instanceof SyntaxError &&
        "status" in error &&
        error.status === 400
    ) {
        return res.status(400).json({
            erro: "O JSON enviado possui formato inválido."
        });
    }

    return res.status(500).json({
        erro: "Erro interno do servidor."
    });
});

// Inicializando o servidor
app.listen(3003, () => {
    console.log("Servidor de login rodando na porta 3003!");
});
