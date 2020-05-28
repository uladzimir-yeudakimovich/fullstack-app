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

  it('front page can be opened', function() {
    cy.visit('http://localhost:3000/')
    cy.contains('log in to application')
  })

  it('login form can be opened', function() {
    cy.contains('login').click()
  })

  it('login fails with wrong password', function () {
    cy.contains('login').click()
    cy.get('#login').type('admin')
    cy.get('#password').type('123')
    cy.contains('submit').click()
    cy.contains('Request failed with status code 401')
      .should('have.css', 'color', 'rgb(255, 0, 0)')
      .should('have.css', 'border-style', 'solid')
    cy.get('html').should('not.contain', 'admin logged in')
  })

  it('user can login', function () {
    cy.contains('login').click()
    cy.get('#login').type('admin')
    cy.get('#password').type('admin')
    cy.contains('submit').click()
    cy.contains('admin logged in')
    cy.contains('logout')
  })
})