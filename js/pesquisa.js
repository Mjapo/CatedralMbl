const searchInput = document.getElementById('search-input');
const searchIcon = document.getElementById('search-icon');
const pesquisa_conteudos = document.getElementById('resultado_pesquisa');
const bloco_pesquisa = document.getElementById('resultado_cards');

let aparecerPesquisa = true;

searchIcon.addEventListener('click', function () {
    if(aparecerPesquisa){
        searchInput.style.display = 'inline-block';
        searchInput.focus();
        aparecerPesquisa = false;
    } else {
        if(searchInput.value.trim() === ''){
            searchInput.value = '';
            pesquisa_conteudos.style.height = '0rem';
            bloco_pesquisa.style.display = 'none';
            pesquisa_conteudos.style.display = "none";
            searchInput.style.display = 'none';
            aparecerPesquisa = true;
        } else {
            fetch(`${backendUrl}/api/busca/${searchInput.value}`)
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
            pesquisa_conteudos.style.display = "block";
            bloco_pesquisa.style.display = 'flex';
        }
        
        
    }
    
});

searchInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        if (searchInput.value.trim() !== '') {
            fetch(`${backendUrl}/api/busca/${searchInput.value}`)
                .then(response => response.json())
                .then(data => {
                    const jsonData = data.map(value => ({
                        titulo: value.titulo,
                        tema: value.tema,
                        arquivo: value.nomeArquivo
                    }));
                    renderMiniCards(jsonData);
                });

            searchInput.value = '';
            pesquisa_conteudos.style.height = '20rem';
            pesquisa_conteudos.style.display = "block";
            bloco_pesquisa.style.display = 'flex';
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
    <a href="${backendUrl}/api/view/${data.arquivo}" target="_blank">
        <h1 class="resultado_card_titulo">Titulo:${data.titulo}</h1>
        <h2 class="resultado_card_tema">Tema:${data.tema}</h2>
    </a></div>`;

        cardContainer.appendChild(cardElement);

        const collection = document.getElementsByClassName("resultado_card_link");

        
    });
}
