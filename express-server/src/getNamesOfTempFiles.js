export function getNamesOfTempFiles(files, tempDirectory){
  const fileNames = ['Ex_out_temp', 'Ey_out_temp', 'Ez_out_temp']
  const Ex = [], Ey = [], Ez = []
  for (let index = 0; index < files.length; index += 1) {
    Ex.push(`${tempDirectory}\\${fileNames[0] + '_' + (index + 1) + '.txt'}`)
    Ey.push(`${tempDirectory}\\${fileNames[1] + '_' + (index + 1) + '.txt'}`)
    Ez.push(`${tempDirectory}\\${fileNames[2] + '_' + (index + 1) + '.txt'}`)
  }
  return ({Ex, Ey, Ez})
}