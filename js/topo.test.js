import {screen, render } from'@testing-library/jest-dom'
import '@testing-library/dom'

test('Verifica se o link de rolagem é exibido corretamente',async () => {
    document.body.innerHTML = '<div id="scroll-top-link"></div>';

    const scrollTopLink = await document.getElementById('scroll-top-link')

    expect(scrollTopLink).toBeInTheDocument()

});