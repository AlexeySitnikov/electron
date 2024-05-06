import { useState } from 'react'
import './App.css'
import { Header } from './Header/Header'
import style from './style.module.css'
import { Main } from './Main/Main'
import { Reset } from './Reset/Reset'
import { Modal } from './Modal/Modal'
import { useModalWindow } from './CustomHooks/useModalWindow'

function App() {
  const [selectedFiles, setSelectedFiles] = useState(null)
  const {
    isModalOpen, content, closeModalClickHandler,
  } = useModalWindow()

  if (selectedFiles && selectedFiles.length > 0) {
    return (
      <div className={style.mainPage}>
        <Reset setSelectedFiles={setSelectedFiles} />
        <Main selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} />
      </div>
    )
  }

  return (
    <div className={style.mainPage}>
      <Modal isOpen={isModalOpen} closeModal={closeModalClickHandler}>
        {content}
      </Modal>
      <Header setSelectedFiles={setSelectedFiles} />
    </div>
  )
}

export default App
