
import express from "express";
import type { Request, Response, NextFunction } from "express";

const app = express();

app.use(express.json());

// Interface dos dados recebidos
interface MensagemBody {
    nome: string;
    idade: number;
    time: string;
}

// Rota POST /mensagem
app.post("/mensagem", (req: Request<{}, {}, MensagemBody>, res: Response) => {
    try {
        const { nome, idade, time } = req.body;

        // Verificando os campos recebidos
        if (
            typeof nome !== "string" ||
            nome.trim() === "" ||
            typeof idade !== "number" ||
            typeof time !== "string" ||
            time.trim() === ""
        ) {
            return res.status(400).json({
                erro: "Informe nome, idade e time favorito corretamente."
            });
        }

        // Verificando a idade
        if (!Number.isInteger(idade) || idade < 0) {
            return res.status(400).json({
                erro: "A idade deve ser um número inteiro válido."
            });
        }

        // Criando a mensagem
        const mensagem = `Olá, ${nome}! Você tem ${idade} anos e torce para o ${time}!`;

        return res.status(200).json({
            mensagem
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
app.listen(3001, () => {
    console.log("Servidor de mensagens rodando!");
    console.log("http://localhost:3001");
    console.log("Rota POST: http://localhost:3001/mensagem");
});
