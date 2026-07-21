'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="section-container">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-8">
          Subscribe to our newsletter for new releases, exclusive offers, and stories from the Chronicls community.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 border border-chronicls-black focus:outline-none"
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            Subscribe
          </button>
        </form>

        {submitted && (
          <p className="text-green-600 mt-4">Thank you for subscribing!</p>
        )}
      </div>
    </section>
  )
}
