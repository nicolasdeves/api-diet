import { test, beforeAll, afterAll, describe, beforeEach } from 'vitest'
import supertest from 'supertest'
import { app } from '../app'
import { execSync } from 'node:child_process'

describe('User routes', () => {
  beforeAll(async () => {
    await app.ready()
    execSync('knex migrate:latest')

  })

  afterAll(async () => {
    app.close()
  })

  beforeEach(() => {
  })

  test('create a new user', async () => {
    await supertest(app.server)
      .post('/user')
      .send({
        name: 'Name Test',
      })
      .expect(201)
  })
})
