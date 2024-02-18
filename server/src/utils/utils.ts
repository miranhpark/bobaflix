import { type Response } from 'express'

export async function yelpQuery(res: Response) {
    // const apiKey = process.env.YELP_API_KEY
    // if (apiKey === undefined) {
    //     res.status(403).json({ error: 'Permission denied (missing API key)' })
    // } else if (true) {
    //     // TODO: check api key valid
    //     res.status(403).json({ error: 'Permission denied (invalid API key)' })
    // }

    try {
        // Make a GET request to the Yelp API
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: { Accept: 'application/json' }
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

