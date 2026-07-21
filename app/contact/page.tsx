'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="pt-32 pb-20">
      <div className="section-container max-w-3xl">
        <h1 className="mb-4 text-center">Get in Touch</h1>
        <p className="text-center text-gray-600 mb-12">
          Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-chronicls-black focus:outline-none focus:ring-2 focus:ring-chronicls-black"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-chronicls-black focus:outline-none focus:ring-2 focus:ring-chronicls-black"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block font-semibold mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-chronicls-black focus:outline-none focus:ring-2 focus:ring-chronicls-black"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-chronicls-black focus:outline-none focus:ring-2 focus:ring-chronicls-black"
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            Send Message
          </button>

          {submitted && (
            <p className="text-green-600 text-center">
              Thank you for your message! We'll get back to you soon.
            </p>
          )}
        </form>

        <div className="mt-16 pt-12 border-t border-gray-300">
          <h2 className="mb-8 text-center">Other Ways to Reach Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:hello@chronicls.com" className="text-gray-600 hover:text-chronicls-accent transition">
                hello@chronicls.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:+1234567890" className="text-gray-600 hover:text-chronicls-accent transition">
                +1 (234) 567-890
              </a>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-600">
                Premium St.<br />
                New York, NY 10001
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
