'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

interface FormData {
  name: string
  phone: string
  business: string
  productInterest: string
  quantity: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    business: '',
    productInterest: '',
    quantity: '',
    message: '',
  })

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!formData.name || !formData.phone || !formData.productInterest) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields.',
      })
      return
    }

    setStatus({ type: 'loading', message: 'Sending your inquiry...' })

    try {
      // Send to API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! We\'ve received your inquiry. We\'ll respond within minutes.',
        })
        setFormData({
          name: '',
          phone: '',
          business: '',
          productInterest: '',
          quantity: '',
          message: '',
        })
      } else {
        setStatus({
          type: 'error',
          message: 'Failed to send inquiry. Please try again or contact us on WhatsApp.',
        })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'An error occurred. Please try again or contact us on WhatsApp.',
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-dark-bg mb-2">
          Full Name <span className="text-primary">*</span>
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Adebayo Darasimi"
          required
          className="w-full px-4 py-3 rounded-lg border border-secondary-light focus:border-primary focus:outline-none bg-white text-dark-bg"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-dark-bg mb-2">
          Phone Number <span className="text-primary">*</span>
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+234 700 000 0000"
          required
          className="w-full px-4 py-3 rounded-lg border border-secondary-light focus:border-primary focus:outline-none bg-white text-dark-bg"
        />
      </div>

      {/* Business Name */}
      <div>
        <label htmlFor="business" className="block text-sm font-semibold text-dark-bg mb-2">
          Business Name
        </label>
        <Input
          id="business"
          name="business"
          type="text"
          value={formData.business}
          onChange={handleChange}
          placeholder="Your Restaurant/Vendor Name"
          className="w-full px-4 py-3 rounded-lg border border-secondary-light focus:border-primary focus:outline-none bg-white text-dark-bg"
        />
      </div>

      {/* Product Interest */}
      <div>
        <label htmlFor="productInterest" className="block text-sm font-semibold text-dark-bg mb-2">
          Product Interest <span className="text-primary">*</span>
        </label>
        <select
          id="productInterest"
          name="productInterest"
          value={formData.productInterest}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-secondary-light focus:border-primary focus:outline-none bg-white text-dark-bg"
        >
          <option value="">Select a product category</option>
          <option value="hake">Hake (Panla)</option>
          <option value="pacu">Pacu (Owere)</option>
          <option value="chicken">Nigerian Soft Chicken</option>
          <option value="mackerel">Mackerel (Titus)</option>
          <option value="horse-mackerel">Horse Mackerel (Kote)</option>
          <option value="herring">Herring (Shawa)</option>
          <option value="mullet">Mullet (Atoko)</option>
          <option value="croaker">Large Croaker</option>
          <option value="mixed">Mixed/Custom Order</option>
        </select>
      </div>

      {/* Quantity */}
      <div>
        <label htmlFor="quantity" className="block text-sm font-semibold text-dark-bg mb-2">
          Quantity Needed
        </label>
        <Input
          id="quantity"
          name="quantity"
          type="text"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="e.g., 100kg per month"
          className="w-full px-4 py-3 rounded-lg border border-secondary-light focus:border-primary focus:outline-none bg-white text-dark-bg"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-dark-bg mb-2">
          Additional Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Any specific requirements or questions?"
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-secondary-light focus:border-primary focus:outline-none bg-white text-dark-bg"
        />
      </div>

      {/* Status Message */}
      {status.type !== 'idle' && (
        <div
          className={`p-4 rounded-lg ${
            status.type === 'success'
              ? 'bg-green-50 border border-green-200 text-green-700'
              : status.type === 'error'
              ? 'bg-red-50 border border-red-200 text-red-700'
              : 'bg-blue-50 border border-blue-200 text-blue-700'
          }`}
        >
          {status.message}
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={status.type === 'loading'}
        className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
      >
        {status.type === 'loading' ? 'Sending...' : 'Send Inquiry'}
      </Button>

      <p className="text-sm text-center text-neutral-400">
        We typically respond within minutes. Prefer WhatsApp?{' '}
        <a
          href="https://wa.me/2347000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-semibold"
        >
          Chat with us directly
        </a>
      </p>
    </form>
  )
}
