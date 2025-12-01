import React from 'react';
import { AccessCard } from './components/AccessCard';
import { FadeIn } from './components/FadeIn';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      <main className="relative z-10 container mx-auto px-4 py-8 md:py-12 flex flex-col items-center gap-12">
        <FadeIn delay={200} className="w-full flex justify-center">
          <AccessCard />
        </FadeIn>
      </main>
    </div>
  );
};

export default App;
