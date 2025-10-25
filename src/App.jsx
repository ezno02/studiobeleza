import React, { useState, useEffect, useCallback } from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {

  const [scrollAtingido, setScrollAtingido] = useState(false);
  const [namePage, setNamePage] = useState('home')

  const handleScroll = useCallback(() => {
    const maximoVh = window.innerHeight * 0.50
    const scrollAtual = window.scrollY
    const scrollBoolean = scrollAtual > maximoVh

    if (scrollBoolean !== scrollAtingido) {
      setScrollAtingido(scrollBoolean)
    }
  }, [scrollAtingido])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll])

  return (
    <div className='container'>
      <Header namePage={namePage} setNamePage={setNamePage} scrollAtingido={scrollAtingido} />
      <Outlet context={[setNamePage]} />
    </div>
  )
}

export default App