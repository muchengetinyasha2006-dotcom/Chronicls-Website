'use client'

import { useState } from 'react'
import ProductCard from '@/components/ProductCard'

const allProducts = [
  {
    id: 1,
    name: 'Essential Oversized Tee',
    price: 89,
    category: 'tops',
    image: '/images/product-1.jpg',
    description: 'Premium cotton oversized t-shirt',
  },
  {
    id: 2,
    name: 'Classic Black Joggers',
    price: 129,
    category: 'bottoms',
    image: '/images/product-2.jpg',
    description: 'Tailored comfort joggers',
  },
  {
    id: 3,
    name: 'Signature Hoodie',
    price: 149,
    category: 'tops',
    image: '/images/product-3.jpg',
    description: 'Luxury heavyweight hoodie',
  },
  {
    id: 4,
    name: 'Heritage Baseball Cap',
    price: 59,
    category: 'accessories',
    image: '/images/product-4.jpg',
    description: 'Structured wool cap',
  },
  {
    id: 5,
    name: 'Vintage Crew Sweatshirt',
    price: 139,
    category: 'tops',
    image: '/images/product-5.jpg',
    description: 'Heavyweight fleece sweatshirt',
  },
  {
    id: 6,
    name: 'Tailored Trousers',
    price: 159,
    category: 'bottoms',
    image: '/images/product-6.jpg',
    description: 'Premium wool blend trousers',
  },
  {
    id: 7,
    name: 'Leather Crossbody Bag',
    price: 199,
    category: 'accessories',
    image: '/images/product-7.jpg',
    description: 'Genuine leather bag',
  },
  {
    id: 8,
    name: 'Minimalist Chain Necklace',
    price: 79,
    category: 'accessories',
    image: '/images/product-8.jpg',
    description: 'Sterling silver chain',
  },
]

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  const categories = ['all', 'tops', 'bottoms', 'accessories']

  const filteredProducts = selectedCategory === 'all'
    ? allProducts
    : allProducts.filter(p => p.category === selectedCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'name') return a.name.localeCompare(b.name)
    return 0
  })

  return (
    <div className="pt-32 pb-20">
      <div className="section-container">
        <h1 className="mb-12 text-center">Shop</h1>

        {/* Filters and Sort */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Category</h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <label key={cat} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    checked={selectedCategory === cat}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="mr-2"
                  />
                  <span className="capitalize">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div>
            <h3 className="font-semibold mb-4">Sort By</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-2 border border-chronicls-black"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          {/* Results Count */}
          <div className="flex items-end">
            <p className="text-gray-600">
              Showing {sortedProducts.length} product{sortedProducts.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
