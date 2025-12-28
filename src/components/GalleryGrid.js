import React from 'react';

const GalleryGrid = ({ filteredImages, openLightbox, darkMode, theme }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            onClick={() => openLightbox(image)}
            style={{ animationDelay: `${index * 50}ms` }}
            className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer transform transition-all duration-700 hover:scale-[1.02] ${theme.cardBg} shadow-xl sm:shadow-2xl ${darkMode ? 'shadow-black/40' : 'shadow-gray-300/50'} animate-in fade-in slide-in-from-bottom-4`}
          >
            <div className="aspect-w-16 aspect-h-10">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-56 sm:h-64 lg:h-72 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
            </div>
            <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-t from-black via-black/40' : 'bg-gradient-to-t from-gray-900 via-gray-900/40'} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500`}>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-light mb-2 tracking-wide">{image.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className={`h-px w-6 sm:w-8 ${darkMode ? 'bg-cyan-400' : 'bg-blue-400'}`}></span>
                  <p className={`${darkMode ? 'text-cyan-400' : 'text-blue-400'} text-xs uppercase tracking-widest font-light`}>{image.category}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;