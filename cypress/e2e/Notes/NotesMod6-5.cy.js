const url = 'https://register.rediff.com/register/register.php'

describe('Alert scenario', () => {
    it('Work with big red alerts!!!', function () {
        cy.visit(url)
        cy.get('input[type="submit"]').click()

        cy.on('window:alert', (t)=>{
            expect(t).to.contains('Your full name')
        })
    })
})