import { useState } from 'react'
import { ErrorPage } from '../ErrorPage/ErrorPage'

export const useModalWindow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [content, setContent] = useState(null)

  const closeModalClickHandler = () => {
    setIsModalOpen(false)
  }

  const openModalClickHandler = (id) => {
    if (id.status === 'error') {
      setIsModalOpen(true)
      setContent(<ErrorPage id={id} />)
    }
  }

  return {
    isModalOpen, setIsModalOpen, content, setContent, closeModalClickHandler, openModalClickHandler,
  }
}
