const cors = require('cors')

const express = require('express')

// const mainFunction = require('./mainFunction.js')
const getInputFiles = require('./getInputFiles.js')
const readFirstFewStringsFromFiles = require('./readFirstFewStringsFromFiles.js')

const fileServer = () => {
  const server = express()

  const PORT = 3333

  server.use(cors())

  server.get('/', (req, res) => {
    res.send({
      value: 'Hello World',
    })
  })

  server.post('/readFiles/:inputRequest/', async (req, res) => {
    const { inputRequest } = req.params
    const files = inputRequest.replaceAll('temp_symbol', '\\').replaceAll('temp_space', ' ').split('temp_divider')
    // await mainFunction(getInputFiles(files))
    const responce = await readFirstFewStringsFromFiles(getInputFiles(files))
    res.send({
      responce,
    })
  })

  server.listen(PORT, () => {
    console.log(`server has been started at port: ${PORT}`)
  })
}

module.exports = fileServer
