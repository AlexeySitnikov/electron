import { useState } from 'react'

import { hasFilesOrderDublicates } from '../constrains/hasFilesOrderDublicates'
import { Modal } from '../Modal/Modal'
import { TabsContainer } from './TabsContainer'
import { analizeBorders } from '../constrains/analizeBorders'
import { TabWithAddInformation } from './TabWithAddInformation'
import { makeFileObjects } from '../constrains/makeFileObjects'
import { makeBordersString } from '../constrains/makeBordersString'
import { Button } from '../Buttons/Button'

export function Tabs({
  selectedFiles, setSelectedFiles, analyzedFiles, setAnalyzedFiles,
  isModalOpen, content, closeModalClickHandler, openModalClickHandler,
}) {
  const [activeTab, setActiveTab] = useState('tab0')
  const [addInformation, setAddInformation] = useState('')

  const onClickNextButtonHandler = async () => {
    if (!hasFilesOrderDublicates({ analyzedFiles })) {
      const borders = await analizeBorders(makeFileObjects({ selectedFiles, analyzedFiles }))
      makeBordersString({ setAddInformation, borders })
    } else {
      const id = {
        status: 'error',
        message: 'Files order is incorrect',
      }
      openModalClickHandler(id)
    }
  }

  if (addInformation !== '') {
    return (
      <TabWithAddInformation
        addInformation={addInformation}
        analyzedFiles={analyzedFiles}
        setSelectedFiles={setSelectedFiles}
      />
    )
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
      <Button
        buttonName="Analyze min and max values"
        onClickFunction={onClickNextButtonHandler}
      />
    </>
  )
}
