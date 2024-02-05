const searchInput = document.getElementById('search-input');
const token = localStorage.getItem('token');
const cardContainer = document.getElementById('resultado_pesquisa');

function apagarCards(){
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild);
    }
}

searchInput.addEventListener('keyup', function (event) {
if (event.key === 'Enter') {
if (searchInput.value.trim() !== '') {
    fetch(`http://localhost:8080/api/busca/${searchInput.value}`)
        .then(response => response.json())
        .then(data => {
            const jsonData = data.map(value => ({
                titulo: value.titulo,
                tema: value.tema,
                archive: value.nomeArquivo

            }));
            renderMiniCards(jsonData);
        });
}
}
});

document.body.addEventListener('click', function(event) {
    if (event.target.id === 'card_id') {
        event.preventDefault()
        console.log('Clicou no meuElemento!');
    }
});


function renderMiniCards(jsonData) {
    const cardContainer = document.getElementById('resultado_pesquisa');
    cardContainer.innerHTML = '';

    jsonData.forEach(function (data) {
    const cardElement = document.createElement('div');
    cardElement.className = 'resultado_cards';

    cardElement.innerHTML = `<a id="card_id" class="card_click" href="http://localhost:8080/api/remove/${data.archive}">
    <div class="resultado_card">
        <h1 class="resultado_card_titulo">Titulo: ${data.titulo}</h1>
        <h2 class="resultado_card_tema">Tema: ${data.tema}</h2>
    </div>
                    
    </a>`;

    cardContainer.appendChild(cardElement);
    const collection = document.getElementsByClassName("card_click");

    for (let i = 0; i < collection.length; i++) {
        collection[i].addEventListener("click", function(event){
            event.preventDefault();
    
    
            fetch(this.href, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                if (response.ok) {
                    console.log('Requisição com sucesso!');
                } else {
                    console.error('Erro na requisição:', response.statusText);
                }
            })
            .catch(error => {
                // Trata erros de rede ou outros erros de solicitação
                console.error('Erro na requisição:', error);
            });
        })
      }
    });
}