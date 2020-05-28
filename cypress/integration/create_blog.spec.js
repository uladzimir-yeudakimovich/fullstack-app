describe('Create blog', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:4000/api/testing/reset')
  })

  describe('when logged in', function() {
    beforeEach(function() {
      cy.login({ login: 'admin', password: 'admin' })
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
    })

    describe('and a blog exists', function () {
      beforeEach(function () {
        cy.createBlog({ title: 'first test_title', author: 'test_author', url: 'test_url' })
        cy.createBlog({ title: 'second test_title', author: 'test_author', url: 'test_url' })
        cy.createBlog({ title: 'third test_title', author: 'test_author', url: 'test_url' })
      })

      it('it can be made important', function () {
        cy.contains('first test_title test_author')
        cy.contains('second test_title test_author')
        cy.contains('third test_title test_author')
        cy.get('button').then( buttons => {
          cy.wrap(buttons[4]).as('thirdViewButton')
          cy.get('@thirdViewButton').click()
          cy.wrap(buttons[6]).as('thirdLikeButton')
          cy.get('@thirdLikeButton').click()

          cy.wrap(buttons[8]).as('secondViewButton')
          cy.get('@secondViewButton').click()
          cy.wrap(buttons[10]).as('secondLikeButton')
          cy.get('@secondLikeButton').click()
          cy.get('@secondLikeButton').click()

          cy.wrap(buttons[12]).as('firstViewButton')
          cy.get('@firstViewButton').click()
          cy.wrap(buttons[14]).as('firstLikeButton')
          cy.get('@firstLikeButton').click()
          cy.get('@firstLikeButton').click()
          cy.get('@firstLikeButton').click()
        })
        cy.contains('third test_title test_author').parent().contains('1')
        cy.contains('second test_title test_author').parent().contains('2')
        cy.contains('first test_title test_author').parent().contains('3')
      })
    })
  })
})
