import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div
      style={{ zIndex: 9999 }}
      className="fixed top-20 right-4 sm:right-8 p-3.5 px-4 bg-[#171917] text-white rounded-2xl shadow-float border border-neutral-700/80 text-xs flex items-center space-x-2.5 backdrop-blur-md animate-slideDown pointer-events-none"
      role="status"
      aria-live="polite"
    >
      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
      <span className="font-medium tracking-wide">{message}</span>
    </div>
  );
};
