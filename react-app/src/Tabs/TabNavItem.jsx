/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import style from './style.module.css'

export function TabNavItem({
  id, title, activeTab, setActiveTab,
}) {
  const handleClick = () => {
    setActiveTab(id)
  }
  return (
    <li className={activeTab === id ? style.active : ''} onClick={handleClick}>
      { title }
    </li>
  )
}
