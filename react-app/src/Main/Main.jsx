import { useState } from 'react'
import style from './style.module.css'
import { Tabs } from '../Tabs/Tabs'
import { useModalWindow } from '../CustomHooks/useModalWindow'
import { fetchForInitialReadFiles } from '../constrains/fetchForInitialReadFiles'

export function Main({ selectedFiles, setSelectedFiles }) {
  const [analyzedFiles, setAnalyzedFiles] = useState(null)
  const {
    isModalOpen, content, closeModalClickHandler, openModalClickHandler,
  } = useModalWindow()

  const arrayOfFilesPaths = Array.from(selectedFiles).map((el) => el.path)

  const onClickReadButtonHandler = async () => {
    let requestString = ''
    arrayOfFilesPaths.forEach((element, index) => {
      if (index < arrayOfFilesPaths.length - 1) {
        requestString += `name:${element
          .replaceAll('\\', 'temp_symbol')
          .replaceAll(' ', 'temp_space')}temp_dividerdeleteFirstTwoStrings:${element.deleteFirstTwoStrings}temp_divider`
      } else {
        requestString += `name:${element
          .replaceAll('\\', 'temp_symbol')
          .replaceAll(' ', 'temp_space')}temp_dividerdeleteFirstTwoStrings:${element.deleteFirstTwoStrings}`
      }
    })
    const responce = await fetchForInitialReadFiles(requestString)
    setAnalyzedFiles(responce.responce)
  }

  if (analyzedFiles) {
    return (
      <Tabs
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
        analyzedFiles={analyzedFiles}
        setAnalyzedFiles={setAnalyzedFiles}
        isModalOpen={isModalOpen}
        content={content}
        closeModalClickHandler={closeModalClickHandler}
        openModalClickHandler={openModalClickHandler}
      />
    )
  }

  return (
    <div className={style.mainPage}>
      <div className={style.callModalWindowsStyle}>
        <button className={style.button} type="button" onClick={onClickReadButtonHandler}>
          Read files
        </button>
      </div>
    </div>
  )
}
