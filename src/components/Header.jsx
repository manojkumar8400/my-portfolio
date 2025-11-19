import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Moon, Sun, Menu, X } from "lucide-react"

const Header = ({ darkMode, themeChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navItems = ["Home", "Projects", "Blogs", "Contact"]

  const getPath = (item) => {
    return item === "Home" ? "/" : `/${item.toLowerCase()}`
  }

  const isActive = (item) => {
    const path = getPath(item)
    if (path === "/") {
      return location.pathname === "/"
    }
    return location.pathname === path
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`${
        darkMode ? "bg-black border-gray-700" : "bg-white border-gray-100"
      } text-black dark:text-white shadow-md fixed top-0 right-0 w-full z-[11]`}
    >
      <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
        {/* Logo */}
        <div className='text-2xl font-bold text-green-500'>CyberDev</div>

        {/* Desktop Nav Links */}
        <div
          className={`hidden md:flex justify-between items-center gap-10 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          <nav className='flex space-x-8'>
            {navItems.map((item) => {
              const active = isActive(item)
              return (
                <Link
                  key={item}
                  to={getPath(item)}
                  className={`relative group font-semibold transition-all duration-300 ${
                    active
                      ? darkMode
                        ? "text-green-400"
                        : "text-green-600"
                      : ""
                  }`}
                >
                  {item}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-green-500 transition-all ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              )
            })}
          </nav>
          <button
            onClick={themeChange}
            className={`p-3 rounded-full ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700 text-yellow-400"
                : "bg-gray-100 hover:bg-gray-200 text-gray-600"
            } transition-all duration-300 shadow-lg cursor-pointer`}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? (
              <Sun className='w-5 h-5' />
            ) : (
              <Moon className='w-5 h-5' />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className='flex items-center gap-3 md:hidden'>
          <button
            onClick={themeChange}
            className={`p-2 rounded-full ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700 text-yellow-400"
                : "bg-gray-100 hover:bg-gray-200 text-gray-600"
            } transition-all duration-300 shadow-lg cursor-pointer`}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? (
              <Sun className='w-5 h-5' />
            ) : (
              <Moon className='w-5 h-5' />
            )}
          </button>
          <button
            onClick={toggleMobileMenu}
            className={`p-2 rounded-lg transition-all duration-300 ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-800"
            }`}
            aria-label='Toggle menu'
          >
            {isMobileMenuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        } ${
          darkMode ? "bg-gray-900" : "bg-white"
        } border-t ${darkMode ? "border-gray-700" : "border-gray-200"}`}
      >
        <nav className='flex flex-col px-4 py-4 space-y-4'>
          {navItems.map((item) => {
            const active = isActive(item)
            return (
              <Link
                key={item}
                to={getPath(item)}
                onClick={closeMobileMenu}
                className={`relative group font-semibold py-2 px-4 rounded-lg transition-all duration-300 ${
                  active
                    ? darkMode
                      ? "bg-green-500/20 text-green-400 border-l-4 border-green-500"
                      : "bg-green-100 text-green-600 border-l-4 border-green-500"
                    : darkMode
                    ? "text-white hover:bg-gray-800"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                {item}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default Header
