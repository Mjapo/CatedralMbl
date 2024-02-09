#language: pt

Funcionalidade: Input de pesquisa
Como cliente da Catedral MBL SC
Quero realizar pesquisas
Para facilitar na busca de artigos

Contexto:
Dado que clique na Lupa de pesquisa

Esquema do Cenario: Auntenticar multiplas pesquisas
Quando <Pesquisar> por algum artigo
Entao deve mostrar o <Resultado da pesquisa> 

Exemplos:

            | Pesquisa                        | Resultado da pesquisa |
            | Politica e Organização Social   | Pesquisa Válida       |
            | O que é filosofia               | Pesquisa Válida       |
            | Here’s why blueberries are blue | Pesquisa Inválida     |
            |                                 | Pesquisa Inválida     |

