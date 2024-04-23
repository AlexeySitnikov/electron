import style from './style.module.css'

export function Loader() {
  return (
    <div className={style.lds_spinner}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}
