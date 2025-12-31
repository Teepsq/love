
import React from 'react';

const Wishes: React.FC = () => {
  const wishes = [
    { title: "A Closer Future", desc: "Mornings where the only distance between us is the rooms.", color: "#fffcfc" },
    { title: "Soft Adventures", desc: "Exploring new corners of the world, hand in hand, no screens needed.", color: "#fff9f9" },
    { title: "Shared Silence", desc: "The comfort of simply existing in the same space as you.", color: "#fffcfc" },
    { title: "Limitless Joy", desc: "A year of laughter that doesn't need a Wi-Fi connection.", color: "#fff9f9" }
  ];

  return (
    <div className="fade-in py-12 px-6">
      <div className="text-center mb-32">
        <span className="text-[#e8a0a0] uppercase tracking-[0.7em] text-[10px] font-black">Vision 2025</span>
        <h1 className="font-serif text-5xl md:text-7xl text-[#3d2b2b] mt-10 italic font-light leading-tight">
          What i want our Story to <br/>Look like in the FUTURE
        </h1>
        <div className="w-20 h-px bg-[#e8a0a0] mx-auto mt-12 opacity-30"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {wishes.map((wish, index) => (
            <div key={index} className="bg-white p-12 rounded-sm border border-[#fcf0f0] shadow-sm hover:shadow-xl transition-all duration-700 hover:-translate-y-2 group">
              <div className="flex items-center gap-6 mb-8">
                <span className="font-serif text-4xl text-[#f2dada] group-hover:text-[#e8a0a0] transition-colors italic font-light">
                  0{index + 1}
                </span>
                <div className="h-px flex-grow bg-[#f2dada] opacity-30"></div>
              </div>
              <h3 className="font-serif text-3xl text-[#3d2b2b] mb-6 italic group-hover:translate-x-2 transition-transform duration-500">{wish.title}</h3>
              <p className="text-[#6b5656] font-light leading-relaxed text-xl italic opacity-80">
                {wish.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-48 p-20 md:p-32 bg-[#3d2b2b] text-[#fff9f9] text-center rounded-sm relative overflow-hidden shadow-[0_40px_100px_rgba(61,43,43,0.3)]">
          {/* Subtle animated pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%">
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <p className="font-serif text-4xl md:text-5xl italic mb-12 leading-relaxed">"The best is yet to come, and I'll be by your side for all of it."</p>
            <div className="h-px w-24 bg-[#e8a0a0] mx-auto mb-12 opacity-40"></div>
            <p className="text-[#e8a0a0] text-[11px] tracking-[1.2em] uppercase font-bold">Happy New Year, My Life</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishes;
