document.addEventListener("DOMContentLoaded", function() {
    const jsonData = [
        {
            title: "Card Title 1",
            imageUrl: "../img/livro2.jpg"  
        },
        {
            title: "Card Title 1",
            imageUrl: "../img/livro2.jpg"  
        },
        {
            title: "Card Title 1",
            imageUrl: "../img/livro2.jpg"  
        },
        {
            title: "Card Title 1",
            imageUrl: "../img/livro2.jpg"  
        },
        {
            title: "Card Title 1",
            imageUrl: "../img/livro2.jpg"  
        },{
            title: "Card Title 1",
            imageUrl: "../img/livro2.jpg"  
        }

    ];


    renderCards(jsonData);
});

function renderCards(jsonData) {
    const cardContainer = document.getElementById("conteudo_sessao");

    jsonData.forEach(function(data) { // Corrigindo o nome da variável aqui
        const cardElement = document.createElement("div");
        cardElement.classList.add("conteudo_card");

        cardElement.innerHTML = `
            <h1 class="conteudo_card_titulo">${data.title}</h1>
            <img class="conteudo_card_img" src="${data.imageUrl}" alt="Card Image">
        `;

        cardContainer.appendChild(cardElement);
    });
}