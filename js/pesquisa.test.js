/**
 * @jest-environment jsdom
 */
import '@testing-library/dom'
import user from "@testing-library/user-event";
import '@testing-library/jest-dom'

test('Clique no ícone de pequisa exibe a caixa de pesquisa ', async  () => {
    document.body.innerHTML =`<div id="search-input"></div>' `

    const searchIpunt =  document.getElementById('search-input')

    expect(searchIpunt).toBeInTheDocument()
})

