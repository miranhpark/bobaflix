import { type Request, type Response } from 'express'
import { yelpQuery } from '../utils/utils'

class controller {
    static getData(req: Request, res: Response): void {
        yelpQuery(req, res)
    }
}

export default controller
