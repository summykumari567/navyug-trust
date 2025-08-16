import { GraduationCap, Target, Users, Award, Clock, MapPin } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Navyug Trust</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Empowering students with quality education and fostering academic excellence 
            through innovative learning approaches and dedicated mentorship.
          </p>
        </div>
      </section>

      {/* Trust Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 1999, Navyug Trust has been at the forefront of educational innovation 
                for over two decades. What started as a small initiative has grown into a 
                comprehensive educational institution that has touched the lives of thousands of students.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey began with a simple yet powerful vision: to make quality education 
                accessible to every student, regardless of their background or circumstances. 
                Today, we continue to uphold this mission while adapting to the evolving 
                educational landscape.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Established</div>
                    <div className="text-gray-600">1999</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Students</div>
                    <div className="text-gray-600">5000+</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-100 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <GraduationCap className="h-12 w-12 text-blue-600" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Navyug Trust</h3>
                    <p className="text-blue-600">Education Excellence Since 1999</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">123 Education Street, Learning City</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">Accredited by National Education Board</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Guiding principles that drive our commitment to educational excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="h-12 w-12 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To provide accessible, high-quality education that empowers students to achieve 
                their full potential and become responsible, contributing members of society.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Foster academic excellence and critical thinking</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Promote inclusive education for all students</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Develop character and leadership skills</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <GraduationCap className="h-12 w-12 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To be a leading educational institution that sets the standard for academic 
                excellence, innovation, and student success in the region.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Innovative learning methodologies</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Technology-driven education</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Global perspective and local relevance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The fundamental principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from teaching to student support
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of honesty, transparency, and ethical behavior
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace new ideas and technologies to enhance the learning experience
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
