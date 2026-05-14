describe('my first scenario', () => {
it('Visit Main Page and click top menu button', function () {
    //Cypress Commands
    
    //visit
    cy.visit('https://fabrykatestow.pl')
    //get
    cy.get('#nv-primary-navigation-main')
    //contains
    cy.get('#nv-primary-navigation-main').contains('Newsletter')
    //click
    cy.get('#nv-primary-navigation-main').contains('Newsletter').click()
    //url
    cy.url()
    //should
    cy.url().should('eq', 'https://fabrykatestow.pl/ciekawostki/')
    //eq
    cy.get('.elementor-inner').eq(0)
    //first
    cy.get('.elementor-inner').first()
    //last
    cy.get('.elementor-inner').last()
    //log
    cy.log('This is my Cypress message!')
    //request
    cy.request('https://fabrykatestow.pl')
    //wait
    cy.wait(1000)
    

//Assertions
cy.get('li.selected').should('have.length', 3)

cy.get('form').find('input').should('not.have.class', 'disabled')

cy.get('textarea').should('have.value', 'fabrykaTestow')

cy.get('[data-testid="user-name"]').should('have.text', 'Pawel Z')

cy.get('[data-testid="address"]').should('include.text', 'Polska')

cy.get('a').parent('span.help').should('not.contain', 'click me')

cy.get('[data-testid="form-submit"]').should('be.visible')

cy.get('li.hidden').should('not.be.visible')

cy.get('[data-testid="loading"]').should('not.exist')

cy.get(':radio').should('be.checked')
    
    })
})