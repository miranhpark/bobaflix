import express, { type Express } from 'express'
import router from './routes/routes'
import cors from 'cors'

// TODO: clean this up
export class Server {
    private readonly app: Express

    constructor(app: Express) {
        this.app = app
        // Middleware
        this.app.use(express.json())
        this.app.use(cors())
        this.app.use(express.urlencoded({ extended: true }))

        // Routes
        this.app.use('/api', router)
    }

    public start(port: number): void {
        this.app.listen(port, () => { console.log(`Server listening on port ${port}!`) })
    }
}
