import React from "react"

const ContactSection = ({ isDarkMode }) => {
  const navigateToContact = () => {
    window.location.href = "/contact"
  }

  return (
    <section className='text-center py-16'>
      <div
        className={`rounded-3xl p-12 ${
          isDarkMode
            ? "bg-gray-900 border border-gray-800"
            : "bg-white border border-gray-200 shadow-lg"
        }`}
      >
        <h2 className='text-3xl font-bold mb-4'>Let's Work Together</h2>
        <p
          className={`text-lg mb-8 ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Have a project in mind? Let's discuss how we can bring your ideas to
          life.
        </p>
        <button
          onClick={navigateToContact}
          className='cursor-pointer bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25'
        >
          Get In Touch
        </button>
      </div>
    </section>
  )
}

export default ContactSection
