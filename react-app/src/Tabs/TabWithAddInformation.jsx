import { useEffect, useState } from 'react'
import { Button } from '../Buttons/Button'
import style from './style.module.css'

export function TabWithAddInformation({ addInformation, analyzedFiles, setSelectedFiles }) {
  const [addInformationForTraceWin, setAddInformationForTraceWin] = useState(true)
  const [eOrBField, setEOrBField] = useState(true)
  let body = {}

  const makeFetch = async () => {
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
    } else {
      console.log(res)
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
      body = {
        files: [...analyzedFiles.map((element) => ({
          name: element.path,
          linesToBeDeleted: element.linesToBeDeleted,
        }))],
        addInformation,
        field: eOrBField ? 'EField' : 'BField',
      }
    } else {
      body = {
        files: [...analyzedFiles.map((element) => ({
          name: element.path,
          linesToBeDeleted: element.linesToBeDeleted,
        }))],
        field: eOrBField ? 'EField' : 'BField',
      }
    }
  }, [addInformationForTraceWin, eOrBField])

  return (
    <>
      <div className={style.Tabs}>
        <div className={style.additionalInformation}>
          Add this information into the files for TraceWin?
        </div>
        <br />
        <div className={style.additionalInformationCheckBox}>
          <p>
            <label htmlFor="Yes">
              <input type="checkbox" id="Yes" checked={addInformationForTraceWin} onChange={onClickAddInfoForTraceWinHandler} />
              Yes
            </label>
          </p>
          <p>
            <label htmlFor="No">
              <input type="checkbox" id="No" checked={!addInformationForTraceWin} onChange={onClickAddInfoForTraceWinHandler} />
              No
            </label>
          </p>
        </div>
        <br />
        <div className={style.EOrBFieldCheckBox}>
          <p>
            <label htmlFor="EField">
              <input type="checkbox" checked={eOrBField} id="EField" onChange={onClickEOrBFieldHandler} />
              E field
            </label>
          </p>
          <p>
            <label htmlFor="BField">
              <input type="checkbox" checked={!eOrBField} id="BField" onChange={onClickEOrBFieldHandler} />
              B field
            </label>
          </p>
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
