import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "@/lib/axios";

interface User {
    id: number;
    name: string;
    email: string | null;
    country_code: string;
    phone: string;
    avatar: string | null;
    latitude: string;
    longitude: string;
}

interface ChangeLanguageResponse {
    code: number;
    message: string;
    errors: string[];
    data: {
        user: User;
    };
}

interface ChangeLanguageState {
    user: User | null;
    loading: boolean;
    error: string | null;
    message: string | null;
}

const initialState: ChangeLanguageState = {
    user: null,
    loading: false,
    error: null,
    message: null,
};

export const changeLanguage = createAsyncThunk<
    ChangeLanguageResponse,
    string,
    { rejectValue: string }
>("auth/changeLanguage", async (locale) => {
    const formData = new FormData();

    formData.append("locale", locale);

    const response = await axios.post<ChangeLanguageResponse>(
        "/auth/change-language",
        formData
    );

    return response.data;
});

const changeLanguageSlice = createSlice({
    name: "changeLanguage",
    initialState,
    reducers: {
        clearChangeLanguage: (state) => {
            state.loading = false;
            state.error = null;
            state.message = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(changeLanguage.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(changeLanguage.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.data.user;
                state.message = action.payload.message;
                state.error = null;
            })

            .addCase(changeLanguage.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.payload || "Failed to change language";
            });
    },
});

export const { clearChangeLanguage } = changeLanguageSlice.actions;

export default changeLanguageSlice.reducer;