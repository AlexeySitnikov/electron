const http = require('http')
const express = require('express')
const WebSocket = require('ws')
const cors = require('cors')
const mainFunction = require('./mainFunction.js')
const getInputFiles = require('./getInputFiles.js')

const fileServer = () => {
  const app = express()
  app.use(express.json())
  app.use(cors())

  const server = http.createServer(app)
  const webSocketServer = new WebSocket.Server({ server })

  const PORT = 3334

  function makeResponce(data, wSS) {
    wSS.clients.forEach((client) => client.send(JSON.stringify(data)))
  }

  webSocketServer.on('connection', (ws) => {
    ws.on('message', async (m) => {
      const {
        files, addInformation, field,
      } = JSON.parse(m)

      await mainFunction(getInputFiles(files), addInformation, field, webSocketServer)
      makeResponce('done', webSocketServer)
    })

    ws.on('error', (e) => ws.send(e))

    ws.send('Hi there, I am a WebSocket server')
  })

  server.listen(PORT, () => console.log(`WebSocet server started at port #${PORT}`))
}

module.exports = fileServer
