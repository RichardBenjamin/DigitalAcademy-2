'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Have a question about our courses? Want to collaborate? We'd love to hear from you. Reach out and we'll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="p-8 bg-card border border-border rounded-lg text-center">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-muted-foreground">
                  <a href="mailto:hello@digitalacademy.com" className="hover:text-primary transition-colors">
                    hello@digitalacademy.com
                  </a>
                </p>
              </div>

              <div className="p-8 bg-card border border-border rounded-lg text-center">
                <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <p className="text-muted-foreground">
                  <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </p>
              </div>

              <div className="p-8 bg-card border border-border rounded-lg text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Office</h3>
                <p className="text-muted-foreground">
                  123 Tech Street<br />
                  San Francisco, CA 94107
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-lg p-8">
                {submitted && (
                  <div className="p-4 bg-secondary/20 border border-secondary text-secondary rounded-lg">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  >
                    <option value="">Select a subject...</option>
                    <option value="course-inquiry">Course Inquiry</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {[
                {
                  question: 'What is the refund policy?',
                  answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with a course, request a refund within 30 days of purchase and we\'ll process it immediately.',
                },
                {
                  question: 'Do I get a certificate after completing a course?',
                  answer: 'Yes! Upon completing a course, you\'ll receive a digital certificate of completion that you can share on LinkedIn and your resume.',
                },
                {
                  question: 'Can I access courses on mobile?',
                  answer: 'Absolutely. Our platform is fully responsive and works seamlessly on phones, tablets, and desktop computers.',
                },
                {
                  question: 'Are there any prerequisites for the courses?',
                  answer: 'Most courses are designed for beginners, though some advanced courses require foundational knowledge. Check individual course descriptions for specific prerequisites.',
                },
                {
                  question: 'How long do I have access to the courses?',
                  answer: 'You have lifetime access to all courses you enroll in. You can revisit materials, rewatch videos, and download resources anytime.',
                },
                {
                  question: 'Is there community support?',
                  answer: 'Yes! Each course has an active community forum where you can ask questions, connect with other students, and get help from instructors and mentors.',
                },
              ].map((faq, index) => (
                <details key={index} className="group bg-card border border-border rounded-lg p-6 cursor-pointer">
                  <summary className="flex items-center justify-between font-semibold hover:text-primary transition-colors">
                    <span>{faq.question}</span>
                    <span className="text-2xl leading-none group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <p className="text-muted-foreground mt-4">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-lg opacity-95 mb-8">
              Explore our courses and find the perfect one to start your tech journey.
            </p>
            <a
              href="/courses"
              className="inline-block px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Browse Courses
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
