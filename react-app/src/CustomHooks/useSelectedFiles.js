import { useState } from 'react'

export const useSelectedFiles = () => {
  const [selectedFiles, setSelectedFiles] = useState(null)

  return { selectedFiles, setSelectedFiles }
}
