import { Link } from "react-router-dom"
import { Moon, Sun } from "lucide-react"
const Header = ({ darkMode, themeChange }) => {
  const navItems = ["Home", "Projects", "Blogs",  "Contact"]

  return (
    <header
      className={`${
        darkMode ? "bg-black border-gray-700" : "bg-white border-gray-100"
      } bg-white- dark:bg-black- text-black dark:text-white shadow-md fixed top-0 right-0 w-full z-[11]`}
    >
      <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
        {/* Logo */}
        <div className='text-2xl font-bold text-green-500'>CyberDev</div>

        {/* Nav Links */}
        <div
          className={`flex justify-between items-center gap-10 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          <nav className='flex space-x-8'>
            {navItems.map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className='relative group font-semibold'
              >
                {item}
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full'></span>
              </Link>
              // <a
              //   key={item}
              //   href={`#${item.toLowerCase()}`}
              //   className='relative group font-semibold'
              // >
              //   {item}
              //   <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full'></span>
              // </a>
            ))}
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
      </div>
    </header>
  )
}

export default Header
