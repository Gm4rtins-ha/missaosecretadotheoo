import React from 'react';
import { RsvpTerminal } from './components/RsvpTerminal';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 flex items-center justify-center">
      <RsvpTerminal />
    </div>
  );
};

export default App;
