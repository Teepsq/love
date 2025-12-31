
import React from 'react';
import Achievement from './Achievement';
import Memories from './Memories';
import Letter from './Letter';
import Wishes from './Wishes';

const Home: React.FC = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#fff0f0] rounded-full blur-[150px] -z-10 opacity-40"></div>
        
        {/* Decorative SVG Constellation */}
        <svg className="absolute top-20 right-10 w-64 h-64 opacity-10 pointer-events-none" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="1" fill="#e8a0a0" />
          <circle cx="150" cy="50" r="1.5" fill="#e8a0a0" />
          <circle cx="40" cy="120" r="1" fill="#e8a0a0" />
          <path d="M100,100 L150,50 M100,100 L40,120" stroke="#e8a0a0" strokeWidth="0.5" strokeDasharray="4 4" />
        </svg>

        <div className="mb-12 inline-block py-2 px-8 rounded-full border border-[#f2dada] text-[#e8a0a0] text-[10px] uppercase tracking-[0.6em] font-bold bg-white/50 backdrop-blur-sm shadow-sm transition-all hover:scale-105 cursor-default">
          To My North Star
        </div>
        
        <h1 className="font-serif text-5xl md:text-[8rem] italic text-[#3d2b2b] mb-16 leading-[1.1] md:leading-[0.9] max-w-6xl px-4 font-light tracking-tighter">
          No Matter How Far I am <br /> 
          You are Still <span className="text-[#e8a0a0] opacity-90">Close to MY HEART</span>
        </h1>
        
        <div className="max-w-4xl mx-auto px-8 mb-40">
          <p className="text-[#6b5656] text-2xl md:text-4xl leading-[1.7] font-serif italic font-light opacity-80">
            "Well, this is a promise I made to you. I might be busy, but I am always trying to be with you. 
            We might fight, but I will always choose you. Because you are my everything, my happiness, and my peace."
          </p>
        </div>

        <div className="flex flex-col items-center group cursor-pointer" onClick={() => document.getElementById('achievement')?.scrollIntoView({ behavior: 'smooth' })}>
           <div className="w-px h-24 bg-gradient-to-b from-[#e8a0a0] to-transparent mb-8 group-hover:h-32 transition-all duration-700"></div>
           <p className="text-[#a68a8a] text-[9px] tracking-[0.8em] uppercase font-bold">
             Begin the story
           </p>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto">
        <section id="achievement" className="py-48 md:py-72 px-6">
          <Achievement />
        </section>

        <section id="memories" className="py-48 md:py-72 px-6 border-t border-[#fcf0f0]">
          <Memories />
        </section>

        <section id="letter" className="py-48 md:py-72 px-6 border-t border-[#fcf0f0] relative">
          {/* Background decoration for the letter section */}
          <div className="absolute left-0 w-full h-full -z-10 opacity-5">
             <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0,50 Q25,40 50,50 T100,50" fill="none" stroke="#e8a0a0" strokeWidth="0.1" />
             </svg>
          </div>
          <Letter />
        </section>

        <section id="wishes" className="py-48 md:py-72 px-6 border-t border-[#fcf0f0] bg-[#fffcfc] -mx-6 md:-mx-24 px-6 md:px-24">
          <Wishes />
        </section>
      </div>

      <div className="py-64 border-t border-[#f2dada] text-center bg-[#fffafa]">
        <div className="max-w-4xl mx-auto px-8">
          <p className="font-serif italic text-[#e8a0a0] text-6xl md:text-8xl mb-16 leading-tight opacity-90">
            "My love travels <br/>further than miles."
          </p>
          <div className="h-px w-32 bg-[#e8a0a0] mx-auto mb-16 opacity-30"></div>
          <p className="text-[#a68a8a] text-[11px] tracking-[1.2em] uppercase font-black">
            Always Yours • 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
