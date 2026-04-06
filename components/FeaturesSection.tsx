import { Check, Truck, Snowflake, Users, DollarSign, Clock } from 'lucide-react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <Snowflake className="w-6 h-6" />,
    title: 'Premium Quality',
    description: 'Premium quality frozen products maintained with strict hygiene and storage standards',
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: 'Fast Delivery',
    description: 'Reliable and consistent delivery across Lagos with quick processing times',
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Competitive Pricing',
    description: 'Attractive bulk pricing that helps improve your business margins',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Reliable Supply',
    description: 'Dependable supply chain ensures you never run out of stock',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Expert Support',
    description: 'Professional team ready to assist with your bulk ordering needs',
  },
  {
    icon: <Check className="w-6 h-6" />,
    title: 'Quality Guaranteed',
    description: 'Every product is inspected and guaranteed to meet our high standards',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-bg mb-4 text-balance">
            Why Choose Motrun?
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto text-balance">
            We&apos;re committed to providing premium quality frozen foods with reliable service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 sm:p-8 hover:shadow-lg transition-all border border-secondary-light/20"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-dark-bg mb-2">
                {feature.title}
              </h3>
              <p className="text-dark-bg/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
