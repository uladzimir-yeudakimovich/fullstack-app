Cypress.Commands.add('login', ({ login, password }) => {
  cy.request('POST', 'http://localhost:4000/login', {
    login, password
  }).then(({ body }) => {
    localStorage.setItem('_at', JSON.stringify(body.token))
    localStorage.setItem('userLogin', JSON.stringify(login))
    cy.visit('http://localhost:3000')
  })
})

Cypress.Commands.add('createBlog', ({ title, author, url }) => {
  cy.request({
    url: 'http://localhost:4000/api/blogs',
    method: 'POST',
    body: { title, author, url },
    headers: {
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem('_at'))}`
    }
  }).then(() => {
    cy.visit('http://localhost:3000')
  })
})
