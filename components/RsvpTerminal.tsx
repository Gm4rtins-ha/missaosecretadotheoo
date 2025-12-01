import React, { useState } from 'react';
import { generateBossResponse } from '../services/geminiService';
import { CheckIcon, BriefcaseIcon, WhatsAppIcon } from './Icons';
import { MissionStatus } from '../types';
import { MISSION_DATA } from '../constants';

export const RsvpTerminal: React.FC = () => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState<MissionStatus>(MissionStatus.PENDING);
  const [bossMessage, setBossMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (attending: boolean) => {
    if (!name.trim()) {
      alert("Identifique-se, agente!");
      return;
    }

    setIsLoading(true);
    setStatus(MissionStatus.PENDING); // Reset temporarily

    try {
      const response = await generateBossResponse(name, attending);
      setBossMessage(response);
      setStatus(attending ? MissionStatus.ACCEPTED : MissionStatus.DECLINED);
    } catch (e) {
      console.error(e);
      setBossMessage("Erro na comunicação criptografada.");
    } finally {
      setIsLoading(false);
    }
  };

  const sendWhatsAppReport = () => {
    if (!name) return;

    const isAttending = status === MissionStatus.ACCEPTED;
    
    // Texto da mensagem
    let message = `*RELATÓRIO DE MISSÃO - ${MISSION_DATA.targetName}*\n\n`;
    message += `Agente: *${name}*\n`;
    message += `Status: ${isAttending ? '✅ CONFIRMADO' : '❌ RECUSADO'}\n\n`;
    message += isAttending 
      ? `Estarei presente no QG para a operação do aniversário!` 
      : `Infelizmente não poderei comparecer à missão.`;

    // Criar link do WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${MISSION_DATA.hostPhone}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white p-6 rounded-sm shadow-2xl border-t-8 border-black w-full max-w-lg mx-auto relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 p-4 opacity-5">
        <BriefcaseIcon />
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">
          Confirmar Presença
        </h2>
        <p className="text-xs text-slate-500 font-typewriter mt-1">
          PROTOCOLO DE SEGURANÇA: NIVEL 5
        </p>
      </div>

      {status === MissionStatus.PENDING && !isLoading && (
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Nome do Agente
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-100 border-b-2 border-slate-300 focus:border-blue-600 outline-none px-3 py-2 text-slate-900 font-bold transition-colors"
              placeholder="Digite seu nome..."
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              onClick={() => handleSubmit(true)}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded shadow-lg transform transition active:scale-95 flex items-center justify-center gap-2"
            >
              <CheckIcon />
              ACEITAR MISSÃO
            </button>
            <button
              onClick={() => handleSubmit(false)}
              className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-3 px-4 rounded shadow transform transition active:scale-95"
            >
              RECUSAR
            </button>
          </div>
        </div>
      )}

      {isLoading && (
        <div className="text-center py-8">
          <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-sm font-typewriter text-blue-800">Processando com o RH...</p>
        </div>
      )}

      {(status === MissionStatus.ACCEPTED || status === MissionStatus.DECLINED) && !isLoading && (
        <div className={`text-center p-4 rounded border-2 border-dashed ${status === MissionStatus.ACCEPTED ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
          <div className="mb-2">
            {status === MissionStatus.ACCEPTED ? (
              <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded uppercase">Acesso Liberado</span>
            ) : (
              <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded uppercase">Acesso Negado</span>
            )}
          </div>
          <p className="font-serif text-lg text-slate-800 italic mb-2">"{bossMessage}"</p>
          <p className="text-xs text-right font-bold text-slate-400 mt-2">- O Poderoso Chefinho</p>
          
          {/* WhatsApp Button */}
          <button 
            onClick={sendWhatsAppReport}
            className="mt-6 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-4 rounded-full shadow-lg flex items-center justify-center gap-2 transition-transform transform hover:scale-105"
          >
            <WhatsAppIcon />
            ENVIAR RELATÓRIO OFICIAL
          </button>
          <p className="text-[10px] text-slate-500 mt-2">
            * Clique para notificar o QG via WhatsApp
          </p>

          <button 
            onClick={() => { setStatus(MissionStatus.PENDING); setName(''); setBossMessage(''); }}
            className="mt-6 text-xs text-blue-600 hover:underline block mx-auto"
          >
            Nova confirmação
          </button>
        </div>
      )}
    </div>
  );
};