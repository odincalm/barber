import React, { useState, useEffect, useCallback } from 'react';
import {
  ArrowLeft,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar
} from 'lucide-react';
import { ViewType } from '../types';
import { MKS_CONFIG, MKS_GALLERY } from '../config/mksConfig';

interface GallerySectionProps {
  onNavigate: (view: ViewType) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onNavigate }) => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const galleryItems = MKS_CONFIG.gallery;

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev === null ? 0 : (prev - 1 + galleryItems.length) % galleryItems.length
    );
  }, [activeLightboxIndex, galleryItems.length]);

  const handleNext = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev === null ? 0 : (prev + 1) % galleryItems.length
    );
  }, [activeLightboxIndex, galleryItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') {
        handleCloseLightbox();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, handleNext, handlePrev]);

  // Mobile Touch Swipe Handlers for Fullscreen Lightbox
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;
    if (deltaX > 45) {
      handlePrev(); // Swipe right -> previous
    } else if (deltaX < -45) {
      handleNext(); // Swipe left -> next
    }
    setTouchStartX(null);
  };

  const currentItem = activeLightboxIndex !== null ? galleryItems[activeLightboxIndex] : null;

  return (
    <div className="max-w-6xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-neutral-200 gap-4">
        <div>
          <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#5C685F] uppercase">
            MKS HAIR SALON / RECENT WORK
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-[#171917] mt-1">
            Studio Craft Portfolio.
          </h2>
          <p className="text-xs sm:text-sm text-[#737373] mt-1 max-w-xl">
            Precision shear work, sharp razor line sculpting, and tailored finishes on Salarpur Road.
            Explore all 9 studio craft references below. Click any image to view in fullscreen.
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

      {/* Responsive Editorial Gallery Grid (2-col mobile, 3-col tablet & laptop, 3-4 col desktop) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-5">
        {galleryItems.map((item, index) => {
          const isFirst = index === 0;

          return (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className={`${
                isFirst ? 'col-span-2 sm:col-span-1' : 'col-span-1 reveal-on-scroll'
              } relative aspect-[4/4.3] rounded-3xl overflow-hidden shadow-soft cursor-pointer group bg-neutral-200 select-none transition-all duration-300 hover:shadow-lg`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading={isFirst ? 'eager' : 'lazy'}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback to direct URL or ibb.co reference if needed
                  const target = e.currentTarget;
                  if (item.directUrl && target.src !== item.directUrl) {
                    target.src = item.directUrl;
                  }
                }}
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#171917]/85 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Index Number Badge */}
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-[#171917]/70 backdrop-blur-md text-[9px] font-mono font-bold text-[#B7A27A] border border-white/10">
                0{index + 1}
              </div>

              {/* Item Info on Bottom */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex justify-between items-end text-white">
                <div>
                  <span className="text-[9px] sm:text-[10px] text-[#B7A27A] font-bold uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <p className="text-xs sm:text-sm font-bold font-display line-clamp-1">
                    {item.title}
                  </p>
                </div>

                <span className="p-1.5 sm:p-2 rounded-full bg-white/20 backdrop-blur-md shrink-0 ml-2 group-hover:bg-[#B7A27A] group-hover:text-[#171917] transition-colors">
                  <Maximize2 className="w-3.5 h-3.5 text-white group-hover:text-[#171917]" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= FULLSCREEN LIGHTBOX MODAL ================= */}
      {currentItem && (
        <div
          onClick={handleCloseLightbox}
          style={{ zIndex: 9998 }}
          className="fixed inset-0 bg-[#171917]/95 flex items-center justify-center p-3 sm:p-8 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          {/* Main Modal Card (Prevents Click-through) */}
          <div
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative max-w-4xl w-full bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 flex flex-col"
          >
            {/* Top Bar with Counter & Close */}
            <div className="p-4 sm:px-6 bg-[#171917] text-white flex items-center justify-between border-b border-neutral-800">
              <div className="flex items-center space-x-2 text-xs">
                <span className="text-[#B7A27A] font-bold font-mono">
                  {activeLightboxIndex !== null ? activeLightboxIndex + 1 : 1} / {galleryItems.length}
                </span>
                <span className="text-neutral-500">•</span>
                <span className="text-neutral-300 font-semibold">{currentItem.category}</span>
              </div>

              <button
                type="button"
                onClick={handleCloseLightbox}
                className="p-1.5 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Image Viewer Area with Touch Swipe Support */}
            <div className="relative bg-black flex items-center justify-center min-h-[40vh] max-h-[68vh] overflow-hidden select-none">
              <img
                src={currentItem.imageUrl}
                alt={currentItem.title}
                className="w-full h-auto max-h-[68vh] object-contain transition-opacity duration-300"
                referrerPolicy="no-referrer"
              />

              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-md"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-md"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Bottom Detail & Action Bar */}
            <div className="p-4 sm:p-5 bg-[#171917] text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-t border-neutral-800">
              <div>
                <h4 className="font-display font-bold text-base text-white">
                  {currentItem.title}
                </h4>
                <p className="text-xs text-[#B7A27A] mt-0.5">
                  {currentItem.subtitle} • Salarpur Road, Haryana
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  handleCloseLightbox();
                  onNavigate('book');
                }}
                className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-[#344238] hover:bg-[#B7A27A] text-white hover:text-[#171917] text-xs font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-tactile"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK THIS LOOK</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
