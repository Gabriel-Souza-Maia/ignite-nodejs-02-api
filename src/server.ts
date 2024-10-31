import { app } from './app'
import { env } from './env'

const HOST = '0.0.0.0'

app
  .listen({
    port: env.PORT,
    host: HOST,
  })
  .then(() => {
    console.log(`Server is running on port: ${env.PORT}`)
  })
