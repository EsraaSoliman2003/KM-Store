import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { Product } from "@/utils/dtos";

// ===========================
// Types
// ===========================

export interface RecentlyViewedResponse {
    code: number;
    message: string;
    errors: unknown[];
    data: {
        items: Product[];
        pagination: {
            total: number;
            per_page: number;
            current_page: number;
            last_page: number;
            from: number;
            to: number;
        };
    };
}

export interface GetRecentlyViewedParams {
    page?: number;
    per_page?: number;
}

// ===========================
// State
// ===========================

interface RecentlyViewedState {
    loading: boolean;
    products: Product[];
    pagination: RecentlyViewedResponse["data"]["pagination"] | null;
}

const initialState: RecentlyViewedState = {
    loading: false,
    products: [],
    pagination: null,
};

// ===========================
// Get Recently Viewed
// ===========================

export const getRecentlyViewed = createAsyncThunk<
    RecentlyViewedResponse,
    GetRecentlyViewedParams | undefined
>(
    "recentlyViewed/getRecentlyViewed",
    async (params) => {
        const res = await axios.get(
            "/products/recently-viewed",
            {
                params: {
                    page: params?.page ?? 1,
                    per_page: params?.per_page ?? 15,
                },
            }
        );

        return res.data;
    }
);

// ===========================
// Slice
// ===========================

const recentlyViewedSlice = createSlice({
    name: "recentlyViewed",

    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder

            // ===========================
            // Recently Viewed
            // ===========================

            .addCase(
                getRecentlyViewed.pending,
                (state) => {
                    state.loading = true;
                }
            )

            .addCase(
                getRecentlyViewed.fulfilled,
                (state, action) => {
                    state.loading = false;

                    const newProducts =
                        action.payload.data.items;

                    const currentPage =
                        action.payload.data.pagination
                            .current_page;

                    // First page
                    if (currentPage === 1) {
                        state.products = newProducts;
                    } else {
                        // Infinite scroll
                        state.products.push(
                            ...newProducts
                        );
                    }

                    state.pagination =
                        action.payload.data.pagination;
                }
            )

            .addCase(
                getRecentlyViewed.rejected,
                (state) => {
                    state.loading = false;
                }
            );
    },
});

export default recentlyViewedSlice.reducer;