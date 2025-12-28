import React from 'react';

const FilterButtons = ({ filter, setFilter, darkMode, theme }) => {
  const categories = ['all', 'landscape', 'urban', 'nature'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full font-light text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 ${
              filter === cat
                ? `${theme.filterActive} text-white shadow-lg ${darkMode ? 'shadow-cyan-500/30' : 'shadow-blue-500/30'} scale-105`
                : `${theme.filterInactive} ${theme.text}`
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterButtons;