import Link from 'next/link'
import { Mail, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20 border-t border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center text-primary font-bold">
                DA
              </div>
              Digital Academy
            </Link>
            <p className="text-sm opacity-90">
              Empowering learners to master tech skills and transform their careers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-primary-foreground/20 rounded-lg hover:bg-primary-foreground/30 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/20 rounded-lg hover:bg-primary-foreground/30 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/20 rounded-lg hover:bg-primary-foreground/30 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-sm text-center opacity-75">
            © 2024 Digital Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
