/**
 * @jest-environment jsdom
 */
import {waitFor} from '@testing-library/dom'
import user from "@testing-library/user-event";
import '@testing-library/jest-dom'

test('Clique no ícone de pequisa exibe a caixa de pesquisa ', async  () => {
    document.body.innerHTML =`<div id="search-icon"></div>' `

    const searchIcon =  document.getElementById('search-icon')

    expect(searchIcon).toBeInTheDocument()
})

test('Quando clicar no botão search-icon deve aparecer o placeholder', async () => {
    document.body.innerHTML = ` 
    <button id="search-icon">Search</button>
    <div id="search-input" style="display: inline-block"></div>
    <input type="text" id="search-input"
`;
    
    const button = await document.getElementById('search-icon',)

    await user.click(button)

    await waitFor (async () => {
        const searchInput = await document.getElementById('search-input')
        expect(searchInput).toBeInTheDocument()
        expect(searchInput.style.display).toBe('inline-block')
    })
})
