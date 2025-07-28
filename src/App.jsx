import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Blogs from "./views/Blogs"
import Home from "./views/Home"
import Projects from "./views/Projects"
import Contact from "./views/Contact"
import Header from "./components/Header"

function App() {
   const [darkMode, setDarkMode] = useState(true)
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode)
    }
  
    useEffect(() => {
      document.documentElement.classList.toggle("bg-black", darkMode)
    }, [darkMode])
  
  return (
    <Router>
      <Header darkMode={darkMode} themeChange={toggleDarkMode} />
      <Routes>
        <Route path='/' element={<Home darkMode={darkMode}/>} />
        <Route path='/projects' element={<Projects isDarkMode={darkMode}/>} />
        <Route path='/contact' element={<Contact isDarkMode={darkMode} />} />
        <Route path='/blogs' element={<Blogs isDarkMode={darkMode} />} />
      </Routes>
    </Router>
  )
}

export default App
