const topo = require('./topo.js');

test('Verifica se o link de rolagem é exibido corretamente', () => {
    document.body.innerHTML = '<div id="scroll-top-link"></div>';

    // Garante que initializeScrollTopLink seja chamado mesmo em ambiente de teste
    topo.initializeScrollTopLink();

    window.scrollY = 250;
    window.dispatchEvent(new Event('scroll'));

    // Obtém o elemento novamente após o evento de rolagem
    const scrollTopLink = document.getElementById("scroll-top-link");

    // Verifica se o elemento existe
    expect(scrollTopLink).toBeTruthy();

    // Verifica se a propriedade style.display é 'block'
    expect(topo.scrollTopLink.style.display).toBe('block');
});