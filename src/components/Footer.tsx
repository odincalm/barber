import React from 'react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { ViewType } from '../types';
import { MKS_CONFIG } from '../config/mksConfig';

interface FooterProps {
  onNavigate: (view: ViewType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-white border-t border-neutral-200 mt-auto py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Lockup */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
          <div className="w-9 h-9 rounded-full bg-[#171917] text-[#F5F5F2] flex items-center justify-center font-display font-bold text-sm shrink-0">
            M
          </div>
          <div>
            <p className="text-sm font-bold text-[#171917]">
              {MKS_CONFIG.brand} ({MKS_CONFIG.altBrand})
            </p>
            <p className="text-xs text-[#5C685F]">
              {MKS_CONFIG.location.road}, {MKS_CONFIG.location.landmark}, {MKS_CONFIG.location.cityState}
            </p>
          </div>
        </div>

        {/* Quick Contacts & Landmark Badge */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#737373]">
          <a
            href={MKS_CONFIG.phone.callUrl}
            className="hover:text-[#171917] transition-colors flex items-center space-x-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>{MKS_CONFIG.phone.formatted}</span>
          </a>

          <a
            href={MKS_CONFIG.whatsapp.directUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#171917] transition-colors flex items-center space-x-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>WA: {MKS_CONFIG.whatsapp.number}</span>
          </a>

          <a
            href={MKS_CONFIG.location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#171917] transition-colors flex items-center space-x-1 text-[#344238] font-semibold"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Salarpur Road, Haryana</span>
          </a>
        </div>

        {/* Legal, Copyright & Quiet Creator Credit */}
        <div className="text-xs text-[#737373] text-center md:text-right">
          © 2026 {MKS_CONFIG.brand} · Website built by{' '}
          <a
            href="https://instagram.com/odincalm0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5C685F] hover:text-[#171917] underline decoration-neutral-300 underline-offset-2 transition-colors focus:outline-none focus:ring-1 focus:ring-[#B7A27A] rounded"
          >
            Nitin Kumar
          </a>
        </div>

      </div>
    </footer>
  );
};
