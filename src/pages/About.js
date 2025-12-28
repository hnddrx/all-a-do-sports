import React from 'react';
import { Camera, Award, Users, Target, Zap, Eye, Crosshair, Video } from 'lucide-react';

const About = ({ theme }) => {
  const stats = [
    { number: '100+', label: 'Tournaments Covered', icon: Award },
    { number: '50+', label: 'Golf Courses Served', icon: Target },
    { number: '15K+', label: 'Aerial Shots Captured', icon: Camera },
    { number: 'FAA', label: 'Certified Pilots', icon: Zap }
  ];

  const services = [
    {
      icon: Camera,
      title: 'Golf Tournament Coverage',
      description: 'High-quality aerial imagery that captures the elegance and precision of golf tournaments, showcasing the beauty and complexity of the game from unique perspectives.'
    },
    {
      icon: Video,
      title: 'Sports Event Videography',
      description: 'Dynamic video coverage for soccer, volleyball, baseball, and other sports events with play-by-play coverage and championship highlights.'
    },
    {
      icon: Eye,
      title: 'Marketing & Promotional Content',
      description: 'Stunning aerial visuals tailored for golf courses, tournament organizers, and marketing campaigns that capture attention and drive engagement.'
    },
    {
      icon: Crosshair,
      title: 'Property & Land Coverage',
      description: 'Comprehensive aerial views of properties, land developments, and entire cities for real estate and commercial purposes.'
    }
  ];

  const expertise = [
    {
      title: 'Golf Industry Specialists',
      items: [
        'Tournament day coverage',
        'Course mapping and showcase',
        'Promotional material creation',
        'Championship event documentation'
      ]
    },
    {
      title: 'Multi-Sport Coverage',
      items: [
        'Soccer tournaments',
        'Volleyball championships',
        'Baseball league playoffs',
        'Special sporting events'
      ]
    },
    {
      title: 'Advanced Technology',
      items: [
        'Professional-grade drones',
        '4K video capabilities',
        'Skilled FAA-certified operators',
        'Real-time coverage options'
      ]
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center space-y-6">
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight ${theme.text}`}>
            About Allado Sports Photography
          </h1>
          <p className={`${theme.subtext} text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed`}>
            Capturing the dynamic essence of golf and sports events through cutting-edge aerial photography
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`${theme.cardBg} py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className={`text-3xl sm:text-4xl font-light ${theme.text}`}>{stat.number}</h3>
                <p className={`${theme.subtext} text-sm`}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className={`text-3xl sm:text-4xl font-light ${theme.text}`}>Our Mission</h2>
            <div className={`${theme.subtext} space-y-4 text-base leading-relaxed`}>
              <p>
                At Allado Sports Photography, we specialize in capturing the dynamic essence of the golf 
                industry and various sports events through professional drone photography and videography.
              </p>
              <p>
                Our business provides high-quality aerial imagery and video coverage for golf tournaments, 
                offering a unique perspective that enhances the viewing experience and highlights the beauty 
                and complexity of the game. Our services are tailored to meet the needs of golf courses, 
                tournament organizers, and marketing campaigns.
              </p>
              <p>
                Every shot we capture reflects the elegance and precision of the sport, ensuring that your 
                event is documented from perspectives that ground-level photography simply cannot achieve.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800"
              alt="Golf course aerial view"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-20 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-light ${theme.text} mb-4`}>Our Services</h2>
          <p className={`${theme.subtext} text-lg max-w-2xl mx-auto`}>
            Comprehensive aerial coverage solutions for every type of event
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${theme.cardBg} p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300`}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className={`text-xl font-light ${theme.text} mb-3`}>{service.title}</h3>
              <p className={`${theme.subtext} leading-relaxed`}>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Areas */}
      <section className={`${theme.cardBg} py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl font-light ${theme.text} mb-4`}>Our Expertise</h2>
            <p className={`${theme.subtext} text-lg`}>
              Specialized coverage across multiple sports and applications
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <div key={index} className="space-y-4">
                <h3 className={`text-xl font-light ${theme.text} mb-4`}>{area.title}</h3>
                <ul className="space-y-3">
                  {area.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={`${theme.subtext}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-light ${theme.text} mb-4`}>Why Choose Allado Sports Photography</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className={`${theme.cardBg} p-6 rounded-xl`}>
            <h3 className={`text-lg font-medium ${theme.text} mb-2`}>Unique Perspective</h3>
            <p className={`${theme.subtext} text-sm`}>
              Aerial views that enhance the viewing experience and showcase the full scope of your event
            </p>
          </div>
          <div className={`${theme.cardBg} p-6 rounded-xl`}>
            <h3 className={`text-lg font-medium ${theme.text} mb-2`}>Professional Quality</h3>
            <p className={`${theme.subtext} text-sm`}>
              High-resolution imagery and 4K video with advanced drone technology
            </p>
          </div>
          <div className={`${theme.cardBg} p-6 rounded-xl`}>
            <h3 className={`text-lg font-medium ${theme.text} mb-2`}>Tailored Services</h3>
            <p className={`${theme.subtext} text-sm`}>
              Customized coverage solutions for golf courses, tournaments, and marketing campaigns
            </p>
          </div>
          <div className={`${theme.cardBg} p-6 rounded-xl`}>
            <h3 className={`text-lg font-medium ${theme.text} mb-2`}>FAA Certified</h3>
            <p className={`${theme.subtext} text-sm`}>
              Licensed and insured operators ensuring safe, compliant aerial operations
            </p>
          </div>
          <div className={`${theme.cardBg} p-6 rounded-xl`}>
            <h3 className={`text-lg font-medium ${theme.text} mb-2`}>Multi-Sport Coverage</h3>
            <p className={`${theme.subtext} text-sm`}>
              Expertise extends beyond golf to soccer, volleyball, baseball, and more
            </p>
          </div>
          <div className={`${theme.cardBg} p-6 rounded-xl`}>
            <h3 className={`text-lg font-medium ${theme.text} mb-2`}>Memorable & Engaging</h3>
            <p className={`${theme.subtext} text-sm`}>
              Fresh perspectives that make every moment captivating for players and spectators
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-light mb-4">Ready to Elevate Your Event Coverage?</h2>
          <p className="text-lg mb-8 opacity-90">
            Whether it's a golf tournament, sports championship, or promotional campaign, 
            we bring a fresh and captivating perspective to your event
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-medium hover:scale-105 transition-transform shadow-lg">
              Register Your Tournament
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-full font-medium hover:scale-105 transition-transform">
              View Sample Shots
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;