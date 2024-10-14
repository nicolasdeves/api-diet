import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { mealRoutes } from './routes/meal'
import { userRoutes } from './routes/user'

export const app = fastify()

app.register(cookie)

app.register(mealRoutes, {
  prefix: 'meal', // prefixo para as rotas: /meal
})

app.register(userRoutes, {
  prefix: 'user', // prefixo para as rotas: /user
})
