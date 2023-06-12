import { Router } from 'express'
import { ResponserLocals, responser } from '../../middleware/responser'

const auth = Router()

auth.get('/', (request, response, next) => {
	const { user } = request.cookies

	if (!user) {
		response.locals = {
			message: 'A autenticação falhou',
			code: 401,
		} as ResponserLocals
	}

	// TODO Constinuar autenticação

	next()
})

auth.use(responser)

export { auth }
