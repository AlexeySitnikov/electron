const cors = require('cors')

const express = require('express')

const mainFunction = require('./mainFunction.js')
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
    const inputString = inputRequest.replaceAll('temp_symbol', '\\').replaceAll('temp_space', ' ').split('temp_divider')
    const files = []
    for (let i = 0; i < inputString.length; i += 2) {
      files.push({
        name: inputString[i].replaceAll('name:', ''),
      })
    }
    const responce = await readFirstFewStringsFromFiles(getInputFiles(files))
    res.send({
      responce,
    })
  })

  server.post('/generateOutputFiles/:inputRequest/', async (req, res) => {
    const { inputRequest } = req.params
    const inputString = inputRequest.replaceAll('temp_symbol', '\\').replaceAll('temp_space', ' ').split('temp_divider')
    const files = []
    for (let i = 0; i < inputString.length; i += 2) {
      files.push({
        name: inputString[i].replaceAll('name:', ''),
        deleteFirstTwoStrings: inputString[i + 1].replaceAll('deleteFirstTwoStrings:', '').toLowerCase() === 'true',
      })
    }
    await mainFunction(getInputFiles(files))
    res.sendStatus(200)
  })

  server.listen(PORT, () => {
    console.log(`server has been started at port: ${PORT}`)
  })
}

module.exports = fileServer
