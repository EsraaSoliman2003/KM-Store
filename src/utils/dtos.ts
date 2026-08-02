export interface User {
  id: string;
  fullName: string;
  phoneNumber: string;
  imageUrl: string | null;
  email: string;
  countryCode: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  role: number;
}

export interface CategoryDto {
  id: number;
  name: string;
  desc: string;
  image: string;
}

export interface ProductDto {
  id: number;
  title: string;
  desc: string;
  img: string;
  favorite: boolean;
  price: number;
  images: string[];
  cat: CategoryDto;
}


export interface Item {
    id: number;
    width: number;
    height: number;
    image: string;
    images?: string[];
    title: string;
    category: string;
    description: string;
    technologies: string[];
    liveUrl?: string;
    appStore?: string;
    googlePlay?: string;
}