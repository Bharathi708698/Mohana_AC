export default function ServiceCard({ 
  icon, 
  title, 
  description, 
  features, 
  imageUrl,
  children 
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      {/* Image */}
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        {/* Icon and Title */}
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mr-4">
            <i className={`${icon} text-blue-600 text-2xl`}></i>
          </div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Features */}
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-700">
              <i className="ri-check-line text-green-500 mr-2"></i>
              {feature}
            </li>
          ))}
        </ul>

        {children}
      </div>
    </div>
  );
}
