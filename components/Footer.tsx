import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-dark-bg text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">MF</span>
              </div>
              <span className="font-bold text-lg">MoturanroFish</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for premium bulk frozen seafood and fish supply in Lagos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="/" className="text-gray-700 hover:text-primary transition-colors space-y-2">
                Home
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-primary transition-colors space-y-2">
                Products
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary transition-colors ">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="+2347057589549"
                className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
               +234 705 758 9549
              </a>
              <a
                href="https://wa.me/2347057589549"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="mailto:info@moturanrofish.com"
                className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                info@moturanrofish.com
              </a>
              <div className="flex items-start gap-2 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/20 hover:bg-primary p-2 rounded-full transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/20 hover:bg-primary p-2 rounded-full transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/20 hover:bg-primary p-2 rounded-full transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>&copy; 2024 MoturanroFish & Co. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Import for MessageCircle
import { MessageCircle } from 'lucide-react'
