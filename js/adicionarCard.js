const botaoVermais = document.getElementById('conteudo_vermais')
let botaoContador = 0;

botaoVermais.addEventListener("click", function(event){
    botaoContador += 1;
});

document.addEventListener("DOMContentLoaded", function() {
    fetch(`${backendUrl}/api/artigos?page=${botaoContador}&size=3`).then(response => response.json()).then(data => {
        const jsonData = data.map(value => ({
          archive: value.nomeArquivo,
          title: value.titulo,
          tema: value.tema
        }));
        renderCards(jsonData);
    });
});

function renderCards(jsonData) {
  const cardContainer = document.getElementById("conteudo_sessao");
  

  jsonData.forEach(function(data) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("conteudo_card");

    if(data.tema === "filosofia") {
      imagemUrl = "../img/Filosofia_1.png"
    }

    cardElement.innerHTML = `<a href="${backendUrl}/api/view/${data.archive}">
      <h1 class="conteudo_card_titulo">${data.title}</h1>
      <img class="conteudo_card_img" src="${imagemUrl}" alt="Card Image">
    </a>
      
    `;

    cardContainer.appendChild(cardElement);
  });
};