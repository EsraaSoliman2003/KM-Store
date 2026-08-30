import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { Banner, Category, Product } from "@/utils/dtos";

// ===========================
// Types
// ===========================

export interface ProductsResponse {
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

export interface GetProductsParams {
    category_id?: number;
    brand_id?: number;
    name?: string;
    min_price?: number;
    max_price?: number;
    search?: string;
    page?: number;
    per_page?: number;
}

// ===========================
// State
// ===========================

interface ProductSectionsState {
    productsLoading: boolean;
    products: Product[];
    pagination: ProductsResponse["data"]["pagination"] | null;
    currentRequestPage: number | null;
}

const initialState: ProductSectionsState = {
    productsLoading: false,
    products: [],
    pagination: null,
    currentRequestPage: null,
};

// ===========================
// Get Products
// ===========================

export const getProducts = createAsyncThunk<
    ProductsResponse,
    GetProductsParams | undefined
>(
    "products/getProducts",
    async (params) => {
        const formData = new FormData();

        if (params?.category_id !== undefined) {
            formData.append(
                "category_id",
                String(params.category_id)
            );
        }

        if (params?.brand_id !== undefined) {
            formData.append(
                "brand_id",
                String(params.brand_id)
            );
        }

        if (params?.name) {
            formData.append("name", params.name);
        }

        if (params?.min_price !== undefined) {
            formData.append(
                "min_price",
                String(params.min_price)
            );
        }

        if (params?.max_price !== undefined) {
            formData.append(
                "max_price",
                String(params.max_price)
            );
        }

        if (params?.search) {
            formData.append("search", params.search);
        }

        formData.append(
            "page",
            String(params?.page ?? 1)
        );

        formData.append(
            "per_page",
            String(params?.per_page ?? 15)
        );

        const res = await axios.post(
            "/products",
            formData
        );

        return res.data;
    }
);

// ===========================
// Slice
// ===========================

const productsSlice = createSlice({
    name: "products",

    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(
                getProducts.pending,
                (state, action) => {
                    state.productsLoading = true;

                    const page =
                        action.meta.arg?.page ?? 1;

                    state.currentRequestPage = page;

                    // New filter / first page
                    if (page === 1) {
                        state.products = [];
                        state.pagination = null;
                    }
                }
            )

            .addCase(
                getProducts.fulfilled,
                (state, action) => {
                    state.productsLoading = false;

                    const newProducts =
                        action.payload.data.items;

                    const currentPage =
                        action.payload.data.pagination
                            .current_page;

                    if (currentPage === 1) {
                        state.products = newProducts;
                    } else {
                        state.products.push(
                            ...newProducts
                        );
                    }

                    state.pagination =
                        action.payload.data.pagination;
                }
            )

            .addCase(
                getProducts.rejected,
                (state) => {
                    state.productsLoading = false;
                }
            );
    }
});

export default productsSlice.reducer;