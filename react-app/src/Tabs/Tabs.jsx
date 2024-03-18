import { useState } from 'react'
import { TabContent } from './TabContent'
import { TabNavItem } from './TabNavItem'
import { FileInformation } from './FileInformation'
import { isFilesOrderCorrect } from '../constrains/isFilesOrderCorrect'
import { sortFilesOrder } from '../constrains/sortFilesOrder'
import { Modal } from '../Modal/Modal'
import { fetchForGenerateOutputFiles } from '../constrains/fetchForGenerateOutputFiles'
import style from './style.module.css'

export function Tabs({
  analyzedFiles, setAnalyzedFiles,
  isModalOpen, content, closeModalClickHandler, openModalClickHandler,
}) {
  const currentFiles = analyzedFiles
  const [activeTab, setActiveTab] = useState('tab0')

  const onClickNextButtonHandler = () => {
    if (isFilesOrderCorrect({ analyzedFiles })) {
      fetchForGenerateOutputFiles(sortFilesOrder({ analyzedFiles }))
    } else {
      const idForModalWindow = {
        status: 'error',
        message: 'Files have a dublicate order',
      }
      openModalClickHandler(idForModalWindow)
    }
  }

  return (
    <>
      <Modal isOpen={isModalOpen} closeModal={closeModalClickHandler}>
        {content}
      </Modal>
      <div className={style.Tabs}>
        <ul className={style.nav}>
          {currentFiles.map((_, index) => (
            <TabNavItem
              title={`File ${index + 1}`}
              id={`tab${index}`}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              key={crypto.randomUUID()}
            />
          ))}
        </ul>

        <div className={style.outlet}>
          {currentFiles.map((el, index) => (
            <TabContent
              id={`tab${index}`}
              activeTab={activeTab}
              key={crypto.randomUUID()}
            >
              <FileInformation
                el={el}
                fileCount={currentFiles.length}
                key={crypto.randomUUID()}
                analyzedFiles={analyzedFiles}
                setAnalyzedFiles={setAnalyzedFiles}
              />
            </TabContent>
          ))}
        </div>
        <div className={style.buttonContainer}>
          <button className={style.button} type="button" onClick={onClickNextButtonHandler}>
            Next
          </button>
        </div>
      </div>
    </>
  )
}
