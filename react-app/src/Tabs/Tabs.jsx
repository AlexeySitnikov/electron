// import { SingleTab } from './SingleTab'
// import { TabLink } from './TabLink'
import { useState } from 'react'
import { TabContent } from './TabContent'
import { TabNavItem } from './TabNavItem'
import style from './style.module.css'

export function Tabs({ files }) {
  const [activeTab, setActiveTab] = useState('tab1')

  return (
    <div className={style.Tabs}>
      <ul className={style.nav}>
        {files.map((el, index) => (
          <TabNavItem
            title={`${el}`}
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
            <p>{el}</p>
          </TabContent>
        ))}
      </div>
    </div>
  )
}
/* <div className={style.container}>
<div className={style.tab}>
  {files.map((el, index) => (
    <SingleTab
      el={el}
      index={index + 1}
      key={crypto.randomUUID()}
    />
  ))}
  <div className={style.tab_nav}>
    {files.map((el, index) => (
      <TabLink
        el={el}
        index={index + 1}
        key={crypto.randomUUID()}
      />
    ))}
  </div>
</div>
</div> */
