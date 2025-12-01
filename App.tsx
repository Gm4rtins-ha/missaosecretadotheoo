import React from 'react';
import { FadeIn } from './components/FadeIn';

const App: React.FC = () => {
  const textStrokeStyle = {
    WebkitTextStroke: '1px black',
  };

  const babyTextStyle = {
    WebkitTextStroke: '1.5px black',
    textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 selection:bg-yellow-400 selection:text-black">
      {/* Grid de fundo */}
      <div
        className="fixed inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <main className="relative z-10 container mx-auto px-4 py-8 md:py-12 flex flex-col items-center gap-12">
        {/* Header / Logo */}
        <FadeIn className="w-full">
          <header className="text-center space-y-4">
            <div className="inline-block mb-4 relative group">
              <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
              <div className="w-40 h-40 rounded-full border-4 border-white shadow-[0_0_30px_rgba(255,255,255,0.2)] overflow-hidden bg-slate-800 relative z-10">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/0/0e/The_Boss_Baby_poster.jpg"
                  alt="O Poderoso Chefinho"
                  className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="relative">
              <span className="block text-xl md:text-2xl text-blue-400 font-serif italic mb-2 tracking-widest">
                Convite do
              </span>

              <h1 className="flex flex-col items-center leading-none drop-shadow-2xl">
                <span
                  className="font-boss text-5xl md:text-7xl text-white tracking-widest uppercase relative z-10"
                  style={{
                    ...textStrokeStyle,
                    letterSpacing: '0.1em',
                    textShadow: '4px 4px 6px rgba(0,0,0,0.5)',
                  }}
                >
                  PODEROSO
                </span>

                <span
                  className="font-baby text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-600 relative -mt-2 z-20"
                  style={babyTextStyle}
                >
                  CHEFINHO
                </span>
              </h1>
            </div>

            <div className="inline-block bg-red-700 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest transform -rotate-2 shadow-lg mt-4 border border-red-800">
              Confidencial
            </div>
          </header>
        </FadeIn>
      </main>
    </div>
  );
};

export default App;
