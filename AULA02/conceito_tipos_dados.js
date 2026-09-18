// TIPOS DE DADOS
// No javascript, tudo oq armazenamos em variaveis tem um tipo. Esses tipos definem o que podemos fazer com os valores.

// Principais tipos de dados:
// String (TEXTOS)
// Number (NÚMEROS)
// Boolean (VERDADEIRO OU FALSO)
// Object (OBJETOS)
// Array (VETORES)
// Null (NULO)
// Undefined (NÃO DEFINIDO)

// String (TEXTOS)
let nome = "Jarvis"
let mensagem = "Olá, mundo!"

console.log(nome)

let saudacao = "Bem-vindo, " + nome + "!"
console.log(saudacao)

// typeof
// o typeof serve para verificar o tipo de dado de uma variável


// Boolean (Verdadeiro e Falso)
// Um boolean pode ter aoenas dois valores: true(Verdadeiro) e false(Falso)

let maiorDeIdade = true
let menorDeIdade = false

console.log(maiorDeIdade) // Exibe True
console.log(menorDeIdade) // Exibe False

let idade = 20
let podeDirigir = idade >= 18
console.log(podeDirigir)