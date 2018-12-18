import * as spdy from 'spdy'
import * as fs from 'fs'
import app from './app'

const options = {
  key: fs.readFileSync(__dirname + '/certs/server.key'),
  cert: fs.readFileSync(__dirname + '/certs/server.crt'),
}

const PORT = 3000

const server = spdy.createServer(options, app)

server.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`)
})
