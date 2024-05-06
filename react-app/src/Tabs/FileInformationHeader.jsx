import { useRef } from 'react'
import style from './style.module.css'

export function FileInformationHeader({
  el, analyzedFiles, setAnalyzedFiles, stringsToSniff, setStringsToSniff,
}) {
  const currentFiles = analyzedFiles

  const inputRefFilesOrder = useRef(null)
  const inputRefLinesToBeDeleted = useRef(null)

  const onChangeOrderHandler = () => {
    const currentIndex = currentFiles.findIndex((element) => (element.name === el.name))
    if (currentIndex > -1) {
      currentFiles[currentIndex].fileOrder = Number(inputRefFilesOrder.current.value)
    }
    setAnalyzedFiles([...currentFiles])
  }

  const onChangeLinesToBeDeletedHandler = () => {
    const currentIndex = currentFiles.findIndex((element) => (element.name === el.name))
    if (currentIndex > -1) {
      currentFiles[currentIndex]
        .linesToBeDeleted = Number(inputRefLinesToBeDeleted.current.value)
    }
    setAnalyzedFiles([...currentFiles])
  }

  return (
    <div>
      <p>{`File name: ${el.name}`}</p>
      <div>
        <label htmlFor="fileOrder">
          Is it correct file order?
          <input
            className={style.in}
            type="number"
            id="fileOrder"
            name="fileOrder"
            min="1"
            max="100"
            value={el.fileOrder}
            onChange={onChangeOrderHandler}
            ref={inputRefFilesOrder}
            lang="en-US"
          />
        </label>
      </div>
      <div>
        <label htmlFor="sniffLinesFromFiles">
          How many lines preload from files
          <input
            className={style.in}
            type="number"
            id="sniffLinesFromFiles"
            name="sniffLinesFromFiles"
            min="1"
            max="100"
            value={stringsToSniff}
            onChange={(e) => {
              setStringsToSniff(Number(e.target.value))
            }}
            lang="en-US"
          />
        </label>
      </div>
      <fieldset>
        <legend>How many lines should be deleted</legend>
        <label htmlFor="Count">
          Count
          <input
            className={style.in}
            type="number"
            id="Count"
            name="Count"
            min="0"
            max="100"
            value={el.linesToBeDeleted}
            onChange={onChangeLinesToBeDeletedHandler}
            ref={inputRefLinesToBeDeleted}
            lang="en-US"
          />
        </label>

      </fieldset>
    </div>
  )
}
