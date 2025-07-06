import React, { useState } from "react"

const ProjectDetails = ({ darkMode, setShowProjectDetail }) => {

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } min-h-screen p-6 transition-colors absolute left-0 -bottom-1`}
    >
      {/* Theme Toggle */}
      {/* <button
        onClick={() => setdarkMode(!darkMode)}
        className='mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button> */}

      {/* Project Title */}
      <div>
        <h1 className='text-4xl font-bold mb-4'>E-Commerce Dashboard</h1>
        <button onClick={(prev) => setShowProjectDetail(!prev)}>X</button>
      </div>

      {/* Project Meta */}
      <div className='flex flex-wrap gap-4 text-sm mb-6'>
        <span className='bg-blue-100 text-blue-800 px-3 py-1 rounded'>
          React
        </span>
        <span className='bg-gray-100 text-gray-800 px-3 py-1 rounded'>
          Dashboard
        </span>
        <span className='bg-green-100 text-green-800 px-3 py-1 rounded'>
          E-commerce
        </span>
        <span className='bg-purple-100 text-purple-800 px-3 py-1 rounded'>
          Full Stack
        </span>
      </div>

      {/* Description */}
      <p className='mb-6 leading-relaxed'>
        This project is a fully-featured admin dashboard for e-commerce
        platforms with real-time analytics, product and order management, and
        customer insights. It was built using React, Chart.js, and Firebase.
      </p>

      {/* Screenshots (Dummy for now) */}
      <div className='grid md:grid-cols-2 gap-4'>
        <img
          src='/path/to/dummy-screenshot1.png'
          alt='Dashboard Screenshot'
          className='rounded shadow-md'
        />
        <img
          src='/path/to/dummy-screenshot2.png'
          alt='Analytics Screenshot'
          className='rounded shadow-md'
        />
      </div>
    </div>
  )
}

export default ProjectDetails
