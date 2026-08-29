import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { Product } from "@/utils/dtos";

// ===========================
// Types
// ===========================

export interface TopRatedResponse {
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

export interface GetTopRatedParams {
    page?: number;
    per_page?: number;
}

// ===========================
// State
// ===========================

interface TopRatedState {
    loading: boolean;
    products: Product[];
    pagination: TopRatedResponse["data"]["pagination"] | null;
}

const initialState: TopRatedState = {
    loading: false,
    products: [],
    pagination: null,
};

// ===========================
// Get TOP RATED
// ===========================

export const getTopRated = createAsyncThunk<
    TopRatedResponse,
    GetTopRatedParams | undefined
>(
    "topRated/getTopRated",
    async (params) => {
        const res = await axios.get(
            "/products/top-rated",
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

const topRatedSlice = createSlice({
    name: "topRated",

    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder

            // ===========================
            // Top Rated
            // ===========================

            .addCase(
                getTopRated.pending,
                (state) => {
                    state.loading = true;
                }
            )

            .addCase(
                getTopRated.fulfilled,
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
                getTopRated.rejected,
                (state) => {
                    state.loading = false;
                }
            );
    },
});

export default topRatedSlice.reducer;