// ======================================
// SELECIONANDO ELEMENTOS DO DOM
// ======================================

// Selecionado por ID
// console.log(document.getElementById("titulo"))
// para visualizar no console
let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let paragrafo = document.getElementById("paragrafo");
let imagem = document.getElementById("imagemteste");

// SELECIONAR POR CLASSE
let caixas = document.getElementsByClassName("box");

// Mostar no console.log
console.log(titulo);
console.log(caixas);
console.log(imagem);

function alterar() {
    titulo.innerHTML = "Jarvir Dominou o MegaBrain 🤖";
    subtitulo.textContent = "Acabou!";
    paragrafo.textContent = "Paragrafo Alterado pelo JavaScript!";

// alternando elemento da classe
caixas[0].textContent = "P1 Alterado";
caixas[1].textContent = "P2 Alterado";

// alterando imagem
imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSB_B53QBIuP3tg4oeKPq77lQEyfFWW0EM_WpINTmIR_1KOhE6KIsmMgcKpAXCVjzDJZHI8BRD-A0RuXgO0BfwSmWF7QL0GHIHfW77sw&s=10";
}