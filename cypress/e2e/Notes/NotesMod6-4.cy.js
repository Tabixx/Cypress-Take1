const url = 'https://fabrykatestow.pl/'

describe('CookieMonster scenario', () => {
    it('Work with some yummy cookies', function () {

        cy.visit(url)

        cy.clearCookie('foo')
        cy.clearCookies()
        cy.clearAllCookies()

        cy.setCookie('foo', 'bar')
        cy.getCookie('foo')
        cy.getCookies()

        cy.getAllCookies()
    })
})