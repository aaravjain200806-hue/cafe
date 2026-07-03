export interface CoffeeItem {
  id: string;
  name: string;
  origin: string;
  description: string;
  price: string;
  notes: string[];
  intensity: number;
  image: string;
}

export interface Barista {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  image: string;
  quote: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}