import Card from '../components/Card'
import { achievements } from '../data/achievements'

const Achievements = () => {
  const categories = [
    { key: 'academic', title: 'Academic Achievements', icon: '🎓' },
    { key: 'organizations', title: 'Organizations & Committees', icon: '👥' },
    { key: 'leadership', title: 'Leadership', icon: '🌟' },
    { key: 'seminars', title: 'Seminars & Trainings', icon: '📚' },
    { key: 'publications', title: 'Publications & Essays', icon: '📝' }
  ]

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            Achievements & Activities
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my academic accomplishments, leadership roles, 
            and contributions to the technology and academic communities.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category) => (
            <section key={category.key}>
              <div className="flex items-center mb-8">
                <span className="text-3xl mr-4">{category.icon}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-100">
                  {category.title}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements[category.key].map((achievement) => (
                  <Card key={achievement.id} className="hover:border-primary-600 transition-colors duration-200">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-gray-100 flex-1">
                        {achievement.title}
                      </h3>
                      <span className="text-sm text-primary-400 font-medium bg-primary-600/20 px-2 py-1 rounded ml-3">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-20">
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-semibold text-gray-100 mb-8 text-center">
              Achievement Summary
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-400 mb-2">
                  {achievements.academic.length}
                </div>
                <div className="text-gray-400 text-sm">Academic Awards</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-400 mb-2">
                  {achievements.organizations.length}
                </div>
                <div className="text-gray-400 text-sm">Organizations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-400 mb-2">
                  {achievements.leadership.length}
                </div>
                <div className="text-gray-400 text-sm">Leadership Roles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-400 mb-2">
                  {achievements.publications.length}
                </div>
                <div className="text-gray-400 text-sm">Publications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievements