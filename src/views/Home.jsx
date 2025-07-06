import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import HeroBanner from "../components/HeroBanner"
import Projects from "../components/Projects"
import TechStack from "../components/TechStack"

const Home = () => {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    document.documentElement.classList.toggle("bg-black", darkMode)
  }, [darkMode])

  return (
    <>
      <Header darkMode={darkMode} themeChange={toggleDarkMode} />
      <HeroBanner darkMode={darkMode} />
      <TechStack darkMode={darkMode} />
      <Projects darkMode={darkMode} />
    </>
  )
}

export default Home
