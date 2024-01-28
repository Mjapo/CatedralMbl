document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchIcon = document.getElementById('search-icon');
    const pesquisa_conteudos = document.getElementById('resultado_pesquisa');
    const bloco_pesquisa = document.getElementById('resultado_cards');
  
    // Set up click event listener for search icon
    searchIcon.addEventListener('click', () => {
      searchInput.style.display = 'inline-block';
      searchInput.focus();
      searchInput.placeholder = '';
    });
  
    // Set up input event listener for search input
    searchInput.addEventListener('input', () => {
      if (searchInput.value.trim() !== '') {
        pesquisa_conteudos.style.height = 'auto';
      } else {
        pesquisa_conteudos.style.height = '0';
      }
    });
  
    // Set up keydown event listener for search input
    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
  
        if (searchInput.value.trim() !== '') {
          fetch(`http://localhost:8080/api/busca/${searchInput.value}`)
            .then((response) => response.json())
            .then((data) => {
              const jsonData = data.map((value) => ({
                titulo: value.titulo,
                tema: value.tema,
              }));
              renderMiniCards(jsonData);
            });
  
          searchInput.value = '';
          pesquisa_conteudos.style.height = '20rem';
          bloco_pesquisa.style.display = 'flex';
          searchInput.placeholder = '';
        } else {
          pesquisa_conteudos.style.height = '0';
          searchInput.placeholder = 'Digite sua pesquisa...';
        }
  
        searchInput.style.display = 'none';
        bloco_pesquisa.style.display = 'none';
      }
    });
  
    // Set up click event listener for search input
    searchInput.addEventListener('focusout', (event) => {
      if (!event.target.closest('#search-form')) {
        searchInput.style.display = 'none';
        bloco_pesquisa.style.display = 'none';
      }
    })
})