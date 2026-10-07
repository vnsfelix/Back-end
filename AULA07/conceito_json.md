// JSON significa JavaScript Object Notation e é um formato de representação e troca de dados

JSON É COMO FICHA DE CADASTRO.

FICHA FÍSICA:       JSON:
Nome: Jõao          "nome": "João"
Idade: 25           "idade": 25
cidade: SP          "cidade": "SP"

É um formato para organizar dados que todo mundo entende (qualquer linguagem)

{
    "cachorro":{
        "nome": "Rex",
        "idade": 3,
        "raca": "Labrador",
        "vacinado": true,
        "peso": 25.5,
        "brinquedos": ["bola", "osso", "frisbee"],
        "dono": {
            "nome": "João",
            "telefone": "(11) 988724648"
        }
    }
}

<!-- ==================================== -->
<!-- EXPLICAÇÃO -->
<!-- ==================================== -->

// STRING (TEXTO) - Sempre com aspas
"nome": "Rex"

// NUMBER (NUMERO) - Sem aspas
"idade": 3,
"peso": 25.5,

// BOOLEAN (true/false)
"vacinado": true,

// ARRAY (Lista) - com colchetes
"brinquedos": ["bola", "osso"]

// OBJECT (Objeto) - com chaves
"dono" {
    "nome": "João",
    "telefone": "(11) 988724648"
}

// NULL (vazio)
"dataFalecimento": null