import { Request, Response } from 'express';
import { getJoke } from "../utils/utils";

class SampleController {
    static getSampleData(req: Request, res: Response): void {
        res.json({ message: 'Hello from Express with TypeScript!' });
    }

    static getJokeData(req: Request, res: Response): void {
        getJoke(res)
    }
}

export default SampleController;
