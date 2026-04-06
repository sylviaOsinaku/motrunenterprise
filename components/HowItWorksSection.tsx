import { ShoppingCart, Smartphone, Truck } from 'lucide-react'

interface Step {
  icon: React.ReactNode
  number: number
  title: string
  description: string
}

const steps: Step[] = [
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    number: 1,
    title: 'Browse or Select Products',
    description: 'Check out our premium selection of frozen fish and seafood with detailed product information',
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    number: 2,
    title: 'Place Your Order',
    description: 'Submit your order through our form or chat with us on WhatsApp for quick assistance',
  },
  {
    icon: <Truck className="w-8 h-8" />,
    number: 3,
    title: 'Fast Delivery',
    description: 'We process and deliver your order quickly across Lagos with full cold chain support',
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-bg mb-4 text-balance">
            How It Works
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto text-balance">
            Simple, fast, and reliable process from order to delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="bg-background rounded-lg p-8 text-center h-full border border-secondary-light/20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  {step.icon}
                </div>

                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold text-lg mb-4">
                  {step.number}
                </div>

                <h3 className="text-2xl font-semibold text-dark-bg mb-3">
                  {step.title}
                </h3>

                <p className="text-dark-bg/70 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/20 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
