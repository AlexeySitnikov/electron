import { useState } from 'react'
import './App.css'
import { Header } from './Header/Header'
import style from './style.module.css'
import { Main } from './Main/Main'

function App() {
  const [selectedFiles, setSelectedFiles] = useState(null)

  if (selectedFiles) {
    return (
      <div className={style.mainPage}>
        <Header setSelectedFiles={setSelectedFiles} />
        <Main selectedFiles={selectedFiles} />
      </div>
    )
  }

  return (
    <div className={style.mainPage}>
      <Header setSelectedFiles={setSelectedFiles} />
    </div>
  )
}

export default App
