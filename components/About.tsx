export default function About() {
  return (
    <section className="section-container bg-chronicls-cream">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="mb-6">Our Story</h2>
          <p className="mb-4 text-gray-700">
            Chronicls was born from a passion for timeless design and quality craftsmanship. We believe that streetwear should transcend trends and embrace a luxurious aesthetic.
          </p>
          <p className="mb-4 text-gray-700">
            Each piece is carefully selected and designed to elevate your everyday wardrobe with intention and style.
          </p>
          <p className="text-gray-700">
            We're committed to sustainable practices and supporting emerging artists within the streetwear community.
          </p>
        </div>

        <div className="bg-gray-300 aspect-square rounded-lg flex items-center justify-center">
          <p className="text-gray-600">Brand Story Image</p>
        </div>
      </div>
    </section>
  )
}
