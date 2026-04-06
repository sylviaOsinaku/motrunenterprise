import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { products, formatPrice } from '@/lib/products'

export function ProductsPreviewSection() {
  const featuredProducts = products.slice(0, 6)

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-bg mb-4 text-balance">
            Our Product Range
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto text-balance">
            Premium frozen fish and seafood carefully selected and preserved for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="bg-white overflow-hidden hover:shadow-lg transition-all border-0 flex flex-col h-full"
            >
              {/* Product Image */}
              <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                {product.availability === 'limited' && (
                  <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Limited Stock
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold text-dark-bg mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  {product.nameYoruba} • {product.weight}
                </p>

                <p className="text-dark-bg/70 text-sm leading-relaxed mb-6 flex-grow">
                  {product.description}
                </p>

                <div className="flex items-baseline gap-2 mb-6 border-t border-secondary-light/20 pt-4">
                  <span className="text-2xl sm:text-3xl font-bold text-primary">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-sm text-neutral-400">/{product.weight}</span>
                </div>

                <div className="flex gap-2">
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <Link href={`/products/${product.id}`}>View Details</Link>
                  </Button>
                  <Button
                    asChild
                    className="flex-1 bg-primary hover:bg-primary-dark text-white"
                  >
                    <a
                      href={`https://wa.me/2347057589549?text=I'm interested in ${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Order
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary-dark text-white"
          >
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
