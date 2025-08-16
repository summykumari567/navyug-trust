import { Image, Filter, Calendar, Users } from 'lucide-react';
import { GalleryItem } from '@/types';

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Annual Sports Day 2024',
    image: '/api/placeholder/400/300',
    category: 'Events',
    description: 'Students participating in various sports activities and competitions'
  },
  {
    id: '2',
    title: 'Science Fair Exhibition',
    image: '/api/placeholder/400/300',
    category: 'Academic',
    description: 'Students showcasing their innovative science projects and experiments'
  },
  {
    id: '3',
    title: 'Cultural Festival',
    image: '/api/placeholder/400/300',
    category: 'Cultural',
    description: 'Celebration of diverse cultures through music, dance, and art'
  },
  {
    id: '4',
    title: 'Graduation Ceremony',
    image: '/api/placeholder/400/300',
    category: 'Events',
    description: 'Celebrating the achievements of our graduating students'
  },
  {
    id: '5',
    title: 'Library Study Session',
    image: '/api/placeholder/400/300',
    category: 'Academic',
    description: 'Students engaged in focused study and research activities'
  },
  {
    id: '6',
    title: 'Art Workshop',
    image: '/api/placeholder/400/300',
    category: 'Cultural',
    description: 'Creative expression through various art forms and techniques'
  },
  {
    id: '7',
    title: 'Computer Lab Session',
    image: '/api/placeholder/400/300',
    category: 'Academic',
    description: 'Students learning programming and computer science skills'
  },
  {
    id: '8',
    title: 'Outdoor Adventure Camp',
    image: '/api/placeholder/400/300',
    category: 'Events',
    description: 'Team building and leadership development in nature'
  },
  {
    id: '9',
    title: 'Music Performance',
    image: '/api/placeholder/400/300',
    category: 'Cultural',
    description: 'Students showcasing their musical talents and skills'
  }
];

const categories = ['All', 'Events', 'Academic', 'Cultural'];

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Explore moments from our vibrant campus life, academic achievements, and cultural celebrations. 
            Each image tells a story of learning, growth, and community.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    category === 'All'
                      ? 'bg-orange-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <Image className="h-16 w-16 text-gray-400" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>Recent</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>25+ students</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Gallery Highlights</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Capturing the spirit of learning and community at Navyug Trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600">Photos & Videos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-gray-600">Events Captured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">1000+</div>
              <div className="text-gray-600">Student Moments</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">5</div>
              <div className="text-gray-600">Years of Memories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Share Your Moments</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Have photos from your time at Navyug Trust? Share them with our community!
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Submit Photos
          </button>
        </div>
      </section>
    </div>
  );
}
