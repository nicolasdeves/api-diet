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

  app.get('/:userId', async (request) => {
    const createUserParamsSchema = z.object({
      userId: z.string(),
    })

    const { userId } = createUserParamsSchema.parse(request.params)

    const mealsOfUser = await db('meal').where('userId', userId)

    return { mealsOfUser }
  })

  app.get('/metrics/:userId', async (request) => {
    const createUserParamsSchema = z.object({
      userId: z.string(),
    })

    const { userId } = createUserParamsSchema.parse(request.params)

    let sumOfMeals = await db('meal')
      .where('userId', userId)
      .count('* as sumOfMeals')

    let compliants = await db('meal')
      .where('userId', userId)
      .where('compliant', true)
      .count('* as sumOfCompliants')

    let notCompliants = await db('meal')
      .where('userId', userId)
      .where('compliant', false)
      .count('* as sumOfNotCompliants')

    let bestSequence = await db('meal') // arrumar
      .where('userId', userId)
      .where('compliant', true)

      .count('* as bestSequence')

    sumOfMeals = JSON.parse(JSON.stringify(sumOfMeals))[0].sumOfMeals
    compliants = JSON.parse(JSON.stringify(compliants))[0].sumOfCompliants
    notCompliants = JSON.parse(JSON.stringify(notCompliants))[0]
      .sumOfNotCompliants
    bestSequence = JSON.parse(JSON.stringify(bestSequence))[0].bestSequence

    return { sumOfMeals, compliants, notCompliants, bestSequence }
  })
}
