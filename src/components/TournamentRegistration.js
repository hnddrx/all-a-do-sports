import React, { useState } from 'react';
import { Calendar, MapPin, Users, Mail, Phone, User, FileText, CheckCircle, X } from 'lucide-react';

const TournamentRegistration = ({ darkMode, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Tournament Info
    tournamentName: '',
    tournamentDate: '',
    location: '',
    participantCount: '',
    
    // Service Selection
    services: [],
    additionalNotes: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const services = [
    { id: 'aerial-photos', name: 'Aerial Photography', price: '$500' },
    { id: 'aerial-video', name: 'Aerial Videography', price: '$750' },
    { id: 'live-streaming', name: 'Live Streaming', price: '$400' },
    { id: 'highlight-reel', name: 'Highlight Reel', price: '$300' },
    { id: 'drone-mapping', name: 'Course Mapping', price: '$600' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const theme = darkMode ? {
    bg: 'bg-slate-900',
    cardBg: 'bg-slate-800',
    text: 'text-slate-100',
    subtext: 'text-slate-400',
    inputBg: 'bg-slate-700',
    border: 'border-slate-600',
    accent: 'from-cyan-500 to-blue-500'
  } : {
    bg: 'bg-white',
    cardBg: 'bg-gray-50',
    text: 'text-gray-900',
    subtext: 'text-gray-600',
    inputBg: 'bg-white',
    border: 'border-gray-300',
    accent: 'from-blue-600 to-cyan-600'
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className={`${theme.bg} rounded-2xl p-8 max-w-md w-full text-center space-y-6 animate-in zoom-in duration-300`}>
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className={`text-3xl font-light ${theme.text}`}>Registration Successful!</h2>
            <p className={theme.subtext}>
              Thank you for registering. We'll contact you within 24 hours to confirm your tournament coverage.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium hover:scale-105 transition-transform"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className={`${theme.bg} rounded-2xl max-w-2xl w-full my-8 animate-in slide-in-from-bottom-4 duration-300`}>
        {/* Header */}
        <div className="relative p-6 border-b border-slate-700">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 hover:bg-slate-700 rounded-full transition-colors"
          >
            <X className={`w-5 h-5 ${theme.text}`} />
          </button>
          <h2 className={`text-3xl font-light ${theme.text} mb-2`}>Tournament Registration</h2>
          <p className={theme.subtext}>Book professional aerial coverage for your event</p>
          
          {/* Progress Steps */}
          <div className="flex items-center justify-center space-x-4 mt-6">
            {[1, 2, 3].map((num) => (
              <React.Fragment key={num}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                  step >= num 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' 
                    : `${theme.cardBg} ${theme.subtext}`
                }`}>
                  {num}
                </div>
                {num < 3 && <div className={`h-px w-12 ${step > num ? 'bg-cyan-500' : theme.border}`} />}
              </React.Fragment>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <h3 className={`text-xl font-light ${theme.text} mb-4`}>Personal Information</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm ${theme.subtext} mb-2`}>First Name *</label>
                  <div className="relative">
                    <User className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.subtext}`} />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className={`w-full pl-10 pr-4 py-3 ${theme.inputBg} ${theme.text} ${theme.border} border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                      placeholder="John"
                    />
                  </div>
                </div>
                
                <div>
                  <label className={`block text-sm ${theme.subtext} mb-2`}>Last Name *</label>
                  <div className="relative">
                    <User className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.subtext}`} />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className={`w-full pl-10 pr-4 py-3 ${theme.inputBg} ${theme.text} ${theme.border} border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                      placeholder="Doe"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className={`block text-sm ${theme.subtext} mb-2`}>Email *</label>
                <div className="relative">
                  <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.subtext}`} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full pl-10 pr-4 py-3 ${theme.inputBg} ${theme.text} ${theme.border} border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                    placeholder="john.doe@example.com"
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm ${theme.subtext} mb-2`}>Phone Number *</label>
                <div className="relative">
                  <Phone className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.subtext}`} />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`w-full pl-10 pr-4 py-3 ${theme.inputBg} ${theme.text} ${theme.border} border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                    placeholder="+1 (234) 567-890"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Tournament Details */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <h3 className={`text-xl font-light ${theme.text} mb-4`}>Tournament Details</h3>
              
              <div>
                <label className={`block text-sm ${theme.subtext} mb-2`}>Tournament Name *</label>
                <input
                  type="text"
                  name="tournamentName"
                  value={formData.tournamentName}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 ${theme.inputBg} ${theme.text} ${theme.border} border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                  placeholder="Annual Golf Championship 2024"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm ${theme.subtext} mb-2`}>Date *</label>
                  <div className="relative">
                    <Calendar className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.subtext}`} />
                    <input
                      type="date"
                      name="tournamentDate"
                      value={formData.tournamentDate}
                      onChange={handleChange}
                      required
                      className={`w-full pl-10 pr-4 py-3 ${theme.inputBg} ${theme.text} ${theme.border} border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm ${theme.subtext} mb-2`}>Expected Participants *</label>
                  <div className="relative">
                    <Users className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.subtext}`} />
                    <input
                      type="number"
                      name="participantCount"
                      value={formData.participantCount}
                      onChange={handleChange}
                      required
                      className={`w-full pl-10 pr-4 py-3 ${theme.inputBg} ${theme.text} ${theme.border} border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                      placeholder="100"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className={`block text-sm ${theme.subtext} mb-2`}>Location *</label>
                <div className="relative">
                  <MapPin className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.subtext}`} />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className={`w-full pl-10 pr-4 py-3 ${theme.inputBg} ${theme.text} ${theme.border} border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                    placeholder="Manila Golf & Country Club"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Service Selection */}
          {step === 3 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <h3 className={`text-xl font-light ${theme.text} mb-4`}>Select Services</h3>
              
              <div className="space-y-3">
                {services.map(service => (
                  <label
                    key={service.id}
                    className={`flex items-center justify-between p-4 ${theme.cardBg} ${theme.border} border rounded-lg cursor-pointer hover:border-cyan-500 transition-colors ${
                      formData.services.includes(service.id) ? 'border-cyan-500 ring-2 ring-cyan-500/20' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service.id)}
                        onChange={() => handleServiceToggle(service.id)}
                        className="w-5 h-5 text-cyan-500 rounded focus:ring-cyan-500"
                      />
                      <div>
                        <p className={`font-medium ${theme.text}`}>{service.name}</p>
                      </div>
                    </div>
                    <span className="text-cyan-500 font-semibold">{service.price}</span>
                  </label>
                ))}
              </div>

              <div>
                <label className={`block text-sm ${theme.subtext} mb-2`}>Additional Notes</label>
                <div className="relative">
                  <FileText className={`absolute left-3 top-3 w-5 h-5 ${theme.subtext}`} />
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full pl-10 pr-4 py-3 ${theme.inputBg} ${theme.text} ${theme.border} border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                    placeholder="Any special requirements or requests..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-4">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className={`px-6 py-3 ${theme.cardBg} ${theme.text} rounded-full font-medium hover:scale-105 transition-transform`}
              >
                Previous
              </button>
            )}
            
            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className={`ml-auto px-6 py-3 bg-gradient-to-r ${theme.accent} text-white rounded-full font-medium hover:scale-105 transition-transform`}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className={`ml-auto px-6 py-3 bg-gradient-to-r ${theme.accent} text-white rounded-full font-medium hover:scale-105 transition-transform`}
              >
                Submit Registration
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default TournamentRegistration;