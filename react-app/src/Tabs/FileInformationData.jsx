export function FileInformationData({ el }) {
  return (
    Array.isArray(el.data)
      ? (el.data.map((string) => (
        <p key={crypto.randomUUID()}>{string}</p>
      )))
      : <p>{el.data}</p>
  )
}
