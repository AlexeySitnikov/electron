import { useState } from 'react'
import style from './style.module.css'
import { Tabs } from '../Tabs/Tabs'

export function Main({ selectedFiles }) {
  const [analyzedFiles, setAnalyzedFiles] = useState(null)

  const makeFetch = async (requestString) => {
    const responce = await fetch(`http://localhost:3333/readFiles/${requestString}`, {
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
    const responce = await makeFetch(requestString)
    setAnalyzedFiles(responce.responce)
  }

  if (analyzedFiles) {
    return (
      <Tabs
        analyzedFiles={analyzedFiles}
        setAnalyzedFiles={setAnalyzedFiles}
      />
    )
  }

  return (
    <div className={style.mainPage}>

      <div className={style.callModalWindowsStyle}>
        <button className={style.button} type="button" onClick={onClickButtonHandler}>
          Read files
        </button>
      </div>

    </div>
  )
}
