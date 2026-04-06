import { Navbar } from '@/components/Navbar'
import { HeroCarousel } from '@/components/HeroCarousel'
import { TestimonialSection } from '@/components/TestimonialSection'
import { FeaturesSection } from '@/components/FeaturesSection'
import { HowItWorksSection } from '@/components/HowItWorksSection'
import { ProductsPreviewSection } from '@/components/ProductsPreviewSection'
import { CTASection } from '@/components/CTASection'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero Section with Carousel */}
      <section className="relative pt-4 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroCarousel />

          {/* Trust Indicators Below Carousel */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-background rounded-lg p-4 sm:p-6 text-center border border-secondary-light/20">
              <p className="text-base sm:text-lg font-semibold text-primary mb-1">Trusted by 50+</p>
              <p className="text-sm sm:text-base text-dark-bg/70">Food businesses in Lagos</p>
            </div>
            <div className="bg-background rounded-lg p-4 sm:p-6 text-center border border-secondary-light/20">
              <p className="text-base sm:text-lg font-semibold text-primary mb-1">Fast Delivery</p>
              <p className="text-sm sm:text-base text-dark-bg/70">Across Lagos & surroundings</p>
            </div>
            <div className="bg-background rounded-lg p-4 sm:p-6 text-center border border-secondary-light/20">
              <p className="text-base sm:text-lg font-semibold text-primary mb-1">Quality Assured</p>
              <p className="text-sm sm:text-base text-dark-bg/70">Premium products guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Products Preview Section */}
      <ProductsPreviewSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </main>
  )
}
