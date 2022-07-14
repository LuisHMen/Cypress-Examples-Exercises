describe('Keyboard press simulation', () => {
    it('Submit searchbox with pressing enter', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#searchTerm').type('Some text {enter}')
    })
})