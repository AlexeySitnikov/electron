import style from './style.module.css'

export function ProgressBar({ name, filled }) {
  return (
    <div>
      <span>{name}</span>
      <div className={style.progressbar}>
        <div style={{
          height: '100%',
          width: `${filled}%`,
          backgroundColor: 'rgb(0, 78, 154, 1)',
        }}
        />
        <span className={style.progressPercent}>
          { filled }
          %
        </span>
      </div>
    </div>
  )
}
