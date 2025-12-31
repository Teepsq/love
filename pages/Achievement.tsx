
import React from 'react';

const Achievement: React.FC = () => {
  return (
    <div className="fade-in py-12">
      <header className="mb-24 text-center">
        <span className="text-[11px] uppercase tracking-[0.5em] text-[#e8a0a0] block mb-8 font-bold">Your Efforts Made</span>
        <div className="relative inline-block">
          <h1 className="font-serif text-[10rem] md:text-[14rem] text-[#3d2b2b] leading-[0.8] tracking-tighter italic opacity-[0.03] absolute -top-12 left-1/2 -translate-x-1/2 select-none">3.83</h1>
          <h1 className="font-serif text-8xl md:text-[10rem] text-[#3d2b2b] mb-4 tracking-tighter italic relative z-10">3.83</h1>
        </div>
        <div className="h-[1px] w-24 bg-[#f2dada] mx-auto mt-8"></div>
        <p className="mt-8 text-[#a68a8a] text-[10px] uppercase tracking-[0.4em]">GPA • Semester Final</p>
      </header>
      
      <div className="grid lg:grid-cols-2 gap-20 items-start text-[#6b5656]">
        <div className="space-y-10">
          <h2 className="font-serif text-4xl md:text-5xl italic text-[#3d2b2b] leading-tight">The beauty of <br/>Giving your absolute best</h2>
          <div className="space-y-8 font-light text-lg leading-[2] italic">
            <p>
              I have watched you ever since you reached there. I've seen you work really hard when you need to, trying to build connections, even when your heart got broken in unexpected ways. I saw you pushing yourself to read, knowing that you want a good score and you want to get better at everything you do. 
            </p>
            <p>
              Well, I know there are times you don't wanna do it and you ask me to help you—which I am really more than happy to do. I feel happy as a man helping the woman I love so dearly. It's not just about the numbers; it's about seeing you conquer the things you thought were impossible.
            </p>
            <p className="text-[#3d2b2b] opacity-90">
              A 3.83 is a triumph of will. Please, don't push yourself to the point of burnout. You are already everything I could ever admire.
            </p>
          </div>
        </div>
        
        <div className="bg-white p-12 md:p-16 rounded-sm border border-[#fcf0f0] shadow-[0_20px_60px_rgba(242,218,218,0.2)] relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#fff9f9] rounded-full group-hover:scale-110 transition-transform duration-1000"></div>
          
          <h3 className="font-serif text-2xl mb-10 italic text-[#3d2b2b] relative z-10">Beyond the Grades</h3>
          <ul className="space-y-8 text-[#a68a8a] text-[15px] italic font-light relative z-10">
            <li className="flex gap-6 items-start">
              <span className="text-[#e8a0a0] mt-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z"/></svg>
              </span>
              <span>The way you always try to see the best in everyone and everything around you.</span>
            </li>
            <li className="flex gap-6 items-start">
              <span className="text-[#e8a0a0] mt-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z"/></svg>
              </span>
              <span>Your resilience during exam week, never yielding, even when exhausted.</span>
            </li>
            <li className="flex gap-6 items-start">
              <span className="text-[#e8a0a0] mt-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z"/></svg>
              </span>
              <span>The kindness you show others while carrying your own heavy burdens.</span>
            </li>
            <li className="flex gap-6 items-start">
              <span className="text-[#e8a0a0] mt-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z"/></svg>
              </span>
              <span>Your empathy—making sure everyone else is okay before you rest.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
