import React from 'react';
import { ArrowLeft, Check, ChevronRight, Clock, Sparkles } from 'lucide-react';
import { ViewType, ServiceItem } from '../types';
import { MKS_CONFIG } from '../config/mksConfig';

interface ServicesSectionProps {
  selectedService: ServiceItem;
  onSelectService: (service: ServiceItem) => void;
  onNavigate: (view: ViewType) => void;
  onProceedToBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  selectedService,
  onSelectService,
  onNavigate,
  onProceedToBooking
}) => {
  return (
    <div className="max-w-6xl mx-auto w-full">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-neutral-200 gap-4">
        <div>
          <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#5C685F] uppercase">
            MKS HAIR SALON / SERVICES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-[#171917] mt-1">
            Choose Your Grooming.
          </h2>
          <p className="text-xs sm:text-sm text-[#737373] mt-1 max-w-xl">
            Clean cuts, tailored beard sculpting, and calm ritual grooming on Salarpur Road.
            Select a service to proceed directly to WhatsApp appointment booking.
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

      {/* Responsive Services Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {MKS_CONFIG.services.map((service) => {
          const isSelected = selectedService.id === service.id;

          return (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className={`service-card reveal-on-scroll p-5 sm:p-6 rounded-3xl border transition-all duration-200 cursor-pointer relative flex flex-col justify-between ${
                isSelected
                  ? 'scale-[1.02] border-[#344238] bg-white ring-2 ring-[#344238] shadow-soft'
                  : 'border-neutral-200/90 bg-white hover:border-neutral-400 hover:shadow-md'
              }`}
            >
              {/* Featured Badge if applicable */}
              {service.featured && (
                <div className="absolute top-4 right-14">
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#B7A27A]/20 text-[#344238] flex items-center space-x-1">
                    <Sparkles className="w-2.5 h-2.5 text-[#B7A27A]" />
                    <span>POPULAR</span>
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-3">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-base sm:text-lg font-bold text-[#171917] font-display">
                        {service.name}
                      </h3>
                      {isSelected && (
                        <span className="px-2 py-0.5 rounded text-[9.5px] font-bold bg-emerald-100 text-emerald-800">
                          SELECTED
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-[#737373] mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Radio / Checkmark Affordance */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-colors ${
                      isSelected
                        ? 'bg-[#344238] text-[#B7A27A] border-[#344238]'
                        : 'border-neutral-300 text-transparent'
                    }`}
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                </div>
              </div>

              {/* Price & Duration Footer */}
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs text-[#5C685F]">
                  <Clock className="w-3.5 h-3.5 text-[#B7A27A]" />
                  <span className="font-semibold">{service.duration}</span>
                </div>

                <div className="text-right">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#344238] font-display">
                    {MKS_CONFIG.currency}{service.price}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Bottom Action Bar for Selected Service */}
      <div className="fixed bottom-20 lg:bottom-6 left-4 right-4 md:left-auto md:right-8 md:w-[460px] z-30 transition-all duration-300 transform translate-y-0 opacity-100 pointer-events-auto">
        <div className="p-4 bg-[#171917] text-white rounded-2xl shadow-2xl border border-neutral-700/80 flex items-center justify-between backdrop-blur-md">
          <div>
            <span className="text-[9px] font-bold text-[#B7A27A] uppercase tracking-widest block">
              SELECTED SERVICE
            </span>
            <p className="text-sm font-bold font-display">{selectedService.name}</p>
            <p className="text-xs text-neutral-300">
              {MKS_CONFIG.currency}{selectedService.price} • {selectedService.duration}
            </p>
          </div>

          <button
            onClick={onProceedToBooking}
            className="px-5 py-3 bg-[#B7A27A] hover:bg-amber-300 text-[#171917] font-bold text-xs rounded-xl shadow-tactile transition-all active:scale-95 flex items-center space-x-1.5 cursor-pointer"
          >
            <span>PROCEED TO BOOK</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
