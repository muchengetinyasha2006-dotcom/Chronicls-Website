'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-chronicls-white border-b border-chronicls-black z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold tracking-wider">
          CHRONICLS
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/shop" className="hover:text-chronicls-accent transition">
            Shop
          </Link>
          <Link href="/blog" className="hover:text-chronicls-accent transition">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-chronicls-accent transition">
            Contact
          </Link>
          <Link href="/cart" className="hover:text-chronicls-accent transition">
            Cart
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-chronicls-black bg-chronicls-cream">
          <div className="flex flex-col gap-4 px-4 py-4">
            <Link href="/shop" onClick={() => setIsOpen(false)}>
              Shop
            </Link>
            <Link href="/blog" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link href="/cart" onClick={() => setIsOpen(false)}>
              Cart
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
