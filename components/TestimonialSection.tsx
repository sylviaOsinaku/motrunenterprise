import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface Testimonial {
  text: string
  author: string
  business: string
  location: string
}

const testimonials: Testimonial[] = [
  {
    text: 'Motrun has completely changed how we stock our kitchen. Always fresh, always on time. Their reliability is unmatched.',
    author: 'Chioma Okafor',
    business: 'Restaurant Owner',
    location: 'Lekki',
  },
  {
    text: 'Reliable supplier. No delays, no quality issues. This is exactly what we needed for our food business.',
    author: 'Segun Adebayo',
    business: 'Food Vendor',
    location: 'Yaba',
  },
  {
    text: 'Their bulk pricing helps our margins a lot. Consistent quality and fast delivery makes them our go-to supplier.',
    author: 'Amara Obi',
    business: 'Catering Business',
    location: 'VI',
  },
]

export function TestimonialSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-bg mb-4 text-balance">
            Trusted by 50+ Businesses
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto text-balance">
            See what our customers have to say about our service, quality, and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-background border-0 shadow-md hover:shadow-lg transition-shadow p-6 sm:p-8 flex flex-col h-full"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-dark-bg text-base sm:text-lg leading-relaxed mb-6 flex-grow">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author Info */}
              <div className="border-t border-secondary-light pt-4">
                <p className="font-semibold text-dark-bg">{testimonial.author}</p>
                <p className="text-sm text-neutral-400">
                  {testimonial.business}, {testimonial.location}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
