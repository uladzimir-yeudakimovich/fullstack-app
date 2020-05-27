describe('Create blog', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:4000/api/testing/reset')
    cy.login({ login: 'admin', password: 'admin' })
    cy.createBlog({
      title: 'test_title',
      author: 'test_author',
      url: 'test_url'
    })
  })

  it('a new blog can be created', function() {
    cy.contains('create new blog').click()
    cy.get('input[name=\'title\']').type('test_title')
    cy.get('input[name=\'author\']').type('test_author')
    cy.get('input[name=\'url\']').type('test_url')
    cy.get('form').submit()
    cy.contains('a new blog test_title test_author added')
      .should('have.css', 'color', 'rgb(0, 128, 0)')
      .should('have.css', 'border-style', 'solid')
    cy.contains('test_title test_author')
    cy.contains('view').click()
    cy.contains('0').click()
    cy.contains('like').click()
    cy.contains('1').click()
  })
})
