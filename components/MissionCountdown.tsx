import React, { useState, useEffect } from 'react';

interface MissionCountdownProps {
  targetDate: string;
}

export const MissionCountdown: React.FC<MissionCountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Run immediately

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-slate-800 text-white p-4 rounded-lg shadow-xl border-2 border-slate-600 mt-6 max-w-md w-full mx-auto">
      <h3 className="text-center text-xs font-typewriter uppercase tracking-widest mb-3 text-blue-300">
        Tempo Restante para a Operação
      </h3>
      <div className="flex justify-center gap-4 text-center">
        {[
          { label: 'Dias', value: timeLeft.days },
          { label: 'Hrs', value: timeLeft.hours },
          { label: 'Min', value: timeLeft.minutes },
          { label: 'Seg', value: timeLeft.seconds },
        ].map((item) => (
          <div key={item.label} className="bg-slate-900 p-2 rounded w-16 border border-slate-700">
            <div className="text-2xl font-bold font-mono text-yellow-400">{item.value.toString().padStart(2, '0')}</div>
            <div className="text-[10px] text-gray-400 uppercase">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};