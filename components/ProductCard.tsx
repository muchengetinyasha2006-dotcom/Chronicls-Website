'use client'

import Link from 'next/link'
import { useState } from 'react'

interface ProductCardProps {
  product: {
    id: number
    name: string
    price: number
    category: string
    image: string
    description: string
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="group">
      <Link href={`/product/${product.id}`}>
        <div
          className="bg-chronicls-cream aspect-square mb-4 overflow-hidden relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <div className="text-center">
              <p className="text-sm">Product Image</p>
              <p className="text-xs text-gray-500">Place your image here</p>
            </div>
          </div>
        </div>
      </Link>

      <div>
        <Link href={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold group-hover:text-chronicls-accent transition mb-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        <p className="text-xl font-semibold mb-4">${product.price}</p>
        <button className="btn-primary w-full">
          Add to Cart
        </button>
      </div>
    </div>
  )
}
