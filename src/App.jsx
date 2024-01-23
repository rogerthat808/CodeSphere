import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import CodeEditor from './components/Navbar/body/CodeEditor';

const App = () => {

  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme)
  },[theme])

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <CodeEditor/>
    </div>
  )
}

export default App
