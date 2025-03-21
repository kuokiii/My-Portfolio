"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Instagram, Phone, Send } from "lucide-react"

export function ContactForm() {
  const [contactMethod, setContactMethod] = useState<"email" | "instagram" | "phone">("email")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create a mailto link with the form data
    const subject = encodeURIComponent("Portfolio Contact Request")
    const body = encodeURIComponent(`
    Email: ${email}
    Message: ${message}
    Contact Method: ${contactMethod}
  `)

    // Open the user's email client with the pre-filled email
    window.location.href = `mailto:niruwu2006@gmail.com?subject=${subject}&body=${body}`

    // Optionally reset the form
    setEmail("")
    setMessage("")
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setContactMethod("email")}
          className={`flex items-center p-2 rounded-lg ${contactMethod === "email" ? "bg-[#FF90E8] text-black font-bold" : "bg-white"}`}
        >
          <Mail className="w-4 h-4 mr-2" />
          Email
        </button>
        <button
          onClick={() => setContactMethod("instagram")}
          className={`flex items-center p-2 rounded-lg ${contactMethod === "instagram" ? "bg-[#c5a1ff] text-black font-bold" : "bg-white"}`}
        >
          <Instagram className="w-4 h-4 mr-2" />
          Instagram
        </button>
        <button
          onClick={() => setContactMethod("phone")}
          className={`flex items-center p-2 rounded-lg ${contactMethod === "phone" ? "bg-[#90E9FF] text-black font-bold" : "bg-white"}`}
        >
          <Phone className="w-4 h-4 mr-2" />
          Phone
        </button>
      </div>

      {contactMethod === "email" && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border-3 border-black neu-border bg-white"
              placeholder="your.email@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border-3 border-black neu-border bg-white h-24"
              placeholder="Tell me about your project..."
              required
            />
          </div>
          <button
            type="submit"
            className="neu-button bg-[#FF90E8] dark:bg-[#FF90E8] text-black px-8 py-3 rounded-full text-sm font-bold mx-auto border-[3px] border-black flex items-center"
          >
            Send Message
            <Send className="w-4 h-4 ml-2" />
          </button>
        </form>
      )}

      {contactMethod === "instagram" && (
        <div className="text-center p-4 neu-border bg-white">
          <p className="mb-4">Connect with me on Instagram:</p>
          <a
            href="https://instagram.com/_kuoki/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center neu-button px-6 py-3 bg-[#c5a1ff] text-black font-bold mx-auto"
          >
            <Instagram className="w-4 h-4 mr-2" />
            @_kuoki
          </a>
        </div>
      )}

      {contactMethod === "phone" && (
        <div className="text-center p-4 neu-border bg-white">
          <p className="mb-4">Call or text me directly:</p>
          <a
            href="tel:+917318876896"
            className="flex items-center justify-center neu-button px-6 py-3 bg-[#90E9FF] text-black font-bold mx-auto"
          >
            <Phone className="w-4 h-4 mr-2" />
            +91 7318876896
          </a>
        </div>
      )}
    </div>
  )
}

