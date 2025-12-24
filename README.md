# Erika Ayu Febrianti - Portfolio Website

A modern, responsive Single Page Application (SPA) portfolio website built with React.js, showcasing professional experience, projects, and academic journey.

## 🚀 Technology Stack

- **React.js** - Frontend framework with functional components
- **React Router DOM v6+** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and development server

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation component
│   ├── Footer.jsx      # Footer component
│   ├── Card.jsx        # Card component
│   └── TimelineItem.jsx # Timeline component
├── pages/              # Page-level components
│   ├── Home.jsx        # Landing page
│   ├── Experience.jsx  # Professional experience
│   ├── Portfolio.jsx   # Projects showcase
│   ├── Roadmap.jsx     # Development roadmap
│   ├── Achievements.jsx # Achievements & activities
│   ├── Contact.jsx     # Contact form & info
│   └── NotFound.jsx    # 404 page
├── data/               # Static data
│   ├── experience.js   # Work experience data
│   ├── projects.js     # Portfolio projects data
│   ├── roadmap.js      # Development roadmap data
│   └── achievements.js # Achievements data
├── App.jsx             # Main app with routing
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🎯 Features

### Single Page Application (SPA)
- Client-side routing with React Router DOM
- No page reloads during navigation
- URL reflects current page state
- Persistent navigation across all pages

### Responsive Design
- Mobile-first approach
- Fully responsive across all devices
- Dark theme with blue accent colors
- Modern, clean interface

### Pages & Content
1. **Home** - Hero section with introduction and call-to-action buttons
2. **Experience** - Professional work and internship history
3. **Portfolio** - Showcase of completed projects with technologies and links
4. **Roadmap** - Technical growth plan and academic progression
5. **Achievements** - Academic awards, leadership roles, and publications
6. **Contact** - Contact form and social media links

### Technical Implementation
- Component-based architecture
- Data-driven rendering using JavaScript objects/arrays
- Separation of concerns (UI, logic, data)
- Modern React patterns (hooks, functional components)
- Accessible navigation with proper ARIA labels

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd erika-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📱 Navigation

The website uses React Router DOM for client-side navigation:
- All navigation uses `<Link>` components (no `<a href>` tags)
- Active menu items are highlighted
- Mobile-responsive navigation menu
- Fixed navigation bar with proper spacing

## 🎨 Design System

### Colors
- **Background**: Dark gray (`gray-900`)
- **Cards**: Medium gray (`gray-800`)
- **Text**: Light gray (`gray-100`, `gray-300`, `gray-400`)
- **Primary**: Blue accent (`primary-400`, `primary-600`)
- **Borders**: Dark gray (`gray-700`)

### Components
- **Cards**: Consistent styling with hover effects
- **Buttons**: Primary and secondary button styles
- **Timeline**: Custom timeline component for roadmap
- **Forms**: Styled form inputs with focus states

## 📊 Data Structure

All content is stored in JavaScript files under `/src/data/`:
- Experience data with role, organization, period, and description
- Project data with technologies, links, and descriptions
- Roadmap data organized by categories
- Achievement data categorized by type

## 🔧 Customization

To customize the portfolio:

1. **Update personal information** in `/src/pages/Home.jsx`
2. **Modify experience data** in `/src/data/experience.js`
3. **Add/edit projects** in `/src/data/projects.js`
4. **Update roadmap** in `/src/data/roadmap.js`
5. **Modify achievements** in `/src/data/achievements.js`
6. **Change contact information** in `/src/pages/Contact.jsx`

## 🎓 Academic Context

This project demonstrates:
- Understanding of Single Page Applications vs Multi-Page Applications
- Client-side routing implementation
- Component-based architecture
- Modern CSS framework usage
- Separation of UI, logic, and data
- Responsive web design principles
- Accessibility best practices

## 📄 License

This project is created for educational and portfolio purposes.

---

**Built with ❤️ by Erika Ayu Febrianti**