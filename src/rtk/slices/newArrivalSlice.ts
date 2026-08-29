import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { Product } from "@/utils/dtos";

// ===========================
// Types
// ===========================

export interface NewArrivalsResponse {
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

export interface GetNewArrivalsParams {
    page?: number;
    per_page?: number;
}

// ===========================
// State
// ===========================

interface NewArrivalsState {
    loading: boolean;
    products: Product[];
    pagination: NewArrivalsResponse["data"]["pagination"] | null;
}

const initialState: NewArrivalsState = {
    loading: false,
    products: [],
    pagination: null,
};

// ===========================
// Get New Arrivals
// ===========================

export const getNewArrivals = createAsyncThunk<
    NewArrivalsResponse,
    GetNewArrivalsParams | undefined
>(
    "newArrivals/getNewArrivals",
    async (params) => {
        const res = await axios.get(
            "/products/new-arrival",
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

const newArrivalsSlice = createSlice({
    name: "newArrivals",

    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder

            // ===========================
            // New Arrivals
            // ===========================

            .addCase(
                getNewArrivals.pending,
                (state) => {
                    state.loading = true;
                }
            )

            .addCase(
                getNewArrivals.fulfilled,
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
                getNewArrivals.rejected,
                (state) => {
                    state.loading = false;
                }
            );
    },
});

export default newArrivalsSlice.reducer;