const searchInput = document.getElementById('search-input');
const searchIcon = document.getElementById('search-icon');
const pesquisa_conteudos = document.getElementById('resultado_pesquisa')
const bloco_pesquisa = document.getElementById('resultado_cards')

let aparecerPesquisa = true;
searchIcon.addEventListener('click', function () {
    if(aparecerPesquisa){
        searchInput.style.display = 'inline-block';
        searchInput.focus();
        aparecerPesquisa = false;
    } else {
        searchInput.style.display = "none";
        pesquisa_conteudos.style.height = "0";
        aparecerPesquisa = true;
        bloco_pesquisa.style.display = "none"
        removeMiniCards();
        
    }

});

searchInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        fetch(`http://localhost:8080/api/busca/${searchInput.value}`).then(response => response.json()).then(data => {
            const jsonData = data.map(value => ({
                titulo: value.titulo,
                tema: value.tema
            }));
            renderMiniCards(jsonData);
        });


        searchInput.value = '';
        pesquisa_conteudos.style.height = "20rem";
        bloco_pesquisa.style.display = "flex"
    }
});

function renderMiniCards(jsonData) {
    const cardContainer = document.getElementById("resultado_pesquisa");


    jsonData.forEach(function (data) {
        // Crie um novo elemento para cada iteração
        const cardElement = document.createElement("div");
        cardElement.className = "resultado_cards";

        cardElement.innerHTML = `<div class="resultado_card">
            <h1 class="resultado_card_titulo">${data.titulo}</h1>
            <h2 class="resultado_card_tema">${data.tema}</h2>
        </div>`;

        // Adicione o novo elemento ao contêiner
        cardContainer.appendChild(cardElement);
    });
};

function removeMiniCards(){
    const cardContainer = document.getElementById("resultado_pesquisa");
    cardContainer.innerHTML = ""
}