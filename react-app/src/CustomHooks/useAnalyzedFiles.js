import { useState } from 'react'

export const useAnalyzedFiles = () => {
  const [analyzedFiles, setAnalyzedFiles] = useState(null)

  return { analyzedFiles, setAnalyzedFiles }
}
