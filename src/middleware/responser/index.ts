import { Router } from 'express'

export type ResponserLocals = {
	message: string
	code: number
}

const responser = Router()

responser.get('/', (_, response, next) => {
	const { message, code } = response.locals as ResponserLocals

	if (!code || !message) return next()

	response.status(code)
	response.send({ message })
})

export { responser }
