import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";

// ===========================
// Types
// ===========================

export interface SearchHistory {
    id: number;
    query: string;
}

export interface SearchHistoryResponse {
    code: number;
    message: string;
    errors: unknown[];
    data: {
        search_history: SearchHistory[];
    };
}

export interface SearchHistoryActionResponse {
    code: number;
    message: string;
    errors: unknown[];
    data: null;
}

// ===========================
// State
// ===========================

interface SearchHistoryState {
    loading: boolean;
    history: SearchHistory[];
}

const initialState: SearchHistoryState = {
    loading: false,
    history: [],
};

// ===========================
// Get Search History
// ===========================

export const getSearchHistory = createAsyncThunk<
    SearchHistoryResponse,
    number | undefined
>(
    "searchHistory/getSearchHistory",
    async (page = 1) => {
        const res = await axios.get(`/search-histories?page=${page}`);

        return res.data;
    }
);

// ===========================
// Delete Search History Item
// ===========================

export const deleteSearchHistory = createAsyncThunk<
    SearchHistoryActionResponse,
    number
>(
    "searchHistory/deleteSearchHistory",
    async (id) => {
        const res = await axios.delete(
            `/search-histories/${id}?page=1`
        );

        return res.data;
    }
);

// ===========================
// Clear Search History
// ===========================

export const clearSearchHistory = createAsyncThunk<
    SearchHistoryActionResponse,
    void
>(
    "searchHistory/clearSearchHistory",
    async () => {
        const res = await axios.delete(
            "/search-histories/clear?page=1"
        );

        return res.data;
    }
);

// ===========================
// Slice
// ===========================

const searchHistorySlice = createSlice({
    name: "searchHistory",

    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder

            // ===========================
            // Get Search History
            // ===========================

            .addCase(
                getSearchHistory.pending,
                (state) => {
                    state.loading = true;
                }
            )

            .addCase(
                getSearchHistory.fulfilled,
                (state, action) => {
                    state.loading = false;
                    state.history =
                        action.payload.data.search_history;
                }
            )

            .addCase(
                getSearchHistory.rejected,
                (state) => {
                    state.loading = false;
                    state.history = [];
                }
            )

            // ===========================
            // Delete Search History Item
            // ===========================

            .addCase(
                deleteSearchHistory.fulfilled,
                (state, action) => {
                    state.history = state.history.filter(
                        (item) =>
                            item.id !== action.meta.arg
                    );
                }
            )

            // ===========================
            // Clear Search History
            // ===========================

            .addCase(
                clearSearchHistory.fulfilled,
                (state) => {
                    state.history = [];
                }
            );
    },
});

export default searchHistorySlice.reducer;