import { useState } from 'react'

export const useStringToSniff = (count) => {
  const [stringsToSniff, setStringsToSniff] = useState(count)

  return { stringsToSniff, setStringsToSniff }
}
