import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { ContactForm } from '@/components/ContactForm'
import { Card } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata = {
  title: 'Contact Us - MoturanroFish & Co',
  description: 'Get in touch with MoturanroFish & Co for bulk frozen seafood orders and inquiries.',
}

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-dark-bg text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 text-balance">
            Have questions or ready to place an order? We&apos;re here to help. Reach out to us and we&apos;ll respond within minutes.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-dark-bg mb-8">Contact Information</h2>

              {/* Phone */}
              <Card className="bg-white p-6 rounded-lg border-0 shadow-sm mb-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-bg mb-1">Phone</h3>
                    <a
                      href="tel:+2347000000000"
                      className="text-primary hover:underline text-sm"
                    >
                      +234 700 000 0000
                    </a>
                  </div>
                </div>
              </Card>

              {/* WhatsApp */}
              <Card className="bg-white p-6 rounded-lg border-0 shadow-sm mb-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-green-100 text-green-600 flex-shrink-0 mt-1">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-bg mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/2347000000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline text-sm"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>
              </Card>

              {/* Email */}
              <Card className="bg-white p-6 rounded-lg border-0 shadow-sm mb-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary flex-shrink-0 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-bg mb-1">Email</h3>
                    <a
                      href="mailto:info@moturanrofish.com"
                      className="text-primary hover:underline text-sm"
                    >
                      info@moturanrofish.com
                    </a>
                  </div>
                </div>
              </Card>

              {/* Address */}
              <Card className="bg-white p-6 rounded-lg border-0 shadow-sm mb-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-bg mb-1">Address</h3>
                    <p className="text-dark-bg/70 text-sm">
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </Card>

              {/* Business Hours */}
              <Card className="bg-background p-6 rounded-lg border border-secondary-light/20">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-bg mb-2">Business Hours</h3>
                    <p className="text-dark-bg/70 text-sm">
                      Monday - Friday: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-dark-bg/70 text-sm">
                      Saturday: 9:00 AM - 5:00 PM
                    </p>
                    <p className="text-dark-bg/70 text-sm">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white p-8 sm:p-10 rounded-lg border-0 shadow-sm">
                <h2 className="text-2xl font-bold text-dark-bg mb-6">Send us a Message</h2>
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-bg mb-8 text-balance">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-semibold text-dark-bg mb-2">
                How do I place an order?
              </h3>
              <p className="text-dark-bg/70">
                You can place an order through our contact form, call us directly, or chat with us on WhatsApp. 
                We&apos;ll confirm your order and arrange delivery within 24-48 hours.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-semibold text-dark-bg mb-2">
                What is your delivery timeframe?
              </h3>
              <p className="text-dark-bg/70">
                We offer fast delivery across Lagos. Most orders are delivered within 24-48 hours of confirmation. 
                We maintain proper cold chain throughout delivery.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-semibold text-dark-bg mb-2">
                Do you offer discounts for bulk orders?
              </h3>
              <p className="text-dark-bg/70">
                Yes! We offer competitive bulk pricing. The larger your order, the better the price. 
                Contact us for a custom quote for your business needs.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-semibold text-dark-bg mb-2">
                Can you customize products for my business?
              </h3>
              <p className="text-dark-bg/70">
                Absolutely! We can discuss custom orders, packaging, and delivery schedules tailored to your 
                business requirements. Contact us to discuss your specific needs.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-semibold text-dark-bg mb-2">
                How do you ensure product quality?
              </h3>
              <p className="text-dark-bg/70">
                Every product is sourced from premium suppliers and stored in proper freezing conditions. 
                We inspect all products before delivery to guarantee quality and freshness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

import { MessageCircle } from 'lucide-react'
