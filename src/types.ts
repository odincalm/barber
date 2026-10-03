export type ViewType = 'home' | 'services' | 'work' | 'location' | 'about' | 'book';

export interface ServiceItem {
  id: string;
  name: string;
  price: number;
  duration: string;
  durationMinutes: number;
  description: string;
  category?: 'hair' | 'beard' | 'combo' | 'spa';
  featured?: boolean;
}

export interface GalleryItem {
  id: string | number;
  title: string;
  subtitle: string;
  category: string;
  imageUrl: string;
  image?: string;
  directUrl?: string;
  localAsset?: string;
  aspectRatio: string; // e.g. "aspect-[4/3.8]", "aspect-square", "aspect-[16/9]"
  gridSpan: string;    // e.g. "col-span-2", "col-span-1"
}

export interface BookingState {
  serviceId: string;
  date: string;
  time: string;
  customerName: string;
  customerPhone: string;
}
