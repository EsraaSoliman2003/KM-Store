import { Banner } from "@/utils/dtos";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "@/lib/axios";

type Pagination = {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    from: number;
    to: number;
};

type BannersState = {
    banners: Banner[];
    pagination: Pagination | null;
    loading: boolean;
};

const initialState: BannersState = {
    banners: [],
    pagination: null,
    loading: false,
};

export const getBanners = createAsyncThunk(
    "banners/getBanners",
    async () => {
        const response = await axios.get(`banners`);
        return response.data.data;
    }
);


const bannersSlice = createSlice({
    name: "banners",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBanners.pending, (state) => {
                state.loading = true;
            })

            .addCase(getBanners.fulfilled, (state, action) => {
                state.loading = false;
                state.banners = action.payload.items;
                state.pagination = action.payload.pagination;
            })

            .addCase(getBanners.rejected, (state) => {
                state.loading = false;
            });
    },
});

export default bannersSlice.reducer;