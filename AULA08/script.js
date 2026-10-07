// ================================
// API DE CACHORROS
// ================================

// Endereço da API de cachorros
const url = "https://dog.ceo/api/breeds/image/random";

// Pegando os elementos do HTML
const fotoCachorro = document.getElementById("fotoCachorro");

// Botao pelo seu ID
const btnNovaFoto = document.getElementById("btnNovaFoto");

// ==============================================
// FUNÇÃO PARA BUSCAR UMA NOVA FOTO DE CACHORRO
// ==============================================

async function buscarFoto() {
    try {
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error(`A API respondeu com o status ${resposta.status}.`);
        }

        const dados = await resposta.json();

        if (dados.status !== "success" || typeof dados.message !== "string") {
            throw new Error("A API não retornou uma imagem válida.");
        }

        fotoCachorro.src = dados.message;
        fotoCachorro.alt = "Foto de um cachorro";
    } catch (erro) {
        console.error("Não foi possível carregar a foto do cachorro:", erro);
        fotoCachorro.alt = "Não foi possível carregar a foto do cachorro.";
    }
}

// Quando o usuário clicar no botão, busca uma nova foto.
btnNovaFoto.addEventListener("click", buscarFoto);

// Busca uma foto assim que a página abrir.
buscarFoto();
