import React from 'react';
import { ArrowLeft, Calendar, Phone, MessageSquare } from 'lucide-react';
import { ViewType } from '../types';
import { MKS_CONFIG } from '../config/mksConfig';

interface AboutSectionProps {
  onNavigate: (view: ViewType) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-neutral-200 gap-4">
        <div>
          <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#5C685F] uppercase">
            MKS HAIR SALON / STUDIO PHILOSOPHY
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-[#171917] mt-1">
            About MKS Hair Salon
          </h2>
          <p className="text-xs sm:text-sm text-[#737373] mt-1 max-w-xl">
            Modern grooming with attention to detail on Salarpur Road, Haryana.
          </p>
        </div>

        <button
          onClick={() => onNavigate('home')}
          className="self-start md:self-auto px-4 py-2 rounded-xl bg-white border border-neutral-200 text-xs font-bold text-[#5C685F] hover:text-[#171917] flex items-center space-x-1.5 shadow-xs cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Studio Workshop Photography */}
        <div className="lg:col-span-6 relative aspect-[4/3.5] rounded-3xl overflow-hidden shadow-soft bg-neutral-200">
          <img
            src="https://lh3.googleusercontent.com/aida/AEtjO1WpRnGE9wZI7_HE-ibxtGe2HRzTWc9irIUEMcL_bn-kT7bjkBJ4ZjL0_8-5lChY5kY25SbYAiZvJHHlnNQIE8Ovqbz8lFHevaqM9BS_N_OVIm0GoqQL-Ivk8xXXFed7lJP4Yx9TjgSPiiIpWLsU9Ysb-EM2JeU0G_8GJnPMb3SOppySJr3bo5CUpB0MrnbHS6BtRHJrwFFj_hCLps4aKsPIsso_WgtzzMnylmiJfgeR3k0TaGeTUxGh26A"
            alt="MKS Studio Craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#171917]/45 flex flex-col justify-end p-6 text-white">
            <span className="text-xs font-bold text-[#B7A27A] tracking-widest uppercase">
              {MKS_CONFIG.altBrand}
            </span>
            <h3 className="text-xl font-bold font-display mt-0.5">Salarpur Road, Haryana</h3>
            <p className="text-xs text-neutral-200 mt-1">
              Crafted with precision near Shaheed/Sain Dharamshala
            </p>
          </div>
        </div>

        {/* Right Side: Minimized Core Business Philosophy & Discreet Signature */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* Core Business Information */}
          <div className="p-6 bg-white rounded-3xl border border-neutral-200/90 shadow-sm space-y-3">
            <div>
              <span className="text-[10px] font-bold text-[#B7A27A] uppercase tracking-wider block">
                MKS HAIR SALON
              </span>
              <p className="text-base sm:text-lg text-[#171917] font-semibold mt-1 leading-snug">
                Modern grooming with attention to detail.
              </p>
              <p className="text-xs sm:text-sm text-[#5C685F] mt-2 leading-relaxed">
                Precision shear work, clean fading, and beard styling crafted on Salarpur Road. Home service also available.
              </p>
            </div>

            <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
              <span className="text-[#5C685F] font-semibold">{MKS_CONFIG.location.fullAddress}</span>
              <span className="text-[10px] text-[#344238] font-bold">Near Sain Dharamshala</span>
            </div>
          </div>

          {/* Primary Action Callout (Appointment Booking) */}
          <div className="p-5 bg-white rounded-3xl border border-neutral-200/90 shadow-sm space-y-3">
            <button
              onClick={() => onNavigate('book')}
              className="w-full py-3.5 bg-[#344238] hover:bg-[#171917] text-[#F5F5F2] rounded-2xl font-bold text-xs tracking-wider uppercase transition-all shadow-tactile flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#B7A27A]" />
              <span>BOOK AN APPOINTMENT</span>
            </button>

            <div className="flex items-center justify-center space-x-4 text-xs text-neutral-600 font-medium pt-1">
              <a href={MKS_CONFIG.phone.callUrl} className="hover:underline flex items-center space-x-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Call: {MKS_CONFIG.phone.raw}</span>
              </a>
              <span className="text-neutral-300">•</span>
              <a
                href={MKS_CONFIG.whatsapp.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center space-x-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WA: {MKS_CONFIG.whatsapp.number}</span>
              </a>
            </div>
          </div>

          {/* Discreet Creator Signature & Website Contact */}
          <div className="px-5 py-3.5 rounded-2xl bg-[#F5F5F2] border border-neutral-200/70 text-center sm:text-left space-y-1">
            <p className="text-[11px] text-[#737373]">
              Website built by{' '}
              <a
                href="https://instagram.com/odincalm0"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#344238] hover:text-[#171917] underline decoration-neutral-300 underline-offset-2 transition-colors focus:outline-none focus:ring-1 focus:ring-[#B7A27A] rounded"
              >
                Nitin Kumar
              </a>
            </p>
            <p className="text-[11px] text-[#737373]">
              Need a website for your business?{' '}
              <a
                href="https://instagram.com/odincalm0"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#344238] hover:text-[#171917] underline decoration-[#B7A27A] underline-offset-2 transition-colors focus:outline-none focus:ring-1 focus:ring-[#B7A27A] rounded"
              >
                Contact me
              </a>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
