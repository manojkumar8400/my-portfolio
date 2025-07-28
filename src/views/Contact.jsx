import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, MessageCircle, Calendar, Sun, Moon, CheckCircle, AlertCircle, X } from 'lucide-react';

const Contact = ({ isDarkMode }) => {
  // const [isDarkMode, setIsDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'website'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        projectType: 'website'
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "manojprajapati8400@gmail.com",
      description: "Best for detailed project discussions",
      action: "mailto:manojprajapati8400@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 84007 23243",
      description: "Quick calls for urgent matters",
      action: "tel:+918400723243",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: "Chat on WhatsApp",
      description: "Fast response for quick questions",
      action: "https://wa.me/918400723243",
      color: "from-green-400 to-green-600"
    },
    // {
    //   icon: <Calendar className="w-6 h-6" />,
    //   title: "Schedule Call",
    //   value: "Book a Meeting",
    //   description: "15-30 min consultation call",
    //   action: "https://calendly.com/cyberdev",
    //   color: "from-purple-500 to-pink-500"
    // }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      handle: "@cyberdev",
      url: "https://github.com/cyberdev",
      color: "hover:text-gray-600"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      handle: "@cyberdev",
      url: "https://linkedin.com/in/cyberdev",
      color: "hover:text-blue-600"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "Twitter",
      handle: "@cyberdev",
      url: "https://twitter.com/cyberdev",
      color: "hover:text-blue-400"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      handle: "@cyberdev",
      url: "https://instagram.com/cyberdev",
      color: "hover:text-pink-500"
    }
  ];

  // const projectTypes = [
  //   { value: 'website', label: 'Website Development' },
  //   { value: 'webapp', label: 'Web Application' },
  //   { value: 'ecommerce', label: 'E-commerce Store' },
  //   { value: 'portfolio', label: 'Portfolio Website' },
  //   { value: 'landing', label: 'Landing Page' },
  //   { value: 'other', label: 'Other' }
  // ];

  return (
    <div className={`min-h-screen transition-all duration-500 mt-[4.7rem] ${
      isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
    }`}>

      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Let's Work Together
            </h1>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Have a project in mind? I'd love to hear about it. Choose your preferred way to get in touch,
              and let's bring your ideas to life.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                target={method.action.startsWith('http') ? '_blank' : '_self'}
                rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                className={`group rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  isDarkMode 
                    ? 'bg-gray-900 hover:shadow-blue-500/10 border border-gray-800'
                    : 'bg-white hover:shadow-blue-500/20 border border-gray-200 shadow-sm'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-500 transition-colors">
                  {method.title}
                </h3>
                <p className="text-blue-500 font-medium mb-2">{method.value}</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {method.description}
                </p>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className={`rounded-2xl p-8 ${
              isDarkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200 shadow-sm'
            }`}>
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400">Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <span className="text-red-400">Something went wrong. Please try again.</span>
                </div>
              )}

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                        isDarkMode 
                          ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                      }`}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                        isDarkMode 
                          ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                      }`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* <div>
                  <label className="block text-sm font-medium mb-2">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    }`}
                  >
                    {projectTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div> */}

                <div>
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                    }`}
                    placeholder="Project discussion"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                    }`}
                    placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              
              {/* Availability */}
              <div className={`rounded-2xl p-8 ${
                isDarkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200 shadow-sm'
              }`}>
                <h3 className="text-xl font-bold mb-4">Availability</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-500 font-medium">Available for new projects</span>
                  </div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Currently accepting freelance work and collaborations
                  </p>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <p><strong>Response Time:</strong> Within 24 hours</p>
                    <p><strong>Time Zone:</strong> IST (GMT+5:30)</p>
                    <p><strong>Working Hours:</strong> 9 AM - 8 PM</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className={`rounded-2xl p-8 ${
                isDarkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200 shadow-sm'
              }`}>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Location
                </h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Based in India<br />
                  Open to remote work worldwide
                </p>
              </div>

              {/* Social Links */}
              <div className={`rounded-2xl p-8 ${
                isDarkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200 shadow-sm'
              }`}>
                <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                        isDarkMode 
                          ? 'bg-gray-800 hover:bg-gray-700' 
                          : 'bg-gray-50 hover:bg-gray-100'
                      } ${social.color}`}
                    >
                      {social.icon}
                      <div>
                        <p className="font-medium text-sm">{social.name}</p>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {social.handle}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              {/* <div className={`rounded-2xl p-8 ${
                isDarkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200 shadow-sm'
              }`}>
                <h3 className="text-xl font-bold mb-4">Quick Answers</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium">What's your typical project timeline?</p>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                      2-6 weeks depending on complexity
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Do you work with international clients?</p>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                      Yes, I work with clients worldwide
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">What's included in your service?</p>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                      Design, development, testing, and deployment
                    </p>
                  </div>
                </div>
              </div> */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
