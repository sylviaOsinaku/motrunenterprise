'use client'

import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  const handleWhatsApp = () => {
    const phoneNumber = '2347057589549' // Replace with actual WhatsApp number
    const message = encodeURIComponent('Hello Motrun Enterprises Limited! I\'d like to inquire about bulk frozen food supply.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all animate-bounce"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  )
}
