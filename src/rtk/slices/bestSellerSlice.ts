import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { Product } from "@/utils/dtos";

// ===========================
// Types
// ===========================

export interface BestSellerResponse {
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

export interface GetBestSellerParams {
    page?: number;
    per_page?: number;
}

// ===========================
// State
// ===========================

interface BestSellerState {
    loading: boolean;
    products: Product[];
    pagination: BestSellerResponse["data"]["pagination"] | null;
}

const initialState: BestSellerState = {
    loading: false,
    products: [],
    pagination: null,
};

// ===========================
// Get Best Sellers
// ===========================

export const getBestSellers = createAsyncThunk<
    BestSellerResponse,
    GetBestSellerParams | undefined
>(
    "bestSeller/getBestSellers",
    async (params) => {
        const res = await axios.get(
            "/products/best-seller",
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

const bestSellerSlice = createSlice({
    name: "bestSeller",

    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder

            // ===========================
            // Best Sellers
            // ===========================

            .addCase(
                getBestSellers.pending,
                (state) => {
                    state.loading = true;
                }
            )

            .addCase(
                getBestSellers.fulfilled,
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
                getBestSellers.rejected,
                (state) => {
                    state.loading = false;
                }
            );
    },
});

export default bestSellerSlice.reducer;