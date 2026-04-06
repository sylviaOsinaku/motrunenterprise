import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { products, formatPrice } from '@/lib/products'
import { CheckCircle, Truck, Award } from 'lucide-react'

interface ProductDetailPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return products.map(product => ({
    id: product.id,
  }))
}

async function getProduct(id: string) {
  const product = products.find(p => p.id === id)
  if (!product) {
    notFound()
  }
  return product
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { id } = await params
  const product = products.find(p => p.id === id)

  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.name} - MoturanroFish & Co`,
    description: product.description,
  }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params
  const product = await getProduct(id)

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <main>
      <Navbar />

      {/* Product Detail Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex gap-2 mb-8 text-sm text-neutral-400">
            <Link href="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-dark-bg">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Product Image */}
            <div className="flex items-center justify-center bg-background rounded-lg overflow-hidden h-96 sm:h-[500px]">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-center">
              <div className="mb-4">
                <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-dark-bg mb-2 text-balance">
                {product.name}
              </h1>
              <p className="text-lg text-neutral-400 mb-6">
                {product.nameYoruba} • {product.weight}
              </p>

              {/* Price and Availability */}
              <div className="mb-8 pb-8 border-b border-secondary-light">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl sm:text-5xl font-bold text-primary">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-neutral-400">per {product.weight}</span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-semibold text-dark-bg">
                    {product.availability === 'in-stock'
                      ? 'In Stock'
                      : product.availability === 'limited'
                      ? 'Limited Stock'
                      : 'Out of Stock'}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-lg text-dark-bg/80 leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              {/* Key Benefits */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-dark-bg mb-4">Key Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 bg-background p-3 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-dark-bg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-white text-base h-12"
                >
                  <a
                    href={`https://wa.me/2347000000000?text=I'd like to order ${product.name} (${product.weight}) for ${formatPrice(product.price)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order on WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white text-base h-12"
                >
                  <Link href="/contact">Contact for Bulk Order</Link>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm text-dark-bg/70">
                  <Award className="w-5 h-5 text-primary" />
                  <span>Quality Guaranteed</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-dark-bg/70">
                  <Truck className="w-5 h-5 text-primary" />
                  <span>Fast Delivery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Educational Content */}
          <div className="bg-background rounded-lg p-8 sm:p-10 mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-dark-bg mb-6">
              About {product.name}
            </h2>
            <p className="text-lg text-dark-bg/80 leading-relaxed">
              {product.educational}
            </p>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-dark-bg mb-8">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {relatedProducts.map(relatedProduct => (
                  <Card
                    key={relatedProduct.id}
                    className="bg-white overflow-hidden hover:shadow-lg transition-all border-0 flex flex-col h-full"
                  >
                    <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold text-dark-bg mb-1">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-sm text-neutral-400 mb-4">
                        {relatedProduct.weight}
                      </p>
                      <div className="flex items-baseline gap-2 mb-6 flex-grow">
                        <span className="text-2xl font-bold text-primary">
                          {formatPrice(relatedProduct.price)}
                        </span>
                      </div>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        <Link href={`/products/${relatedProduct.id}`}>View Product</Link>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
