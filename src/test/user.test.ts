import { test, beforeAll, afterAll } from 'vitest'
import supertest from 'supertest'
import { app } from '../app'

beforeAll(async () => {
    await app.ready()
})

afterAll(async () => {
    app.close()
})

test('create a new user', async() => {
    await supertest(app.server)
        .post('/user')
        .send({
            name: 'Name Test'
        })
        .expect(201)
})

