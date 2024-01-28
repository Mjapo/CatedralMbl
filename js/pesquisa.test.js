/**
 * @jest-environment jsdom
 */

const {searchIcon} = require('../js/pesquisa')

describe('Barra de pesquisa', () => {

    it('Deve rederizar search input', () => {
        searchIcon.click()
        expect(serachIcon.style.display).toBe('inline-block')
    });

});