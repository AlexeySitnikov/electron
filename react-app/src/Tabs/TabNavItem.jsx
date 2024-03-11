/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
export function TabNavItem({
  id, title, activeTab, setActiveTab,
}) {
  const handleClick = () => {
    setActiveTab(id)
  }
  return (
    <li onClick={handleClick} className={activeTab === id ? 'active' : ''}>
      { title }
    </li>
  )
}
