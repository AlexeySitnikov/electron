export async function fetchForInitialReadFiles(requestString) {
  const responce = await fetch(`http://localhost:3333/readFiles/${requestString}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return responce.json()
}
