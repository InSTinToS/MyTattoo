import { UsersRoutes } from './users.routes'
import { errorHandler } from './error.routes'
import { AuthRoutes } from './auth.routes'

import express from 'express'

const app = express()

app.use(express.json())

app.use('/users', UsersRoutes)
app.use('/auth', AuthRoutes)

app.use(errorHandler)

export { app }
