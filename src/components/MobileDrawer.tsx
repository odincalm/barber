import React, { useEffect } from 'react';
import { X, Home, Scissors, Camera, MapPin, Info, Calendar, Phone, MessageSquare } from 'lucide-react';
import { ViewType } from '../types';
import { MKS_CONFIG } from '../config/mksConfig';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: ViewType) => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  // Lock background scroll when open, restore precisely when closed
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{ zIndex: 9995 }}
        className={`fixed inset-0 bg-[#171917]/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <aside
        style={{ zIndex: 9996 }}
        className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out flex flex-col p-6 border-l border-neutral-200 overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile Navigation Menu"
        aria-hidden={!isOpen}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-100 shrink-0">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-[#171917] text-[#B7A27A] flex items-center justify-center font-display font-bold text-xs border border-neutral-800">
              M
            </div>
            <div>
              <span className="font-display font-bold text-sm text-[#171917] block leading-tight">
                {MKS_CONFIG.brand}
              </span>
              <span className="text-[9px] text-[#5C685F] font-semibold">Salarpur Road, Haryana</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-neutral-100 text-[#737373] active:scale-95 transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Close navigation"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Destination Links */}
        <div className="py-6 flex flex-col space-y-2 shrink-0">
          <button
            onClick={() => {
              onNavigate('home');
              onClose();
            }}
            className="text-left py-3 px-3.5 rounded-xl font-bold text-sm hover:bg-[#F5F5F2] text-[#171917] flex items-center space-x-3 transition-colors cursor-pointer"
          >
            <Home className="w-4 h-4 text-[#5C685F]" />
            <span>Home</span>
          </button>

          <button
            onClick={() => {
              onNavigate('services');
              onClose();
            }}
            className="text-left py-3 px-3.5 rounded-xl font-bold text-sm hover:bg-[#F5F5F2] text-[#171917] flex items-center space-x-3 transition-colors cursor-pointer"
          >
            <Scissors className="w-4 h-4 text-[#B7A27A]" />
            <span>Services & Pricing</span>
          </button>

          <button
            onClick={() => {
              onNavigate('work');
              onClose();
            }}
            className="text-left py-3 px-3.5 rounded-xl font-bold text-sm hover:bg-[#F5F5F2] text-[#171917] flex items-center space-x-3 transition-colors cursor-pointer"
          >
            <Camera className="w-4 h-4 text-[#B7A27A]" />
            <span>Studio Work Gallery</span>
          </button>

          <button
            onClick={() => {
              onNavigate('location');
              onClose();
            }}
            className="text-left py-3 px-3.5 rounded-xl font-bold text-sm hover:bg-[#F5F5F2] text-[#171917] flex items-center space-x-3 transition-colors cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-[#344238]" />
            <div className="flex flex-col">
              <span>Studio Location</span>
              <span className="text-[10px] text-[#737373] font-normal">Salarpur Road, near Sain Dharamshala</span>
            </div>
          </button>

          <button
            onClick={() => {
              onNavigate('about');
              onClose();
            }}
            className="text-left py-3 px-3.5 rounded-xl font-bold text-sm hover:bg-[#F5F5F2] text-[#171917] flex items-center space-x-3 transition-colors cursor-pointer"
          >
            <Info className="w-4 h-4 text-[#5C685F]" />
            <span>About MKS</span>
          </button>
        </div>

        {/* Drawer Action Footer */}
        <div className="mt-auto pt-4 border-t border-neutral-100 space-y-2.5 shrink-0">
          <button
            onClick={() => {
              onNavigate('book');
              onClose();
            }}
            className="w-full py-3.5 bg-[#344238] hover:bg-[#171917] text-white font-bold text-xs tracking-wider uppercase rounded-xl shadow-tactile flex items-center justify-center space-x-2 transition-all active:scale-95 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#B7A27A]" />
            <span>BOOK APPOINTMENT</span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={MKS_CONFIG.phone.callUrl}
              className="py-2.5 px-3 bg-white border border-neutral-200 text-[#171917] font-bold text-xs rounded-xl flex items-center justify-center space-x-1.5 shadow-xs hover:bg-neutral-50"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Call Us</span>
            </a>

            <a
              href={MKS_CONFIG.whatsapp.directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold text-xs rounded-xl flex items-center justify-center space-x-1.5 shadow-xs hover:bg-emerald-100"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
          </div>

          <p className="text-[10px] text-center text-[#737373] pt-1">
            Open daily 6:30 PM — 9:00 PM
          </p>
        </div>
      </aside>
    </>
  );
};
