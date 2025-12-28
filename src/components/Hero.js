import React from 'react';

const Hero = ({ theme, setShowRegistration }) => {
  return (
    <section id='home' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="text-center space-y-4">
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight ${theme.text}`}>
          Capturing Perspectives From Above
        </h2>
        <p className={`${theme.subtext} text-base sm:text-lg max-w-2xl mx-auto leading-relaxed`}>
          Professional aerial photography and videography for golf tournaments, sports events, and landscapes
        </p>
        <button
          onClick={() => setShowRegistration(true)}
          className="mt-6 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium hover:scale-105 transition-transform shadow-lg shadow-cyan-500/30"
        >
          Register for Tournament Coverage
        </button>
      </div>
    </section>
  );
};

export default Hero;