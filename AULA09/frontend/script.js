// ===============================
// ELEMENTOS DO HTML
// ===============================

const { get } = require("node:http");

// foto do cachorro
const dogImage = document.getElementById("dogImage");
// nome raça
const breedName = document.getElementById("breedName");
//cachorro aleatório
const randomBtn = document.getElementById("randomBtn");
// botao que busca cachorro por raça
const searchBtn = document.getElementById("searchBtn");
// campo de texto onde o usuario digita a raça
const breedInput = document.getElementById("breaedInput");
// area onde fica a imagem do cachorro
// usamos querySelector porque é uma classe(.dog-area)
const dogArea = document.querySelector(".dog-area")

// URl DA API

const API = "http://localhost:3000/api/cachorros";

// FUNÇÃO PRINCIPAL

async function buscaCachorro(url) {
    // adiciona a classe "loading"
    // normalmente usada para mostrar animação de carregamento
    dogArea.classList.add("loading");

    try {
        // faz requisicao http para a API
        const response = await fetch(url)
        // converte a resposta para JSON
        const data = await response.json()
        // mostra no console a resposta da API
        console.log("Resposta da API:", data)

        if (data.status === "error"){
            //mostra a mensagem de erro na tela
            // breedName - Elemento HTML
            // .textContent - Propriedade que define o texto do elemento
            // data - Objeto com os dados recebidos da API
            // .message - Propriedade que contém a mensagem ou URL
            breedName.textContent = data.message
            // remove a imagem
            dogImage.src = ""
            // execução da funcao
            return
        }

        //coloca a imagem do cachorro na tela
        //o src define quela imagem sera exibida
        dogImage.src = data.message;


        // Extrai o nome da raça da URL da imagem
        // exemplo da URL
        // http://localhost:3000/fotos/husky/1.jpg

        // separa a URL em partes usando "/"
        const partes = data.message.split("/")

        // pega a posição 5 do array
        // que corresponde ao nome da raça
        const raca = partes[5]

        // coloca a primeira letra maiscula
        // ex: husky --> Husky
        breedName.textContent =
        // raca.chaAt(0) - pega a primeira letra
        // .toUpperCase() - Transforma em maiuscula
        raca.charAr(0).toUpperCase() + raca.slice(1);

     } catch (erro){
        // caso o servidor esteja desligado
        // ou aconteca algum erro na requisição

        console.error(error);

        // mostra mensagem na tela
        breedName.tetxContent =
        "Servidor offline - rode: node server.js"

        // remove a imagem
        dogImage.src = "";
     } finally {
        // remove a classe de carregamento
        // independentemente de erro ou sucesso.
        dogArea.classList.remove("loading")


    }
}