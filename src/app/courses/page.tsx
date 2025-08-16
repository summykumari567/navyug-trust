import { BookOpen, Clock, Users, Star, Filter, Search } from 'lucide-react';
import { Course } from '@/types';

const courses: Course[] = [
  {
    id: '1',
    title: 'Advanced Mathematics',
    description: 'Comprehensive course covering advanced mathematical concepts including calculus, linear algebra, and differential equations.',
    duration: '6 months',
    category: 'Mathematics',
    image: '/api/placeholder/300/200',
    price: 1200
  },
  {
    id: '2',
    title: 'Computer Science Fundamentals',
    description: 'Introduction to programming, algorithms, and computer science principles for beginners.',
    duration: '8 months',
    category: 'Computer Science',
    image: '/api/placeholder/300/200',
    price: 1500
  },
  {
    id: '3',
    title: 'English Literature',
    description: 'Explore classic and contemporary literature, develop critical thinking and analytical skills.',
    duration: '4 months',
    category: 'Literature',
    image: '/api/placeholder/300/200',
    price: 800
  },
  {
    id: '4',
    title: 'Physics for Engineers',
    description: 'Applied physics concepts relevant to engineering applications and real-world problems.',
    duration: '7 months',
    category: 'Physics',
    image: '/api/placeholder/300/200',
    price: 1300
  },
  {
    id: '5',
    title: 'Business Management',
    description: 'Learn essential business skills including leadership, strategy, and organizational management.',
    duration: '5 months',
    category: 'Business',
    image: '/api/placeholder/300/200',
    price: 1100
  },
  {
    id: '6',
    title: 'Art & Design',
    description: 'Creative course covering various art forms, design principles, and artistic expression.',
    duration: '6 months',
    category: 'Arts',
    image: '/api/placeholder/300/200',
    price: 900
  }
];

const categories = ['All', 'Mathematics', 'Computer Science', 'Literature', 'Physics', 'Business', 'Arts'];

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Courses</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Discover our comprehensive range of educational programs designed to help you 
            achieve your academic and career goals.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-600" />
              <select className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video bg-gray-200 rounded-t-xl flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-gray-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {course.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">4.8</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{course.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>25 students</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">${course.price}</span>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of educational programs across various disciplines
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.slice(1).map((category) => (
              <div key={category} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
                <p className="text-sm text-gray-600 mt-2">Explore courses</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have already transformed their lives through our courses
          </p>
          <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
            Browse All Courses
          </button>
        </div>
      </section>
    </div>
  );
}
