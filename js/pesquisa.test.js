/**
 * @jest-environment jsdom
 */
import {fireEvent, screen, render} from '@testing-library/dom'


import './pesquisa'

test('Clique no ícone de pequisa exibe a caixa de pesquisa ', () => {
    render(document.body)

    fireEvent.click(screen.getByText('Search')) 

    expect(screen.getByRole('textbox')).toBeVisible()
})