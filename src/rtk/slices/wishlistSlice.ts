import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { Product } from "@/utils/dtos";

// ===========================
// Wishlist State
// ===========================

interface WishlistResponse {
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
    count: number;
}

interface ToggleWishlistResponse {
    code: number;
    message: string;
    errors: unknown[];
    data: {
        is_in_wishlist: boolean;
    };
}

interface WishlistState {
    loading: boolean;
    togglingProductId: number | null;
    wishlist: WishlistResponse | null;
}

const initialState: WishlistState = {
    loading: false,
    togglingProductId: null,
    wishlist: null,
};

// ===========================
// Get Wishlist
// ===========================

export const getWishlist = createAsyncThunk<WishlistResponse>(
    "wishlist/getWishlist",
    async () => {
        const res = await axios.get("/wishlist");

        return res.data;
    }
);

// ===========================
// Toggle Wishlist
// ===========================

export const toggleWishlist = createAsyncThunk<
    ToggleWishlistResponse,
    number
>(
    "wishlist/toggleWishlist",
    async (productId) => {
        const res = await axios.post("/wishlist/toggle", {
            product_id: productId,
        });

        return res.data;
    }
);

// ===========================
// Slice
// ===========================

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder

            // ===========================
            // GET Wishlist
            // ===========================

            .addCase(getWishlist.pending, (state) => {
                state.loading = true;
            })

            .addCase(getWishlist.fulfilled, (state, action) => {
                state.loading = false;
                state.wishlist = action.payload;
            })

            .addCase(getWishlist.rejected, (state) => {
                state.loading = false;
                state.wishlist = null;
            })

            // ===========================
            // TOGGLE Wishlist
            // ===========================

            .addCase(toggleWishlist.pending, (state, action) => {
                state.togglingProductId = action.meta.arg;
            })

            .addCase(toggleWishlist.fulfilled, (state) => {
                state.togglingProductId = null;
            })

            .addCase(toggleWishlist.rejected, (state) => {
                state.togglingProductId = null;
            });
    },
});

export default wishlistSlice.reducer;