import {
  Users,
  Mail,
  BookOpen,
  ArrowRight,
  GraduationCap,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Heart,
  Leaf,
  Stethoscope,
  Baby,
  Sparkles,
  Target,
  Eye,
  Flag
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 relative">
              <img
                src={process.env.NODE_ENV === 'production' ? '/navyug-trust/navyug-logo.jpeg' : 'navyug-logo.jpeg'}
                alt="Navyug Health and Educare Trust Logo"
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-yellow-300">Navyug Health and Educare Trust</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            Empowering rural communities through education, health, skills, and sustainable practices since 2010
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#about" 
              className="bg-yellow-400 text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center space-x-2"
            >
              <span>Learn More</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <a 
              href="#contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-colors"
            >
              Contact Us
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
                <Calendar className="h-12 w-12 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">14+</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Baby className="h-12 w-12 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
              <div className="text-gray-600">Children Educated</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Women Empowered</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Heart className="h-12 w-12 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Health Camps</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Navyug Health and Educare Trust</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dedicated to uplifting rural communities through comprehensive development programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
              <p className="text-gray-600 mb-6">
                Established in 2010 in Village Siwan, Aurangabad, Bihar, Navyug Health and Educare Trust 
                has been working tirelessly to transform the lives of rural communities through our 
                four core focus areas.
              </p>
              <p className="text-gray-600 mb-6">
                We believe in creating sustainable change by addressing the fundamental needs of 
                education, health, women empowerment, and environmental conservation in rural areas.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Education First</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Health & Wellness</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Women Empowerment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Leaf className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Sustainable Practices</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              {/* AIM Section */}
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border-l-4 border-red-500">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">AIM</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To empower rural communities through education, health, skills, and sustainable practices, 
                  creating opportunities for a better future for women and children.
                </p>
              </div>

              {/* VISION Section */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">VISION</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To be a leading organization in rural development, recognized for our commitment to 
                  education, health, women empowerment, and environmental sustainability.
                </p>
              </div>

              {/* MISSION Section */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-500">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Flag className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">MISSION</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To organize, support, and facilitate comprehensive development programs, train community members, 
                  raise awareness, and provide necessary infrastructure and resources to ensure sustainable 
                  development for all rural communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section id="focus-areas" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Focus Areas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four pillars of development that drive our mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Primary Education */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8">
                <div className="inline-flex p-3 rounded-lg mb-6 bg-blue-500 text-white">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Primary Education</h3>
                <p className="text-gray-600 mb-4">
                  Providing access to basic education for underprivileged children in rural areas, 
                  focusing on literacy, numeracy, and overall development.
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Skill Development & Women Empowerment */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8">
                <div className="inline-flex p-3 rounded-lg mb-6 bg-purple-500 text-white">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Women Empowerment</h3>
                <p className="text-gray-600 mb-4">
                  Training programs to make women self-reliant with support for livelihood opportunities 
                  and skill development initiatives.
                </p>
                <div className="flex items-center text-purple-600 font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Environment Safety & Sustainable Practices */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8">
                <div className="inline-flex p-3 rounded-lg mb-6 bg-green-500 text-white">
                  <Leaf className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Environmental Safety</h3>
                <p className="text-gray-600 mb-4">
                  Awareness campaigns on environmental protection, promotion of organic farming, 
                  and cultivation of medicinal plants for sustainable development.
                </p>
                <div className="flex items-center text-green-600 font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Health Initiatives */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8">
                <div className="inline-flex p-3 rounded-lg mb-6 bg-red-500 text-white">
                  <Stethoscope className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Health Initiatives</h3>
                <p className="text-gray-600 mb-4">
                  Organizing health camps in rural and tribal areas, providing medical support 
                  and health awareness programs.
                </p>
                <div className="flex items-center text-red-600 font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs designed to create lasting impact in rural communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Education Program */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex p-3 rounded-lg mb-6 bg-blue-500 text-white">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Education Program</h3>
              <p className="text-gray-600 mb-4">
                Free primary education for underprivileged children with focus on quality learning 
                and holistic development.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>Year-round</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Users className="h-4 w-4" />
                  <span>100+ Children</span>
                </div>
              </div>
              <a href="#" className="text-blue-600 font-medium hover:text-blue-700">
                Learn More →
              </a>
            </div>

            {/* Women Empowerment Program */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex p-3 rounded-lg mb-6 bg-purple-500 text-white">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Women Empowerment</h3>
              <p className="text-gray-600 mb-4">
                Skill development training, livelihood support, and entrepreneurship programs 
                to make women self-reliant.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>Ongoing</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Users className="h-4 w-4" />
                  <span>200+ Women</span>
                </div>
              </div>
              <a href="#" className="text-purple-600 font-medium hover:text-purple-700">
                Learn More →
              </a>
            </div>

            {/* Health & Environment Program */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex p-3 rounded-lg mb-6 bg-green-500 text-white">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Health & Environment</h3>
              <p className="text-gray-600 mb-4">
                Regular health camps, environmental awareness, and sustainable farming practices 
                for community wellness.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>Quarterly</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Users className="h-4 w-4" />
                  <span>500+ Beneficiaries</span>
                </div>
              </div>
              <a href="#" className="text-green-600 font-medium hover:text-green-700">
                Learn More →
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
              Glimpses of our work and impact in rural communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Primary Education */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img
                  src={process.env.NODE_ENV === 'production' ? '/navyug-trust/Primary-Education.jpeg' : 'Primary-Education.jpeg'}
                  alt="Primary Education Classes"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Education Classes</h3>
                <p className="text-gray-600 mb-4">
                  Children learning and growing in our primary education program.
                </p>
                <div className="flex items-center justify-end">
                  <span className="text-sm text-gray-500">2024</span>
                </div>
              </div>
            </div>

            {/* Skill Development Training */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img
                  src={process.env.NODE_ENV === 'production' ? '/navyug-trust/Training.jpeg' : 'Training.jpeg'}
                  alt="Skill Development Training"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Skill Development Training</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive skill development and empowerment programs for rural communities, 
                  focusing on both men and women for sustainable livelihood.
                </p>
                <div className="flex items-center justify-end">
                  <span className="text-sm text-gray-500">2024</span>
                </div>
              </div>
            </div>

            {/* Skill Training Center */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img
                  src={process.env.NODE_ENV === 'production' ? '/navyug-trust/Skill-Training-Center.jpeg' : 'Skill-Training-Center.jpeg'}
                  alt="Skill Training Center"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Skill Training Center</h3>
                <p className="text-gray-600 mb-4">
                  Dedicated training facilities for skill development and vocational training programs.
                </p>
                <div className="flex items-center justify-end">
                  <span className="text-sm text-gray-500">2024</span>
                </div>
              </div>
            </div>

            {/* Health Camps */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img
                  src={process.env.NODE_ENV === 'production' ? '/navyug-trust/Health-Camp.png' : 'Health-Camp.png'}
                  alt="Health Camps"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Health Camps</h3>
                <p className="text-gray-600 mb-4">
                  Medical camps and environmental awareness programs.
                </p>
                <div className="flex items-center justify-end">
                  <span className="text-sm text-gray-500">2024</span>
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
              Get in touch with us to learn more about our programs or to support our mission
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <p className="text-gray-600 mb-8">
                  We&apos;re here to help and answer any questions you might have about our programs 
                  or how you can support our mission.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Address</h4>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Permanent Address:</p>
                        <p className="text-gray-600">
                          At Siwan, Barpa, Pauthu<br />
                          Aurangabad, Bihar<br />
                          Pin Code: 824114
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Head Office:</p>
                        <p className="text-gray-600">
                          Near Brahmarshi Chowk<br />
                          Shri Krishna Nagar<br />
                          Aurangabad, Bihar<br />
                          Pin Code: 824101
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">
                      +91 9334129333
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">
                      info@navyughealtheducare.org<br />
                      contact@navyughealtheducare.org
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Support Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join us in creating positive change in rural communities
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Volunteer With Us</h3>
              <p className="text-gray-600 mb-6">
                We welcome volunteers who want to contribute their time and skills to our various programs. 
                Whether it&apos;s teaching, healthcare, or environmental work, your help makes a difference.
              </p>
              <form className="space-y-6">
                <div>
                  <label htmlFor="volName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="volName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="volEmail" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="volEmail"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Join as Volunteer
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
