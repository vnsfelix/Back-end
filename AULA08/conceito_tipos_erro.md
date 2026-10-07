<!-- STATUS CODES (Respostas do SERVIDOR) -->

2xx - SUCESSO (Tudo certo)
    200 - ok (requisição funcionou)
    201 - Criado (post funcionou)

3xx - REDIRECIONANDO (Mudou Lugar)
    301 - Mudou permanentemente

4xx - ERRO DO CLIENTE (Voce errou)
    400 - Requisição errada
    401 - Não autorizada (sem login)
    403 - Proibido (Login sem permissão)
    404 - Não encontrado

5xx - ERRO DO SEVIDOR (Eles erraram)
    500 - Erro interno no servidor
    503 - Serviço indisponivel

CENÁRIO: Voce pede uma pizza!

200 = "Aqui está sua pizza!"
404 = "Não temos essa pizza!"
500 = "O forno queimou"
401 = "Só entregamos para clientes"
429 = "Muitos pedidos, aguarde"