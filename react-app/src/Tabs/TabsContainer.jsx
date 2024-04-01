import style from './style.module.css'
import { TabNavItem } from './TabNavItem'
import { TabContent } from './TabContent'
import { FileInformation } from './FileInformation'

export function TabsContainer({
  activeTab, setActiveTab, analyzedFiles, setAnalyzedFiles,
}) {
  const currentFiles = analyzedFiles
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
