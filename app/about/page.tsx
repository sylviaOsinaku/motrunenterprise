import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Heart, Target, Eye, Users } from 'lucide-react'

export const metadata = {
  title: 'About Us - MotrunEnterprise',
  description: 'Learn about MotrunEnterprise, your trusted frozen seafood supply partner in Lagos.',
}

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Reliability',
    description: 'We deliver on time, every time. Your business success depends on consistent supply.',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Quality',
    description: 'We never compromise on freshness. Every product meets our high standards.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Customer Focus',
    description: 'Your business success matters to us. We provide support every step of the way.',
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: 'Efficiency',
    description: 'Fast processes and smooth experience. Quick processing, reliable delivery.',
  },
]

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-dark-bg text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight text-primary">
            Supplying Quality Frozen Foods You Can Trust
          </h1>
          <p className="text-lg sm:text-xl text-gray-800 text-balance">
            We are committed to helping food businesses thrive with reliable, high-quality frozen food supply.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-bg mb-6 text-balance">
              Our Story
            </h2>
            <p className="text-lg leading-relaxed text-dark-bg/80 mb-4">
            MotrunEnterprise was founded with a simple mission: To continuously work on bettering the quality of our products while maintaining cost-effective prices and providing irresistible customer experience for repetitive business relationships
            </p>
            <p className="text-lg leading-relaxed text-dark-bg/80 mb-4">
              We understand the challenges of unreliable suppliers, inconsistent quality, and 
              delayed deliveries ,challenges that have plagued countless food businesses in our city. 
              We built our company to solve these problems.
            </p>
            <p className="text-lg leading-relaxed text-dark-bg/80">
              Today, we&apos;re proud to serve over 50 food businesses across Lagos, from restaurants 
              and catering services to food vendors and retailers. Every partnership is built on trust, 
              quality, and our unwavering commitment to your success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Mission */}
            <Card className="bg-white p-8 sm:p-10 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-dark-bg mb-4">Our Mission</h3>
              <p className="text-dark-bg/80 leading-relaxed text-lg">
                To continuously work on bettering the quality of our products while maintaining cost-effective prices and providing irresistible customer experience for repetitive business relationships
              </p>
            </Card>

            {/* Vision */}
            <Card className="bg-white p-8 sm:p-10 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-dark-bg mb-4">Our Vision</h3>
              <p className="text-dark-bg/80 leading-relaxed text-lg">
               To become a foremost frozen food solution and delivery service company present in every household, market and store within a realizable future.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-bg mb-4 text-balance">
              Our Values
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto text-balance">
              These principles guide every decision we make and every interaction we have.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-background p-6 sm:p-8 border-0 hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-dark-bg mb-3">
                  {value.title}
                </h3>
                <p className="text-dark-bg/70 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Businesses Trust Us */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-bg mb-8 text-balance">
            Why Businesses Trust Motrun
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-white p-6 sm:p-8 border-l-4 border-primary">
              <h3 className="font-semibold text-dark-bg mb-2">Consistent Quality</h3>
              <p className="text-dark-bg/70">
                Every product is carefully sourced and preserved to maintain peak freshness and quality.
              </p>
            </Card>

            <Card className="bg-white p-6 sm:p-8 border-l-4 border-primary">
              <h3 className="font-semibold text-dark-bg mb-2">Transparent Pricing</h3>
              <p className="text-dark-bg/70">
                No hidden costs. Our bulk pricing is competitive and designed to improve your margins.
              </p>
            </Card>

            <Card className="bg-white p-6 sm:p-8 border-l-4 border-primary">
              <h3 className="font-semibold text-dark-bg mb-2">Strong Relationships</h3>
              <p className="text-dark-bg/70">
                We treat our customers as partners. Your success is our success.
              </p>
            </Card>

            <Card className="bg-white p-6 sm:p-8 border-l-4 border-primary">
              <h3 className="font-semibold text-dark-bg mb-2">Reliable Logistics</h3>
              <p className="text-dark-bg/70">
                Professional delivery team with proper cold chain management ensures on-time arrival.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-bold text-primary mb-2">50+</p>
              <p className="text-dark-bg/70">Trusted Businesses</p>
            </div>
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-bold text-primary mb-2">8</p>
              <p className="text-dark-bg/70">Premium Products</p>
            </div>
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-bold text-primary mb-2">100%</p>
              <p className="text-dark-bg/70">On-Time Delivery</p>
            </div>
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-bold text-primary mb-2">24/7</p>
              <p className="text-dark-bg/70">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-dark-bg ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
            Partner with Us Today
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto text-balance">
            Never worry about supply again. Let MoturanroFish handle your frozen food needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white"
            >
              <Link href="/products" >View Products</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white"
            >
              <a
                href="https://wa.me/2347057589549"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-dark text-white"
              >
                Contact Us
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
