import express from 'express'
import cors from 'cors'
import { mainFunction } from './src/mainFunction.js'
import { getInputFiles } from './src/getInputFiles.js'


export const server = express()

const PORT = 3333

server.use(cors())

server.get('/', (req, res) => {
  res.send({
    value: 'Hello World'
  })
})

server.post('/:inputRequest/', async (req, res) => {
  const {inputRequest} = req.params
  const files = inputRequest.replaceAll(':', ':\\').split(' ')
  await mainFunction(getInputFiles(files))
  res.send({
    files
  })
})

server.listen(PORT, () => {
  console.log(`server has been started at port: ${PORT}`)
})
