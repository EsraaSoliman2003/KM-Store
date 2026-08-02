import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { User, AuthResponse } from "@/utils/dtos";

/* ===========================
   Types
=========================== */

interface AuthState {
  loading: boolean;
  token: string | null;
  user: User | null;
  role: number | null;
}

/* ===========================
   Initial State
=========================== */

const initialState: AuthState = {
  loading: false,
  token: null,
  user: null,
  role: null,
};

/* ===========================
   Register
=========================== */

export const registerUser = createAsyncThunk<AuthResponse, FormData>(
  "auth/register",
  async (formData) => {
    const res = await axios.post("Account/register", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  },
);

/* ===========================
   Login
=========================== */

export const loginUser = createAsyncThunk<
  AuthResponse,
  { email: string; password: string }
>("auth/login", async (data) => {
  const res = await axios.post("Account/login", data);
  return res.data;
});

/* ===========================
   Logout
=========================== */

export const logoutUser = createAsyncThunk<
  void,
  void
>("auth/logout", async () => {
  await axios.post("Account/logout");
});

/* ===========================
   Slice
=========================== */

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthState: () => initialState,

    initializeAuth: (
      state,
      action: PayloadAction<{ token: string | null; role: number | null }>
    ) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
    },
  },
  extraReducers: (builder) => {
    builder

      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.role = action.payload.role;
      })
      .addCase(registerUser.rejected, (state) => {
        state.loading = false;
      })

      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.role = action.payload.role;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
      })

      // LOGOUT
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.token = null;
        state.user = null;
        state.role = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { resetAuthState, initializeAuth } = authSlice.actions;
export default authSlice.reducer;
