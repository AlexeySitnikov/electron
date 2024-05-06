import { useState } from 'react'
import { ErrorPage } from '../ErrorPage/ErrorPage'
import { DonePage } from '../DonePage/DonePage'

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
    } else if (id.status === 'done') {
      setContent(<DonePage id={id} />)
    }
  }

  return {
    isModalOpen, setIsModalOpen, content, setContent, closeModalClickHandler, openModalClickHandler,
  }
}
