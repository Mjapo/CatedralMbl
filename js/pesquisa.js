const searchInput = document.getElementById('search-input');
const searchIcon = document.getElementById('search-icon');
const pesquisa_conteudos = document.getElementById('resultado_pesquisa')

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
    }

});

searchInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        searchInput.value = '';
        pesquisa_conteudos.style.height = "30vh";
    }
});