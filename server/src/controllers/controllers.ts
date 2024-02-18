import { type Request, type Response } from 'express'
import { yelpQuery } from '../utils/utils'

class controller {
    static getData(req: Request, res: Response): void {
        yelpQuery(res)
    }
}

export default controller
