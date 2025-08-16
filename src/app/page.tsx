import Link from 'next/link';
import {
  Users,
  Image,
  Mail,
  BookOpen,
  UserCheck,
  ArrowRight,
  Star,
  Award,
  Target,
  GraduationCap,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Download,
  FileText,
  Video,
  Camera,
  Heart,
  Shield,
  Globe,
  Lightbulb
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 relative">
              <img
                src={process.env.NODE_ENV === 'production' ? '/navyug-trust/navyug-logo.jpeg' : '/navyug-logo.jpeg'}
                alt="Navyug Trust Logo"
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-yellow-300">Navyug Trust</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Empowering students with quality education and fostering academic excellence 
            through innovative learning approaches and dedicated mentorship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#courses" 
              className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center space-x-2"
            >
              <span>Explore Courses</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <a 
              href="#about" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">5000+</div>
              <div className="text-gray-600">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <BookOpen className="h-12 w-12 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Courses Offered</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Target className="h-12 w-12 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Navyug Trust</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our journey, mission, and commitment to educational excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
              <p className="text-gray-600 mb-6">
                Founded in 1999, Navyug Trust has been at the forefront of educational innovation 
                for over two decades. We believe that every student deserves access to quality 
                education that prepares them for the challenges of tomorrow.
              </p>
              <p className="text-gray-600 mb-6">
                Our commitment to academic excellence, combined with innovative teaching methods 
                and dedicated faculty, has helped thousands of students achieve their dreams and 
                build successful careers.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Student-Centered Approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Quality Assurance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Global Perspective</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Innovation Focus</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h4>
                <p className="text-gray-700 mb-6">
                  To provide accessible, high-quality education that empowers students to become 
                  confident, competent, and compassionate individuals ready to make a positive 
                  impact in the world.
                </p>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h4>
                <p className="text-gray-700">
                  To be a leading educational institution recognized for excellence, innovation, 
                  and commitment to student success, shaping the future of education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of educational programs designed for your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course Cards */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8">
                <div className="inline-flex p-3 rounded-lg mb-6 bg-blue-500 text-white">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Computer Science</h3>
                <p className="text-gray-600 mb-4">
                  Master programming, algorithms, and software development with hands-on projects.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>2 Years</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>120 Students</span>
                  </div>
                </div>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8">
                <div className="inline-flex p-3 rounded-lg mb-6 bg-green-500 text-white">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Administration</h3>
                <p className="text-gray-600 mb-4">
                  Develop leadership skills and business acumen for the modern corporate world.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>3 Years</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>85 Students</span>
                  </div>
                </div>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8">
                <div className="inline-flex p-3 rounded-lg mb-6 bg-purple-500 text-white">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Science</h3>
                <p className="text-gray-600 mb-4">
                  Learn data analysis, machine learning, and statistical modeling techniques.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>1.5 Years</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>65 Students</span>
                  </div>
                </div>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Zone Section */}
      <section id="student-zone" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Student Zone</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access all the resources you need for your academic journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex p-3 rounded-lg mb-6 bg-blue-500 text-white">
                <Download className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Study Materials</h3>
              <p className="text-gray-600 mb-4">
                Access comprehensive study guides, lecture notes, and reference materials.
              </p>
              <a href="#" className="text-blue-600 font-medium hover:text-blue-700">
                Download Now →
              </a>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex p-3 rounded-lg mb-6 bg-green-500 text-white">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Calendar</h3>
              <p className="text-gray-600 mb-4">
                Stay updated with important dates, exams, and academic events.
              </p>
              <a href="#" className="text-green-600 font-medium hover:text-green-700">
                View Calendar →
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex p-3 rounded-lg mb-6 bg-purple-500 text-white">
                <FileText className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Assignment Portal</h3>
              <p className="text-gray-600 mb-4">
                Submit assignments, track grades, and communicate with instructors.
              </p>
              <a href="#" className="text-purple-600 font-medium hover:text-purple-700">
                Access Portal →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore moments from our campus life, events, and student activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                <Camera className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Graduation Ceremony 2024</h3>
                <p className="text-gray-600 mb-4">
                  Celebrating the achievements of our graduating class with pride and joy.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">December 2024</span>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                    View Photos →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                <Users className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Student Workshops</h3>
                <p className="text-gray-600 mb-4">
                  Interactive workshops and skill development sessions for our students.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">November 2024</span>
                  <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                    View Photos →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-purple-400 to-violet-500 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Library & Study Areas</h3>
                <p className="text-gray-600 mb-4">
                  Modern library facilities and comfortable study spaces for students.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">October 2024</span>
                  <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
                    View Photos →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with us for inquiries, support, or to learn more about our programs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <p className="text-gray-600 mb-8">
                  We&apos;re here to help and answer any questions you might have. 
                  We look forward to hearing from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      123 Education Street<br />
                      Learning City, LC 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">
                      +1 (555) 123-4567<br />
                      +1 (555) 123-4568
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">
                      info@navyugtrust.edu<br />
                      admissions@navyugtrust.edu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Login Section */}
      <section id="student-login" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Student Portal</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access your student dashboard and manage your academic journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Login</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-2">
                    Student ID
                  </label>
                  <input
                    type="text"
                    id="studentId"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your student ID"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Login to Portal
                </button>
              </form>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">New Student Registration</h3>
              <p className="text-gray-600 mb-6">
                Don&apos;t have an account? Register now to access all student resources and services.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="regFirstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="regFirstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="regLastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="regLastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="regEmail" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="regEmail"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
