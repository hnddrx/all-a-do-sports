import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import FilterButtons from './FilterButtons';
import GalleryGrid from './GalleryGrid';
import Footer from './Footer';
import Lightbox from './Lightbox';
import Chatbot from './Chatbot';
import TournamentRegistration from './TournamentRegistration';
import About from '../pages/About';
import imagesData from '../data/images.json';

const DroneGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  const images = imagesData.images;

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
      <Header 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        theme={t}
      />
      
      <Hero 
        theme={t}
        setShowRegistration={setShowRegistration}
      />
      
      <FilterButtons 
        filter={filter}
        setFilter={setFilter}
        darkMode={darkMode}
        theme={t}
      />
      
      <GalleryGrid 
        filteredImages={filteredImages}
        openLightbox={openLightbox}
        darkMode={darkMode}
        theme={t}
      />
      
      <About darkMode={darkMode} theme={t} setShowRegistration={setShowRegistration} />

      <Footer theme={t} />
      
      <Lightbox 
        selectedImage={selectedImage}
        closeLightbox={closeLightbox}
        goToPrev={goToPrev}
        goToNext={goToNext}
        darkMode={darkMode}
        theme={t}
      />
      
      <Chatbot darkMode={darkMode} />
      
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