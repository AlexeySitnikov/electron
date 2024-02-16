import style from './style.module.css'

export function Main({ selectedFiles }) {
  const onClickButtonHandler = async () => {
    let requestString = ''
    selectedFiles.forEach((element, index) => {
      if (index < selectedFiles.length - 1) {
        requestString += `${element.replaceAll('\\', 'temp_symbol').replaceAll(' ', 'temp_space')}temp_divider`
      } else {
        requestString += `${element.replaceAll('\\', 'temp_symbol').replaceAll(' ', 'temp_space')}`
      }
    })
    // console.log(requestString)
    await fetch(`http://localhost:3333/${requestString}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  return (
    <div className={style.mainPage}>

      <div className={style.callModalWindowsStyle}>
        <button className={style.button} type="button" id="CST" onClick={onClickButtonHandler}>
          Get modulation for CST
        </button>
        <button className={style.button} type="button" id="points">
          Get modulation by points
        </button>
      </div>

    </div>
  )
}
