const url = 'https://jsonplaceholder.typicode.com/posts/1'

describe('Homework Module6', ()=>{
    it('API Testing - PUTting and DELETing stuff', ()=>{
        
    cy.request(url).then((response)=>{
        const body = JSON.stringify(response.body)
        expect(response.body).to.exist
    })
        
    cy.request({
        method: 'PUT',
        url: url,
        body: {
            title: 'The coolest title ever',
            body:'Not a lorem ipsum anymore',
        },
            
    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.title).to.eq('The coolest title ever')
        expect(response.body.userId).not.to.be.oneOf([2137,67,420]) 
    })

    cy.request({
        method: 'DELETE',
        url: url,

    }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.title).not.to.exist
        })
    })
})
