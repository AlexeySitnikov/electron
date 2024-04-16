// import { getNamesOfTempFiles } from './getNamesOfTempFiles.js'
const getNamesOfTempFiles = require('./getNamesOfTempFiles.js')
const writeOutputFile = require('./writeOutputFile.js')
// import { writeOutputFile } from './writeOutputFile.js'

const writeOutputFiles = (
  files,
  currentDirectory,
  tempDirectory,
  startWriteTime,
  addInformation,
  field,
) => {
  const {
    Ex, Ey, Ez, E,
  } = getNamesOfTempFiles(files, tempDirectory)
  if ((Ex.length > 0) && (Ey.length > 0) && (Ez.length > 0)) {
    if (field === 'EField') {
      writeOutputFile(Ex, `${currentDirectory}\\E.edx`, startWriteTime, addInformation)
      writeOutputFile(Ey, `${currentDirectory}\\E.edy`, startWriteTime, addInformation)
      writeOutputFile(Ez, `${currentDirectory}\\E.edz`, startWriteTime, addInformation)
    } else if (field === 'BField') {
      writeOutputFile(Ex, `${currentDirectory}\\B.bsx`, startWriteTime, addInformation)
      writeOutputFile(Ey, `${currentDirectory}\\B.bsy`, startWriteTime, addInformation)
      writeOutputFile(Ez, `${currentDirectory}\\B.bsz`, startWriteTime, addInformation)
    }
  } else if (E.length > 0) {
    if (field === 'EField') {
      writeOutputFile(E, `${currentDirectory}\\E.edz`, startWriteTime, addInformation)
    } else if (field === 'BField') {
      writeOutputFile(E, `${currentDirectory}\\B.bsz`, startWriteTime, addInformation)
    }
  }
}

module.exports = writeOutputFiles
