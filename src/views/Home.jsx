import BlogCard from "../components/BlogCard"
import ContactSection from "../components/ContactSection"
import HeroBanner from "../components/HeroBanner"
import Projects from "../components/Projects"
import TechStack from "../components/TechStack"

const Home = ({ darkMode }) => {

  return (
    <>
      <HeroBanner isDarkMode={darkMode} />
      <TechStack isDarkMode={darkMode} />
      <Projects isDarkMode={darkMode} />
      <BlogCard isDarkMode={darkMode}/>
      <ContactSection isDarkMode={darkMode}/>
    </>
  )
}

export default Home
