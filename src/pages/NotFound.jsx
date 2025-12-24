import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600">404</h1>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-100 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-400 mb-8">
          Sorry, the page you're looking for doesn't exist. 
          It might have been moved, deleted, or you entered the wrong URL.
        </p>
        
        <div className="space-y-4">
          <Link to="/" className="btn-primary inline-block">
            Go Home
          </Link>
          <div className="text-gray-500">
            or
          </div>
          <Link to="/contact" className="btn-secondary inline-block">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound