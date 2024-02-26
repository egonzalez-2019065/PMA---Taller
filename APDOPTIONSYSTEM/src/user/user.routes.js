import express from 'express'
import { validateJwt, isAdmin } from '../middlewares/validate-jwt.js'
import { test, register, login, deleteU, update } from './user.controller.js'

const api = express.Router()

// Rutas públicas
api.get('/test', [validateJwt] , [isAdmin], test)
api.post('/register', register)
api.post('/login', login)


// Rutas privadas - únicamente usuarios loggeados

api.put('/delete/:id', [validateJwt],  deleteU)
api.delete('update/:id',[validateJwt],  update)

export default api