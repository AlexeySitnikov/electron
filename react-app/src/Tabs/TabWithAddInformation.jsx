/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react'
import { Button } from '../Buttons/Button'
import style from './style.module.css'

export function TabWithAddInformation({ addInformation, analyzedFiles, setSelectedFiles }) {
  const [addInformationForTraceWin, setAddInformationForTraceWin] = useState(true)
  const [eOrBField, setEOrBField] = useState(true)

  const makeFetch = async () => {
    const body = {
      files: [...analyzedFiles.map((element) => ({
        name: element.path,
        deleteFirstTwoStrings: element.deleteFirstTwoStrings,
      }))],
      addInformation,
    }
    const res = await fetch('http://localhost:3333/asd/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    if (res.status === 200) {
      alert('All done')
      setSelectedFiles(null)
    }
  }

  const onClickAddInfoForTraceWinHandler = () => {
    setAddInformationForTraceWin(!addInformationForTraceWin)
  }

  const onClickEOrBFieldHandler = () => {
    setEOrBField(!eOrBField)
  }

  useEffect(() => {
    if (addInformationForTraceWin) {
      const body = {
        files: [...analyzedFiles.map((element) => ({
          name: element.path,
          deleteFirstTwoStrings: element.deleteFirstTwoStrings,
        }))],
        addInformation,
      }
      console.log(body)
    } else {
      const body = {
        files: [...analyzedFiles.map((element) => ({
          name: element.path,
          deleteFirstTwoStrings: element.deleteFirstTwoStrings,
        }))],
      }
      console.log(body)
    }
  }, [addInformationForTraceWin])

  return (
    <>
      <div className={style.Tabs}>
        <div className={style.additionalInformation}>
          Add this information into the files for TraceWin?
        </div>
        <br />
        <div>
          <div>
            <div>
              <input type="checkbox" id="Yes" checked={addInformationForTraceWin} onChange={onClickAddInfoForTraceWinHandler} />
              <label htmlFor="Yes">Yes</label>
            </div>
            <div>
              <input type="checkbox" id="No" checked={!addInformationForTraceWin} onChange={onClickAddInfoForTraceWinHandler} />
              <label htmlFor="No">No</label>
            </div>
          </div>
          <input directory="" webkitdirectory="" type="file" onChange={(e) => { console.log(e) }} />
        </div>
        <br />
        <div>
          <input type="checkbox" checked={eOrBField} onChange={onClickEOrBFieldHandler} />
          <span>E field</span>
          <input type="checkbox" checked={!eOrBField} onChange={onClickEOrBFieldHandler} />
          <span>B field</span>
        </div>
        <br />
        <div className={style.additionalInformation}>
          {addInformation.split('\n').map((substring) => (
            <div key={crypto.randomUUID()}>{substring}</div>
          ))}
        </div>
      </div>

      <div className={style.finalButtons}>
        {/* <Button
          buttonName="Prev"
        /> */}
        <Button
          buttonName="Make output files"
          onClickFunction={makeFetch}
        />
      </div>

    </>
  )
}
