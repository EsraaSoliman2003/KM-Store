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
      });
  },
});

export const {
  resetAuthState,
  initializeAuth,
} = authSlice.actions;

export default authSlice.reducer;