/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ViewType, ServiceItem } from './types';
import { MKS_CONFIG } from './config/mksConfig';
import { Header } from './components/Header';
import { MobileDrawer } from './components/MobileDrawer';
import { HomeSection } from './components/HomeSection';
import { ServicesSection } from './components/ServicesSection';
import { BookingSection } from './components/BookingSection';
import { LocationSection } from './components/LocationSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedService, setSelectedService] = useState<ServiceItem>(MKS_CONFIG.services[0]); // Default Haircut (₹50)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Smooth scroll to top on view change
  const handleNavigate = (view: ViewType) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    handleShowToast(`Selected: ${service.name} (${MKS_CONFIG.currency}${service.price})`);
  };

  const handleProceedToBooking = () => {
    handleNavigate('book');
  };

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 2800);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  // Subtle Scroll-Based Reveal Observer (High Performance, No Scroll-Jacking)
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)');
      if (elements.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: '0px 0px -25px 0px'
        }
      );

      elements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [currentView]);

  return (
    <div className="min-h-screen bg-[#F5F5F2] text-[#171917] flex flex-col font-sans selection:bg-[#B7A27A]/25">
      
      {/* 1. Persistent Fixed Header (Stays Accessible On Scroll Across All Viewports) */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        isDrawerOpen={isDrawerOpen}
      />

      {/* 2. Slide-Over Mobile / Tablet Navigation Drawer */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* 3. Main Dynamic Content Container (Offset cleanly below fixed header) */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[calc(4.75rem+env(safe-area-inset-top,0px))] sm:pt-[calc(5.25rem+env(safe-area-inset-top,0px))] pb-12 sm:pb-16">
        {currentView === 'home' && (
          <HomeSection onNavigate={handleNavigate} />
        )}

        {currentView === 'services' && (
          <ServicesSection
            selectedService={selectedService}
            onSelectService={handleSelectService}
            onNavigate={handleNavigate}
            onProceedToBooking={handleProceedToBooking}
          />
        )}

        {currentView === 'book' && (
          <BookingSection
            selectedService={selectedService}
            onSelectService={handleSelectService}
            onNavigate={handleNavigate}
            onShowToast={handleShowToast}
          />
        )}

        {currentView === 'work' && (
          <GallerySection onNavigate={handleNavigate} />
        )}

        {currentView === 'location' && (
          <LocationSection
            onNavigate={handleNavigate}
            onShowToast={handleShowToast}
          />
        )}

        {currentView === 'about' && (
          <AboutSection onNavigate={handleNavigate} />
        )}
      </main>

      {/* 4. Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* 5. Tactile Toast Feedback */}
      <Toast message={toastMessage} />

    </div>
  );
}
