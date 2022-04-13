import { UsersRoutes } from './users.routes'
import { errorHandler } from './error.routes'

import express from 'express'

const app = express()

app.use(express.json())

app.use('/Users', UsersRoutes)

app.use(errorHandler)

export { app }
