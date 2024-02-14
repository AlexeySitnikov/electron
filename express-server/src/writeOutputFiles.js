import { getNamesOfTempFiles } from './getNamesOfTempFiles.js'
// const getNamesOfTempFiles = require('./getNamesOfTempFiles.js')
// const writeOutputFile = require('./writeOutputFile.js')
import { writeOutputFile } from './writeOutputFile.js'

export function writeOutputFiles(files, currentDirectory, tempDirectory, startWriteTime){
  const {Ex, Ey, Ez} = getNamesOfTempFiles(files, tempDirectory)

    writeOutputFile(Ex, `${currentDirectory}\\E.edx`, startWriteTime)
    writeOutputFile(Ey, `${currentDirectory}\\E.edy`, startWriteTime)
    writeOutputFile(Ez, `${currentDirectory}\\E.edz`, startWriteTime)

}