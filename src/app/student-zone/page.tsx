import { Download, FileText, Video, BookOpen, Calendar, Users, Award, Clock } from 'lucide-react';

const resources = [
  {
    id: '1',
    title: 'Student Handbook',
    description: 'Complete guide to student policies, procedures, and campus life',
    type: 'PDF',
    size: '2.5 MB',
    icon: FileText,
    downloads: 1250
  },
  {
    id: '2',
    title: 'Course Materials',
    description: 'Downloadable study materials, notes, and reference documents',
    type: 'ZIP',
    size: '15.2 MB',
    icon: BookOpen,
    downloads: 890
  },
  {
    id: '3',
    title: 'Video Lectures',
    description: 'Recorded lectures and tutorial videos for all courses',
    type: 'MP4',
    size: '45.8 MB',
    icon: Video,
    downloads: 2100
  },
  {
    id: '4',
    title: 'Assignment Templates',
    description: 'Standard templates for assignments and projects',
    type: 'DOC',
    size: '1.2 MB',
    icon: FileText,
    downloads: 567
  }
];

const quickLinks = [
  { title: 'Academic Calendar', href: '#', icon: Calendar },
  { title: 'Student Portal', href: '#', icon: Users },
  { title: 'Achievement Certificates', href: '#', icon: Award },
  { title: 'Study Schedule', href: '#', icon: Clock }
];

export default function StudentZonePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Student Zone</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Access all the resources you need to succeed in your academic journey. 
            Download materials, view schedules, and stay connected with your learning community.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Quick Access</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <link.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                  {link.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learning Resources</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Download essential materials and resources to support your studies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <resource.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="bg-gray-100 px-2 py-1 rounded">{resource.type}</span>
                      <span>{resource.size}</span>
                      <span>{resource.downloads} downloads</span>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Support */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Student Support Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;re here to help you succeed in your academic journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Advising</h3>
              <p className="text-gray-600">
                Get personalized guidance on course selection, career planning, and academic goals
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Study Support</h3>
              <p className="text-gray-600">
                Access tutoring services, study groups, and learning resources to enhance your performance
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Career Services</h3>
              <p className="text-gray-600">
                Connect with industry professionals and access career development resources
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Our student support team is here to assist you with any questions or concerns
          </p>
          <button className="bg-yellow-400 text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
}
