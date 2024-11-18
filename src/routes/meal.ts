import { FastifyInstance } from 'fastify'
import { db } from '../database'
import { z } from 'zod'
import { randomUUID } from 'crypto'
import { checkSessionId } from '../middlewares/check-session-id'
import { getCurrentDate } from '../util/dateUtil'

export async function mealRoutes(app: FastifyInstance) {
  app.get(
    '/',
    {
      preHandler: [checkSessionId],
    },
    async (request) => {
      const { sessionId } = request.cookies

      const meals = await db('meal').where('sessionId', sessionId).select()

      return { meals }
    },
  )

  app.get('/:id', async (request) => {
    const getMealParamsSchema = z.object({
      id: z.string(),
    })

    const { id } = getMealParamsSchema.parse(request.params) // pega o que está na rota

    const meal = await db('meal').where('id', id).first()

    return { meal }
  })

  app.get('/quantity', async () => {
    const quantity = await db('meal').count('id', { as: 'quantity' }).first()

    return { quantity }
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

    let sessionId = request.cookies.sessionId

    if (!sessionId) {
      sessionId = randomUUID()

      reply.cookie('sessionId', sessionId, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      })
    }

    await db('meal').insert({
      name,
      description,
      compliant,
      userId,
      sessionId,
    })

    return reply.status(201).send()
  })

  app.put('/:id', async (request, reply) => {
    const createMealParamsSchema = z.object({
      id: z.string(),
    })

    const createMealBodySchema = z.object({
      name: z.string().optional(),
      description: z.string().optional(),
      compliant: z.boolean().optional(),
      userId: z.number().optional(),
    })

    const { id } = createMealParamsSchema.parse(request.params)

    const { name, description, compliant, userId } = createMealBodySchema.parse(
      request.body,
    )

    const meal = await db('meal').where('id', id).first()

    await db('meal')
      .where('id', id)
      .update({
        name: name || meal.name,
        description: description || meal.description,
        compliant: compliant || meal.compliant,
        userId: userId || meal.userId,
        sessionId: meal.sessionId,
        createdAt: meal.createdAt,
        updatedAt: getCurrentDate(),
      })

    return reply.status(204).send()
  })

  app.delete('/:id', async (request, reply) => {
    const createMealParamsSchema = z.object({
      id: z.string(),
    })

    const { id } = createMealParamsSchema.parse(request.params)

    await db('meal').where('id', id).delete()

    return reply.status(204).send()
  })
}
