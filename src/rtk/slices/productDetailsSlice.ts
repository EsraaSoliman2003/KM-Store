import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "@/lib/axios";

// ===========================
// Types
// ===========================

export interface ProductDetails {
    id: number;
    name: string;
    price: string;
    discount_type: string | null;
    discount_amount: string | null;
    has_variants: boolean;
    in_stock: boolean;
    final_price: number;
    discount_info: string | null;
    avg_rating: number;
    reviews_count: number;
    
    can_review: boolean;

    brand: {
        id: number;
        name: string;
        image: string;
        number_of_products: number | null;
    };

    category: {
        id: number;
        name: string;
        level: number;
        first_color: string | null;
        second_color: string | null;
        image: string;
        parent: {
            id: number;
            name: string;
        } | null;
    };

    primary_image: string;
    images: string[];
    description: string;
    hover_text: string | null;

    specifications: unknown[];
    variant_options: unknown[];
    variants: unknown[];

    in_wishlist: boolean;
}

export interface RatingSummary {
    avg_rating: number;
    reviews_count: number;
    breakdown: {
        "5": number;
        "4": number;
        "3": number;
        "2": number;
        "1": number;
    };
}

export interface ProductDetailsResponse {
    code: number;
    message: string;
    errors: unknown[];
    data: {
        product: ProductDetails;
    };
    rating_summary: RatingSummary;
}

// ===========================
// State
// ===========================

interface ProductDetailsState {
    product: ProductDetails | null;
    ratingSummary: RatingSummary | null;
    loading: boolean;
    error: string | null;
}

const initialState: ProductDetailsState = {
    product: null,
    ratingSummary: null,
    loading: false,
    error: null,
};

// ===========================
// Get Product Details
// ===========================

export const getProductDetails = createAsyncThunk<
    ProductDetailsResponse,
    number,
    { rejectValue: string }
>(
    "productDetails/getProductDetails",
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get<ProductDetailsResponse>(
                `/products/${id}`
            );

            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error?.response?.data?.message ||
                    "Failed to get product details"
            );
        }
    }
);

// ===========================
// Slice
// ===========================

const productDetailsSlice = createSlice({
    name: "productDetails",
    initialState,
    reducers: {
        clearProductDetails: (state) => {
            state.product = null;
            state.ratingSummary = null;
            state.error = null;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getProductDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(getProductDetails.fulfilled, (state, action) => {
                state.loading = false;

                state.product = action.payload.data.product;
                state.ratingSummary = action.payload.rating_summary;
            })

            .addCase(getProductDetails.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.payload || "Failed to get product details";
            });
    },
});

export const { clearProductDetails } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;