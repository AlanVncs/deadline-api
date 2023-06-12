import { Router } from 'express'

const test = Router()

test.get('/auth', (request, response, next) => {
	response.send('AUTENTICADO!')
	next()
})

export { test }
