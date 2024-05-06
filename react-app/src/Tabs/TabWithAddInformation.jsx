import { useEffect, useState } from 'react'
import { Button } from '../Buttons/Button'
import style from './style.module.css'
import { ProgressBar } from '../ProgressBar/ProgressBar'

export function TabWithAddInformation({ addInformation, analyzedFiles, setSelectedFiles }) {
  const [addInformationForTraceWin, setAddInformationForTraceWin] = useState(true)
  const [eOrBField, setEOrBField] = useState(true)
  const [loader, setLoader] = useState(false)
  const [percentage, setPercentage] = useState(0)
  const [url] = useState('ws://localhost:3334')
  const [wsConnection, setWsConnection] = useState(null)
  const [body, setBody] = useState({})

  const makeWebSocketFetch = () => {
    setLoader(true)
    wsConnection.send(JSON.stringify(body))
  }

  useEffect(() => {
    setWsConnection(new WebSocket(url))
  }, [url])

  useEffect(() => {
    if (wsConnection) {
      wsConnection.onmessage = (message) => {
        if (parseFloat(message.data)) {
          setPercentage(parseFloat(message.data))
        } else if (message.data === '"done"') {
          alert('All done')
          setLoader(false)
          setSelectedFiles(null)
        } else {
          console.log(message.data)
        }
      }
    }
  }, [wsConnection])

  // const makeFetch = async () => {
  //   setLoader(true)
  //   const res = await fetch('http://localhost:3333/asd/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(body),
  //   })
  //   if (res.status === 200) {
  //     setLoader(false)
  //     alert('All done')
  //     setSelectedFiles(null)
  //   } else {
  //     alert('Some error has been happened')
  //   }
  // }

  const onClickAddInfoForTraceWinHandler = () => {
    setAddInformationForTraceWin(!addInformationForTraceWin)
  }

  const onClickEOrBFieldHandler = () => {
    setEOrBField(!eOrBField)
  }

  useEffect(() => {
    if (addInformationForTraceWin) {
      setBody({
        files: [...analyzedFiles.map((element) => ({
          name: element.path,
          linesToBeDeleted: element.linesToBeDeleted,
          type: element.type,
        }))],
        addInformation,
        field: eOrBField ? 'EField' : 'BField',
      })
    } else {
      setBody({
        files: [...analyzedFiles.map((element) => ({
          name: element.path,
          linesToBeDeleted: element.linesToBeDeleted,
          type: element.type,
        }))],
        field: eOrBField ? 'EField' : 'BField',
      })
    }
  }, [addInformationForTraceWin, eOrBField])

  if (loader) {
    return (
      <>
        <br />
        <ProgressBar
          name="Reading files"
          filled={percentage}
        />
      </>
    )
  }

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
        {wsConnection
          ? (
            <Button
              buttonName="Make output files"
              onClickFunction={makeWebSocketFetch}
            />
          ) : null}
      </div>

    </>
  )
}
