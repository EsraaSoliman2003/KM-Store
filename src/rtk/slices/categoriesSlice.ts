import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { CategoriesResponse } from "@/utils/dtos";

// ===========================
// Categories State
// ===========================

interface CategoriesState {
    loading: boolean;
    categories: CategoriesResponse | null;
}

const initialState: CategoriesState = {
    loading: false,
    categories: null,
};

// ===========================
// Get Categories
// ===========================

interface GetCategoriesParams {
    page?: number;
    per_page?: number;
}

export const getCategories = createAsyncThunk<
    CategoriesResponse,
    GetCategoriesParams | undefined
>(
    "categories/getCategories",
    async (params) => {
        const res = await axios.get("categories?level=1", {
            params: {
                page: params?.page ?? 1,
                per_page: params?.per_page ?? 10,
            },
        });

        return res.data;
    }
);

// ===========================
// Slice
// ===========================

const categoriesSlice = createSlice({
    name: "categories",
    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder

            // ===========================
            // GET Categories
            // ===========================

            .addCase(getCategories.pending, (state) => {
                state.loading = true;
            })

            .addCase(getCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })

            .addCase(getCategories.rejected, (state) => {
                state.loading = false;
                state.categories = null;
            });
    },
});

export default categoriesSlice.reducer;