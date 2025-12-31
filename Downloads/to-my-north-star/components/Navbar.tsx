
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'achievement', label: '3.83' },
    { id: 'memories', label: 'Moments' },
    { id: 'letter', label: 'Letter' },
    { id: 'wishes', label: 'Future' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = links.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 150;

      sections.forEach(section => {
        if (section && 
            scrollPosition >= section.offsetTop && 
            scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
      scrolled ? 'bg-[#fff9f9]/90 backdrop-blur-lg border-b border-[#f2dada]/20 py-4' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <div 
          onClick={() => scrollToSection('home')}
          className="font-serif text-3xl italic cursor-pointer tracking-tighter text-[#3d2b2b] hover:text-[#e8a0a0] transition-all duration-500 group"
        >
          North <span className="text-[#e8a0a0] group-hover:ml-1 transition-all">Star</span>
        </div>
        
        <div className="flex space-x-6 md:space-x-12">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-700 relative py-2 ${
                activeSection === link.id ? 'text-[#3d2b2b]' : 'text-[#a68a8a] hover:text-[#e8a0a0]'
              }`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 h-px bg-[#e8a0a0] transition-all duration-700 ${
                activeSection === link.id ? 'w-full' : 'w-0'
              }`}></span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
