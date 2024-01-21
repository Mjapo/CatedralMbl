document.addEventListener('DOMContentLoaded', function () {
    let cardsVisiveis = 2;

    function mostrarMaisCards() {
        const conteudoSessao = document.getElementById('conteudo_sessao');

        for (let i = 0; i < 2; i++) {
            const novoCard = document.createElement('div');
            novoCard.classList.add('conteudo_card');

            const titulo = document.createElement('h1');
            titulo.classList.add('conteudo_card_titulo');
            titulo.textContent = 'Novo Artigo';

            const imagem = document.createElement('img');
            imagem.classList.add('conteudo_card_img');
            imagem.src = '../img/livro2.jpg'; // Mesma imagem para repetição
            imagem.alt = 'Imagem Repetida';

            novoCard.appendChild(titulo);
            novoCard.appendChild(imagem);
            conteudoSessao.appendChild(novoCard);
        }

        cardsVisiveis += 2;

        const botaoVerMais = document.getElementById('conteudo_vermais');
        if (cardsVisiveis >= 6) {
            botaoVerMais.style.display = 'none';
        }
    }

    const botaoVerMais = document.getElementById('conteudo_vermais');
    botaoVerMais.addEventListener('click', mostrarMaisCards);
});