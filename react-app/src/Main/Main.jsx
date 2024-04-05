import { useState } from 'react'
import style from './style.module.css'
import { Tabs } from '../Tabs/Tabs'
import { useModalWindow } from '../CustomHooks/useModalWindow'
import { sniffFiles } from '../constrains/sniffFiles'
import { Button } from '../Buttons/Button'

export function Main({ selectedFiles, setSelectedFiles }) {
  const [analyzedFiles, setAnalyzedFiles] = useState(null)
  const {
    isModalOpen, content, closeModalClickHandler, openModalClickHandler,
  } = useModalWindow()

  const onClickReadButtonHandler = async () => {
    setAnalyzedFiles(await sniffFiles({ selectedFiles }))
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
        <Button
          onClickFunction={onClickReadButtonHandler}
          buttonName="Read files"
        />
      </div>
    </div>
  )
}
