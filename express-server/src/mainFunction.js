import { getTempDirectory } from './getTempDirectory.js'
import { makeTempDirectory } from './makeTempDirectory.js'
import { readInitialFiles } from './readInitialFiles.js'
import { writeOutputFiles } from './writeOutputFiles.js'

export async function mainFunction(inputFiles){
  const files = [...inputFiles]
  const startTime = Date.now()
  const { currentDirectory } = getTempDirectory(files)

  makeTempDirectory(currentDirectory)

  await readInitialFiles(files, currentDirectory)

  const endReadTime = Date.now()
  console.log('Time needed to read files: ' + (endReadTime - startTime)/1000 + ' sec')
  const startWriteTime = Date.now()

  writeOutputFiles(files, currentDirectory, currentDirectory, startWriteTime)
    
  console.log('Time needed to write all files: ' + (Date.now() - startWriteTime)/1000 + ' sec')
}