import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { Brand } from "@/utils/dtos";

export interface BrandsResponse {
    code: number;
    message: string;
    errors: unknown[];
    data: {
        items: Brand[];
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

interface BrandsState {
    loading: boolean;
    data: BrandsResponse | null;
}

const initialState: BrandsState = {
    loading: false,
    data: null,
};

export const getBrands = createAsyncThunk(
    "brands/getBrands",
    async (page: number = 1) => {
        const response = await axios.get<BrandsResponse>(
            `/brands?page=${page}`
        );
        return response.data;
    }
);

const brandsSlice = createSlice({
    name: "brands",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBrands.pending, (state) => {
                state.loading = true;
            })
            .addCase(getBrands.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getBrands.rejected, (state) => {
                state.loading = false;
            });
    },
});

export default brandsSlice.reducer;