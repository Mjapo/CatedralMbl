const searchInput = document.getElementById('search-input');
const searchIcon = document.getElementById('search-icon');
const pesquisa_conteudos = document.getElementById('resultado_pesquisa');
const bloco_pesquisa = document.getElementById('resultado_cards');

let aparecerPesquisa = true;

searchIcon.addEventListener('click', function () {
    searchInput.style.display = 'inline-block';
    searchInput.focus();
    aparecerPesquisa = false;
    searchInput.placeholder = ''; // Remover o placeholder quando a lupa é clicada
});

searchInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        if (searchInput.value.trim() !== '') {
            // Realizar a pesquisa se o input não estiver vazio
            fetch(`http://localhost:8080/api/busca/${searchInput.value}`)
                .then(response => response.json())
                .then(data => {
                    const jsonData = data.map(value => ({
                        titulo: value.titulo,
                        tema: value.tema
                    }));
                    renderMiniCards(jsonData);
                });

            searchInput.value = '';
            pesquisa_conteudos.style.height = '20rem';
            bloco_pesquisa.style.display = 'flex';
            searchInput.style.display = 'none'; // Ocultar o input após a pesquisa
            aparecerPesquisa = true;
            searchInput.placeholder = 'Digite sua pesquisa...'; // Restaurar o placeholder
        }
    }
});

function renderMiniCards(jsonData) {
    const cardContainer = document.getElementById('resultado_pesquisa');
    cardContainer.innerHTML = '';

    jsonData.forEach(function (data) {
        const cardElement = document.createElement('div');
        cardElement.className = 'resultado_cards';

        cardElement.innerHTML = `<div class="resultado_card">
            <h1 class="resultado_card_titulo">${data.titulo}</h1>
            <h2 class="resultado_card_tema">${data.tema}</h2>
        </div>`;

        cardContainer.appendChild(cardElement);
    });
}
