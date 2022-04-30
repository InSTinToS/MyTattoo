import 'express-async-errors'

import { usersRoutes } from './users.routes'
import { authRoutes } from './auth.routes'

import { ThrowAppErrorController } from '@modules/Error/useCases/throwError/ThrowAppErrorController'

import cors from 'cors'
import express from 'express'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/users', usersRoutes)
app.use('/auth', authRoutes)

app.use(new ThrowAppErrorController().handle)

export { app }
