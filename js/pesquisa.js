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
    }

});

searchInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        searchInput.value = '';
        pesquisa_conteudos.style.height = "20rem";
        bloco_pesquisa.style.display = "flex"
    }
});