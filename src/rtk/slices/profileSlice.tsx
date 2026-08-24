import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { ProfileResponse } from "@/utils/dtos";

import {
  loginUser,
  registerUser,
  logoutUser,
  resetPassword,
  googleLogin,
  facebookLogin,
} from "./authSlice";

// ===========================
// Profile State
// ===========================

interface ProfileState {
  loading: boolean;
  updating: boolean;
  profile: ProfileResponse | null;
}

const initialState: ProfileState = {
  loading: false,
  updating: false,
  profile: null,
};

// ===========================
// Update Profile Payload
// ===========================

interface UpdateProfilePayload {
  name?: string;
  address?: string;
  city?: string;
  zip?: string;
  state?: string;
  avatar?: File;
  latitude?: string;
  longitude?: string;
}

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
// Update Profile
// ===========================

export const updateProfile = createAsyncThunk<
  ProfileResponse,
  UpdateProfilePayload
>(
  "profile/updateProfile",
  async (data) => {
    const formData = new FormData();

    if (data.name !== undefined) {
      formData.append("name", data.name);
    }

    if (data.address !== undefined) {
      formData.append("address", data.address);
    }

    if (data.city !== undefined) {
      formData.append("city", data.city);
    }

    if (data.zip !== undefined) {
      formData.append("zip", data.zip);
    }

    if (data.state !== undefined) {
      formData.append("state", data.state);
    }

    if (data.avatar) {
      formData.append("avatar", data.avatar);
    }

    if (data.latitude !== undefined) {
      formData.append("latitude", data.latitude);
    }

    if (data.longitude !== undefined) {
      formData.append("longitude", data.longitude);
    }

    const res = await axios.post(
      "auth/update-profile",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return res.data;
  }
);

// ===========================
// Update Password Payload
// ===========================

interface UpdatePasswordPayload {
  password: string;
  password_confirmation: string;
}

// ===========================
// Update Password
// ===========================

export const updatePassword = createAsyncThunk<
  ProfileResponse,
  UpdatePasswordPayload
>(
  "profile/updatePassword",
  async (data) => {
    const formData = new FormData();

    formData.append("password", data.password);
    formData.append(
      "password_confirmation",
      data.password_confirmation
    );

    const res = await axios.post(
      "auth/update-password",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

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
      // UPDATE PROFILE
      // ===========================

      .addCase(updateProfile.pending, (state) => {
        state.updating = true;
      })

      .addCase(updateProfile.fulfilled, (state, action) => {
        state.updating = false;
        state.profile = action.payload;
      })

      .addCase(updateProfile.rejected, (state) => {
        state.updating = false;
      })

      // ===========================
      // UPDATE PASSWORD
      // ===========================

      .addCase(updatePassword.pending, (state) => {
        state.updating = true;
      })

      .addCase(updatePassword.fulfilled, (state, action) => {
        state.updating = false;
        state.profile = action.payload;
      })

      .addCase(updatePassword.rejected, (state) => {
        state.updating = false;
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
      // RESET PASSWORD
      // ===========================

      .addCase(resetPassword.fulfilled, (state, action) => {
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
      // GOOGLE LOGIN
      // ===========================

      .addCase(googleLogin.fulfilled, (state, action) => {
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
      // FACEBOOK LOGIN
      // ===========================

      .addCase(facebookLogin.fulfilled, (state, action) => {
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