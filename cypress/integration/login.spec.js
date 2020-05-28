describe('Login', function() {
  beforeEach(function() {
    // const user = {
    //   login: 'admin',
    //   name: 'Uladzimir',
    //   password: 'admin'
    // }
    // cy.request('POST', 'http://localhost:4000/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('Login from is shown', function() {
    cy.contains('log in to application')
    cy.contains('login')
  })

  describe('Login', function() {
    it('fails with wrong credentials', function() {
      cy.contains('login').click()
      cy.get('#login').type('admin')
      cy.get('#password').type('123')
      cy.contains('submit').click()
      cy.contains('Request failed with status code 401')
        .should('have.css', 'color', 'rgb(255, 0, 0)')
        .should('have.css', 'border-style', 'solid')
      cy.get('html').should('not.contain', 'admin logged in')
    })

    it('succeeds with correct credentials', function() {
      cy.contains('login').click()
      cy.get('#login').type('admin')
      cy.get('#password').type('admin')
      cy.contains('submit').click()
      cy.contains('admin logged in')
      cy.contains('logout')
    })
  })
})