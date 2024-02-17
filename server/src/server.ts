import express, { Express } from "express";
import sampleRoutes from './routes/routes';
import cors from 'cors';

export class Server {

    private app: Express;

    constructor(app: Express) {
        this.app = app;
        // Middleware
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true }));

        // Routes
        this.app.use('/api', sampleRoutes);
    }

    public start(port: number): void {
        this.app.listen(port, () => console.log(`Server listening on port ${port}!`));
    }

}
