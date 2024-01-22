const botaoVermais = document.getElementById('conteudo_vermais')
let botaoContador = 0;

botaoVermais.addEventListener("click", function(event){
    botaoContador += 1;
});

document.addEventListener("DOMContentLoaded", function() {
    fetch(`http://localhost:8080/api/artigos?page=${botaoContador}&size=3`).then(response => response.json()).then(data => {
        console.log(botaoContador)
        const jsonData = data.map(value => ({
          title: value.titulo,
          imageUrl: "../img/livro2.jpg"
        }));
        renderCards(jsonData);
    });
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