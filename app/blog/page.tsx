import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Minimalist Streetwear',
    excerpt: 'Exploring how less is more in contemporary urban fashion',
    date: '2024-01-15',
    author: 'Chronicls Team',
    category: 'Fashion',
  },
  {
    id: 2,
    title: 'Sustainability in Luxury Fashion',
    excerpt: 'Our commitment to ethical production and sustainable materials',
    date: '2024-01-10',
    author: 'Chronicls Team',
    category: 'Sustainability',
  },
  {
    id: 3,
    title: 'Behind the Design: New Collection Launch',
    excerpt: 'An exclusive look at the creative process behind our latest pieces',
    date: '2024-01-05',
    author: 'Design Team',
    category: 'Design',
  },
  {
    id: 4,
    title: 'Street Style Guide: How to Layer',
    excerpt: 'Master the art of layering for the perfect urban look',
    date: '2023-12-28',
    author: 'Style Editor',
    category: 'Style',
  },
]

export default function Blog() {
  return (
    <div className="pt-32 pb-20">
      <div className="section-container">
        <h1 className="mb-4 text-center">Chronicls Blog</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Stories, insights, and inspiration from the world of luxury streetwear
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="pb-8 border-b border-gray-300">
              <div className="mb-4">
                <span className="text-sm text-gray-600">{post.category}</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-sm text-gray-600">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>

              <h2 className="text-2xl font-serif font-bold mb-3">
                <Link href={`/blog/${post.id}`} className="hover:text-chronicls-accent transition">
                  {post.title}
                </Link>
              </h2>

              <p className="text-gray-600 mb-4">{post.excerpt}</p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">By {post.author}</span>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-sm font-semibold hover:text-chronicls-accent transition"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
