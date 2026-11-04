// Cronômetro no terminal

// ====================================
// Bloco 01: ⚡ Preparando Terminal
// ====================================

// require = "Traga pra cá uma ferramenta pronta!"
// reafline = "éa a ferramenta do Node que sabe conversar com o teclado"
const { read } = require('fs')
const readline = require('readline')

// process.stdin = a Entrada do programa (teclado)
// Esta linha manda o Node AVISAR o programa toda vez que uma tecla for apertada
readline.emitKeypressEvents(process.stdin)
process.stdin.setRawMode(true)

// Mensagem de boas-vindas
console.log('Cronometro iniciado')
console.log('p = pausar/continuar | r = resetar | Ctrl+C = Sair');

// ====================================
// Bloco 02: ⏱️ A memória do cronômetro
// ====================================

let tempo = 0

// rodando é um interruptor de luz: true = contando, false = pausado
let rodando = true

// ====================================
// Bloco 03: ✨ Deixando o tempo bonito 
// ====================================

function formatar(total){
    // Math.floor arrendonda um numero pra baixo, sempre retornando um numero inteiro.
    // Exemplo: 65/60 - 1,08... -> Math.floor joga fora os decimais -> 1
    const min = Math.floor(total / 60)
    
    // o simbolo % dá o RESTO da divisão
    const seg = total % 60
    
    // String (...) transforma o numero em texto
    // padStart (2, 0) = "Se tiver menos de 2 caracteres, complete com 0 na frente"
    // Assim "5" vira "05", depois nós juntamos os pedacos com ":"
    return String(min).padStart(2, '0') + ':' + String(seg).padStart(2, '0')
}

// ====================================
// Bloco 04: O ❤️ do programa
// ====================================

// serinterval = "repita isso a cada x milissegundos"
// 1000 milissegundo = 1 segundo (veja o numero no final do bloco)
setInterval(() => {
    if (rodando) {
        tempo ++
        console.clear()
        console.log('⏱️' + formatar(tempo))
    }
}, 1000)

// ====================================
// Bloco 05: Ouvindo o teclado
// ====================================

