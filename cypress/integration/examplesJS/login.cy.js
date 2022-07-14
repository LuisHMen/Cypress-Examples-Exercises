describe('Working with inputs', () => {
    it('override the current time', () => {
        const date = new Date(2020, 4, 23).getTime() // return a timestamp
        cy.clock(date)
        cy.log(date)
    })

    it('load login page', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.clearCookies({log: true})
        cy.clearLocalStorage('your item', {log: true})
    })

    it('fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('Invalid user', {delay: 100})
    })

    it('fill password', () => {
        cy.get('#user_password').clear()
        cy.get('#user_password').type('Invalid password', {delay: 100})
    })

    it('mark checkbox', () => {
        cy.get('input[type="checkbox"]').click()
    })

    it('submit login form', () => {
        cy.contains('Sign in').click()
    })

    it('display error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
    })
})