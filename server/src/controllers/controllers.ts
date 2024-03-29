import { type Request, type Response } from 'express'

export function yelpController(req: Request, res: Response): void {
    yelpQuery(req, res)
}

// TODO: add and break out api key validation logic and handling
// if (apiKey === undefined) {
//     res.status(403).json({ error: 'Permission denied (missing API key)' })
// } else if (true) {
//     // TODO: check api key valid
//     res.status(403).json({ error: 'Permission denied (invalid API key)' })
// }

async function yelpQuery(req: Request, res: Response) {
    const apiKey = process.env.YELP_API_KEY


    // access the data sent from the frontend
    const requestData = req.body;
    const locationString = encodeURIComponent(requestData.location)

    try {
        // Make a GET request to the Yelp API with some fixed parameters
        // (limit 50, distance 6~ mi., sorted by best match, categories search for 'bubbletea')

        // Uncomment the other `url` variable line to use local fixed test data hosted by the frontend
        // TODO: make this configurable
        // const url = 'http://localhost:3000/test.json'
        const url = `https://api.yelp.com/v3/businesses/search?location=${locationString}&radius=10000&categories=bubbletea&sort_by=best_match&limit=50`

        const response = await fetch(url, {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + apiKey?.toString()
            }
        })

        if (!response.ok) {
            console.log(`err: ${response.status}`)
            throw new Error(`HTTP error - status: ${response.status}`)
        }

        // Parse the JSON response
        const data = await response.json()

        // Send the query as the response
        res.json({ data })
    } catch (error) {
        console.error('Error fetching from Yelp API:', error)
        res.status(500).json({ error: 'Failed to fetch query from Yelp API' })
    }
}

