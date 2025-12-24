import Card from '../components/Card'
import { experiences } from '../data/experience'

const Experience = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            Professional Experience
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My journey through internships, academic work, and volunteer experiences that have shaped my technical skills and professional growth.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <Card key={experience.id} className="hover:border-primary-600 transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">
                    {experience.role}
                  </h3>
                  <p className="text-primary-400 font-medium mb-2">
                    {experience.organization}
                  </p>
                </div>
                <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full whitespace-nowrap">
                  {experience.period}
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {experience.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">
              Looking for Opportunities
            </h3>
            <p className="text-gray-400 mb-6">
              I'm actively seeking internships and entry-level positions in web development, 
              software engineering, and technology roles where I can contribute and continue learning.
            </p>
            <a 
              href="/contact" 
              className="btn-primary inline-block"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience