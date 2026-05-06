describe('Homework Module5', () => {
    it('Screenshot taking shenanigans', function() {
        cy.visit('https://fabrykatestow.pl')
        cy.get('#cbBtnAcceptAll').click()
        cy.getAllCookies()
        cy.get('#kursy').click()
        cy.get('a[href="https://fabrykatestow.pl/cypress"]').contains(/pokaż czego się nauczę/i).click()
        cy.url().should('eq', 'https://fabrykatestow.pl/cypress/')
        cy.get('#cy-mentor-h2').scrollIntoView({ offset: { top: -200, left: 0 }}).should('be.visible')
        cy.screenshot('screen-przystojniaka', { capture: 'viewport', overwrite: true })
})
})