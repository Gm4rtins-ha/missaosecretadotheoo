import React from 'react';
import { MISSION_DATA } from '../constants';

export const AccessCard: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm mx-auto overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300 border border-slate-200 relative group">
      
      {/* Glossy Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-50 pointer-events-none z-20"></div>

      {/* Header */}
      <div className="bg-slate-900 p-4 flex justify-between items-center relative z-10">
        <div className="text-white">
          <h3 className="font-black text-xl uppercase leading-none tracking-tighter">AGENTE VIP</h3>
          <p className="text-[10px] text-blue-400 tracking-wider font-typewriter">ACESSO NIVEL 1</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center shadow-lg">
          <span className="text-slate-900 font-black text-sm">#1</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex gap-5 items-center bg-slate-50 relative z-10">
        {/* Photo Area */}
        <div className="w-28 h-32 bg-slate-200 rounded-lg overflow-hidden border-4 border-white shadow-md shrink-0 relative">
            {MISSION_DATA.photoUrl ? (
              <img 
                src={MISSION_DATA.photoUrl} 
                alt="Agente Aniversariante" 
                className="w-full h-full object-cover" 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-slate-300 text-slate-500 text-xs text-center p-2">
                FOTO PENDENTE
              </div>
            )}
            {/* Watermark over photo */}
            <div className="absolute bottom-0 left-0 right-0 bg-blue-600/80 text-white text-[8px] text-center font-bold py-0.5">
              BOSS BABY
            </div>
        </div>

        {/* Info Area */}
        <div className="flex-1 space-y-2">
          <div>
            <p className="text-[9px] text-slate-500 uppercase font-bold tracking-widest mb-0.5">Codinome</p>
            <p className="text-2xl font-black text-slate-900 leading-none">{MISSION_DATA.targetName}</p>
          </div>
          <div className="flex gap-2">
             <div className="flex-1">
                <p className="text-[9px] text-slate-500 uppercase font-bold tracking-widest mb-0.5">Idade</p>
                <p className="text-sm font-bold text-slate-900 bg-yellow-300 inline-block px-2 py-0.5 rounded-sm">
                  {MISSION_DATA.age} ANO
                </p>
             </div>
          </div>
          <div className="pt-1">
             <p className="text-[8px] font-typewriter text-blue-600">
               * AUTORIDADE SUPREMA *
             </p>
          </div>
        </div>
      </div>

      {/* Barcode Strip */}
      <div className="bg-white p-3 border-t border-slate-200 flex justify-between items-end relative z-10">
         <div className="flex flex-col gap-0.5">
           <div className="h-8 w-40 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVR4AWP4z8DwHwwDQUYAQ0M9AAD27gL+0Vz8OgAAAABJRU5ErkJggg==')] bg-repeat-x opacity-80 mix-blend-multiply"></div>
           <span className="text-[8px] font-mono text-slate-400 tracking-[0.2em]">{`ID: ${MISSION_DATA.date.replace(/-/g, '')}-BOSS`}</span>
         </div>
         <div className="text-right">
            <div className="w-12 h-12 border-2 border-red-600 rounded-full flex items-center justify-center opacity-80 transform -rotate-12 mask-image">
              <span className="text-[8px] font-black text-red-600 uppercase text-center leading-none">Top<br/>Secret</span>
            </div>
         </div>
      </div>
    </div>
  );
};