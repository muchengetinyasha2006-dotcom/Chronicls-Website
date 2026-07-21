import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-chronicls-cream">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="mb-6">
          Elevated <span className="accent-text">Streetwear</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-700">
          Meticulously crafted pieces that blend luxury with urban culture.
        </p>
        <Link href="/shop" className="btn-primary inline-block">
          Shop New Collection
        </Link>
      </div>
    </section>
  )
}
