describe('Info', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:4000/info')
    cy.contains('Phonebook has info for')
  })
})
