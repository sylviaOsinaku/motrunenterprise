'use client'

// AI Chat Component - Handles real-time customer support conversations
import { useRef, useEffect, useState, FormEvent, ChangeEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { X, Send, MessageCircle } from 'lucide-react'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

interface AIChatProps {
  isOpen: boolean
  onClose: () => void
}

export function AIChat({ isOpen, onClose }: AIChatProps) {
  const [input, setInput] = useState<string>('')
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!input || !input.trim() || isLoading) {
      return
    }

    const userMessage = input.trim()
    setInput('')
    
    const updatedMessages: ChatMessage[] = [
      ...messages,
      { role: 'user', content: userMessage }
    ]
    setMessages(updatedMessages)
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const reader = response.body?.getReader()
      if (!reader) {
        throw new Error('No response stream')
      }

      const decoder = new TextDecoder()
      let assistantMessage = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value)
        const lines = chunk.split('\n')

        for (const line of lines) {
          if (line.startsWith('data:')) {
            try {
              const jsonStr = line.slice(5)
              const json = JSON.parse(jsonStr)
              if (json.type === 'text-delta' && json.delta) {
                assistantMessage += json.delta
              }
            } catch {
              // Skip invalid JSON
            }
          }
        }
      }

      if (assistantMessage) {
        setMessages([...updatedMessages, { role: 'assistant', content: assistantMessage }])
      }
    } catch (error) {
      console.error('Chat error:', error)
      setMessages([
        ...updatedMessages,
        { role: 'assistant', content: 'Sorry, I encountered an error. Please try again or contact us on WhatsApp.' }
      ])
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-20 right-4 w-full max-w-sm h-96 bg-card rounded-lg shadow-lg border border-border flex flex-col z-50">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h3 className="font-semibold text-foreground">Motrun Assistant</h3>
        <button
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close chat"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <MessageCircle className="w-12 h-12 text-primary/30 mb-2" />
            <p className="text-foreground font-semibold mb-1">Hello!</p>
            <p className="text-sm text-muted-foreground">
              Ask me anything about our frozen fish and seafood products, pricing, delivery, or ordering process.
            </p>
          </div>
        )}
        
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background border border-border text-foreground'
              }`}
            >
              <div className="text-sm whitespace-pre-wrap">
                {msg.content}
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-background border border-border text-foreground px-4 py-2 rounded-lg">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-border">
        <div className="flex gap-2 mb-2">
          <Input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Ask your question..."
            disabled={isLoading}
            className="flex-1 rounded-lg border border-border"
          />
          <Button
            type="submit"
            disabled={(input?.length ?? 0) === 0 || isLoading}
            className="bg-primary hover:bg-secondary text-primary-foreground px-3 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Send message"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Need immediate help?{' '}
          <a 
            href="https://wa.me/2347057589549" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary hover:underline"
          >
            Chat on WhatsApp
          </a>
        </p>
      </form>
    </div>
  )
}
