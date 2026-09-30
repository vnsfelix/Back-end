// Funçoes em JAVASCRIPT

// O que é uma função?
// Uma função é um bloco de código reurilizavel, criado para executar uma tarefa especifica.

// Analogia SIMPLES
// Você vai colocar valores (parametros)
// Devolve um resultado (return)

// ESTRUTURA BASICA DE UMA FUNÇÃO


// function nomeDaFuncao(parametro1,parametro2) {
//     //Codigo que será executado
// return resultado;
// }

// function --> palavra - chave
// nomeDaFuncao --> nome da função
// parametros --> valores que a função recebe
// return --> valor que a função devolve

// 5 - Exemplos

// 1 - Somar dois numeros

function somar(a, b) {
    return a + b ;
}
console.log(somar(60, 7));


// 2 - Converter real para Dólar

function realParaDolar(valorReal, cotacao) {
    return valorReal / cotacao;
}

console.log(realParaDolar(67, 5.20).toFixed(2));

// toFixed você determina quantas casas ira ser exibida

// 3 - Converter Dólar para real 

function dolarParaReal(valorDolar, cotacao) {
    return valorDolar * cotacao
}

console.log(dolarParaReal(67, 5.20). toFixed(2));

// 4 - Aumento de salário (Você merece 25% de aumento)

function salario(salarioInicial, aumento) {
    return (salarioInicial * aumento) + salarioInicial
}

console.log( "Seu salário aumento 25%, fazendo ele ficar com o valor de " + salario(5000, 0.25));

// 5 - Verifique se é par ou impar?

function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return ("Par")
    }
    else {
        return ("Impar");
    } 
}

console.log(parOuImpar(5));

