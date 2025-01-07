import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    vision: ''
  });

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Hero Section */}
      <header className="p-6 lg:p-12 border-b-4 border-white">
        <nav className="flex justify-between items-center mb-20">
          <div className="text-2xl font-bold">WEBCRAFT</div>
          <button className="bg-green-400 text-black px-6 py-2 font-bold hover:bg-green-300 transition-colors">
            APPLY NOW
          </button>
        </nav>

        <div className="space-y-8">
          <h1 className="text-4xl lg:text-7xl font-black leading-tight">
            <span className="text-yellow-400">FREE</span> WEBSITES<br />
            FOR <span className="text-blue-400">AMBITIOUS</span><br />
            <span className="text-pink-400">DREAMERS</span>
          </h1>
          <p className="text-xl bg-white text-black p-4 inline-block transform rotate-1">
            Worth ₹15,000+ • Limited Slots Available
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-lg">Scroll to learn more</span>
          </div>
        </div>
      </header>

      {/* Mission Section */}
      <motion.section
        className="p-6 lg:p-12 bg-yellow-400 text-black"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">
            WHY I'M DOING THIS?
          </h2>
          <p className="text-xl leading-relaxed bg-white p-4 transform -rotate-1">
            I'm on a mission to help small businesses and creatives thrive online. 
            Every great idea deserves an amazing website, regardless of budget.
          </p>
          <div className="mt-8 flex items-center space-x-4">
            <span className="font-bold">NO HIDDEN CATCHES. JUST PURE CREATIVITY.</span>
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        className="p-6 lg:p-12 bg-blue-500"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl lg:text-5xl font-bold mb-12">HOW IT WORKS</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '01', text: 'APPLY VIA FORM' },
            { step: '02', text: 'GET SELECTED' },
            { step: '03', text: 'COLLABORATE' },
            { step: '04', text: 'LAUNCH SITE' }
          ].map((item, index) => (
            <motion.div
              key={item.step}
              className="bg-white text-black p-6 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-6xl font-black mb-4">{item.step}</div>
              <div className="text-xl font-bold">{item.text}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="p-6 lg:p-12 bg-purple-600 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl lg:text-5xl font-bold mb-12 text-center">WHAT PEOPLE SAY</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: 'John Doe',
              role: 'Founder, Startup X',
              text: 'Amazing work! The website exceeded my expectations.',
            },
            {
              name: 'Jane Smith',
              role: 'Creative Director',
              text: 'Highly professional and creative. Highly recommend!',
            },
            {
              name: 'Alex Johnson',
              role: 'NGO Representative',
              text: 'The website has helped us reach more people. Thank you!',
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white text-black p-6 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="text-lg italic">"{testimonial.text}"</p>
              <p className="mt-4 font-bold">{testimonial.name}</p>
              <p className="text-sm">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Application Form */}
      <motion.section
        className="p-6 lg:p-12 bg-pink-400 text-black"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl lg:text-5xl font-bold mb-12">READY TO START?</h2>
        <form className="max-w-2xl space-y-6">
          {[
            { label: 'NAME', type: 'text', key: 'name' },
            { label: 'EMAIL', type: 'email', key: 'email' },
            { label: 'BUSINESS NAME', type: 'text', key: 'business' },
            { label: 'YOUR VISION', type: 'textarea', key: 'vision' }
          ].map((field) => (
            <div key={field.key} className="space-y-2">
              <label className="block font-bold">{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  className="w-full p-4 bg-white border-4 border-black"
                  rows={4}
                  value={formData[field.key]}
                  onChange={(e) => setFormData({...formData, [field.key]: e.target.value})}
                />
              ) : (
                <input
                  type={field.type}
                  className="w-full p-4 bg-white border-4 border-black"
                  value={formData[field.key]}
                  onChange={(e) => setFormData({...formData, [field.key]: e.target.value})}
                />
              )}
            </div>
          ))}
          <button className="bg-black text-white px-8 py-4 font-bold flex items-center space-x-2 hover:bg-gray-800 transition-colors">
            <span>SUBMIT </span>
          </button>
        </form>
      </motion.section>

      {/* Footer */}
      <footer className="p-6 lg:p-12 border-t-4 border-white">
        <div className="text-center">
          <p className="text-lg">Crafted with ♥ by [Your Name]</p>
          <p className="text-sm mt-2">Empowering Ideas, One Website at a Time</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;