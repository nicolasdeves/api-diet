import { FastifyInstance } from 'fastify'
import { db } from '../database'
import { z } from 'zod'

export async function userRoutes(app: FastifyInstance) {
  app.post('/', async (request, reply) => {
    const createUserBodySchema = z.object({
      name: z.string(),
    })

    const { name } = createUserBodySchema.parse(request.body)

    await db('user').insert({
      name,
    })

    return reply.status(201).send()
  })
}
