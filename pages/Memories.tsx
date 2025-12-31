
import React from 'react';

interface MemoryCard {
  id: number;
  title: string;
  reflection: string;
  tag: string;
  alignment: 'left' | 'right';
  icon: React.ReactNode;
}

const Memories: React.FC = () => {
  const cards: MemoryCard[] = [
    {
      id: 1,
      tag: "Resonance",
      title: "The Frequency of Your Voice",
      reflection: "It’s the way you share your deepest thoughts with me. Even when we are miles apart, your voice carries a peace that makes the distance feel like nothing at all. I can hear the smile in your words.",
      alignment: 'left',
      icon: (
        <svg viewBox="0 0 100 100" className="w-32 h-32 stroke-[#e8a0a0] fill-none stroke-[0.5] opacity-50">
          <circle cx="50" cy="50" r="45" strokeDasharray="1 4" />
          <circle cx="50" cy="50" r="35" strokeDasharray="2 2" />
          <path d="M20,50 C30,40 40,60 50,50 C60,40 70,60 80,50" className="animate-[pulse_4s_ease-in-out_infinite]" />
          <circle cx="50" cy="50" r="5" fill="#e8a0a0" fillOpacity="0.1" />
        </svg>
      )
    },
    {
      id: 2,
      tag: "Motion",
      title: "Your Celebration Dance",
      reflection: "I can see you in my mind, dancing and celebrating life after a hard week. That infectious energy you have—it’s the rhythm that keeps me going on my hardest days. You are my joy.",
      alignment: 'right',
      icon: (
        <svg viewBox="0 0 100 100" className="w-32 h-32 stroke-[#e8a0a0] fill-none stroke-[0.5] opacity-50">
          <path d="M50,10 L50,90 M10,50 L90,50" strokeDasharray="1 2" />
          <path d="M30,30 Q50,10 70,30 T70,70 T30,70 T30,30" className="animate-[spin_10s_linear_infinite]" style={{ transformOrigin: 'center' }} />
          <circle cx="50" cy="50" r="15" strokeDasharray="4 2" />
        </svg>
      )
    },
    {
      id: 3,
      tag: "Stillness",
      title: "Midnight Synchronicity",
      reflection: "The comfort of our calls when the world finally stops moving. You look most beautiful when you're just being yourself, comfortable and happy in your own space, miles away but right here.",
      alignment: 'left',
      icon: (
        <svg viewBox="0 0 100 100" className="w-32 h-32 stroke-[#e8a0a0] fill-none stroke-[0.5] opacity-50">
          <path d="M20,80 L80,20" strokeDasharray="2 2" />
          <path d="M20,20 L80,80" strokeDasharray="2 2" />
          <rect x="35" y="35" width="30" height="30" rx="2" transform="rotate(45 50 50)" />
          <circle cx="50" cy="50" r="2" fill="#e8a0a0" />
        </svg>
      )
    },
    {
      id: 4,
      tag: "Gravity",
      title: "The North Star Effect",
      reflection: "Every text, every shared thought, every silent promise. I love how you make sure I am included in every part of your journey. You are the constant that guides me home, no matter where I am.",
      alignment: 'right',
      icon: (
        <svg viewBox="0 0 100 100" className="w-32 h-32 stroke-[#e8a0a0] fill-none stroke-[0.5] opacity-50">
          <polygon points="50,10 55,45 90,50 55,55 50,90 45,55 10,50 45,45" />
          <circle cx="50" cy="50" r="40" strokeDasharray="1 8" />
          <circle cx="50" cy="50" r="20" strokeDasharray="1 4" />
        </svg>
      )
    }
  ];

  return (
    <div className="fade-in py-12">
      <div className="max-w-3xl mb-32 md:mb-48">
        <span className="text-[10px] uppercase tracking-[0.5em] text-[#e8a0a0] block mb-8 font-bold">Museum of the Mind</span>
        <h2 className="font-serif text-6xl md:text-8xl mb-10 text-[#3d2b2b] italic font-light leading-tight">
          My Favorite <br/>times with you
        </h2>
        <p className="text-[#a68a8a] text-xl italic font-light leading-relaxed max-w-xl">
          We may not have photos for every second, but these are the frames I’ve etched into my memory. The moments where words weren't enough.
        </p>
      </div>

      <div className="relative">
        {/* Central Timeline Thread */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#f2dada] via-[#f2dada] to-transparent opacity-40"></div>

        <div className="space-y-40 md:space-y-0">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className={`flex flex-col md:flex-row items-center w-full ${
                card.alignment === 'right' ? 'md:flex-row-reverse' : ''
              } md:mb-80 last:mb-0`}
            >
              {/* Text Narrative */}
              <div className="w-full md:w-1/2 px-6 md:px-20">
                <div className={`max-w-md ${card.alignment === 'right' ? 'ml-auto text-right' : 'mr-auto text-left'}`}>
                  <div className="flex items-center gap-4 mb-8 justify-start group">
                    {card.alignment === 'right' && <div className="h-px w-8 bg-[#e8a0a0] opacity-30"></div>}
                    <span className="text-[10px] uppercase tracking-[0.4em] text-[#e8a0a0] font-bold">{card.tag}</span>
                    {card.alignment === 'left' && <div className="h-px w-8 bg-[#e8a0a0] opacity-30"></div>}
                  </div>
                  <h3 className="font-serif text-4xl md:text-5xl text-[#3d2b2b] mb-10 italic leading-tight tracking-tight">{card.title}</h3>
                  <p className="text-[#6b5656] leading-[2.4] font-light italic text-xl opacity-80">
                    "{card.reflection}"
                  </p>
                </div>
              </div>

              {/* Abstract Artistic Card */}
              <div className="w-full md:w-1/2 mt-20 md:mt-0 px-6 md:px-20 flex justify-center">
                <div className="relative w-full max-w-[340px] aspect-[3/4] bg-white border border-[#fcf0f0] shadow-[0_40px_100px_rgba(232,160,160,0.08)] rounded-sm group overflow-hidden flex items-center justify-center transition-all duration-1000 hover:shadow-[0_60px_120px_rgba(232,160,160,0.12)] hover:-translate-y-4">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#fffafa] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-10 left-10 text-[8px] uppercase tracking-[0.8em] text-[#e8a0a0] opacity-40 group-hover:opacity-100 transition-opacity">Fragment_0{card.id}</div>
                  <div className="absolute bottom-10 right-10 flex flex-col items-end gap-1 opacity-20 group-hover:opacity-50 transition-all">
                    <div className="w-8 h-px bg-[#3d2b2b]"></div>
                    <div className="w-4 h-px bg-[#3d2b2b]"></div>
                  </div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="mb-12 transition-all duration-1000 group-hover:scale-110 group-hover:rotate-3">
                      {card.icon}
                    </div>
                    <div className="h-[0.5px] w-12 bg-[#e8a0a0] mb-8 opacity-20"></div>
                    <span className="font-serif italic text-[#3d2b2b] text-2xl tracking-tight opacity-40 group-hover:opacity-80 transition-opacity">Stored Permanently</span>
                  </div>

                  {/* Glassy Corner Overlay */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#fff9f9] to-transparent opacity-50"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-80 text-center max-w-3xl mx-auto border-t border-[#f2dada]/30 pt-40">
        <div className="mb-16">
           <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e8a0a0" strokeWidth="0.5" className="mx-auto opacity-40">
             <path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z" />
           </svg>
        </div>
        <p className="font-serif italic text-4xl md:text-5xl text-[#6b5656] leading-relaxed px-8 font-light">
          "I don't need a single photograph to remember exactly how much you mean to me."
        </p>
        <div className="mt-20 h-px w-20 bg-[#e8a0a0] mx-auto opacity-20"></div>
      </div>
    </div>
  );
};

export default Memories;
