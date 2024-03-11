import { useState } from 'react'
import style from './style.module.css'
import { Tabs } from '../Tabs/Tabs'

export function Main({ selectedFiles }) {
  const [files, setFiles] = useState(null)

  const makeFetch = async (requestString) => {
    const responce = await fetch(`http://localhost:3333/${requestString}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return responce.json()
  }

  const onClickButtonHandler = async () => {
    let requestString = ''
    selectedFiles.forEach((element, index) => {
      if (index < selectedFiles.length - 1) {
        requestString += `${element
          .replaceAll('\\', 'temp_symbol')
          .replaceAll(' ', 'temp_space')}temp_divider`
      } else {
        requestString += `${element
          .replaceAll('\\', 'temp_symbol')
          .replaceAll(' ', 'temp_space')}`
      }
    })

    setFiles((await makeFetch(requestString)).files)
  }

  if (files) {
    return (
      <Tabs files={files} />
    )
  }

  return (
    <div className={style.mainPage}>

      <div className={style.callModalWindowsStyle}>
        <button className={style.button} type="button" onClick={onClickButtonHandler}>
          Upload files
        </button>
      </div>

    </div>
  )
}
