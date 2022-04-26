describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('/')

    cy.get('nav button').contains('Registrar').click()

    cy.get('form input[]')
  })
})

export {}
