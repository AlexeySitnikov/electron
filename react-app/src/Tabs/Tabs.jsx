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
    const borders = await analizeBorders(selectedFiles)
    const addInformation = `${String(borders.Zmax - borders.Zmin)} ${String((borders.Zmax - borders.Zmin) / 1000)}
    ${String(borders.Xmax - borders.Xmin)} ${String(borders.Xmin / 1000)} ${String(borders.Xmax / 1000)}
    ${String(borders.Ymax - borders.Ymin)} ${String(borders.Ymin / 1000)} ${String(borders.Ymax / 1000)}
    1\n`

    console.log(addInformation)
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
