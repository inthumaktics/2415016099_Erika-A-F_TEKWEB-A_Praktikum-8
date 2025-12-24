import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6">
              Hi, I'm <span className="text-primary-400">Erika Ayu Febrianti</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Information Systems undergraduate passionate about web development, technology innovation, and aspiring to pursue Biomedical Engineering
            </p>
            
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg text-gray-400 leading-relaxed">
                I'm a dedicated student with a strong foundation in web technologies and a vision for the future. 
                Currently pursuing my degree in Information Systems, I combine technical skills with creative 
                problem-solving to build meaningful digital experiences. My journey spans from frontend development 
                to exploring the intersection of technology and healthcare through my interest in Biomedical Engineering.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/portfolio" className="btn-primary">
                View Portfolio
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-2">Web Development</h3>
              <p className="text-gray-400">Building modern, responsive web applications with React.js and cutting-edge technologies</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-2">Innovation</h3>
              <p className="text-gray-400">Exploring emerging technologies and their applications in solving real-world problems</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-2">Healthcare Tech</h3>
              <p className="text-gray-400">Passionate about the intersection of technology and healthcare through Biomedical Engineering</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home