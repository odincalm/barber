import React, { useState } from 'react';
import {
  ArrowLeft,
  Navigation,
  Map as MapIcon,
  Phone,
  MessageCircle,
  Clock,
  Compass,
  Copy,
  Check,
  ExternalLink,
  Camera
} from 'lucide-react';
import { ViewType } from '../types';
import { MKS_CONFIG } from '../config/mksConfig';

interface LocationSectionProps {
  onNavigate: (view: ViewType) => void;
  onShowToast: (message: string) => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({
  onNavigate,
  onShowToast
}) => {
  const [copiedCoords, setCopiedCoords] = useState(false);
  const [activeMediaView, setActiveMediaView] = useState<'storefront' | 'map'>('storefront');

  const handleCopyCoordinates = () => {
    navigator.clipboard.writeText(MKS_CONFIG.location.coordinatesText);
    setCopiedCoords(true);
    onShowToast(`Copied coordinates: ${MKS_CONFIG.location.coordinatesText}`);
    setTimeout(() => setCopiedCoords(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-neutral-200 gap-4">
        <div>
          <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#5C685F] uppercase">
            MKS HAIR SALON / LOCATION
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-[#171917] mt-1">
            Find MKS Hair Salon.
          </h2>
          <p className="text-xs sm:text-sm text-[#737373] mt-1 max-w-xl">
            Located directly on Salarpur Road, near Shaheed/Sain Dharamshala in Haryana.
            See the actual storefront photograph and get instant directions.
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Primary Visual (Real Shop Location Photograph / Map Toggle) */}
        <div className="lg:col-span-7 flex flex-col space-y-3">
          
          {/* View Toggle Tabs */}
          <div className="flex items-center justify-between">
            <div className="inline-flex p-1 bg-white rounded-xl border border-neutral-200 shadow-xs">
              <button
                type="button"
                onClick={() => setActiveMediaView('storefront')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
                  activeMediaView === 'storefront'
                    ? 'bg-[#344238] text-white shadow-xs'
                    : 'text-[#5C685F] hover:text-[#171917]'
                }`}
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Real Shop Photo</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveMediaView('map')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
                  activeMediaView === 'map'
                    ? 'bg-[#344238] text-white shadow-xs'
                    : 'text-[#5C685F] hover:text-[#171917]'
                }`}
              >
                <MapIcon className="w-3.5 h-3.5" />
                <span>Google Map</span>
              </button>
            </div>

            <a
              href={MKS_CONFIG.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#344238] font-bold hover:underline flex items-center space-x-1"
            >
              <span>Open in Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Primary Visual Container */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden border border-neutral-300 shadow-soft bg-[#EBE8E1] flex items-center justify-center group">
            
            {activeMediaView === 'storefront' ? (
              /* REAL SHOP LOCATION IMAGE (Authentic, not over-edited, clear real-world building) */
              <div className="relative w-full h-full bg-neutral-900">
                <img
                  src={MKS_CONFIG.location.storefrontImage}
                  alt="Real MKS Hair Salon Storefront Location on Salarpur Road"
                  className="w-full h-full object-cover object-center filter contrast-[1.01]"
                  loading="eager"
                />

                {/* Subtle Bottom Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171917]/85 via-transparent to-transparent opacity-80" />

                {/* In-Photo Real Location Identification */}
                <div className="absolute bottom-4 left-4 right-4 text-white flex justify-between items-end">
                  <div>
                    <span className="text-[10px] text-[#B7A27A] font-bold uppercase tracking-wider block">
                      ACTUAL STOREFRONT REFERENCE
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg">
                      MKS Hair Salon
                    </h3>
                    <p className="text-xs text-neutral-200 mt-0.5">
                      Salarpur Road, near Shaheed/Sain Dharamshala
                    </p>
                  </div>

                  <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[10px] font-bold text-white border border-white/20">
                    Haryana, India
                  </span>
                </div>
              </div>
            ) : (
              /* Live Google Map Interactive Iframe Embed */
              <iframe
                title="MKS Hair Salon Live Location"
                src={`https://maps.google.com/maps?q=${MKS_CONFIG.location.lat},${MKS_CONFIG.location.lng}&hl=en&z=16&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            )}

          </div>

          <p className="text-[11px] text-[#737373] text-center">
            {activeMediaView === 'storefront'
              ? 'Actual photograph of MKS Hair Salon on Salarpur Road.'
              : 'Interactive Google Maps location at 29.9645938, 76.841545.'}
          </p>
        </div>

        {/* Right Column: Address Details, GPS, and Direct Navigation Controls */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Detailed Location Box / Card */}
          <div className="p-6 bg-white rounded-3xl border border-neutral-200 shadow-soft reveal-on-scroll">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-display font-bold text-lg text-[#171917]">
                  {MKS_CONFIG.brand}
                </h3>
                <p className="text-xs text-[#5C685F] font-semibold mt-0.5">
                  {MKS_CONFIG.altBrand}
                </p>
              </div>

              <div className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                <span>OPEN NOW</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-100 space-y-1">
              <p className="text-sm font-semibold text-neutral-900">
                {MKS_CONFIG.location.road}
              </p>
              <p className="text-xs text-[#5C685F]">
                {MKS_CONFIG.location.landmark}
              </p>
              <p className="text-xs text-[#737373]">
                {MKS_CONFIG.location.cityState}
              </p>
            </div>

            {/* GPS Coordinates with One-Click Copy */}
            <div className="mt-4 flex items-center justify-between p-2.5 rounded-xl bg-neutral-100 border border-neutral-200">
              <div className="flex items-center space-x-2 text-xs font-mono text-neutral-800">
                <Compass className="w-4 h-4 text-[#5C685F]" />
                <span className="font-bold">{MKS_CONFIG.location.coordinatesText}</span>
              </div>
              <button
                type="button"
                onClick={handleCopyCoordinates}
                className="p-1.5 rounded-lg hover:bg-neutral-200 text-[#5C685F] transition-colors cursor-pointer"
                title="Copy coordinates"
              >
                {copiedCoords ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Hours */}
            <div className="mt-4 flex items-center space-x-2 text-xs text-[#5C685F]">
              <Clock className="w-4 h-4 text-[#B7A27A]" />
              <span>{MKS_CONFIG.hours.days}: {MKS_CONFIG.hours.display}</span>
            </div>
          </div>

          {/* Real Contact & Direction Buttons */}
          <div className="grid grid-cols-2 gap-3 reveal-on-scroll">
            {/* 1. Get Directions */}
            <a
              href={MKS_CONFIG.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-4 bg-[#344238] hover:bg-[#171917] text-white rounded-xl text-center font-bold text-xs transition-all shadow-sm flex items-center justify-center space-x-2"
            >
              <Navigation className="w-4 h-4 text-[#B7A27A]" />
              <span>GET DIRECTIONS</span>
            </a>

            {/* 2. Open in Google Maps */}
            <a
              href={MKS_CONFIG.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-4 bg-white border border-neutral-200 text-[#171917] hover:bg-neutral-50 rounded-xl text-center font-bold text-xs transition-all shadow-sm flex items-center justify-center space-x-2"
            >
              <MapIcon className="w-4 h-4 text-[#5C685F]" />
              <span>GOOGLE MAPS</span>
            </a>

            {/* 3. Call Owner (9991377406) */}
            <a
              href={MKS_CONFIG.phone.callUrl}
              className="py-3.5 px-4 bg-white border border-neutral-200 text-[#171917] hover:bg-neutral-50 rounded-xl text-center font-bold text-xs transition-all shadow-sm flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>CALL: {MKS_CONFIG.phone.raw}</span>
            </a>

            {/* 4. WhatsApp Chat (7419056567) */}
            <a
              href={MKS_CONFIG.whatsapp.directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-4 bg-emerald-50 border border-emerald-300 text-emerald-800 hover:bg-emerald-100 rounded-xl text-center font-bold text-xs transition-all shadow-sm flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WHATSAPP</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
