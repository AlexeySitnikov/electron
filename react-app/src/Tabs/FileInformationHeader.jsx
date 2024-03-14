import { useRef } from 'react'
import style from './style.module.css'

export function FileInformationHeader({
  el, analyzedFiles, setAnalyzedFiles,
}) {
  const currentFiles = analyzedFiles

  const inputRef = useRef(null)

  const onChangeOrderHandler = () => {
    console.log(inputRef.current.value)
  }

  const onChangeDeleteCheckHandler = () => {
    const currentIndex = currentFiles.findIndex((element) => (element.fileOrder === el.fileOrder))
    if (currentIndex > -1) {
      currentFiles[currentIndex]
        .deleteFirstTwoStrings = !currentFiles[currentIndex].deleteFirstTwoStrings
    }
    setAnalyzedFiles(currentFiles)
  }

  return (
    <div>
      <p>{`File name: ${el.name}`}</p>
      <label htmlFor="fileOrder">
        Is it correct file order?
        <input
          className={style.in}
          type="number"
          id="fileOrder"
          name="fileOrder"
          min="1"
          // max={`${currentFiles.length}`}
          max="100"
          value={el.fileOrder}
          onChange={onChangeOrderHandler}
          ref={inputRef}
          lang="en-US"
        />
      </label>
      <fieldset onChange={onChangeDeleteCheckHandler}>
        <legend>Should first two lines be deleted?</legend>
        <div>
          <label htmlFor="yes">
            Yes
            <input
              type="radio"
              id="yes"
              name="checkForDeleteFirstTwoLines"
              value="yes"
              defaultChecked={el.deleteFirstTwoStrings}
            />
          </label>
        </div>
        <div>
          <label htmlFor="no">
            No
            <input
              type="radio"
              id="no"
              name="checkForDeleteFirstTwoLines"
              value="no"
              defaultChecked={!el.deleteFirstTwoStrings}
            />
          </label>
        </div>
      </fieldset>
    </div>
  )
}
