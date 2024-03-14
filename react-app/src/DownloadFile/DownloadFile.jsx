import { useRef } from 'react'
import filePickerLogo from '../Pics/1.png'
import style from './style.module.css'

export function DownloadFile({ setSelectedFiles }) {
  const pickerRef = useRef(null)

  const pickFileHandler = () => {
    pickerRef.current.click()
  }

  const clickHandlerFileChange = (e) => {
    const arrayOfFilesPaths = Array.from(e.target.files).map((el) => el.path)
    setSelectedFiles(arrayOfFilesPaths)
  }

  return (
    <div className={style.container}>
      <div>
        <button type="button" onClick={pickFileHandler}>
          <img className={style.filePicker} src={filePickerLogo} alt="filePickerLogo" />
        </button>
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
