import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Main from './components/Main'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

export default function App() {
  const [isDark, setIsDark] = useState(false)
  const [language, setLanguage] = useState('he')
  return (
    <>
      <div className={`${isDark ? 'dark' : 'light'}  ${language} all`}>
        <header  >
          <Header isDark={isDark} setIsDark={setIsDark} language={language} setLanguage={setLanguage} />
        </header >
        <main>
          <Hero language={language} />
          <Main language={language} />
          <Portfolio language={language} isDark={isDark} />
          <Contact language={language} />
        </main>
        <footer>
          <p>© 2024 Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}
