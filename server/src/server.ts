import express, { type Express } from 'express'
import sampleRoutes from './routes/routes'
import cors from 'cors'

export class Server {
  private readonly app: Express

  constructor (app: Express) {
    this.app = app
    // Middleware
    this.app.use(express.json())
    this.app.use(cors())
    this.app.use(express.urlencoded({ extended: true }))

    // Routes
    this.app.use('/api', sampleRoutes)
  }

  public start (port: number): void {
    this.app.listen(port, () => { console.log(`Server listening on port ${port}!`) })
  }
}
