import { readInitialFile } from './readInitialFile.js'
// const readInitialFile = require('./readInitialFile.js')

export async function readInitialFiles(files, tempDirectory){
  return (await Promise.all([...files.map((file, index)=>(readInitialFile(file, index, tempDirectory)))]))
}