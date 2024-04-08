const writeExEyEz = (writerEx, writerEy, writerEz, line) => {
  writerEx.write(`${line.trim().replace(/\s\s+/g, ' ').split(' ')[3]}\n`)// [0] - x //[3] - Ex
  writerEy.write(`${line.trim().replace(/\s\s+/g, ' ').split(' ')[5]}\n`)// [1] - y //[5] - Ey
  writerEz.write(`${line.trim().replace(/\s\s+/g, ' ').split(' ')[7]}\n`)// [2] - z //[7] - Ez
}

module.exports = writeExEyEz
