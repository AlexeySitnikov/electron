const write1DE = (writerEx, line) => {
  const lineToWrite = line.trim().replace(/\s\s+/g, ' ').split(' ')[1]// [0] - z //[1] - E
    ? line.trim().replace(/\s\s+/g, ' ').split(' ')[1]// [0] - z //[1] - E
    : ''
  writerEx.write(`${lineToWrite}\n`)
}

module.exports = write1DE
