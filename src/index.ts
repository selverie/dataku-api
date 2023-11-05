import express, { type Application, type Request, type Response, type NextFunction } from 'express'

const app: Application = express()
const port: number = 1000

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ testing: 'Hello World!' })
})

app.listen(port, () => {
  console.log(`[Server] : Server is running at http://localhost:${port}`)
})
