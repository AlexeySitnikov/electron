import { SingleTab } from './SingleTab'
import { TabLink } from './TabLink'
import style from './style.module.css'

export function Tabs({ files }) {
  return (
    <div className={style.container}>
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
    </div>
  )
}
