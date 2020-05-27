describe('Blogs', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.visit('http://localhost:3000/')
    cy.contains('log in to application')
  })

  it('login form can be opened', function() {
    cy.contains('login').click()
  })

  it('user can login', function () {
    cy.contains('login').click()
    cy.get('#login').type('admin')
    cy.get('#password').type('admin')
    cy.contains('submit').click()

    cy.contains('admin logged in')
  })
})