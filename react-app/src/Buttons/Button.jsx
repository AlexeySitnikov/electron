import style from './style.module.css'

export function Button({ buttonName, onClickFunction }) {
  return (
    <div className={style.buttonContainer}>
      <button className={style.button} type="button" onClick={onClickFunction}>
        {buttonName || 'Button'}
      </button>
    </div>
  )
}
