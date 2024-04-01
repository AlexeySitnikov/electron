import style from './style.module.css'

export function NextButton({ onClickNextButtonHandler }) {
  return (
    <div className={style.buttonContainer}>
      <button className={style.button} type="button" onClick={onClickNextButtonHandler}>
        Next
      </button>
    </div>
  )
}
