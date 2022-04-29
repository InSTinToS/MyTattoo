import 'reflect-metadata'
import 'dotenv/config'
import 'shared/containers'
import 'express-async-errors'

import { app } from './shared/routes'

const port = process.env.PORT

app.listen(port, () => console.log(`Running at ${port}`))
