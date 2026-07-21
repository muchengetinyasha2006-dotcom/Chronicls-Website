import Link from 'next/link'
import ProductCard from './ProductCard'

const featuredProducts = [
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
]

export default function FeaturedProducts() {
  return (
    <section className="section-container">
      <div className="section-title">
        <h2>Featured Collection</h2>
        <p className="text-gray-600 mt-4">Discover our most sought-after pieces</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center">
        <Link href="/shop" className="btn-secondary inline-block">
          View All Products
        </Link>
      </div>
    </section>
  )
}
