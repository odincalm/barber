import React, { useState, useEffect } from 'react';
import { Calendar, Phone, MessageCircle, Menu, X } from 'lucide-react';
import { ViewType } from '../types';
import { MKS_CONFIG } from '../config/mksConfig';

interface HeaderProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
  onOpenDrawer: () => void;
  isDrawerOpen?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenDrawer,
  isDrawerOpen = false
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 15;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 9990,
        transform: 'none',
        willChange: 'auto'
      }}
      className={`mks-fixed-header w-full pt-[env(safe-area-inset-top)] transition-[background-color,border-color,box-shadow] duration-200 ${
        isScrolled
          ? 'bg-[#F5F5F2]/96 backdrop-blur-md shadow-sm border-b border-neutral-200/90'
          : 'bg-[#F5F5F2]/80 backdrop-blur-xs border-b border-neutral-200/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3 flex items-center justify-between">
        
        {/* Brand Monogram & Name */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-3 group cursor-pointer text-left focus:outline-none"
          aria-label="MKS Hair Salon Home"
        >
          <div className="relative w-10 h-10 rounded-full bg-[#171917] text-[#B7A27A] flex items-center justify-center font-display font-bold text-base tracking-wider shadow-sm transition-transform group-hover:scale-105 shrink-0 border border-neutral-800">
            <span>M</span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="font-display font-bold tracking-tight text-lg text-[#171917]">
                {MKS_CONFIG.brand}
              </span>
              <span className="text-[9.5px] font-bold text-[#344238] bg-[#344238]/10 px-1.5 py-0.5 rounded border border-[#344238]/20 leading-none">
                M.K.S
              </span>
            </div>
            <span className="text-[9px] font-semibold tracking-widest text-[#5C685F] uppercase mt-0.5">
              {MKS_CONFIG.tagline}
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links (Visible on Laptop & Large Desktop 1024px+) */}
        <nav
          className="hidden lg:flex items-center space-x-1 bg-white/80 p-1.5 rounded-full border border-neutral-200/90 shadow-xs"
          aria-label="Main Navigation"
        >
          {(
            [
              { id: 'home', label: 'Home' },
              { id: 'services', label: 'Services' },
              { id: 'work', label: 'Work' },
              { id: 'location', label: 'Location' },
              { id: 'about', label: 'About' }
            ] as const
          ).map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? 'text-[#171917] bg-[#F5F5F2] shadow-xs'
                    : 'text-[#5C685F] hover:text-[#171917] hover:bg-neutral-100/50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop Quick Actions (Laptop & Desktop 1024px+) */}
        <div className="hidden lg:flex items-center space-x-2.5">
          {/* Live Status Pill */}
          <a
            href={MKS_CONFIG.phone.callUrl}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-800 text-xs font-bold tracking-wide transition-transform hover:scale-102"
            title="Open Today 6:30 PM to 9:00 PM"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" aria-hidden="true" />
            <span>OPEN NOW</span>
          </a>

          {/* Call Owner Action */}
          <a
            href={MKS_CONFIG.phone.callUrl}
            className="p-2.5 px-3 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-100 text-[#171917] transition-all text-xs font-bold flex items-center space-x-1.5 shadow-xs"
            title="Call MKS Salon (9991377406)"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>{MKS_CONFIG.phone.raw}</span>
          </a>

          {/* WhatsApp Direct Action */}
          <a
            href={MKS_CONFIG.whatsapp.directUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 px-3 rounded-xl border border-neutral-200 bg-emerald-50/70 hover:bg-emerald-100 text-emerald-800 transition-all text-xs font-bold flex items-center space-x-1.5 shadow-xs"
            title="WhatsApp Booking (7419056567)"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>WA: {MKS_CONFIG.whatsapp.number}</span>
          </a>

          {/* Primary Book Appointment CTA */}
          <button
            onClick={() => onNavigate('book')}
            className="py-2.5 px-4 bg-[#344238] hover:bg-[#171917] text-[#F5F5F2] rounded-xl font-bold text-xs tracking-wide shadow-tactile flex items-center space-x-2 transition-all active:scale-95 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#B7A27A]" />
            <span>BOOK APPOINTMENT</span>
          </button>
        </div>

        {/* Tablet Navigation (<1024px and >=640px) */}
        <div className="hidden sm:flex lg:hidden items-center space-x-2.5">
          <a
            href={MKS_CONFIG.phone.callUrl}
            className="p-2.5 px-3 rounded-xl border border-neutral-200 bg-white text-[#171917] text-xs font-bold flex items-center space-x-1.5 shadow-xs active:scale-95"
            title="Call MKS Salon (9991377406)"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>{MKS_CONFIG.phone.raw}</span>
          </a>

          <button
            onClick={() => onNavigate('book')}
            className="py-2.5 px-3.5 bg-[#344238] hover:bg-[#171917] text-[#F5F5F2] rounded-xl font-bold text-xs shadow-tactile flex items-center space-x-1.5 active:scale-95 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#B7A27A]" />
            <span>BOOK</span>
          </button>

          {/* Accessible Tablet Hamburger Button (48x48px Touch Target) */}
          <button
            onClick={onOpenDrawer}
            className="w-12 h-12 rounded-xl bg-white border border-neutral-200 text-[#171917] flex items-center justify-center shadow-xs active:scale-95 transition-transform cursor-pointer"
            aria-label={isDrawerOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isDrawerOpen}
          >
            {isDrawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Quick Actions (<640px) */}
        <div className="flex sm:hidden items-center space-x-2">
          {/* Quick Call Button (Accessible 44x44px target) */}
          <a
            href={MKS_CONFIG.phone.callUrl}
            className="w-11 h-11 rounded-xl bg-white border border-neutral-200 text-emerald-700 shadow-xs flex items-center justify-center active:scale-95"
            aria-label="Call MKS Hair Salon"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* Accessible Mobile Hamburger Button (48x48px Touch Target) */}
          <button
            onClick={onOpenDrawer}
            className="w-12 h-12 rounded-xl bg-white border border-neutral-200 text-[#171917] shadow-xs flex items-center justify-center active:scale-95 transition-transform cursor-pointer"
            aria-label={isDrawerOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isDrawerOpen}
          >
            {isDrawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>
    </header>
  );
};
