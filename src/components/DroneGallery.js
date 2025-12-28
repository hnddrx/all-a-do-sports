import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Sun, Moon, Menu, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import Chatbot from './Chatbot';
import TournamentRegistration from './TournamentRegistration';

const DroneGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800', category: 'landscape', title: 'Coastal Vista' },
    { id: 2, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', category: 'landscape', title: 'Mountain Range' },
    { id: 3, src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800', category: 'nature', title: 'Forest Path' },
    { id: 4, src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800', category: 'urban', title: 'City Lights' },
    { id: 5, src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800', category: 'landscape', title: 'Alpine Peak' },
    { id: 6, src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800', category: 'nature', title: 'River Valley' },
    { id: 7, src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800', category: 'urban', title: 'Downtown Aerial' },
    { id: 8, src: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800', category: 'landscape', title: 'Beach Sunset' },
    { id: 9, src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800', category: 'nature', title: 'Wilderness' },
    { id: 10, src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800', category: 'nature', title: 'Forest Canopy' },
    { id: 11, src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800', category: 'urban', title: 'Urban Sprawl' },
    { id: 12, src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800', category: 'landscape', title: 'Highway Vista' },
  ];

  const navLinks = ['Home', 'Gallery', 'Services', 'About', 'Contact'];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  const openLightbox = (image) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);
  
  const goToNext = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };
  
  const goToPrev = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const theme = {
    dark: {
      bg: 'bg-slate-950',
      headerBg: 'bg-slate-900/95',
      text: 'text-slate-100',
      subtext: 'text-slate-400',
      cardBg: 'bg-slate-900',
      filterActive: 'bg-gradient-to-r from-cyan-500 to-blue-500',
      filterInactive: 'bg-slate-800 hover:bg-slate-700',
      accent: 'text-cyan-400',
      border: 'border-slate-800',
      footerBg: 'bg-slate-900',
      linkHover: 'hover:text-cyan-400'
    },
    light: {
      bg: 'bg-gray-50',
      headerBg: 'bg-white/95',
      text: 'text-gray-900',
      subtext: 'text-gray-600',
      cardBg: 'bg-white',
      filterActive: 'bg-gradient-to-r from-blue-600 to-cyan-600',
      filterInactive: 'bg-gray-200 hover:bg-gray-300',
      accent: 'text-blue-600',
      border: 'border-gray-200',
      footerBg: 'bg-gray-900',
      linkHover: 'hover:text-blue-400'
    }
  };

  const t = darkMode ? theme.dark : theme.light;

  return (
    <div className={`min-h-screen ${t.bg} transition-colors duration-500`}>
      {/* Professional Header with Navigation */}
      <header className={`${t.headerBg} backdrop-blur-xl ${t.border} border-b sticky top-0 z-40 transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Camera className={`w-8 h-8 ${t.accent}`} />
                <div className={`absolute -inset-1 ${darkMode ? 'bg-cyan-500' : 'bg-blue-500'} rounded-full blur opacity-20`}></div>
              </div>
              <div>
                <h1 className={`text-2xl font-light tracking-tight ${t.text}`}>Aerial Stories</h1>
                <p className={`text-xs ${t.subtext} tracking-wide hidden sm:block`}>Professional Drone Photography</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className={`${t.text} ${t.linkHover} text-sm font-light tracking-wide transition-colors duration-300`}
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2.5 rounded-full ${t.filterInactive} transition-all duration-300 hover:scale-110`}
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2.5 rounded-full ${t.filterInactive} transition-all duration-300`}
                aria-label="Toggle menu"
              >
                <Menu className={`w-5 h-5 ${t.text}`} />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className={`lg:hidden py-4 ${t.border} border-t`}>
              <nav className="flex flex-col space-y-3">
                {navLinks.map(link => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`${t.text} ${t.linkHover} text-sm font-light tracking-wide transition-colors duration-300 py-2`}
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center space-y-4">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight ${t.text}`}>
            Capturing Perspectives From Above
          </h2>
          <p className={`${t.subtext} text-base sm:text-lg max-w-2xl mx-auto leading-relaxed`}>
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

      {/* Filter Buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
          {['all', 'landscape', 'urban', 'nature'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full font-light text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 ${
                filter === cat
                  ? `${t.filterActive} text-white shadow-lg ${darkMode ? 'shadow-cyan-500/30' : 'shadow-blue-500/30'} scale-105`
                  : `${t.filterInactive} ${t.text}`
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(image)}
              style={{ animationDelay: `${index * 50}ms` }}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer transform transition-all duration-700 hover:scale-[1.02] ${t.cardBg} shadow-xl sm:shadow-2xl ${darkMode ? 'shadow-black/40' : 'shadow-gray-300/50'} animate-in fade-in slide-in-from-bottom-4`}
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

      {/* Professional Footer */}
      <footer className={`${t.footerBg} text-gray-300 border-t ${t.border}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Camera className="w-7 h-7 text-cyan-400" />
                <h3 className="text-xl font-light text-white">Aerial Stories</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Professional drone photography specializing in golf tournaments, sports events, and breathtaking aerial imagery.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-light text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-sm hover:text-cyan-400 transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-light text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Golf Tournaments</li>
                <li className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Sports Events</li>
                <li className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Real Estate</li>
                <li className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Landscape Photography</li>
                <li className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Commercial Projects</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-light text-lg mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <a href="mailto:info@aerialstories.com" className="hover:text-cyan-400 transition-colors duration-300">
                    info@aerialstories.com
                  </a>
                </li>
                <li className="flex items-start space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <a href="tel:+1234567890" className="hover:text-cyan-400 transition-colors duration-300">
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-start space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Dagupan, Ilocos, Philippines</span>
                </li>
              </ul>
              
              {/* Social Media */}
              <div className="flex space-x-4 mt-6">
                <a href="#" className="p-2 bg-slate-800 hover:bg-cyan-500 rounded-full transition-all duration-300 hover:scale-110">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-slate-800 hover:bg-cyan-500 rounded-full transition-all duration-300 hover:scale-110">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-slate-800 hover:bg-cyan-500 rounded-full transition-all duration-300 hover:scale-110">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={`mt-12 pt-8 border-t ${t.border} flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0`}>
            <p className="text-sm text-gray-400 text-center sm:text-left">
              © 2024 Aerial Stories. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#privacy" className="hover:text-cyan-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#terms" className="hover:text-cyan-400 transition-colors duration-300">Terms of Service</a>
              <a href="#cookies" className="hover:text-cyan-400 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      {selectedImage && (
        <div className={`fixed inset-0 ${darkMode ? 'bg-black/97' : 'bg-white/97'} backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300`}>
          <button
            onClick={closeLightbox}
            className={`absolute top-4 sm:top-8 right-4 sm:right-8 p-3 sm:p-4 ${darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'} rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90`}
          >
            <X className={`w-5 h-5 sm:w-6 sm:h-6 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
          </button>
          
          <button
            onClick={goToPrev}
            className={`absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 ${darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'} rounded-full transition-all duration-300 hover:scale-110`}
          >
            <ChevronLeft className={`w-6 h-6 sm:w-7 sm:h-7 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
          </button>
          
          <button
            onClick={goToNext}
            className={`absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 ${darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'} rounded-full transition-all duration-300 hover:scale-110`}
          >
            <ChevronRight className={`w-6 h-6 sm:w-7 sm:h-7 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
          </button>

          <div className="max-w-6xl max-h-[90vh] flex flex-col items-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[70vh] sm:max-h-[75vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl"
            />
            <div className="mt-6 sm:mt-8 text-center space-y-3">
              <h2 className={`text-2xl sm:text-3xl font-light tracking-wide ${darkMode ? 'text-white' : 'text-gray-900'}`}>{selectedImage.title}</h2>
              <div className="flex items-center justify-center space-x-3">
                <span className={`h-px w-8 sm:w-12 ${darkMode ? 'bg-cyan-400' : 'bg-blue-600'}`}></span>
                <p className={`${t.accent} uppercase tracking-widest text-xs sm:text-sm font-light`}>{selectedImage.category}</p>
                <span className={`h-px w-8 sm:w-12 ${darkMode ? 'bg-cyan-400' : 'bg-blue-600'}`}></span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Chatbot */}
      <Chatbot darkMode={darkMode} />
      
      {/* Tournament Registration Modal */}
      {showRegistration && (
        <TournamentRegistration 
          darkMode={darkMode} 
          onClose={() => setShowRegistration(false)} 
        />
      )}
    </div>
  );
};

export default DroneGallery;