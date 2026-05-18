const url = 'http://simpletestsite.fabrykatestow.pl/'

describe('TestingSimpleSiteProject', () => {
    // beforeEach(() => {
    //     cy.get('button').invoke('text').as('button')
    // })
    
    
    it('Testing a simple site', function () {
        // cy.log('test')
        // cy.wait(500)
        cy.get('table').find('tr').as('rows')
        cy.get('@rows').first().click()
        cy.wait('@rows') //Will wait for concrete element - rows in this instance
        cy.wait(1000) //Will wait for given amount of time (1000ms - 1s) 
    })
})