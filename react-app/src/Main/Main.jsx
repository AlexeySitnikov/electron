import style from './style.module.css'

export function Main({ selectedFiles }) {
  const onClickButtonHandler = async () => {
    let requestString = ''
    selectedFiles.forEach((element) => {
      requestString += `${element} `
    })
    const responce = await fetch(`http://localhost:3333/${requestString.replaceAll('\\', '')}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log(await responce.json())
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
