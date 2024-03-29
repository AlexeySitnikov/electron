import { useState } from 'react'
import { TabContent } from './TabContent'
import { TabNavItem } from './TabNavItem'
import { FileInformation } from './FileInformation'
import { isFilesOrderCorrect } from '../constrains/isFilesOrderCorrect'
import { sortFilesOrder } from '../constrains/sortFilesOrder'
import { Modal } from '../Modal/Modal'
import style from './style.module.css'
// import { fetchForWhatToAddToOutputFiles } from '../constrains/fetchForWhatToAddToOutputFiles'
import { fetchForGenerateOutputFiles } from '../constrains/fetchForGenerateOutputFiles'

export function Tabs({
  selectedFiles, setSelectedFiles, analyzedFiles, setAnalyzedFiles,
  isModalOpen, content, closeModalClickHandler, openModalClickHandler,
}) {
  const currentFiles = analyzedFiles
  const [activeTab, setActiveTab] = useState('tab0')

  const onClickNextButtonHandler = async () => {
    if (isFilesOrderCorrect({ analyzedFiles })) {
      // const responce = await fetchForWhatToAddToOutputFiles(sortFilesOrder({ analyzedFiles }))
      const responce = await fetchForGenerateOutputFiles(sortFilesOrder({ analyzedFiles }))
      if (responce.status === 200) {
        setSelectedFiles(null)
      }
    } else {
      const idForModalWindow = {
        status: 'error',
        message: 'Files have a dublicate order',
      }
      openModalClickHandler(idForModalWindow)
    }
  }

  const a = async () => {
    // const ar = Array.from(selectedFiles).map((file) => (
    //   {
    //     lastModified: file.lastModified,
    //     lastModifiedDate: file.lastModifiedDate,
    //     name: file.name,
    //     path: file.path,
    //     size: file.size,
    //     type: file.type,
    //     webkitRelativePath: file.webkitRelativePath,

    //   }
    // ))
    console.log(selectedFiles)
    // // const reader = new TxtReader()
    // // reader.sniffLines(ar[0], 10).then((res) => {
    // //   console.log(res.result)
    // // }).catch((er) => { console.log(er) })
    // await fetch('http://localhost:3333/asd/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(ar),
    // })
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
          <button className={style.button} type="button" onClick={a}>
            Next1
          </button>
        </div>
      </div>
    </>
  )
}
