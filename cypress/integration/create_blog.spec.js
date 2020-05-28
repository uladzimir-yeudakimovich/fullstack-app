describe('Blog component', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:4000/api/testing/reset')
  })

  describe.only('When logged in', function() {
    beforeEach(function() {
      cy.login({ login: 'admin', password: 'admin' })
    })

    it('A blog can be created and deleted by the same user', function() {
      cy.contains('create new blog').click()
      cy.get('input[name=\'title\']').type('test_title')
      cy.get('input[name=\'author\']').type('test_author')
      cy.get('input[name=\'url\']').type('test_url')
      cy.get('form').submit()
      cy.contains('a new blog test_title test_author added')
        .should('have.css', 'color', 'rgb(0, 128, 0)')
        .should('have.css', 'border-style', 'solid')

      cy.contains('logout').click()
      cy.login({ login: 'admin2', password: 'admin2' })
      cy.get('html').should('not.contain', 'admin logged in')
      cy.contains('admin2 logged in')
      cy.contains('view').click()
      cy.contains('remove').should('have.css', 'display', 'none')

      cy.contains('logout').click()
      cy.login({ login: 'admin', password: 'admin' })
      cy.get('html').should('not.contain', 'admin2 logged in')
      cy.contains('admin logged in')
      cy.contains('view').click()
      cy.contains('remove').should('have.css', 'display', 'inline-block')
      cy.contains('remove').click()
      cy.get('html').should('not.contain', 'test_title test_author')
    })

    describe('Blogs can be liked', function () {
      beforeEach(function () {
        cy.createBlog({ title: 'first test_title', author: 'test_author', url: 'test_url' })
        cy.createBlog({ title: 'second test_title', author: 'test_author', url: 'test_url' })
        cy.createBlog({ title: 'third test_title', author: 'test_author', url: 'test_url' })
      })

      it('Blogs should be like and arranged in the right order', function () {
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

        cy.get('span').then(blogs => {
          cy.wrap(blogs[1]).contains('first test_title test_author')
          cy.wrap(blogs[2]).contains('second test_title test_author')
          cy.wrap(blogs[3]).contains('third test_title test_author')
        })
      })
    })
  })
})
