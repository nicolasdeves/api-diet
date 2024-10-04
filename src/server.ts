import fastify from 'fastify'
import { db } from './database'
import { env } from './env'

const app = fastify()

app.get('/hello', async () => {
  const meal = await db('meal')
    .insert({
      name: 'teste',
    })
    .returning('*')

  return meal
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Servidor rodando na porta 3333')
  })
