#language: pt

Funcionalidade: Página Login Admin
Como Admin da Página Catedral MBL SC
Quero ter o controle da Página
Para subir os artigos

Contexto:
Dado Que acesse a página de Admin 

Esquema do Cenario:
Quando digitar <usuario>
E <senha>
Entao deve aparecer <mensagem>

Exemplos: 

            | usuario     | senha | mensagem |
            | teste@teste | 4444  | Sucesso  |
            | teste@teste |       | Inválido |
            |             | 4444  | Inválido |
            | $$          |       | Inválido |
            | teste teste | 4444  | Inválido |
            | teste@teste | 44 44 | Inválido |
            |             |       | Inválido |