import { type Response } from 'express'

export async function getJoke (res: Response) {
  try {
    // Make a GET request to the "icanhazdadjoke" API
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' }
    })

    if (!response.ok) {
      console.log(`err: ${response.status}`)
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    // Parse the JSON response
    const data = await response.json()

    // Extract the joke from the response
    const joke = data.joke

    // Send the joke as the response
    res.json({ joke })
  } catch (error) {
    console.error('Error fetching dad joke:', error)
    res.status(500).json({ error: 'Failed to fetch dad joke' })
  }
}
