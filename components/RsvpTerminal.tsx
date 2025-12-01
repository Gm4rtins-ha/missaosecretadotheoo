import React, { useState } from 'react';
import { MISSION_DATA } from '../constants';

export const RsvpTerminal: React.FC = () => {
  const [name, setName] = useState('');

  const sendWhatsApp = (attending: boolean) => {
    if (!name.trim()) {
      alert('Identifique-se, agente!');
      return;
    }

    const status = attending ? 'ACEITOU' : 'RECUSOU';
    const message = `
AGENTE IDENTIFICADO ✅

Nome: ${name}
Status: ${status} A MISSÃO 👶💼

Missão: Aniversário do ${MISSION_DATA.targetName}
Data: ${MISSION_DATA.date.split('-').reverse().join('/')}
Hora: ${MISSION_DATA.time}
Local: ${MISSION_DATA.location}
    `.trim();

    const url = `https://wa.me/${MISSION_DATA.hostPhone}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, '_blank');
  };

  return (
    <section className="w-full max-w-md mx-auto bg-slate-900 border border-slate-700 rounded-lg p-6 text-center space-y-4">
      <h2 className="text-lg font-bold text-white uppercase tracking-widest">
        Confirmação da Missão
      </h2>

      <input
        type="text"
        placeholder="Nome do agente"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 rounded bg-slate-800 border border-slate-600 text-white text-sm focus:outline-none focus:border-blue-400"
      />

      <div className="flex gap-3 justify-center">
        <button
          onClick={() => sendWhatsApp(true)}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-sm font-semibold"
        >
          ✅ Aceitar Missão
        </button>

        <button
          onClick={() => sendWhatsApp(false)}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-sm font-semibold"
        >
          ❌ Recusar Missão
        </button>
      </div>

      <p className="text-xs text-slate-400">
        A confirmação será enviada via WhatsApp para a Baby Corp.
      </p>
    </section>
  );
};
