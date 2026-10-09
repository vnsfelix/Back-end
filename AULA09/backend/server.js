// ==========================
// NOSSA API DE CACHORROS
// ==========================
// 
// Agora as fotos NÂO são mais baixadas automaticamente!.
// Elas DEVEM existir manualmente na pasta
// data/fotos
// ==========================

// ROTAS:
// GET /api/cachorros/aleatorio -> lista todos os cachorros
// GET /api/cachorros/:raca -> lista todos os cachorros de uma raça

// Importar o framework Express para criar o servidor
const express = require("express");
// Importar o CORS para permitir requisições de outros domínios
const cors = require("cors");
// Importar o módulo de arquivos do Node.js
const fs = require("fs");
// Importa utilidades para trabalhar com caminhos de arquivos
const path = require("path");
// Importa o arquivo JSON com os dados dos cachorros
const cachorros = require("./data/dogs.json");
// Cria a aplicação Express
const app = express();
// Definir a porta onde o servidor ira rodar
const PORT = 3001;
// Habilitar o uso do CORS na aplicação
app.use(cors());

// ===============================================
// SERVIDOR ARQUIVOS ESTÁTICOS
// ===============================================

// Nós falamos para o Express
// Tudo qo que estiver na pasta data/fotos pode ser acessado pela URL /fotos
// Exemplo: http://localhost:3000/fotos/husky.jpg

app.use(
    "/fotos", 
    express.static(
        path.join(__dirname, "data/fotos")
    )
);

// ===============================================
// FUNÇÕES AUXILIARES
// ===============================================

// função que recebe um array e retorna um elemento aleatório dessa lista
function sortear(array) {
    // gera um numero aleatório entre 0 e o tamanho do array        const i = Math.floor(Math.random() * array.length);
    // retorna o item sorteado
    return array[i];
}

// ==============================
// ROTAS DA API
// ==============================

// ROTA 1 - Cachorro aleatório de qualquer raça
app.get("/api/cachorros/aleatorio", (req, res) => {
    // req - request(requisição) - tudo que o cliente envia para o servidor
    // res - response(resposta) - tudo que o servidor envia para o cliente

    // pegar todas as fotos de todas as raças
    // object.values pega os valores do objeto
    // flat transforma tudo em um array só
    const todasAsFotos = Object.values(cachorros).flat();

    // sorteia uma foto aleatória
    const item = sortear(todasAsFotos);

    // envia a resposta para o cliente
    res.json({
        // status da resposta
        status: "success",
        // URL da imagem que foi sorteada
        message: `http://localhost:${PORT}/fotos/${item}`
    });
}); // <--- Chave e parênteses corrigidos aqui!

// ROTA 2 - Cachorro por raça
// exemplo de acesso: http://localhost:3000/api/cachorros/husky
app.get("/api/cachorros/:raca", (req, res) => {
    // pega o pareamento da URL (ex: husky) e transforma tudo em minúsculo
    const raca = req.params.raca.toLowerCase();

    // procura a raça dentro do objeto "cachorros"
    if (!cachorros[raca]) {
        // se não existir, retorna erro 404 e encerra
        return res.status(404).json({
            status: "error",
            message: `A raça "${raca}" não foi encontrada`
        }); // <--- Fechamento corrigido aqui!
    }

    // sorteia uma foto da raça solicitada
    const item = sortear(cachorros[raca]);

    // retorna a resposta em json
    res.json({
        status: "success",
        message: `http://localhost:${PORT}/fotos/${item}`
    });
});

// ============================
// Inicia o servidor
// ============================

// inicia o servidor express
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`Coloque as fotos manualmente na pasta data/fotos`);
});
