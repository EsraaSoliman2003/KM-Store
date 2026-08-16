import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { AuthResponse, User } from "@/utils/dtos";

// ===========================
// State
// ===========================

interface AuthState {
  loading: boolean;
  token: string | null;
  user: User | null;
}

const initialState: AuthState = {
  loading: false,
  token: null,
  user: null,
};

// ===========================
// Register
// ===========================

interface RegisterPayload {
  name: string;
  country_code: string;
  phone: string;
  password: string;
  password_confirmation: string;
}

export const registerUser = createAsyncThunk<
  AuthResponse,
  RegisterPayload
>("auth/register", async (data) => {
  const res = await axios.post("auth/register", data);

  return res.data;
});

// ===========================
// Login
// ===========================

interface LoginPayload {
  country_code: string;
  phone: string;
  password: string;
}

export const loginUser = createAsyncThunk<
  AuthResponse,
  LoginPayload
>("auth/login", async (data) => {
  const res = await axios.post("auth/login", data);

  return res.data;
});

// ===========================
// Logout
// ===========================

export const logoutUser = createAsyncThunk<void, void>(
  "auth/logout",
  async () => {
    await axios.post("auth/logout");
  }
);

// ===========================
// Forgot Password
// ===========================

interface ForgotPasswordPayload {
  country_code: string;
  phone: string;
}

interface ForgotPasswordResponse {
  code: number;
  message: string;
  errors: unknown[];
  data: {
    country_code: string;
    phone: string;
  };
}

export const forgotPassword = createAsyncThunk<
  ForgotPasswordResponse,
  ForgotPasswordPayload
>("auth/forgotPassword", async (data) => {
  const res = await axios.post("auth/forgot-password", data);

  return res.data;
});

// ===========================
// Verify Reset Password OTP
// ===========================

interface VerifyResetPasswordOtpPayload {
  country_code: string;
  phone: string;
  code: string;
}

interface VerifyResetPasswordOtpResponse {
  code: number;
  message: string;
  errors: unknown[];
  data: {
    token: string;
  };
}

export const verifyResetPasswordOtp = createAsyncThunk<
  VerifyResetPasswordOtpResponse,
  VerifyResetPasswordOtpPayload
>("auth/verifyResetPasswordOtp", async (data) => {
  const res = await axios.post(
    "auth/verify-reset-password-otp",
    data
  );

  return res.data;
});

// ===========================
// Reset Password
// ===========================

interface ResetPasswordPayload {
  country_code: string;
  phone: string;
  code: string;
  password: string;
  password_confirmation: string;
}

interface ResetPasswordResponse {
  code: number;
  message: string;
  errors: unknown[];
  data: {
    user: User;
  };
}

export const resetPassword = createAsyncThunk<
  ResetPasswordResponse,
  ResetPasswordPayload
>("auth/resetPassword", async (data) => {
  const res = await axios.post(
    "auth/reset-password",
    data
  );

  return res.data;
});

// ===========================
// Google Login
// ===========================

interface GoogleLoginPayload {
  google_id: string;
  name: string;
  email: string;
  avatar: string;
  country_code?: string;
}

export const googleLogin = createAsyncThunk<
  AuthResponse,
  GoogleLoginPayload
>("auth/googleLogin", async (data) => {
  const res = await axios.post("auth/google-login", data);

  return res.data;
});

// ===========================
// Facebook Login
// ===========================

interface FacebookLoginPayload {
  facebook_id: string;
  name: string;
  email?: string;
  avatar?: string;
  country_code?: string;
}

export const facebookLogin = createAsyncThunk<
  AuthResponse,
  FacebookLoginPayload
>("auth/facebookLogin", async (data) => {
  const res = await axios.post("auth/facebook-login", data);

  return res.data;
});

// ===========================
// Slice
// ===========================

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    resetAuthState: () => initialState,

    initializeAuth: (
      state,
      action: PayloadAction<{
        token: string | null;
      }>
    ) => {
      state.token = action.payload.token;
    },
  },

  extraReducers: (builder) => {
    builder

      // ===========================
      // REGISTER
      // ===========================

      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })

      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.data.token;
        state.user = action.payload.data.user;
      })

      .addCase(registerUser.rejected, (state) => {
        state.loading = false;
      })

      // ===========================
      // LOGIN
      // ===========================

      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.data.token;
        state.user = action.payload.data.user;
      })

      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
      })

      // ===========================
      // LOGOUT
      // ===========================

      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })

      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.token = null;
        state.user = null;
      })

      .addCase(logoutUser.rejected, (state) => {
        state.loading = false;
      })

      // ===========================
      // FORGOT PASSWORD
      // ===========================

      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
      })

      .addCase(forgotPassword.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(forgotPassword.rejected, (state) => {
        state.loading = false;
      })

      // ===========================
      // VERIFY RESET PASSWORD OTP
      // ===========================

      .addCase(verifyResetPasswordOtp.pending, (state) => {
        state.loading = true;
      })

      .addCase(
        verifyResetPasswordOtp.fulfilled,
        (state, action) => {
          state.loading = false;
          state.token = action.payload.data.token;
        }
      )

      .addCase(verifyResetPasswordOtp.rejected, (state) => {
        state.loading = false;
      })

      // ===========================
      // RESET PASSWORD
      // ===========================

      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
      })

      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.user;
      })

      .addCase(resetPassword.rejected, (state) => {
        state.loading = false;
      })

      // ===========================
      // GOOGLE LOGIN
      // ===========================

      .addCase(googleLogin.pending, (state) => {
        state.loading = true;
      })

      .addCase(googleLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.data.token;
        state.user = action.payload.data.user;
      })

      .addCase(googleLogin.rejected, (state) => {
        state.loading = false;
      })

      // ===========================
      // FACEBOOK LOGIN
      // ===========================

      .addCase(facebookLogin.pending, (state) => {
        state.loading = true;
      })

      .addCase(facebookLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.data.token;
        state.user = action.payload.data.user;
      })

      .addCase(facebookLogin.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {
  resetAuthState,
  initializeAuth,
} = authSlice.actions;

export default authSlice.reducer;