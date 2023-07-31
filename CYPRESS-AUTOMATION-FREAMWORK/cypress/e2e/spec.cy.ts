describe('template spec', () => {
  it('passes', () => {
    cy.log(Cypress.env("API_KEY"))
    cy.visit('https://example.cypress.io')
  })
})