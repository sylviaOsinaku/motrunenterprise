'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { products, categories, formatPrice } from '@/lib/products'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory)

  return (
    <main>
      <Navbar />

      {/* Page Header */}
      <section className="bg-background py-12 sm:py-16 border-b border-secondary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-dark-bg mb-4 text-balance">
            Our Products
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl text-balance">
            Browse our complete range of premium frozen fish and seafood. All products are carefully sourced and preserved to maintain freshness.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-dark-bg mb-4">Filter by Category</h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-background border border-secondary-light text-dark-bg hover:border-primary'
                }`}
              >
                All Products ({products.length})
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-primary text-white'
                      : 'bg-background border border-secondary-light text-dark-bg hover:border-primary'
                  }`}
                >
                  {cat.label} ({cat.count})
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
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
                      className="object-cover hover:scale-105 transition-transform"
                    />
                    {product.availability === 'limited' && (
                      <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Limited
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
                          href={`https://wa.me/2347000000000?text=I'm interested in ${product.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Order
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <p className="text-lg text-neutral-400">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-dark-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-lg text-gray-300 mb-8 text-balance">
            Contact us to inquire about custom bulk orders or special products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-dark-bg"
            >
              <a
                href="https://wa.me/2347000000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
