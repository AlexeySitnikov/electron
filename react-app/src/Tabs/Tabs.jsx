/* eslint-disable no-nested-ternary */
import { useState } from 'react'

import { hasFilesOrderDublicates } from '../constrains/hasFilesOrderDublicates'
import { Modal } from '../Modal/Modal'
import { TabsContainer } from './TabsContainer'
import { analizeBorders } from '../constrains/analizeBorders'
import { TabWithAddInformation } from './TabWithAddInformation'
import { makeFileObjects } from '../constrains/makeFileObjects'
import { makeBordersString } from '../constrains/makeBordersString'
import { Button } from '../Buttons/Button'
import { ProgressBar } from '../ProgressBar/ProgressBar'

export function Tabs({
  selectedFiles, setSelectedFiles, analyzedFiles, setAnalyzedFiles,
  isModalOpen, content, closeModalClickHandler, openModalClickHandler,
  stringsToSniff, setStringsToSniff,
}) {
  const [activeTab, setActiveTab] = useState('tab0')
  const [addInformation, setAddInformation] = useState('')
  const [preReadingPercentage, setPreReadingPercentage] = useState(0)
  const [readingPercentage, setReadingPercentage] = useState(0)
  const [preReading, setPreReading] = useState(false)
  const [reading, setReading] = useState(false)

  const onClickNextButtonHandler = async () => {
    if (!hasFilesOrderDublicates({ analyzedFiles })) {
      const borders = await analizeBorders(makeFileObjects(
        { selectedFiles, analyzedFiles },
      ), {
        setPreReadingPercentage, setReadingPercentage, setPreReading, setReading,
      })
      setPreReading(false)
      setReading(false)
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

  if (preReading) {
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
          stringsToSniff={stringsToSniff}
          setStringsToSniff={setStringsToSniff}
        />
        <ProgressBar name="Pre-reading" filled={preReadingPercentage} />
      </>
    )
  }

  if (reading) {
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
          stringsToSniff={stringsToSniff}
          setStringsToSniff={setStringsToSniff}
        />
        <ProgressBar name="Reading" filled={readingPercentage} />
      </>
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
        stringsToSniff={stringsToSniff}
        setStringsToSniff={setStringsToSniff}
      />

      <Button
        buttonName="Analyze min and max values"
        onClickFunction={onClickNextButtonHandler}
      />
    </>
  )
}
