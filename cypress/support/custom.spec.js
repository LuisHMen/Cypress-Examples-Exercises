describe('Custom commands', () => {
    it('login to application using custom cypress commands', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.login('username', 'password')
    })
})