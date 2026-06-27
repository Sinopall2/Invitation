import React, { useState, useRef } from 'react';
import { ArrowLeft } from './icons';
import { useNavigate } from 'react-router-dom';
import config from './config'; // Import config file

function Message() {
  const navigate = useNavigate();
  const [answered, setAnswered] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const noButtonRef = useRef(null);
  const yesButtonRef = useRef(null);

  const handleNoHover = () => {
    // Generate random position for the button to jump to
    const randomX = Math.random() * 100 - 50; // Random position between -50px and 50px
    const randomY = Math.random() * 100 - 50;
    setNoButtonPos({ x: randomX, y: randomY });
  };

  const handleYes = () => {
    setAnswered(true);
    // Delay before navigating
    setTimeout(() => {
      navigate(config.recapRedirectPath);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-300/20 via-purple-300/20 to-black/20 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        {!answered ? (
          <div className="text-center animate-fade-in">
            {/* Heart animation */}
            <div className="text-6xl mb-6 animate-bounce">💗</div>

            {/* Main invitation message */}
            <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400 mb-4 drop-shadow-lg">
              {config.dateInvitationTitle}
            </h1>

            {/* Cute invitation text */}
            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
              {config.dateInvitationMessage}
            </p>

            {/* Date and details */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20 shadow-lg">
              <p className="text-white/80 mb-3">
                <span className="text-2xl">📅</span> {config.dateProposal}
              </p>
              <p className="text-white/80 mb-3">
                <span className="text-2xl">⏰</span> {config.timeProposal}
              </p>
              <p className="text-white/80">
                <span className="text-2xl">📍</span> {config.locationProposal}
              </p>
            </div>

            {/* Cute additional message */}
            <p className="text-white/70 mb-10 italic">
              {config.dateAdditionalMessage}
            </p>

            {/* Buttons Container */}
            <div className="flex gap-4 justify-center items-center relative h-16">
              {/* YES Button */}
              <button
                ref={yesButtonRef}
                onClick={handleYes}
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
              >
                YES! 💕
              </button>

              {/* NO Button (evading) */}
              <button
                ref={noButtonRef}
                onMouseEnter={handleNoHover}
                onTouchStart={handleNoHover}
                style={{
                  transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`,
                  transition: 'transform 0.3s ease-out',
                }}
                className="px-8 py-3 bg-gray-500 hover:bg-gray-600 text-white font-bold rounded-full shadow-lg transition-all duration-300 text-lg"
              >
                No 😅
              </button>
            </div>

            {/* Back button */}
            <div className="flex justify-center w-full mt-12">
              <button
                className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
                onClick={() => navigate(config.recapRedirectPath)}
              >
                <ArrowLeft /> {config.previousPageText}
              </button>
            </div>
          </div>
        ) : (
          // Success message after clicking YES
          <div className="text-center animate-pulse">
            <div className="text-8xl mb-6 animate-bounce">🎉</div>
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400 mb-4">
              YESSS! 💕
            </h1>
            <p className="text-xl text-white/90 mb-6">
              {config.dateAcceptedMessage}
            </p>
            <div className="flex gap-2 justify-center text-4xl">
              <span className="animate-bounce" style={{ animationDelay: '0s' }}>😍</span>
              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>💋</span>
              <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>💕</span>
            </div>
          </div>
        )}
      </div>

      {/* Floating hearts background */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default Message;
