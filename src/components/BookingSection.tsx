import React, { useState } from 'react';
import {
  ArrowLeft,
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  MessageSquare,
  Send,
  Sparkles,
  MapPin
} from 'lucide-react';
import { ViewType, ServiceItem } from '../types';
import { MKS_CONFIG, buildWhatsAppMessage, buildWhatsAppUrl } from '../config/mksConfig';

interface BookingSectionProps {
  selectedService: ServiceItem;
  onSelectService: (service: ServiceItem) => void;
  onNavigate: (view: ViewType) => void;
  onShowToast: (message: string) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedService,
  onSelectService,
  onNavigate,
  onShowToast
}) => {
  const [preferredDate, setPreferredDate] = useState('Today');
  const [customDate, setCustomDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('06:30 PM');
  const [customerName, setCustomerName] = useState('Rahul');
  const [customerPhone, setCustomerPhone] = useState('+91 ');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonStage, setButtonStage] = useState<'idle' | 'preparing' | 'opening'>('idle');

  // Active date display
  const effectiveDate = customDate ? customDate : preferredDate;

  // Generated WhatsApp Message
  const dynamicMessage = buildWhatsAppMessage(
    selectedService.name,
    selectedService.price,
    effectiveDate,
    preferredTime,
    customerName
  );

  // WhatsApp redirection flow with multi-stage tactile states
  const handleProceedToWhatsApp = () => {
    if (!customerName.trim()) {
      onShowToast('Please provide your name for the barber');
      return;
    }

    setIsSubmitting(true);
    setButtonStage('preparing');

    setTimeout(() => {
      setButtonStage('opening');

      setTimeout(() => {
        const url = buildWhatsAppUrl(
          selectedService.name,
          selectedService.price,
          effectiveDate,
          preferredTime,
          customerName
        );

        window.open(url, '_blank');
        setIsSubmitting(false);
        setButtonStage('idle');
        onShowToast(`Opening WhatsApp chat with MKS (${MKS_CONFIG.whatsapp.number})`);
      }, 750);
    }, 600);
  };

  const timeSlots = [
    '06:30 PM',
    '07:00 PM',
    '07:30 PM',
    '08:00 PM',
    '08:30 PM',
    '09:00 PM'
  ];

  return (
    <div className="max-w-5xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-neutral-200 gap-4">
        <div>
          <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#5C685F] uppercase">
            MKS HAIR SALON / WHATSAPP APPOINTMENT
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-[#171917] mt-1">
            Book on WhatsApp
          </h2>
          <p className="text-xs sm:text-sm text-[#737373] mt-1 max-w-xl">
            Direct coordination with the salon owner at +91 {MKS_CONFIG.whatsapp.number}. No advance payment required.
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
        
        {/* Left Column: Interactive Form Configurator */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-soft space-y-6">
          
          {/* 1. Selected Service Selector */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5C685F]">
                1. Selected Grooming Service
              </label>
              <button
                onClick={() => onNavigate('services')}
                className="text-xs text-[#344238] font-bold hover:underline cursor-pointer"
              >
                View all details
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {MKS_CONFIG.services.map((service) => {
                const isSelected = selectedService.id === service.id;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => onSelectService(service)}
                    className={`p-3 rounded-2xl border text-left flex justify-between items-center transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#344238] bg-[#344238]/5 ring-1 ring-[#344238]'
                        : 'border-neutral-200 bg-white hover:border-neutral-300'
                    }`}
                  >
                    <div>
                      <span className="block text-xs font-bold text-[#171917]">
                        {service.name}
                      </span>
                      <span className="block text-[10px] text-[#5C685F]">
                        {service.duration}
                      </span>
                    </div>
                    <span className="text-xs font-bold font-display text-[#344238]">
                      {MKS_CONFIG.currency}{service.price}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Preferred Date Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#5C685F] mb-1.5">
              2. Preferred Date
            </label>
            <span className="block text-[11px] text-[#737373] mb-2.5">
              (Subject to barber confirmation on WhatsApp)
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2.5">
              {['Today', 'Tomorrow', 'Saturday', 'Sunday'].map((day) => {
                const isSelected = preferredDate === day && !customDate;
                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => {
                      setPreferredDate(day);
                      setCustomDate('');
                    }}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#344238] bg-[#344238]/5 ring-1 ring-[#344238] font-bold text-[#171917]'
                        : 'border-neutral-200 bg-white hover:border-neutral-300 text-[#737373]'
                    }`}
                  >
                    <span className="block text-[9px] uppercase tracking-wider">PREF DAY</span>
                    <span className="block text-xs font-bold mt-0.5">{day}</span>
                  </button>
                );
              })}
            </div>

            {/* Custom Date Input Option */}
            <div className="flex items-center space-x-2 pt-1">
              <span className="text-[11px] text-[#737373] shrink-0">Or specific calendar date:</span>
              <input
                type="date"
                value={customDate}
                onChange={(e) => setCustomDate(e.target.value)}
                className="px-3 py-1.5 rounded-xl border border-neutral-200 bg-[#F5F5F2] text-xs font-medium text-[#171917] focus:bg-white focus:border-[#344238] focus:outline-none"
              />
            </div>
          </div>

          {/* 3. Preferred Time Slot */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#5C685F] mb-1">
              3. Preferred Time
            </label>
            <span className="block text-[11px] text-[#737373] mb-2.5">
              Operating hours: 6:30 PM — 9:00 PM
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {timeSlots.map((time) => {
                const isSelected = preferredTime === time;
                return (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setPreferredTime(time)}
                    className={`py-2.5 px-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#344238] bg-[#344238]/5 ring-1 ring-[#344238] text-[#171917]'
                        : 'border-neutral-200 bg-white hover:border-neutral-300 text-[#5C685F]'
                    }`}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Client Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-neutral-100">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5C685F] mb-1.5">
                Your Name <span className="text-emerald-700">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-neutral-200 bg-[#F5F5F2]/60 text-xs sm:text-sm font-medium text-[#171917] focus:border-[#344238] focus:bg-white focus:outline-none"
                />
                <User className="w-4 h-4 text-[#737373] absolute left-3 top-3" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5C685F] mb-1.5">
                Phone Number <span className="text-[#737373] font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-neutral-200 bg-[#F5F5F2]/60 text-xs sm:text-sm font-medium text-[#171917] focus:border-[#344238] focus:bg-white focus:outline-none"
                />
                <Phone className="w-4 h-4 text-[#737373] absolute left-3 top-3" />
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Real-time Summary & WhatsApp Message Preview */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Service Summary Card */}
          <div className="p-6 bg-white rounded-3xl border border-neutral-200 shadow-soft">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5C685F]">
                Appointment Summary
              </span>
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded">
                Manual Confirmation
              </span>
            </div>

            <div className="mt-4 space-y-3.5">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-display font-bold text-base text-[#171917]">
                    {selectedService.name}
                  </h4>
                  <p className="text-xs text-[#737373]">
                    Estimated duration: {selectedService.duration}
                  </p>
                </div>
                <span className="text-2xl font-bold font-display text-[#344238]">
                  {MKS_CONFIG.currency}{selectedService.price}
                </span>
              </div>

              <div className="pt-3 border-t border-neutral-100 space-y-1.5 text-xs text-[#5C685F]">
                <div className="flex justify-between">
                  <span>Preferred Day:</span>
                  <span className="font-bold text-[#171917]">{effectiveDate}</span>
                </div>
                <div className="flex justify-between">
                  <span>Preferred Time:</span>
                  <span className="font-bold text-[#171917]">{preferredTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>Client Name:</span>
                  <span className="font-bold text-[#171917]">{customerName || 'Customer'}</span>
                </div>
                <div className="pt-2 flex items-start space-x-1.5 text-[11px] text-[#737373]">
                  <MapPin className="w-3.5 h-3.5 text-[#344238] shrink-0 mt-0.5" />
                  <span>Salarpur Road, near Shaheed/Sain Dharamshala, Haryana</span>
                </div>
              </div>
            </div>
          </div>

          {/* Structured WhatsApp Message Preview Panel */}
          <div className="p-5 bg-[#171917] text-white rounded-3xl border border-neutral-800 shadow-float">
            <div className="flex items-center justify-between mb-3 text-xs">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span className="font-bold tracking-wide">GENERATED WHATSAPP MESSAGE</span>
              </div>
              <span className="text-[10px] text-emerald-300 font-mono">
                {MKS_CONFIG.whatsapp.number}
              </span>
            </div>

            {/* Monospace WhatsApp Preview Box */}
            <div className="p-4 bg-neutral-950/90 rounded-2xl border border-neutral-800 text-xs font-mono leading-relaxed text-neutral-200 whitespace-pre-line select-text">
              {dynamicMessage}
            </div>

            {/* WhatsApp Trigger Button with Multi-Stage Transition */}
            <button
              id="btn-submit-booking"
              type="button"
              disabled={isSubmitting}
              onClick={handleProceedToWhatsApp}
              className={`w-full mt-4 py-4 px-5 rounded-2xl font-bold text-xs sm:text-sm tracking-wider uppercase shadow-tactile flex items-center justify-center space-x-2.5 transition-all duration-200 cursor-pointer ${
                buttonStage === 'idle'
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white active:scale-98'
                  : buttonStage === 'preparing'
                  ? 'bg-neutral-800 text-neutral-300'
                  : 'bg-emerald-500 text-white ring-2 ring-emerald-300'
              }`}
            >
              {buttonStage === 'idle' && (
                <>
                  <Send className="w-4 h-4" />
                  <span>CONTINUE TO WHATSAPP</span>
                </>
              )}
              {buttonStage === 'preparing' && (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>PREPARING YOUR BOOKING…</span>
                </>
              )}
              {buttonStage === 'opening' && (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                  <span>✓ OPENING WHATSAPP…</span>
                </>
              )}
            </button>

            <p className="text-[11px] text-center text-neutral-400 mt-2.5">
              Opens WhatsApp chat directly with master barber at{' '}
              <span className="text-white font-bold">{MKS_CONFIG.whatsapp.formatted}</span>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
