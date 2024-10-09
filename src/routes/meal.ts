import { FastifyInstance } from 'fastify'
import { db } from '../database'
import { z } from 'zod'

export async function mealRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    const meals = await db('meal').select()

    return { meals }
  })

  app.get('/:id', async (request) => {
    const getMealParamsSchema = z.object({
      id: z.string(),
    })

    const { id } = getMealParamsSchema.parse(request.params) //pega o que está na rota

    const meal = await db('meal').where('id', id).first()

    return { meal }
  })

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
