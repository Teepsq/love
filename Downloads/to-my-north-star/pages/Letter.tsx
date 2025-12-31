
import React from 'react';

const Letter: React.FC = () => {
  return (
    <div className="fade-in py-12 max-w-3xl mx-auto px-6">
      <div className="relative group">
        {/* Paper Shadow Stack Effect */}
        <div className="absolute inset-0 bg-white translate-x-2 translate-y-2 border border-[#f2dada]/30 -z-10 rounded-sm"></div>
        <div className="absolute inset-0 bg-white translate-x-4 translate-y-4 border border-[#f2dada]/20 -z-20 rounded-sm"></div>
        
        <div className="bg-white p-14 md:p-24 shadow-[0_20px_80px_rgba(242,218,218,0.25)] rounded-sm border border-[#fcf0f0] relative overflow-hidden">
          {/* Delicate corner ornament */}
          <div className="absolute top-0 right-0 p-8 opacity-20">
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="#e8a0a0" strokeWidth="0.5">
              <path d="M100,0 L0,0 L0,100" />
              <circle cx="50" cy="50" r="20" />
            </svg>
          </div>

          <header className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.8em] text-[#e8a0a0] block mb-6 font-bold">Personal & Private</span>
            <h2 className="font-serif text-5xl italic text-[#3d2b2b]">To My Love</h2>
          </header>
          
          <article className="space-y-12 text-[#3d2b2b] text-xl md:text-2xl leading-[2.1] font-light italic text-justify">
            <p>
              Well we might be very far away it don't mean that I love you less cause I do love you
              more than anything and I will try to show you in every way possible cause I don't
              wanna make you feel like you are not love in your life.
            </p>
            
            <p>
              You know I really love your everything cause you are one of the most beautiful thing 
              in the world for me cause I feel like at times without you my life might not have begin really 
              cause while talking with you I started understanding you and myself also cause without you 
              I feel lost really.
            </p>

            <p>
              Well it has almost been a year since we meet but I didn't knew I was in love until I
              was in Feb cause of everything I realized that I was in love you soo yes I really
              don't know when I fell in love with you there is a saying of a north star it is said
              that is one of the most brightest star which is as a light and is used to find direction
              and you are the north star in my life my love.
            </p>

            <p>
              And when you are always trying your best for you exams and everything I really wanted
              to help you with everything I had and I really tried my best for you. I don't know if
              that was enough or not cause it doesn't mean that I was not worth it every sec of it
              was worth it my love.
            </p>

            <p>
              Thank you for coming into my life and really wishing you a happy new year and looking 
              forward to how our year unfolds.
            </p>
            
            <div className="mt-32 pt-12 border-t border-[#fcf0f0]">
              <div className="flex justify-between items-end">
                <div>
                  <p className="font-serif text-3xl text-[#3d2b2b]">Always Yours,</p>
                  <span className="text-[#e8a0a0] text-[11px] uppercase tracking-[0.5em] block mt-6 font-black not-italic">DECEMBER 2024</span>
                </div>
                <div className="opacity-10">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="#e8a0a0">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21.35z"/>
                  </svg>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Letter;
