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

