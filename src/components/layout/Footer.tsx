import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Trust Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 relative">
                <Image
                  src="/navyug-logo.jpeg"
                  alt="Navyug Trust Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">Navyug Trust</span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering students with quality education and fostering academic excellence 
              through innovative learning approaches and dedicated mentorship.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>123 Education Street, Learning City, LC 12345</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>info@navyugtrust.edu</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-white transition-colors">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Student Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Student Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/student-zone" className="text-gray-300 hover:text-white transition-colors">
                  Student Zone
                </Link>
              </li>
              <li>
                <Link href="/student-login" className="text-gray-300 hover:text-white transition-colors">
                  Student Login
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-white transition-colors">
                  Course Catalog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Navyug Trust. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
