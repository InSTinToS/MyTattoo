import { UsersRoutes } from './users.routes'
import { errorHandler } from './error.routes'
import { AuthRoutes } from './auth.routes'

import cors from 'cors'
import express from 'express'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/users', UsersRoutes)
app.use('/auth', AuthRoutes)

app.use(errorHandler)

export { app }
