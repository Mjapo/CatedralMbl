 // Obtém uma referência ao elemento do DOM com o id "sessao" e a armazena na variável 'sessao'.
 const sessao = document.getElementById("sessao");

 // Aguarda o evento 'DOMContentLoaded', indicando que a estrutura do DOM foi totalmente carregada,
 // antes de executar o código dentro da função de callback.
 document.addEventListener("DOMContentLoaded", function() {
     // Cria um elemento fictício do tipo 'div' que será adicionado à sessão.
     const elementoFicticio = document.createElement('div');
     // Define o conteúdo de texto do elemento fictício como 'Elemento Adicionado à Sessão'.
 
     elementoFicticio.textContent = 'Elemento Adicionado à Sessão';
 
     // Adiciona o elemento fictício à sessao usando o método appendChild.
     sessao.appendChild(elementoFicticio);
 });

 export default sessao
 