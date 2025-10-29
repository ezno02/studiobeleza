import React, { useState, useEffect, useCallback } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [scrollAtingido, setScrollAtingido] = useState(false);
  const [scrollAtingidoToColor, setScrollAtingidoToColor] = useState(false);
  const [namePage, setNamePage] = useState('home')

  const handleScroll = useCallback(() => {
    const maximoVh = window.innerHeight * 0.50
    const maximoVhToColor = window.innerHeight * 1
    const scrollAtual = window.scrollY
    const scrollBoolean = scrollAtual > maximoVh
    const scrollBooleanToColor = scrollAtual > maximoVhToColor

    if (scrollBoolean !== scrollAtingido) {
      setScrollAtingido(scrollBoolean)
    }
    if (scrollBooleanToColor !== scrollAtingidoToColor) {
      setScrollAtingidoToColor(scrollBooleanToColor)
    }
  }, [scrollAtingido, scrollAtingidoToColor])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll])

  return (
    <div className='container'>
      <Header namePage={namePage} scrollAtingido={scrollAtingido} scrollAtingidoToColor={scrollAtingidoToColor} />
      <Outlet context={[setNamePage]} />
      <Footer />
    </div>
  )
}

export default App