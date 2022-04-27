import { IResponse } from '@backend/modules/Users/useCases/createUser/CreateUser.types'

import { uuid } from 'uuidv4'

describe('SignUp', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('nav button').contains('Registrar').click()
  })

  it('should be able to register', () => {
    cy.get('input[id="username"]').type('InSTinToS')
    cy.get('input[id="email"]').type('miguelandradebarreto2@gmail.com')
    cy.get('input[id="password"]').type('Miguel@1234')
    cy.get('input[id="confirmPassword"]').type('Miguel@1234')

    cy.get('button[type="submit"]').contains('Cadastrar').click()

    const responseData: IResponse = {
      id: uuid(),
      username: 'InSTinToS',
      updated_at: new Date().toUTCString(),
      created_at: new Date().toUTCString(),
      email: 'miguelandradebarreto2@gmail.com'
    }

    cy.intercept(
      { method: 'POST', url: 'http://localhost:3001/users' },
      { body: { data: responseData } }
    ).as('createUser')

    cy.get('html').contains('Sucesso')
    cy.get('input[id="usernameOrEmail"]')
  })
})

export {}
