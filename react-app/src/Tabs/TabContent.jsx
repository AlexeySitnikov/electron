import style from './style.module.css'

export function TabContent({ id, activeTab, children }) {
  return (
    activeTab === id ? (
      <div className={style.TabContent}>
        { children }
      </div>
    )
      : null
  )
}
