import { Button } from '../Buttons/Button'
import style from './style.module.css'

export function TabWithAddInformation({ el }) {
  return (
    <>
      <div className={style.Tabs}>
        <div className={style.additionalInformation}>
          Add this information into the files for TraceWin?
        </div>
        <br />
        <div className={style.additionalInformation}>
          {el.split('\n').map((substring) => (
            <div key={crypto.randomUUID()}>{substring}</div>
          ))}
        </div>
      </div>
      <div>
        <Button
          buttonName="Prev"
        />
        <Button
          buttonName="Make output files"
        />
      </div>
    </>
  )
}
