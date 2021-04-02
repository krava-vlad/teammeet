import http from 'http'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import PeerServer from './services/PeerServer'
import SocketServer from './services/SocketServer'
import Shutdown from './services/Shutdown'
import Router from './services/Router'

const app = express()
const server = http.createServer(app)

const corsOptions = {
  origin: [
    'capacitor://localhost',
    'ionic://localhost',
    'http://localhost',
    'http://localhost:4000',
    'http://localhost:8080',
    'http://localhost:8100',
    'https://localhost:8100'
  ],
  credentials: true
}
const webAppHost = process.env.WEB_APP_HOST
console.log('host web service', process.env.NODE_ENV)
const webAppUrl = `https://${webAppHost}`
if (webAppHost) corsOptions.origin.push(webAppUrl)

app.options('*', cors(corsOptions))
app.use(cors(corsOptions))
app.use(bodyParser.json())

new Router(app).initialize()
new PeerServer(server, app).attach()
new SocketServer(server).attach()
new Shutdown().initGracefull()

server.listen(process.env.PORT)
