const cors = require('cors')

const express = require('express')

const mainFunction =require( './src/mainFunction.js')
const getInputFiles =require('./src/getInputFiles.js')


const mainserver = ()=>{
  const server = express()

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
}


module.exports = mainserver
