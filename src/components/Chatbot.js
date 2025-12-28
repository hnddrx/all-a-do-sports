import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const Chatbot = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! 👋 I'm your Aerial Stories AI assistant. How can I help you today?",
      sender: 'bot'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getAIResponse = async (userText) => {
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content:
                'You are Aerial Stories AI assistant. Help users with services, pricing, tournaments, and contact details. Be friendly and professional.'
            },
            { role: 'user', content: userText }
          ]
        })
      });

      const data = await res.json();
      return data.reply;
    } catch {
      return "Sorry, I’m having trouble responding right now.";
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim() || loading) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setLoading(true);

    const aiReply = await getAIResponse(userMessage.text);

    const botMessage = {
      id: messages.length + 2,
      text: aiReply,
      sender: 'bot'
    };

    setMessages(prev => [...prev, botMessage]);
    setLoading(false);
  };

  const theme = darkMode
    ? {
        bg: 'bg-slate-900',
        text: 'text-slate-100',
        inputBg: 'bg-slate-800',
        messageBg: 'bg-slate-800',
        userBg: 'bg-cyan-600',
        border: 'border-slate-700'
      }
    : {
        bg: 'bg-white',
        text: 'text-gray-900',
        inputBg: 'bg-gray-100',
        messageBg: 'bg-gray-100',
        userBg: 'bg-blue-600',
        border: 'border-gray-300'
      };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-2xl z-50"
        >
          <MessageCircle />
        </button>
      )}

      {isOpen && (
        <div className={`fixed bottom-6 right-6 w-96 h-[600px] ${theme.bg} ${theme.border} border rounded-2xl shadow-2xl flex flex-col z-50`}>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 flex justify-between">
            <h3 className="font-semibold">Aerial AI Assistant</h3>
            <button onClick={() => setIsOpen(false)}><X /></button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-4 py-2 rounded-2xl max-w-[80%] ${
                  msg.sender === 'user'
                    ? `${theme.userBg} text-white`
                    : `${theme.messageBg} ${theme.text}`
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && <p className="text-xs text-gray-400">AI is typing…</p>}
            <div ref={messagesEndRef} />
          </div>

          <div className={`p-4 ${theme.border} border-t`}>
            <div className="flex space-x-2">
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className={`flex-1 px-4 py-2 ${theme.inputBg} ${theme.text} rounded-full`}
              />
              <button onClick={handleSend} className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full">
                <Send />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
