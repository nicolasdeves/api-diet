import { FastifyInstance } from 'fastify'
import { db } from '../database'
import { z } from 'zod'

export async function mealRoutes(app: FastifyInstance) {
  app.post('/', async (request, reply) => {
    const createMealBodySchema = z.object({
      name: z.string(),
      description: z.string(),
      compliant: z.boolean(),
      userId: z.number(),
    })

    const { name, description, compliant, userId } = createMealBodySchema.parse(
      request.body,
    )

    await db('meal').insert({
      name,
      description,
      compliant,
      userId,
    })

    return reply.status(201).send()
  })
}
