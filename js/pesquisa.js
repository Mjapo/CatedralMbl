const searchInput = document.getElementById('search-input');
const searchIcon = document.getElementById('search-icon');

let aparecerPesquisa = true;
searchIcon.addEventListener('click', function () {
    if(aparecerPesquisa){
        searchInput.style.display = 'inline-block';
        searchInput.focus();
        aparecerPesquisa = false;
    } else {
        searchInput.style.display = "none";
        aparecerPesquisa = true;
    }

});

searchInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        alert('Pesquisa por: ' + searchInput.value);
        searchInput.value = '';
        searchInput.style.display = 'none';
    }
});