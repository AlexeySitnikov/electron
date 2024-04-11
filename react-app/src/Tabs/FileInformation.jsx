import { FileInformationData } from './FileInformationData'
import { FileInformationHeader } from './FileInformationHeader'

export function FileInformation({
  el, analyzedFiles, setAnalyzedFiles, stringsToSniff, setStringsToSniff,
}) {
  return (
    <div>
      <FileInformationHeader
        el={el}
        analyzedFiles={analyzedFiles}
        setAnalyzedFiles={setAnalyzedFiles}
        stringsToSniff={stringsToSniff}
        setStringsToSniff={setStringsToSniff}
      />
      <br />
      <FileInformationData
        el={el}
      />
    </div>
  )
}
