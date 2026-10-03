import { ServiceItem, GalleryItem } from '../types';
import mksOwnerHero from '../assets/images/mks_owner_hero.jpg';
import mksStorefrontLocation from '../assets/images/mks_storefront_location.jpg';

// New 9 Official MKS Gallery Images
import gallery01 from '../assets/images/gallery/gallery_01.jpg';
import gallery02 from '../assets/images/gallery/gallery_02.jpg';
import gallery03 from '../assets/images/gallery/gallery_03.jpg';
import gallery04 from '../assets/images/gallery/gallery_04.jpg';
import gallery05 from '../assets/images/gallery/gallery_05.jpg';
import gallery06 from '../assets/images/gallery/gallery_06.jpg';
import gallery07 from '../assets/images/gallery/gallery_07.jpg';
import gallery08 from '../assets/images/gallery/gallery_08.jpg';
import gallery09 from '../assets/images/gallery/gallery_09.jpg';

export const MKS = {
  name: "MKS Hair Salon",
  phone: "919991377406",
  whatsapp: "917419056567",
  location: {
    lat: 29.9645938,
    lng: 76.841545,
    road: "Salarpur Road",
    landmark: "Near Shaheed/Sain Dharamshala"
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=29.9645938,76.841545",
  services: [
    {
      id: "haircut",
      name: "Haircut",
      price: 50,
      duration: 30
    },
    {
      id: "beard",
      name: "Beard",
      price: 200,
      duration: 20
    },
    {
      id: "hair-beard",
      name: "Hair + Beard",
      price: 100,
      duration: 45
    }
  ]
};

/**
 * Official MKS Gallery Structure
 * Exactly 9 images in exact requested order 01 to 09
 */
export const MKS_GALLERY = [
  {
    id: 1,
    image: "https://ibb.co/hF0Hzntj",
    directUrl: "https://i.ibb.co/whtCmbxX/Rm-Fk-ZS0uan-Bn.jpg",
    localAsset: gallery01,
    title: "Signature Haircut & Taper",
    subtitle: "Precision shear & contour detailing",
    category: "Signature Cut",
    aspectRatio: "aspect-[4/4.3]",
    gridSpan: "col-span-1"
  },
  {
    id: 2,
    image: "https://ibb.co/5X0FYv7J",
    directUrl: "https://i.ibb.co/0p7tBZwz/PTc0-MCZx-PTgw.jpg",
    localAsset: gallery02,
    title: "Sculpted Beard & Razor Finish",
    subtitle: "Clean contouring & hot towel shaping",
    category: "Beard Sculpt",
    aspectRatio: "aspect-[4/4.3]",
    gridSpan: "col-span-1"
  },
  {
    id: 3,
    image: "https://ibb.co/tPKRSS3H",
    directUrl: "https://i.ibb.co/LhRKMMv0/Mj-A4.jpg",
    localAsset: gallery03,
    title: "Modern Texture Fade",
    subtitle: "Low fade with textured crop volume",
    category: "Fade Detailing",
    aspectRatio: "aspect-[4/4.3]",
    gridSpan: "col-span-1"
  },
  {
    id: 4,
    image: "https://ibb.co/RTXjm4Y2",
    directUrl: "https://i.ibb.co/1GCz5J7Z/Mz-Fi-YTc1-Lmpw-Zw.jpg",
    localAsset: gallery04,
    title: "Classic Clean Taper",
    subtitle: "Sharp hairline and natural gradient",
    category: "Classic Haircut",
    aspectRatio: "aspect-[4/4.3]",
    gridSpan: "col-span-1"
  },
  {
    id: 5,
    image: "https://ibb.co/kVcyhQ2Z",
    directUrl: "https://i.ibb.co/KcyG9Fxn/Mj-A4.jpg",
    localAsset: gallery05,
    title: "Precision Scissor Work",
    subtitle: "Sectioning and weight balance",
    category: "Shear Craft",
    aspectRatio: "aspect-[4/4.3]",
    gridSpan: "col-span-1"
  },
  {
    id: 6,
    image: "https://ibb.co/N2GhcpcQ",
    directUrl: "https://i.ibb.co/1G4VFKFh/cmdl-Lmpw-ZWc.jpg",
    localAsset: gallery06,
    title: "Sharp Beard Contour",
    subtitle: "Straight razor definition and beard oil",
    category: "Beard Styling",
    aspectRatio: "aspect-[4/4.3]",
    gridSpan: "col-span-1"
  },
  {
    id: 7,
    image: "https://ibb.co/N22QTrpX",
    directUrl: "https://i.ibb.co/nMMZPBfT/Mg.jpg",
    localAsset: gallery07,
    title: "Hair + Beard Signature Combination",
    subtitle: "Harmonized hair and beard silhouette",
    category: "Hair + Beard",
    aspectRatio: "aspect-[4/4.3]",
    gridSpan: "col-span-1"
  },
  {
    id: 8,
    image: "https://ibb.co/d408Zyx5",
    directUrl: "https://i.ibb.co/237GJBHk/ODA.jpg",
    localAsset: gallery08,
    title: "Clean Mid Fade",
    subtitle: "Seamless blend and sharp temple alignment",
    category: "Fade Craft",
    aspectRatio: "aspect-[4/4.3]",
    gridSpan: "col-span-1"
  },
  {
    id: 9,
    image: "https://ibb.co/W4nx6VdX",
    directUrl: "https://i.ibb.co/ksKHxmrT/ZWZk-ODBm-Lmpw-Zw.jpg",
    localAsset: gallery09,
    title: "Editorial Grooming Finish",
    subtitle: "Matte clay styling and precision hold",
    category: "Signature Styling",
    aspectRatio: "aspect-[4/4.3]",
    gridSpan: "col-span-1"
  }
];

export const MKS_CONFIG = {
  brand: "MKS Hair Salon",
  altBrand: "M.K.S Hair Salon",
  tagline: "MODERN GROOMING • SALARPUR RD",
  
  // Real Business Contacts
  phone: {
    raw: "9991377406",
    formatted: "+91 9991377406",
    callUrl: "tel:+919991377406"
  },
  
  whatsapp: {
    number: "7419056567",
    international: "917419056567",
    formatted: "+91 7419056567",
    directUrl: "https://wa.me/917419056567"
  },

  // Real Store Location
  location: {
    road: "Salarpur Road",
    landmark: "Near Shaheed/Sain Dharamshala",
    cityState: "Haryana, India",
    fullAddress: "Salarpur Road, near Shaheed/Sain Dharamshala, Haryana, India",
    lat: 29.9645938,
    lng: 76.841545,
    coordinatesText: "29.9645938, 76.841545",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=29.9645938,76.841545",
    storefrontImage: mksStorefrontLocation,
    storefrontImageFallback: "https://i.ibb.co/HLsvxFjF/shop.jpg"
  },

  // Hero Shop Owner Image Reference (Preserved)
  heroOwner: {
    imageUrl: mksOwnerHero,
    fallbackUrl: "https://i.ibb.co/QFSCGFkH/sahil.jpg",
    alt: "MKS Hair Salon Owner"
  },

  hours: {
    display: "6:30 PM — 9:00 PM",
    days: "Monday to Sunday (Open Daily)",
    isOpenNow: true
  },

  currency: "₹",

  // Core Services
  services: [
    {
      id: "haircut",
      name: "Haircut",
      price: 50,
      duration: "30 min",
      durationMinutes: 30,
      description: "Consultation, precision shear & clipper cut, clean neck cleanup and custom styling finish.",
      category: "hair",
      featured: true
    },
    {
      id: "beard",
      name: "Beard",
      price: 200,
      duration: "20 min",
      durationMinutes: 20,
      description: "Hot towel ritual, razor edging, mustache detailing and conditioning beard oil.",
      category: "beard",
      featured: true
    },
    {
      id: "hair-beard",
      name: "Hair + Beard",
      price: 100,
      duration: "45 min",
      durationMinutes: 45,
      description: "Signature combination: full custom haircut, razor beard contouring and refreshing finish.",
      category: "combo",
      featured: true
    }
  ] as ServiceItem[],

  // Editorial Gallery Images (Exclusively 9 new official MKS gallery images)
  gallery: MKS_GALLERY.map((item) => ({
    id: item.id,
    title: item.title,
    subtitle: item.subtitle,
    category: item.category,
    imageUrl: item.localAsset || item.directUrl,
    image: item.image,
    directUrl: item.directUrl,
    localAsset: item.localAsset,
    aspectRatio: item.aspectRatio,
    gridSpan: item.gridSpan
  })) as GalleryItem[]
};

/**
 * Builds the dynamic WhatsApp booking URL
 */
export function buildWhatsAppMessage(
  serviceName: string,
  price: number,
  preferredDate: string,
  preferredTime: string,
  customerName: string
): string {
  const cleanName = customerName.trim() || "Customer";
  return `Hi MKS 👋\n\nI'd like to book an appointment.\n\nService: ${serviceName}\nPrice: ₹${price}\nPreferred Date: ${preferredDate}\nPreferred Time: ${preferredTime}\nName: ${cleanName}\n\nPlease confirm availability.`;
}

export function buildWhatsAppUrl(
  serviceName: string,
  price: number,
  preferredDate: string,
  preferredTime: string,
  customerName: string
): string {
  const message = buildWhatsAppMessage(serviceName, price, preferredDate, preferredTime, customerName);
  return `https://wa.me/${MKS_CONFIG.whatsapp.international}?text=${encodeURIComponent(message)}`;
}
