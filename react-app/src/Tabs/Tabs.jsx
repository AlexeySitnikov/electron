import { useState } from 'react'

import { isFilesOrderCorrect } from '../constrains/isFilesOrderCorrect'
import { sortFilesOrder } from '../constrains/sortFilesOrder'
import { Modal } from '../Modal/Modal'
import { TabsContainer } from './TabsContainer'
import { NextButton } from './NextButton'
import { analizeBorders } from '../constrains/analizeBorders'

export function Tabs({
  selectedFiles, analyzedFiles, setAnalyzedFiles,
  isModalOpen, content, closeModalClickHandler,
}) {
  const [activeTab, setActiveTab] = useState('tab0')

  const onClickNextButtonHandler = async () => {
    const a = await analizeBorders(selectedFiles)
    console.log(a)
    console.log(isFilesOrderCorrect({ analyzedFiles }))
    console.log(sortFilesOrder({ analyzedFiles }))
  }

  return (
    <>
      <Modal isOpen={isModalOpen} closeModal={closeModalClickHandler}>
        {content}
      </Modal>
      <TabsContainer
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        analyzedFiles={analyzedFiles}
        setAnalyzedFiles={setAnalyzedFiles}
      />
      <NextButton
        onClickNextButtonHandler={onClickNextButtonHandler}
      />
    </>
  )
}
