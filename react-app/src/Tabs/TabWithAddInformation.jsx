import { Button } from '../Buttons/Button'
import style from './style.module.css'

export function TabWithAddInformation({ addInformation, analyzedFiles, setSelectedFiles }) {
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

  return (
    <>
      <div className={style.Tabs}>
        <div className={style.additionalInformation}>
          Add this information into the files for TraceWin?
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
