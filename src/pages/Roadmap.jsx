import TimelineItem from '../components/TimelineItem'
import { roadmapData } from '../data/roadmap'

const Roadmap = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            My Development Roadmap
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A strategic plan for my professional growth, combining technical skill development 
            with my academic journey toward Biomedical Engineering.
          </p>
        </div>

        {/* Level-Up Section */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-100 mb-4">
              A. Level-Up: Technical Growth
            </h2>
            <p className="text-gray-400">
              Continuous improvement in web development and emerging technologies to stay at the forefront of the industry.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <div className="space-y-6">
              {roadmapData.levelUp.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  title={item.title}
                  timeframe={item.timeframe}
                  description={item.description}
                  isLast={index === roadmapData.levelUp.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Biomedical Engineering Section */}
        <section>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-100 mb-4">
              B. Progress toward MSc Biomedical Engineering
            </h2>
            <p className="text-gray-400">
              Long-term academic and career progression toward specializing in the intersection of technology and healthcare.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <div className="space-y-6">
              {roadmapData.biomedicalEngineering.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  title={item.title}
                  timeframe={item.timeframe}
                  description={item.description}
                  isLast={index === roadmapData.biomedicalEngineering.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Vision for the Future
            </h3>
            <p className="text-lg leading-relaxed">
              My goal is to bridge the gap between technology and healthcare by combining 
              my software development expertise with biomedical engineering knowledge. 
              I envision creating innovative solutions that improve patient care, 
              enhance medical research, and make healthcare more accessible through technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap