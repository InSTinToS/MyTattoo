import { IResponse } from '@backend/modules/Authentication/useCases/signIn/SignIn.types'

import { v4 as uuid } from 'uuid'

describe('SignIn', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('nav button').contains('Entrar').click()
  })

  it('should be able to signIn', () => {
    cy.get('input[id="usernameOrEmail"]').type('InSTinToS')
    cy.get('input[id="password"]').type('Miguel@1234')

    cy.get('button[type="submit"]').contains('Entrar').click()

    const signInResponse: IResponse = {
      id: uuid(),
      token: uuid()
    }

    const usersResponse = { id: signInResponse.id, username: 'InSTinToS' }

    const api = Cypress.env('api')

    cy.intercept(
      {
        method: 'POST',
        url: `${api}/auth/sign-in`
      },
      signInResponse
    ).as('sign-in')

    cy.intercept(
      { method: 'GET', url: `${api}/users/${signInResponse.id}` },
      usersResponse
    ).as('users')

    cy.get('html').contains('Sucesso')
    cy.get('html').contains(usersResponse.username)
  })
})
