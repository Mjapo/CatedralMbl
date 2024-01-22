let cardsVisiveis = 0;

document.addEventListener('DOMContentLoaded', function () {
    function mostrarMaisCards() {
        const conteudoSessao = document.getElementById('conteudo_sessao');
        let numeroDeCards = 0;

        fetch(`http://localhost:8080/api/artigos?page=${botaoContador}&size=3`).then(response => response.json()).then(data => {
            const jsonData = data.map(value => ({
                title: value.titulo,
                imageUrl: "../img/livro2.jpg"
            }));

            numeroDeCards = data.length;
            renderCards(jsonData);
        });

        cardsVisiveis += numeroDeCards;

        const botaoVerMais = document.getElementById('conteudo_vermais');
        if (cardsVisiveis >= 6) {
            botaoVerMais.style.display = 'none';
        }
    }

    const botaoVerMais = document.getElementById('conteudo_vermais');
    botaoVerMais.addEventListener('click', mostrarMaisCards);
});



function renderCards(jsonData) {
    const cardContainer = document.getElementById("conteudo_sessao");

  jsonData.forEach(function(data) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("conteudo_card");

    cardElement.innerHTML = `
      <h1 class="conteudo_card_titulo">${data.title}</h1>
      <img class="conteudo_card_img" src="${data.imageUrl}" alt="Card Image">
    `;

    cardContainer.appendChild(cardElement);
  });
};