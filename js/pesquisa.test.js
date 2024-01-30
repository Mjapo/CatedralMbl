/**
 * @jest-environment jsdom
 */
import {screen, render, fireEvent} from'@testing-library/react'
import user from "@testing-library/user-event";
import './pesquisa'

test('Clique no ícone de pequisa exibe a caixa de pesquisa ', () => {
    render(<pesquisa />)

    fireEvent.click(screen.getByText('Search')) 

    expect(screen.getByRole('textbox')).toBeVisible()
})