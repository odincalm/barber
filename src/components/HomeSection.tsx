import React from 'react';
import {
  Calendar,
  ArrowRight,
  Scissors,
  Camera,
  MapPin,
  PhoneCall
} from 'lucide-react';
import { ViewType } from '../types';
import { MKS_CONFIG } from '../config/mksConfig';

interface HomeSectionProps {
  onNavigate: (view: ViewType) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* ========================================================================= */}
      {/* HERO SECTION: Responsive Composition (Mobile Stack / Desktop 2-Column)   */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
        
        {/* Left Side: Headline, Copy & CTAs */}
        <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
          {/* Eyebrow */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.22em] text-[#B7A27A] uppercase bg-[#171917] px-2.5 py-1 rounded-md">
              CRAFTED FOR DISTINCTION
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-[#5C685F] tracking-wider uppercase">
              • MKS GROOMING STUDIO
            </span>
          </div>

          {/* Editorial Headline with Fluid Clamp Typography */}
          <h1
            className="font-extrabold font-display leading-[1.06] tracking-tight text-[#171917] mb-4"
            style={{ fontSize: 'clamp(2.35rem, 5.2vw, 4.5rem)' }}
          >
            YOUR LOOK.<br />
            <span className="text-[#344238]">YOUR SIGNATURE.</span>
          </h1>

          {/* Supporting Copy */}
          <p
            className="text-[#5C685F] font-normal leading-relaxed max-w-xl mb-6"
            style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)' }}
          >
            Modern hair and grooming, crafted with precision on Salarpur Road.
            Clean scissor craft, sharp razor lines, and personalized styling for discerning gentlemen.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="grid grid-cols-5 sm:flex sm:flex-wrap gap-2.5 sm:gap-3 mb-8">
            <button
              onClick={() => onNavigate('book')}
              className="col-span-3 sm:w-auto py-3.5 px-6 bg-[#344238] hover:bg-[#171917] text-[#F5F5F2] rounded-2xl font-bold text-xs sm:text-sm tracking-wide shadow-tactile flex items-center justify-center space-x-2.5 transition-all duration-200 active:scale-98 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#B7A27A]" />
              <span className="uppercase">BOOK APPOINTMENT</span>
            </button>

            <button
              onClick={() => onNavigate('services')}
              className="col-span-2 sm:w-auto py-3.5 px-5 bg-white hover:bg-neutral-50 text-[#171917] border border-neutral-300 rounded-2xl font-bold text-xs sm:text-sm tracking-wide shadow-xs flex items-center justify-center space-x-2 transition-all duration-200 active:scale-98 cursor-pointer"
            >
              <span className="uppercase">EXPLORE SERVICES</span>
              <ArrowRight className="w-4 h-4 text-[#737373]" />
            </button>
          </div>

          {/* Desktop/Tablet Location & Contact Trust Ledger */}
          <div className="pt-6 border-t border-neutral-200/90 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-[#5C685F] uppercase tracking-wider">Location</span>
              <span className="text-xs sm:text-sm font-bold text-[#171917] mt-0.5">{MKS_CONFIG.location.road}</span>
              <span className="text-[10px] text-[#737373]">{MKS_CONFIG.location.landmark}</span>
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-[#5C685F] uppercase tracking-wider">Pricing</span>
              <span className="text-xs sm:text-sm font-bold text-[#344238] mt-0.5">
                Haircut ₹50 • Combo ₹100
              </span>
              <span className="text-[10px] text-[#737373]">Beard Styling ₹200</span>
            </div>

            <div className="flex flex-col col-span-2 sm:col-span-1">
              <span className="text-[10px] font-bold text-[#5C685F] uppercase tracking-wider">Direct Access</span>
              <a href={MKS_CONFIG.phone.callUrl} className="text-xs sm:text-sm font-bold text-[#171917] mt-0.5 hover:underline">
                {MKS_CONFIG.phone.formatted}
              </a>
              <a
                href={MKS_CONFIG.whatsapp.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-emerald-700 font-semibold hover:underline"
              >
                WA: {MKS_CONFIG.whatsapp.number}
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Editorial Image Composition with REAL MKS Shop Owner */}
        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="relative w-full aspect-[4/4.4] sm:aspect-[4/3.8] lg:aspect-[4/4.3] rounded-[28px] overflow-hidden shadow-2xl bg-neutral-200 group">
            <img
              src={MKS_CONFIG.heroOwner.imageUrl}
              alt={MKS_CONFIG.heroOwner.alt}
              className="w-full h-full object-cover object-top filter contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-102"
              loading="eager"
            />
            
            {/* Atmospheric Vignette (Soft bottom gradient, keeps face completely clear) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#171917]/85 via-transparent to-transparent" />

            {/* Mobile In-Card Typography */}
            <div className="lg:hidden absolute bottom-4 left-4 right-4 text-white">
              <div className="flex items-center space-x-1.5 mb-1">
                <span className="text-[9px] font-bold tracking-[0.2em] text-[#B7A27A] uppercase">
                  MKS HAIR SALON
                </span>
                <span className="text-[9px] text-neutral-300 font-medium">
                  • Salarpur Road
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-white leading-tight">
                YOUR LOOK. YOUR SIGNATURE.
              </h2>
              <p className="text-xs text-white/80 mt-1 max-w-[280px]">
                Modern grooming, clean cuts, precise finishes.
              </p>
            </div>

            {/* Floating Studio Verification Badge (Desktop & Tablet) */}
            <div className="hidden sm:flex absolute bottom-5 left-5 p-3 rounded-2xl bg-[#171917]/85 backdrop-blur-md border border-white/20 text-white shadow-xl items-center space-x-3.5 max-w-[290px]">
              <div>
                <p className="text-xs font-bold font-display leading-tight text-white">
                  MKS Hair Salon Owner
                </p>
                <p className="text-[10px] text-[#B7A27A] mt-0.5">
                  Salarpur Road, near Shaheed/Sain Dharamshala
                </p>
                <div className="flex items-center space-x-1 mt-1 text-[9px] text-emerald-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Direct WhatsApp Booking</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* QUICK ACCESS DESTINATIONS (1-Tap Experience across all viewports)        */}
      {/* ========================================================================= */}
      <div className="mt-8 pt-8 border-t border-neutral-200 reveal-on-scroll">
        <div className="flex items-center justify-between mb-3.5 px-1">
          <span className="text-[11px] font-bold tracking-widest text-[#5C685F] uppercase">
            EXPRESS ACCESS
          </span>
          <span className="text-[11px] text-[#737373]">1-Tap Experience</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
          {/* Services */}
          <button
            onClick={() => onNavigate('services')}
            className="p-3.5 sm:p-4 bg-white rounded-2xl border border-neutral-200/90 shadow-sm flex items-center space-x-3 hover:border-[#B7A27A] hover:shadow-md transition-all text-left group active:scale-98 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F5F5F2] flex items-center justify-center shrink-0 text-[#171917] group-hover:bg-[#344238] group-hover:text-[#B7A27A] transition-colors">
              <Scissors className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#171917]">Services</p>
              <p className="text-[11px] text-[#737373]">From ₹50</p>
            </div>
          </button>

          {/* Work Gallery */}
          <button
            onClick={() => onNavigate('work')}
            className="p-3.5 sm:p-4 bg-white rounded-2xl border border-neutral-200/90 shadow-sm flex items-center space-x-3 hover:border-[#B7A27A] hover:shadow-md transition-all text-left group active:scale-98 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F5F5F2] flex items-center justify-center shrink-0 text-[#171917] group-hover:bg-[#344238] group-hover:text-[#B7A27A] transition-colors">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#171917]">Craft Portfolio</p>
              <p className="text-[11px] text-[#737373]">Haircuts & Fades</p>
            </div>
          </button>

          {/* Location Map */}
          <button
            onClick={() => onNavigate('location')}
            className="p-3.5 sm:p-4 bg-white rounded-2xl border border-neutral-200/90 shadow-sm flex items-center space-x-3 hover:border-[#B7A27A] hover:shadow-md transition-all text-left group active:scale-98 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F5F5F2] flex items-center justify-center shrink-0 text-[#171917] group-hover:bg-[#344238] group-hover:text-[#B7A27A] transition-colors">
              <MapPin className="w-5 h-5 text-[#344238]" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#171917]">Salarpur Road</p>
              <p className="text-[11px] text-[#737373]">Near Sain Dharamshala</p>
            </div>
          </button>

          {/* Call Owner Direct (9991377406) */}
          <a
            href={MKS_CONFIG.phone.callUrl}
            className="p-3.5 sm:p-4 bg-emerald-50/60 rounded-2xl border border-emerald-200 shadow-sm flex items-center space-x-3 hover:bg-emerald-50 hover:shadow-md transition-all text-left group active:scale-98"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-800 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-emerald-950">Call Owner</p>
              <p className="text-[11px] text-emerald-700 font-semibold">{MKS_CONFIG.phone.raw}</p>
            </div>
          </a>
        </div>
      </div>

      {/* Direct Contact Micro-Card */}
      <div className="mt-4 p-4 bg-white rounded-2xl border border-neutral-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 reveal-on-scroll">
        <div className="flex items-center space-x-3.5">
          <div className="relative w-11 h-11 rounded-full overflow-hidden border border-neutral-200 shrink-0">
            <img
              src={MKS_CONFIG.heroOwner.imageUrl}
              alt="MKS Hair Salon Owner"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <p className="text-xs sm:text-sm font-bold text-[#171917]">MKS Shop Owner</p>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <p className="text-[11px] text-[#737373] mt-0.5">
              Direct WhatsApp booking confirmation: <span className="font-semibold text-emerald-700">{MKS_CONFIG.whatsapp.number}</span>
            </p>
          </div>
        </div>

        <button
          onClick={() => onNavigate('book')}
          className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#F5F5F2] hover:bg-neutral-200 text-[#344238] font-bold text-xs border border-neutral-300 transition-colors shrink-0 cursor-pointer"
        >
          Book With Owner
        </button>
      </div>

    </div>
  );
};
