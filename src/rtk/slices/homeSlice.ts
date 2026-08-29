import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { Banner, Category, Product } from "@/utils/dtos";

// ===========================
// Types
// ===========================

export interface ProductSectionsResponse {
    code: number;
    message: string;
    errors: unknown[];
    data: {
        banners: Banner[];
        categories: Category[];
        new_arrivals: Product[];
        best_sellers: Product[];
        top_rated: Product[];
        more_products: Product[];
    };
}

// ===========================
// State
// ===========================

interface ProductSectionsState {
    loading: boolean;
    sections: ProductSectionsResponse["data"] | null;
}

const initialState: ProductSectionsState = {
    loading: false,
    sections: null,
};

// ===========================
// Get Product Sections
// ===========================

export const getProductSections = createAsyncThunk<
    ProductSectionsResponse,
    void
>(
    "products/getProductSections",
    async () => {
        const res = await axios.get("/products/sections");

        return res.data;
    }
);

// ===========================
// Slice
// ===========================

const homeSlice = createSlice({
    name: "home",

    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder

            // ===========================
            // Product Sections
            // ===========================

            .addCase(
                getProductSections.pending,
                (state) => {
                    state.loading = true;
                }
            )

            .addCase(
                getProductSections.fulfilled,
                (state, action) => {
                    state.loading = false;
                    state.sections =
                        action.payload.data;
                }
            )

            .addCase(
                getProductSections.rejected,
                (state) => {
                    state.loading = false;
                    state.sections = null;
                }
            );
    },
});

export default homeSlice.reducer;