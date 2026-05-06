describe('Homework Module4 ', () => {

    beforeEach(()=>{
        cy.visit("https://fabrykatestow.pl/")
    })

    it('5 elements by ID', () => {
        cy.log("ID")
        cy.get('#menu-item-238');
        cy.get('#kursy');
        cy.get('#site-footer');
        cy.get('#newsletter');
        cy.get('#wp-emoji-settings');
    })

    it('5 elements by Class', () => {
        cy.get('.brand'); 
        cy.get('.wrapper');
        cy.get('.gallery-item') 
        cy.get('.elementor-button-link') 
        cy.get('.elementor-heading-title') 
    })

    it('5 elements by Text', () => {
        cy.contains('Bądź na bieżąco')
        cy.contains('SZKOŁa ONLINE DLA TESTERÓW') 
        cy.get('span').contains('POKAŻ CZEGO SIĘ NAUCZĘ')
        cy.contains('Polityka prywatności i cookies')
        cy.contains('Kompletny Proces')
        cy.contains('ZERO RYZYKA')
    })

  it('5 elements by Attribute', () => {
        cy.get('img[class="neve-site-logo skip-lazy"]')
        cy.get('div[data-id="782c7bd"]')
        cy.get('div[class="wrapper"]')
        cy.get('section[data-element_type="section"]')
        cy.get('a[href="https://fabrykatestow.pl/ciekawostki"]')
        cy.get('img[class="attachment-full size-full wp-image-1853"]')
    })
})