'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import logo from '../public/images/motunlogo.jpg'
import Image from 'next/image'
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLogoClick = () => {
    window.location.href = '/'
  }

  const links = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-secondary-light shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:bg-primary-dark transition-colors cursor-pointer">
             <Image src={logo} alt='Moturnayo Logo Enterprise'/>
            </div>
            <span className="hidden sm:inline font-bold text-lg text-dark-bg cursor-pointer">
              MotrunfrozenFoods
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-dark-bg hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex gap-3">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <a href="https://wa.me/2347057589549" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
            <Button
              asChild
              className="bg-primary hover:bg-primary-dark text-white"
            >
              <a href="/contact">Order Now</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-background rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-dark-bg" />
            ) : (
              <Menu className="w-6 h-6 text-dark-bg" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-secondary-light">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-dark-bg hover:bg-background transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 py-3 flex gap-2">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-white w-full"
              >
                <a href="https://wa.me/2347057589549" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="sm"
                className="bg-primary hover:bg-primary-dark text-white w-full"
              >
                <a href="/contact">Order</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
