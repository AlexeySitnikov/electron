import style from './style.module.css'

export function SingleTab({ el, index }) {
  const id1 = `content_${index}`
  return (
    <div className={style.tab_content} id={id1}>
      {el}
    </div>
  )
}
