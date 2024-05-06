import { useEffect, useState } from 'react'
import style from './style.module.css'
import { Tabs } from '../Tabs/Tabs'
import { useModalWindow } from '../CustomHooks/useModalWindow'
import { sniffFiles } from '../constrains/sniffFiles'
import { Loader } from '../Loader/Loader'

export function Main({ selectedFiles, setSelectedFiles }) {
  const [analyzedFiles, setAnalyzedFiles] = useState(null)
  const {
    isModalOpen, content, closeModalClickHandler, openModalClickHandler,
  } = useModalWindow()
  const [stringsToSniff, setStringsToSniff] = useState(5)

  useEffect(() => {
    async function functionToSniffFiles() {
      const responce = await sniffFiles({ selectedFiles, stringsToSniff })
      setAnalyzedFiles(responce)
    }
    functionToSniffFiles()
  }, [stringsToSniff])

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
        stringsToSniff={stringsToSniff}
        setStringsToSniff={setStringsToSniff}
      />
    )
  }

  return (
    <div className={style.mainPage}>
      <Loader />
    </div>
  )
}
