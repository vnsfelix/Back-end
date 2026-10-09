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
const PORT = 3000;
// Habilitar o uso do CORS na aplicação
app.use(cors());

// ===============================================
// SEVIDOR ARQUIVOS ESTÁTICOS
// ===============================================

// Nós falamos para o Express
// Tudo qo que estiver na pasta data/fotos pode ser acessado pela URL /fotos
// Exemplo: http://localhost:3000/fotos/husky.jpg

app.use(
    "/fotos", 
    express.static(
        path.join(__dirname, "data/fotos")
    )
)

// ===============================================
// FUNÇÕES AUXILIARES
// ===============================================

// função que recebe um array e retorna um elemento aleatório dessa lista
function sortear(array) {
    // gera um numero aleatório entre 0 e o tamanho do array
    // array.length - conta quantos itens existem na lista
    // math.random() - gera um número aleatório entre 0 e 1
    // math.floor() - tira a parte decimal, arredondando para baixo.
    const i = Math.floor(Math.random() * array.length);
    // const i = guarda a posição na variavel i
    // retorna o item sorteado
    return array[i];
}

// ==============================
// ROTAS DA API
// ==============================

// ROTA 1
app.get("/api/cachorros/aleatorio", (req, res) => {
// req - request(requisição) - tudo que o cliente envia para o servidor
// res - response(resposta) - tudo que o servidor envia para o cliente

// pegar todas as fotos de todas as raças
// object.values pega os valores do objeto
// flat trasforma tudo em um array só
const todasAsFotos =  Object.values(cachorros).flat();
})

// sorteia uma foto aleatória
const item = sortear(todasAsFotos);
