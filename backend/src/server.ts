import 'reflect-metadata'
import 'dotenv/config'
import 'shared/containers'

import { app } from './shared/routes'

const port = process.env.BACKEND_PORT

app.listen(port, () => console.log(`Running at ${port}`))
