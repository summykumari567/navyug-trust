import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Trust Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 relative">
                <img
                  src="/navyug-trust/navyug-logo.jpeg"
                  alt="Navyug Health and Educare Trust Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">Navyug Health and Educare Trust</span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering rural communities through education, health, skills, and sustainable practices 
              since 2010. Dedicated to uplifting women and children through comprehensive development programs.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Village Siwan, Aurangabad, Bihar, India</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+91 (XXX) XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>info@navyughealtheducare.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#focus-areas" className="text-gray-300 hover:text-white transition-colors">
                  Focus Areas
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs & Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#programs" className="text-gray-300 hover:text-white transition-colors">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="#support" className="text-gray-300 hover:text-white transition-colors">
                  Support Us
                </Link>
              </li>
              <li>
                <Link href="#focus-areas" className="text-gray-300 hover:text-white transition-colors">
                  Focus Areas
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Navyug Health and Educare Trust. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
