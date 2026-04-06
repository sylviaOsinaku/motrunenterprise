'use client'

import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { AIChat } from '@/components/AIChat'

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 left-6 z-40 bg-primary hover:bg-primary-dark text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all ${
          isOpen ? 'hidden' : 'block'
        }`}
        aria-label="Open AI chat"
        title="Ask MoturanroFish AI Assistant"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      <AIChat isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
