import style from './style.module.css'

export function TabLink({ el, index }) {
  const href = `#content_${index}`
  return (
    <a className={style.tab_link} href={href}>{el}</a>
  )
}
