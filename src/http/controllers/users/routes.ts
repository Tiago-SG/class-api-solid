import { FastifyInstance } from 'fastify'
 import { register } from './register'
import { authenticate } from './authenticate'
import { verifyJwt } from '../../middlewares/verify-jwt'
import { profile } from './profile'
import { refresh } from './refresh'
 
 export async function userRoutes(app: FastifyInstance) {
   app.post('/users', register)
   app.post('/sessions', authenticate)
   app.get('/me', { onRequest: [verifyJwt] }, profile)
   app.patch('/token/refresh', refresh)
 }