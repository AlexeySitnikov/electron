// import { readInitialFile } from './readInitialFile.js'
const readInitialFile = require('./readInitialFile.js')

const readInitialFiles  = async(files, tempDirectory)=>{
  return (await Promise.all([...files.map((file, index)=>(readInitialFile(file, index, tempDirectory)))]))
}

module.exports = readInitialFiles