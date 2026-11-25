# exercicios-express-post

# Exercícios Express.js - Rotas POST

Repositório desenvolvido para praticar a criação de APIs utilizando **Node.js, Express.js e TypeScript**, com foco em requisições HTTP do tipo POST, validação de dados, leitura de arquivos JSON e tratamento de erros.

## Tecnologias utilizadas

- Node.js
- Express.js
- TypeScript
- TSX
- JSON

## Estrutura do projeto

```text
exercicios-express-post/
│
├── projeto-1-mensagem/
│   └── src/
│       └── app.ts
│
├── projeto-2-soma/
│   └── src/
│       └── app.ts
│
├── projeto-3-login/
│   └── src/
│       ├── app.ts
│       └── dados.json
│
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
```

## Projetos desenvolvidos

### 1. Rota POST `/mensagem`

Recebe informações do usuário através do corpo da requisição e retorna uma mensagem personalizada.

**Dados esperados:**

```json
{
  "nome": "Bruno",
  "idade": 17,
  "time": "Corinthians"
}
```

**Porta:** 3001

**Endpoint:**
`POST http://localhost:3001/mensagem`

### 2. Rota POST `/soma`

Recebe três números, realiza a soma e retorna o resultado. Também possui validação para impedir o envio de valores inválidos.

**Dados esperados:**

```json
{
  "numero1": 10,
  "numero2": 20,
  "numero3": 30
}
```

**Porta:** 3002

**Endpoint:**
`POST http://localhost:3002/soma`

### 3. Rota POST `/login`

Recebe usuário e senha, consulta as informações armazenadas no arquivo `dados.json` e verifica se as credenciais estão corretas.

**Dados esperados:**

```json
{
  "usuario": "admin",
  "senha": "1234"
}
```

**Porta:** 3003

**Endpoint:**
`POST http://localhost:3003/login`

**Arquivo de dados:** `projeto-3-login/src/dados.json`

## Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/brunoalves01/exercicios-express-post.git
```

### 2. Entrar na pasta

```bash
cd exercicios-express-post
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar os projetos

Cada projeto possui um comando próprio:

**Projeto 1 - Mensagem**
```bash
npm run dev:mensagem
```

**Projeto 2 - Soma**
```bash
npm run dev:soma
```

**Projeto 3 - Login**
```bash
npm run dev:login
```

Para executar mais de um projeto ao mesmo tempo, abra terminais separados no VS Code.

## Objetivos de aprendizagem

- Criar servidores utilizando Express.js.
- Desenvolver rotas HTTP do tipo POST.
- Receber e manipular dados enviados pelo corpo da requisição.
- Trabalhar com interfaces e tipagem utilizando TypeScript.
- Realizar validações de dados.
- Ler informações armazenadas em arquivos JSON.
- Utilizar códigos de status HTTP.
- Implementar tratamento de erros.

---

**Desenvolvido por Bruno Alves**

Projeto acadêmico de prática com Express.js e TypeScript.
