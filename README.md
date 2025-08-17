# Navyug Health and Educare Trust - Community Development Application

A modern, responsive web application for Navyug Health and Educare Trust, an organization dedicated to uplifting rural communities through education, health, women empowerment, and environmental sustainability since 2010.

## 🚀 Features

### Core Navigation
- **About** - Trust information, mission, vision, and values
- **Focus Areas** - Four pillars of development: Education, Women Empowerment, Environmental Safety, and Health Initiatives
- **Programs** - Comprehensive programs for rural community development
- **Gallery** - Photo gallery showcasing our work and impact
- **Contact** - Contact form and information
- **Support Us** - Volunteer opportunities and donation options

### Technical Features
- Responsive design for all devices
- Modern UI with Tailwind CSS
- TypeScript for type safety
- Next.js 14 with App Router
- Interactive forms with validation
- Smooth animations and transitions
- SEO optimized

## 🛠️ Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **React Hook Form** - Form handling
- **Framer Motion** - Animations

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Git** - Version control

## 📁 Project Structure

```
navyug/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── focus-areas/       # Focus Areas page
│   │   ├── programs/          # Programs page
│   │   ├── gallery/           # Gallery page
│   │   ├── contact/           # Contact page
│   │   ├── support/           # Support Us page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/             # Reusable components
│   │   ├── layout/            # Layout components
│   │   │   ├── Header.tsx     # Navigation header
│   │   │   └── Footer.tsx     # Site footer
│   │   ├── ui/                # UI components
│   │   └── sections/          # Page sections
│   ├── types/                 # TypeScript interfaces
│   │   └── index.ts           # Type definitions
│   └── utils/                 # Utility functions
├── public/                    # Static assets
├── package.json               # Dependencies
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd navyug
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Design System

### Color Palette
- **Primary**: Green (#10b981)
- **Secondary**: Emerald (#059669)
- **Accent**: Yellow (#fbbf24)
- **Success**: Green (#10b981)
- **Warning**: Orange (#f97316)
- **Error**: Red (#ef4444)

### Typography
- **Headings**: Geist Sans (Bold)
- **Body**: Geist Sans (Regular)
- **Code**: Geist Mono

### Components
- Responsive navigation header
- Hero sections with gradients
- Card-based layouts
- Interactive forms
- Mobile-first design

## 📱 Responsive Design

The application is built with a mobile-first approach and includes:
- Responsive breakpoints for all screen sizes
- Touch-friendly interactions
- Optimized layouts for mobile devices
- Collapsible navigation menu

## 🔧 Customization

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Update navigation in `Header.tsx`

### Styling
- Use Tailwind CSS utility classes
- Follow the established color palette
- Maintain consistent spacing and typography

### Components
- Create reusable components in `src/components/`
- Use TypeScript interfaces for props
- Follow the established component patterns

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Traditional hosting**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Email: info@navyughealtheducare.org
- Phone: +91 (XXX) XXX-XXXX
- Address: Village Siwan, Aurangabad, Bihar, India

## 🎯 Roadmap

### Phase 1: Frontend ✅
- [x] Project setup and structure
- [x] Header and navigation
- [x] Landing page
- [x] All individual pages
- [x] Responsive design

### Phase 2: Backend (Next)
- [ ] Express.js server setup
- [ ] API endpoints
- [ ] Database integration
- [ ] Authentication system

### Phase 3: Integration (Future)
- [ ] Frontend-backend integration
- [ ] Form submissions
- [ ] User authentication
- [ ] Testing and optimization

---

**Built with ❤️ for Navyug Health and Educare Trust**
