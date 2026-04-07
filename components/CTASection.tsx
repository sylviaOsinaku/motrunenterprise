import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-16 sm:py-20 bg-dark-bg text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight text-primary">
          Ready to Stock Up Your Business?
        </h2>

        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-balance">
          Join 50+ businesses that trust Motrun for reliable, quality frozen food supply.
          Order today and experience the difference.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary-dark text-white text-base sm:text-lg h-12"
          >
            <Link href="/contact">Order Now</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
             className="bg-primary hover:bg-primary-dark text-white text-base sm:text-lg h-12"
          >
            <a
              href="https://wa.me/2347057589549"
              target="_blank"
              rel="noopener noreferrer"
               className="bg-primary hover:bg-primary-dark text-white text-base sm:text-lg h-12"
            >
              Chat on WhatsApp
            </a>
          </Button>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          We&apos;ll respond within minutes during business hours
        </p>
      </div>
    </section>
  )
}
