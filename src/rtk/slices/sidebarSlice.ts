import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SidebarState {
    open: boolean;
}

const initialState: SidebarState = {
    open: false,
};

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.open = !state.open;
        },

        openSidebar: (state) => {
            state.open = true;
        },

        closeSidebar: (state) => {
            state.open = false;
        },

        setSidebar: (
            state,
            action: PayloadAction<boolean>
        ) => {
            state.open = action.payload;
        },
    },
});

export const {
    toggleSidebar,
    openSidebar,
    closeSidebar,
    setSidebar,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;