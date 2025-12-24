const TimelineItem = ({ title, timeframe, description, isLast = false }) => {
  return (
    <div className="relative">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <div className="w-4 h-4 bg-primary-600 rounded-full border-2 border-gray-900"></div>
        </div>
        <div className="ml-6 pb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
            <span className="text-sm text-primary-400 font-medium">{timeframe}</span>
          </div>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
      {!isLast && (
        <div className="absolute left-2 top-4 w-0.5 h-full bg-gray-700 -translate-x-0.5"></div>
      )}
    </div>
  )
}

export default TimelineItem