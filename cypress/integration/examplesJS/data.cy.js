describe('Write / Read Data to JSON / Text file', () => {
    it('write data into JSON', () => {
        cy.writeFile('log.json', {name: "Luis", age: 27})
    })
    
    it('write data to the text file', () => {
        cy.writeFile('log.txt', "Hola, mundo!")
    })

    it('read and verify data from JSON file', () => {
        cy.readFile('log.json').its('age').should('eq', 27)
    })

    it('read and verify data from text file', () => {
        cy.readFile('log.txt').should('eq', 'Hola, mundo!')
    })

    it('read and verify browser document content', () => {
        cy.visit('https://www.example.com')
        cy.wait(3000)
        cy.document().its('contentType').should('eq', 'text/html')

        cy.document()
        .should('have.property', 'charset').and('eq', 'UTF-8')
    })
})