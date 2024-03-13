import { useState } from 'react'
import { TabContent } from './TabContent'
import { TabNavItem } from './TabNavItem'
import style from './style.module.css'

export function Tabs({ files }) {
  const [activeTab, setActiveTab] = useState('tab0')

  return (
    <div className={style.Tabs}>
      <ul className={style.nav}>
        {files.map((_, index) => (
          <TabNavItem
            title={`File ${index + 1}`}
            id={`tab${index}`}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            key={crypto.randomUUID()}
          />
        ))}
      </ul>

      <div className={style.outlet}>
        {files.map((el, index) => (
          <TabContent
            id={`tab${index}`}
            activeTab={activeTab}
            key={crypto.randomUUID()}
          >
            {Array.isArray(el.data)
              ? (el.data.map((string) => (
                <p key={crypto.randomUUID()}>{string}</p>
              )))
              : <p>{el.data}</p>}
          </TabContent>
        ))}
      </div>
    </div>
  )
}
