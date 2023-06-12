import { Router } from 'express'
import { auth } from './auth'

const router = Router()

// Configurações padrão de todas as rotas
router.use('/', (_, response, next) => {
	response.setHeader('content-type', 'application/json')
	next()
})

// Rotas
router.use('/', auth)

export { router }
