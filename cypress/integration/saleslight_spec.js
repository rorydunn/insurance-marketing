describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true)
  })
})

describe('Login Test', function() {
  it('Checks login page', function() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.visit('https://www.saleslight.io/', {
      // auth: {
      //   username: 'Open',
      //   password: 'Sesame!'
      // }
    })
    // cy.contains('RECENT CONTENT')
    // cy.get('#desktopNav').contains('Search')
    cy.get('#mainNav').contains('Login')
    cy.get('#mainNav').contains('Login').click()
    cy.url().should('include', 'saleslight.io/login')


  })
})
