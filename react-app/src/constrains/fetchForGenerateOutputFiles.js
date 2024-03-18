export async function fetchForGenerateOutputFiles(sortedFiles) {
  let requestString = ''
  sortedFiles.forEach((element, index) => {
    if (index < sortedFiles.length - 1) {
      requestString += `${element.name
        .replaceAll('\\', 'temp_symbol')
        .replaceAll(' ', 'temp_space')}temp_divider`
    } else {
      requestString += `${element.name
        .replaceAll('\\', 'temp_symbol')
        .replaceAll(' ', 'temp_space')}`
    }
  })

  console.log(requestString)

  // const responce = await fetch(`http://localhost:3333/generateOutputFiles/${requestString}`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // })
  // return responce.json()
}
