import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';

const Chatbot = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! 👋 I'm your Aerial Stories assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    'Tournament registration',
    'Pricing information',
    'Available services',
    'Contact details'
  ];

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes('tournament') || lowerMessage.includes('register')) {
      return "Great! I can help you with tournament registration. We specialize in golf tournament photography and videography. Would you like to register for an upcoming event or learn more about our tournament packages?";
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return "Our pricing varies based on the event type and duration. For golf tournaments, packages start at $500. Sports events begin at $350. Would you like a detailed quote for your specific needs?";
    } else if (lowerMessage.includes('service')) {
      return "We offer: \n• Golf Tournament Photography\n• Sports Event Coverage\n• Real Estate Aerial Shots\n• Landscape Photography\n• Commercial Projects\n\nWhich service interests you?";
    } else if (lowerMessage.includes('contact')) {
      return "You can reach us at:\n📧 info@aerialstories.com\n📞 +1 (234) 567-890\n📍 Dagupan, Ilocos, Philippines\n\nWould you like to schedule a consultation?";
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! How can I assist you with your aerial photography needs today?";
    } else {
      return "I'm here to help! You can ask me about tournament registration, pricing, services, or how to contact us. What would you like to know?";
    }
  };

  const handleSend = () => {
    if (inputValue.trim() === '') return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleQuickReply = (reply) => {
    setInputValue(reply);
    handleSend();
  };

  const theme = darkMode ? {
    bg: 'bg-slate-900',
    text: 'text-slate-100',
    subtext: 'text-slate-400',
    inputBg: 'bg-slate-800',
    messageBg: 'bg-slate-800',
    userBg: 'bg-cyan-600',
    border: 'border-slate-700'
  } : {
    bg: 'bg-white',
    text: 'text-gray-900',
    subtext: 'text-gray-600',
    inputBg: 'bg-gray-100',
    messageBg: 'bg-gray-100',
    userBg: 'bg-blue-600',
    border: 'border-gray-300'
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 z-50"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-4 right-4 w-full max-w-sm sm:max-w-md md:w-96 h-[80vh] md:h-[600px] ${theme.bg} ${theme.border} border rounded-2xl shadow-2xl flex flex-col z-50 animate-in slide-in-from-bottom-4 duration-300`}>
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">Aerial Assistant</h3>
                <p className="text-xs sm:text-sm text-white/80">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.sender === 'user' ? theme.userBg : theme.messageBg}`}>
                    {message.sender === 'user' ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className={`w-4 h-4 ${theme.text}`} />
                    )}
                  </div>
                  <div>
                    <div className={`px-3 sm:px-4 py-2 rounded-2xl ${message.sender === 'user' ? `${theme.userBg} text-white` : `${theme.messageBg} ${theme.text}`}`}>
                      <p className="text-sm sm:text-base whitespace-pre-line">{message.text}</p>
                    </div>
                    <p className={`text-xs sm:text-sm ${theme.subtext} mt-1 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="px-3 sm:px-4 pb-2">
              <p className={`text-xs sm:text-sm ${theme.subtext} mb-2`}>Quick replies:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className={`text-xs sm:text-sm px-3 py-1.5 ${theme.inputBg} ${theme.text} rounded-full hover:bg-cyan-500 hover:text-white transition-colors`}
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className={`p-3 sm:p-4 ${theme.border} border-t`}>
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className={`flex-1 px-3 sm:px-4 py-2 ${theme.inputBg} ${theme.text} rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base`}
              />
              <button
                onClick={handleSend}
                className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:scale-110 transition-transform"
              >
                <Send className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
