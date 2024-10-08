import fastify from 'fastify'

import { env } from './env'
import { mealRoutes } from './routes/meal'
import { userRoutes } from './routes/user'

const app = fastify()

app.register(mealRoutes, {
  prefix: 'meal', // prefixo para as rotas: /meal
})

app.register(userRoutes, {
  prefix: 'user', // prefixo para as rotas: /user
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Servidor rodando na porta 3333')
  })
