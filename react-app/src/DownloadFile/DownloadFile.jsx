import { useRef } from 'react'
import style from './style.module.css'

export function DownloadFile({ setSelectedFiles }) {
  const pickerRef = useRef(null)

  const pickFileHandler = () => {
    pickerRef.current.click()
  }

  const clickHandlerFileChange = (e) => {
    setSelectedFiles(e.target.files)
  }

  return (
    <div className={style.container}>
      <div>
        <input type="file" onChange={clickHandlerFileChange} ref={pickerRef} className={style.hiddenInput} multiple />
      </div>
      <br />
      <div>
        <button className={style.button} type="button" onClick={pickFileHandler}>
          Upload files
        </button>
      </div>
    </div>
  )
}
