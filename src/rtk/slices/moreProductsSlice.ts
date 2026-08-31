import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { Product } from "@/utils/dtos";

// ===========================
// Types
// ===========================

export interface MoreProductsResponse {
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

export interface GetMoreProductsParams {
    page?: number;
    per_page?: number;
}

// ===========================
// State
// ===========================

interface MoreProductsState {
    loading: boolean;
    products: Product[];
    pagination: MoreProductsResponse["data"]["pagination"] | null;
}

const initialState: MoreProductsState = {
    loading: false,
    products: [],
    pagination: null,
};

// ===========================
// Get More Products
// ===========================

export const getMoreProducts = createAsyncThunk<
    MoreProductsResponse,
    GetMoreProductsParams | undefined
>(
    "moreProducts/getMoreProducts",
    async (params) => {
        const res = await axios.get(
            "/products/more-products",
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

const moreProductsSlice = createSlice({
    name: "moreProducts",

    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder

            // ===========================
            // More Products
            // ===========================

            .addCase(
                getMoreProducts.pending,
                (state) => {
                    state.loading = true;
                }
            )

            .addCase(
                getMoreProducts.fulfilled,
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
                getMoreProducts.rejected,
                (state) => {
                    state.loading = false;
                }
            );
    },
});

export default moreProductsSlice.reducer;