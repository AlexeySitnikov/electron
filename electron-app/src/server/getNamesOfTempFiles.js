const getNamesOfTempFiles = (files, tempDirectory) => {
  const files1DNames = ['E_out_temp']
  const fileNames = ['Ex_out_temp', 'Ey_out_temp', 'Ez_out_temp']
  const Ex = []
  const Ey = []
  const Ez = []
  const E = []
  for (let index = 0; index < files.length; index += 1) {
    if (files[index].type === '3D') {
      Ex.push(`${tempDirectory}\\${`${fileNames[0]}_${index + 1}.txt`}`)
      Ey.push(`${tempDirectory}\\${`${fileNames[1]}_${index + 1}.txt`}`)
      Ez.push(`${tempDirectory}\\${`${fileNames[2]}_${index + 1}.txt`}`)
    } else if (files[index].type === '1D') {
      E.push(`${tempDirectory}\\${`${files1DNames[0]}_${index + 1}.txt`}`)
    }
  }

  return ({
    Ex, Ey, Ez, E,
  })
}

module.exports = getNamesOfTempFiles
