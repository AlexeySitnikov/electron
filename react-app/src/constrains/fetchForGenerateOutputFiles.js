export async function fetchForGenerateOutputFiles(sortedFiles) {
  const preparedJSONForRequest = [sortedFiles.lenght]
  for (let i = 0; i < sortedFiles.length; i += 1) {
    preparedJSONForRequest[i] = {
      name: sortedFiles[i].name,
      deleteFirstTwoStrings: sortedFiles[i].deleteFirstTwoStrings,
    }
  }
  let requestString = ''
  sortedFiles.forEach((element, index) => {
    if (index < sortedFiles.length - 1) {
      requestString += `name:${element.name
        .replaceAll('\\', 'temp_symbol')
        .replaceAll(' ', 'temp_space')}temp_dividerdeleteFirstTwoStrings:${element.deleteFirstTwoStrings}temp_divider`
    } else {
      requestString += `name:${element.name
        .replaceAll('\\', 'temp_symbol')
        .replaceAll(' ', 'temp_space')}temp_dividerdeleteFirstTwoStrings:${element.deleteFirstTwoStrings}`
    }
  })

  const responce = await fetch(`http://localhost:3333/generateOutputFiles/${requestString}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return responce
}
