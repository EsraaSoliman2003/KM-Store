import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import {
  User,
  ProfileResponse,
} from "@/utils/dtos";

import {
  loginUser,
  registerUser,
  logoutUser,
} from "./authSlice";

// ===========================
// Profile State
// ===========================

interface ProfileState {
  loading: boolean;
  profile: ProfileResponse | null;
}

const initialState: ProfileState = {
  loading: false,
  profile: null,
};

// ===========================
// Get Profile
// ===========================

export const getProfile = createAsyncThunk<ProfileResponse>(
  "profile/getProfile",
  async () => {
    const res = await axios.get("auth/profile");

    return res.data;
  }
);

// ===========================
// Slice
// ===========================

const profileSlice = createSlice({
  name: "profile",
  initialState,

  reducers: {
    resetAuthState: () => initialState,
  },

  extraReducers: (builder) => {
    builder

      // ===========================
      // GET PROFILE
      // ===========================

      .addCase(getProfile.pending, (state) => {
        state.loading = true;
      })

      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })

      .addCase(getProfile.rejected, (state) => {
        state.loading = false;
        state.profile = null;
      })

      // ===========================
      // REGISTER
      // ===========================

      .addCase(registerUser.fulfilled, (state, action) => {
        state.profile = {
          code: action.payload.code,
          message: action.payload.message,
          errors: action.payload.errors,

          data: {
            user: action.payload.data.user,
          },
        };
      })

      // ===========================
      // LOGIN
      // ===========================

      .addCase(loginUser.fulfilled, (state, action) => {
        state.profile = {
          code: action.payload.code,
          message: action.payload.message,
          errors: action.payload.errors,

          data: {
            user: action.payload.data.user,
          },
        };
      })

      // ===========================
      // LOGOUT
      // ===========================

      .addCase(logoutUser.fulfilled, (state) => {
        state.profile = null;
      });
  },
});

export default profileSlice.reducer;