import { config } from 'dotenv' // tudo para dentro de process.env
import { z } from 'zod'

if (process.env.NODE_ENV === 'test') {
  config({ path: '.env.test' })
} else {
  config()
}

// criar o formato do objeto do env
const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  DATABASE_URL: z.string(),
  PORT: z.string().transform(Number),
})

// passa os parametros e o zod faz a conferência e a formatação do objeto
const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error('Invalid .env', _env.error.format())

  throw new Error('Invalid .env')
}

export const env = _env.data
