'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CarouselSlide {
  image: string
  title: string
  description: string
}

const slides: CarouselSlide[] = [
  {
    image: '/images/motun-1.jpg',
    title: 'Premium Bulk Frozen Seafood',
    description: 'Reliable supply for your business needs',
  },
  {
    image: '/images/motun-2.jpg',
    title: 'Professional Cold Storage',
    description: 'Quality guaranteed with proper handling',
  },
  {
    image: '/images/motun-3.jpg',
    title: 'Fast Lagos Delivery',
    description: 'Quick processing and consistent service',
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToSlide = (index: number) => {
    setCurrent(index)
    setIsAutoPlay(false)
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
  }

  const slide = slides[current]

  return (
    <div
      className="relative w-full h-96 sm:h-[500px] lg:h-[600px] overflow-hidden rounded-lg"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Slides */}
      {slides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance leading-tight">
              {s.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-100 mb-8 max-w-2xl text-balance">
              {s.description}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === current
                ? 'bg-primary w-8 h-2'
                : 'bg-white/40 hover:bg-white/60 w-2 h-2'
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
