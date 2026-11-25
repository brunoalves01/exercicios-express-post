
import express from "express";
import type { Request, Response, NextFunction } from "express";

const app = express();

app.use(express.json());

// Interface dos dados recebidos
interface SomaBody {
    numero1: number;
    numero2: number;
    numero3: number;
}

// Rota POST /soma
app.post("/soma", (req: Request<{}, {}, SomaBody>, res: Response) => {
    try {
        const { numero1, numero2, numero3 } = req.body;

        // Verificando se os campos foram enviados corretamente
        if (
            typeof numero1 !== "number" ||
            typeof numero2 !== "number" ||
            typeof numero3 !== "number"
        ) {
            return res.status(400).json({
                erro: "Informe três valores numéricos."
            });
        }

        // Verificando se os números são válidos
        if (
            !Number.isFinite(numero1) ||
            !Number.isFinite(numero2) ||
            !Number.isFinite(numero3)
        ) {
            return res.status(400).json({
                erro: "Os valores informados são inválidos."
            });
        }

        // Realizando a soma
        const resultado = numero1 + numero2 + numero3;

        return res.status(200).json({
            numero1,
            numero2,
            numero3,
            resultado
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
app.listen(3002, () => {
    console.log("Servidor de soma rodando na porta 3002!");
});
