import "cypress-localstorage-commands"

describe('LocalStoragi scenario', () => {
    it('Work with local and session storage', function () {
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        cy.clearLocalStorage('test')

        cy.getAllLocalStorage()
        cy.getAllSessionStorage()
        cy.getLocalStorage('test')
        
        cy.setLocalStorage('test', '1')
    })
})