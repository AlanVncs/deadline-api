import express from 'express'
import cookieParser from 'cookie-parser'
import { router } from './router'

const PORT = process.env.PORT ?? '8080'

const app = express()

app.use(cookieParser())
app.use(router)

app.listen(PORT, () => {
	console.log(`\nReady! \nPort: ${PORT}`)
})
