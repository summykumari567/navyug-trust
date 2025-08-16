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
  Target
} from 'lucide-react';
import ImageComponent from 'next/image';

const categories = [
  {
    id: 'about',
    title: 'About',
    description: 'Learn about our trust, mission, and commitment to education excellence',
    icon: Users,
    href: '/about',
    color: 'bg-blue-500'
  },
  {
    id: 'courses',
    title: 'Courses',
    description: 'Explore our comprehensive range of educational programs and courses',
    icon: BookOpen,
    href: '/courses',
    color: 'bg-green-500'
  },
  {
    id: 'student-zone',
    title: 'Student Zone',
    description: 'Access student resources, downloads, and learning materials',
    icon: Users,
    href: '/student-zone',
    color: 'bg-purple-500'
  },
  {
    id: 'gallery',
    title: 'Gallery',
    description: 'View photos and videos from our events and activities',
    icon: Image,
    href: '/gallery',
    color: 'bg-orange-500'
  },
  {
    id: 'contact',
    title: 'Contact',
    description: 'Get in touch with us for inquiries and support',
    icon: Mail,
    href: '/contact',
    color: 'bg-red-500'
  },
  {
    id: 'student-login',
    title: 'Student Login',
    description: 'Access your student portal and personal dashboard',
    icon: UserCheck,
    href: '/student-login',
    color: 'bg-indigo-500'
  }
];

const stats = [
  { label: 'Years of Excellence', value: '25+', icon: Award },
  { label: 'Students Enrolled', value: '5000+', icon: Users },
  { label: 'Courses Offered', value: '50+', icon: BookOpen },
  { label: 'Success Rate', value: '95%', icon: Target }
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 relative">
              <ImageComponent
                src="/navyug-logo.jpeg"
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
            <Link
              href="/courses"
              className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center space-x-2"
            >
              <span>Explore Courses</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover everything Navyug Trust has to offer for students, educators, and the community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={category.href}
                className="group block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className={`inline-flex p-3 rounded-lg mb-6 ${category.color} text-white`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Highlights Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Navyug Trust?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We are committed to providing the best educational experience for our students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Star className="h-12 w-12 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence in Education</h3>
              <p className="text-gray-300">
                Our commitment to academic excellence ensures students receive the highest quality education
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Faculty</h3>
              <p className="text-gray-300">
                Learn from experienced educators who are passionate about student success
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Target className="h-12 w-12 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-300">
                Our track record of student success speaks for our effective teaching methods
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
