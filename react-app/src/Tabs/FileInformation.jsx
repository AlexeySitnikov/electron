import { FileInformationData } from './FileInformationData'
import { FileInformationHeader } from './FileInformationHeader'

export function FileInformation({
  el, analyzedFiles, setAnalyzedFiles,
}) {
  return (
    <div>
      <FileInformationHeader
        el={el}
        analyzedFiles={analyzedFiles}
        setAnalyzedFiles={setAnalyzedFiles}
      />
      <br />
      <FileInformationData
        el={el}
      />
    </div>
  )
}
