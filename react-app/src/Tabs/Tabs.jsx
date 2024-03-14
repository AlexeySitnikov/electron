import { useState } from 'react'
import { TabContent } from './TabContent'
import { TabNavItem } from './TabNavItem'
import style from './style.module.css'
import { FileInformation } from './FileInformation'

export function Tabs({ analyzedFiles, setAnalyzedFiles }) {
  const currentFiles = analyzedFiles
  const [activeTab, setActiveTab] = useState('tab0')

  return (
    <div className={style.Tabs}>
      <ul className={style.nav}>
        {currentFiles.map((_, index) => (
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
        {currentFiles.map((el, index) => (
          <TabContent
            id={`tab${index}`}
            activeTab={activeTab}
            key={crypto.randomUUID()}
          >
            <FileInformation
              el={el}
              fileCount={currentFiles.length}
              key={crypto.randomUUID()}
              analyzedFiles={analyzedFiles}
              setAnalyzedFiles={setAnalyzedFiles}
            />
          </TabContent>
        ))}
      </div>
    </div>
  )
}
