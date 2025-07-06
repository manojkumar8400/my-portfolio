import React from "react"

const HeroBanner = ({ darkMode }) => {
  return (
    <section
      className={`flex flex-col md:flex-row justify-between items-center gap-10 px-6 py-20 max-w-7xl mx-auto ${
        darkMode ? "text-white bg-black" : "bg-white text-black"
      }`}
    >
      {/* Left Content */}
      <div className='flex-1'>
        <h1 className='text-4xl md:text-6xl font-extrabold leading-tight text-green-500'>
          Full-Stack <br /> Developer
        </h1>
        <p className='mt-6 text-lg'>
          Building digital experiences that merge creativity with technology
        </p>
        <p className='mt-2 text-md'>
          Specializing in modern web development and cyber systems
        </p>
        <a
          href='#contact'
          className='inline-block mt-6 px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition'
        >
          Let's Connect
        </a>
      </div>

      {/* Right Image */}
      {/* <div className="flex-1 flex justify-center items-center">
        <div className="rounded-full p-1 bg-gradient-to-tr from-green-500 to-transparent">
          <img
            src="/your-image.jpg" // <-- Replace with your image path
            alt="Profile"
            className="rounded-full w-72 h-72 object-cover shadow-xl"
          />
        </div>
      </div> */}
      <div className='relative flex justify-center items-center'>
        {/* Glow Effect */}
        <div className='absolute w-80 h-80 rounded-full bg-green-500 blur-2xl opacity-30 z-0'></div>

        {/* Profile Image */}
        <img
          src='https://ca.slack-edge.com/T29S0EJUD-U042WP37JAD-bf0f3c5fffda-512' // <-- Replace this
          alt='Profile'
          className='relative z-10 rounded-full w-72 h-72 object-cover border-4 border-transparent shadow-lg'
        />
      </div>
    </section>
  )
}

export default HeroBanner
