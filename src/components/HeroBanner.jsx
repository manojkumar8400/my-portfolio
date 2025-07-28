import React, { useState, useEffect } from "react"
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Code,
  Zap,
  Star,
  Sun,
  Moon,
} from "lucide-react"

const HeroBanner = ({ isDarkMode }) => {
  // const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    "Full-Stack Developer",
    "React Specialist",
    "UI/UX Designer",
    "Problem Solver",
  ]

  // Typing animation effect
  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex]

        if (!isDeleting) {
          setCurrentText(current.substring(0, currentText.length + 1))

          if (currentText === current) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setCurrentText(current.substring(0, currentText.length - 1))

          if (currentText === "") {
            setIsDeleting(false)
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
          }
        }
      },
      isDeleting ? 50 : 150
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentIndex, texts])

  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "50+", label: "Projects Built" },
    { number: "25+", label: "Technologies" },
    { number: "100%", label: "Client Satisfaction" },
  ]

  const floatingSkills = [
    { name: "React", icon: "⚛️", delay: "0s" },
    { name: "JavaScript", icon: "🟨", delay: "0.5s" },
    { name: "Node.js", icon: "🟢", delay: "1s" },
    { name: "CSS3", icon: "🎨", delay: "1.5s" },
    { name: "MongoDB", icon: "🍃", delay: "2s" },
    { name: "Git", icon: "📚", delay: "2.5s" },
  ]

  const navigateToContact = () => {
    window.location.href = "/contact"
  }

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-all duration-700 mt-[4.7rem] ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
      }`}
    >
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Floating Orbs */}
        <div
          className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 animate-pulse ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        ></div>
        <div
          className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`}
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl opacity-10 animate-pulse ${
            isDarkMode ? "bg-green-500" : "bg-green-400"
          }`}
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Grid Pattern */}
        <div
          className={`absolute inset-0 opacity-5 ${
            isDarkMode ? "bg-white" : "bg-gray-900"
          }`}
          style={{
            backgroundImage: `
              linear-gradient(${
                isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
              } 1px, transparent 1px),
              linear-gradient(90deg, ${
                isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
              } 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Floating Skills */}
      {floatingSkills.map((skill, index) => (
        <div
          key={skill.name}
          className={`absolute hidden lg:block w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg backdrop-blur-sm animate-bounce ${
            isDarkMode
              ? "bg-gray-800/50 text-white border border-gray-700"
              : "bg-white/50 text-gray-800 border border-gray-200"
          }`}
          style={{
            top: `${20 + index * 15}%`,
            left: `${10 + (index % 2) * 80}%`,
            animationDelay: skill.delay,
            animationDuration: "3s",
          }}
        >
          {skill.icon}
        </div>
      ))}

      {/* Main Content */}
      <div className='relative z-10 min-h-screen flex items-center'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left Content */}
            <div className='text-center lg:text-left space-y-8'>
              {/* Greeting */}
              <div className='space-y-2'>
                <p
                  className={`text-lg sm:text-xl font-medium ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  👋 Hello, I'm
                </p>
                <h1
                  className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                    CyberDev
                  </span>
                </h1>
              </div>

              {/* Animated Title */}
              <div className='h-20'>
                <h2
                  className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${
                    isDarkMode ? "text-green-400" : "text-green-600"
                  }`}
                >
                  {currentText}
                  <span className='animate-pulse'>|</span>
                </h2>
              </div>

              {/* Description */}
              <p
                className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Building digital experiences that merge creativity with
                technology. Specializing in modern web development and creating
                solutions that make a difference.
              </p>

              {/* Stats */}
              <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-8'>
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`text-center p-4 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                      isDarkMode
                        ? "bg-gray-800/30 border border-gray-700"
                        : "bg-white/30 border border-gray-200"
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className='text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
                      {stat.number}
                    </div>
                    <div
                      className={`text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                <button
                  onClick={navigateToContact}
                  className='cursor-pointer group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2'
                >
                  Let's Connect
                  <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </button>

                <button
                  className={`group px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 border-2 ${
                    isDarkMode
                      ? "border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                  }`}
                >
                  <Download className='w-5 h-5' />
                  Download CV
                </button>
              </div>

              {/* Social Links */}
              {/* <div className="flex justify-center lg:justify-start gap-4 pt-8">
                {[
                  { icon: <Github className="w-5 h-5" />, color: 'hover:text-gray-600' },
                  { icon: <Linkedin className="w-5 h-5" />, color: 'hover:text-blue-600' },
                  { icon: <Twitter className="w-5 h-5" />, color: 'hover:text-blue-400' },
                  { icon: <Mail className="w-5 h-5" />, color: 'hover:text-red-500' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm ${
                      isDarkMode 
                        ? 'bg-gray-800/50 text-gray-400 hover:bg-gray-700 border border-gray-700'
                        : 'bg-white/50 text-gray-600 hover:bg-white border border-gray-200'
                    } ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div> */}

              {/* Location */}
              {/* <div className={`flex items-center justify-center lg:justify-start gap-2 text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <MapPin className="w-4 h-4" />
                <span>Based in India • Available Worldwide</span>
              </div> */}
            </div>

            {/* Right Content - Profile Image */}
            <div className='flex justify-center lg:justify-end'>
              <div className='relative'>
                {/* Profile Image Container */}
                <div className='relative w-80 h-80 sm:w-96 sm:h-96'>
                  {/* Animated Border */}
                  <div
                    className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin opacity-75'
                    style={{ animationDuration: "8s" }}
                  ></div>

                  {/* Profile Image */}
                  <div className='absolute inset-2 rounded-full overflow-hidden bg-gray-200 hover:scale-105 transition-transform duration-300'>
                    <div
                      className={`w-full h-full flex items-center justify-center text-6xl ${
                        isDarkMode ? "bg-gray-800" : "bg-gray-100"
                      }`}
                    >
                      👨‍💻
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className='absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold animate-bounce'>
                    <Star className='w-6 h-6' />
                  </div>

                  <div
                    className='absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold animate-bounce'
                    style={{ animationDelay: "0.5s" }}
                  >
                    <Code className='w-6 h-6' />
                  </div>

                  <div
                    className='absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold animate-bounce'
                    style={{ animationDelay: "1s" }}
                  >
                    <Zap className='w-6 h-6' />
                  </div>
                </div>

                {/* Status Indicator */}
                <div
                  className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full backdrop-blur-sm ${
                    isDarkMode
                      ? "bg-gray-800/80 border border-gray-700"
                      : "bg-white/80 border border-gray-200"
                  } shadow-lg`}
                >
                  <div className='flex items-center gap-2'>
                    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
                    <span
                      className={`text-sm font-medium ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <div
          className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            isDarkMode ? "border-gray-600" : "border-gray-400"
          }`}
        >
          <div
            className={`w-1 h-3 rounded-full mt-2 animate-pulse ${
              isDarkMode ? "bg-gray-400" : "bg-gray-600"
            }`}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
