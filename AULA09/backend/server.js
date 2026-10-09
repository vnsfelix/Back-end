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