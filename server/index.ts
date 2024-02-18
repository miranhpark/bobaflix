import { Server } from './src/server'
import express from 'express'

const app = express()
// TODO: un-hardcode port
const port = 8080

const server = new Server(app)
server.start(port)
