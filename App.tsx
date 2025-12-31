
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[#ffeded]">
      <Navbar />
      <main className="flex-grow">
        <Home />
      </main>
      <footer className="py-12 text-center text-[#a68a8a] text-[10px] tracking-[0.4em] uppercase font-light border-t border-[#fcf0f0]">
        Forever & Always
      </footer>
    </div>
  );
};

export default App;
