// ===========================
// User
// ===========================

export interface User {
  id: number;
  name: string;
  email: string | null;
  country_code: string;
  phone: string;
  avatar: string | null;
  latitude: number | null;
  longitude: number | null;
}

// ===========================
// Auth Response
// ===========================

export interface AuthResponse {
  code: number;
  message: string;
  errors: string[];
  data: {
    user: User;
    token: string;
    is_registration_complete: boolean;
  };
}

// ===========================
// Profile Response
// ===========================

export interface ProfileResponse {
  code: number;
  message: string;
  errors: unknown[];
  data: {
    user: User;
  };
}

export interface CategoriesResponse {
  code: number;
  message: string;
  errors: unknown[];
  data: {
    categories: Category[];
  };
}

export interface Category {
  id: number;
  name: string;
  level: number;
  first_color: string | null;
  second_color: string | null;
  image: string;
}

export interface Banner {
  id: number;
  image: string;
  link: string | null;
};

export interface Address {
  id: number;
  address_type: string;
  name: string;
  phone: string;
  city: string;
  national_address: string;
  detailed_address: string;
  postal_code: string;
  is_default: boolean;
}