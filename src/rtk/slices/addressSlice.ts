import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { Address } from "@/utils/dtos";

// ===========================
// Address Types
// ===========================

interface AddressesResponse {
    code: number;
    message: string;
    errors: any[];
    data: {
        addresses: Address[];
    };
}

interface AddressResponse {
    code: number;
    message: string;
    errors: any[];
    data: {
        address: Address;
    };
}

interface DeleteAddressResponse {
    code: number;
    message: string;
    errors: any[];
    data: null;
}

// ===========================
// Address Payload
// ===========================

export interface AddressPayload {
    address_type: string;
    name: string;
    phone: string;
    city: string;
    national_address: string;
    detailed_address: string;
    postal_code: string;
    is_default: boolean;
}

// ===========================
// State
// ===========================

interface AddressState {
    loading: boolean;
    creating: boolean;
    updating: boolean;
    deleting: boolean;

    addresses: Address[];
    address: Address | null;

    error: string | null;
}

const initialState: AddressState = {
    loading: false,
    creating: false,
    updating: false,
    deleting: false,

    addresses: [],
    address: null,

    error: null,
};

// ===========================
// GET ALL ADDRESSES
// GET /addresses
// ===========================

export const getAddresses = createAsyncThunk<
    AddressesResponse
>("addresses/getAddresses", async () => {
    const res = await axios.get("addresses");

    return res.data;
});

// ===========================
// GET ADDRESS BY ID
// GET /addresses/:id
// ===========================

export const getAddressById = createAsyncThunk<
    AddressResponse,
    number
>("addresses/getAddressById", async (id) => {
    const res = await axios.get(`addresses/${id}`);

    return res.data;
});

// ===========================
// CREATE ADDRESS
// POST /addresses
// ===========================

export const createAddress = createAsyncThunk<
    AddressResponse,
    AddressPayload
>("addresses/createAddress", async (data) => {
    const res = await axios.post("addresses", data);

    return res.data;
});

// ===========================
// UPDATE ADDRESS
// PUT /addresses/:id
// ===========================

export const updateAddress = createAsyncThunk<
    AddressResponse,
    {
        id: number;
        data: AddressPayload;
    }
>("addresses/updateAddress", async ({ id, data }) => {
    const res = await axios.put(`addresses/${id}`, data);

    return res.data;
});

// ===========================
// DELETE ADDRESS
// DELETE /addresses/:id
// ===========================

export const deleteAddress = createAsyncThunk<
    DeleteAddressResponse,
    number
>("addresses/deleteAddress", async (id) => {
    const res = await axios.delete(`addresses/${id}`);

    return res.data;
});

// ===========================
// Slice
// ===========================

const addressSlice = createSlice({
    name: "addresses",
    initialState,

    reducers: {
        clearAddress: (state) => {
            state.address = null;
        },

        clearAddresses: (state) => {
            state.addresses = [];
        },

        clearAddressError: (state) => {
            state.error = null;
        },

        resetAddressState: () => initialState,
    },

    extraReducers: (builder) => {
        builder

            // ===========================
            // GET ALL ADDRESSES
            // ===========================

            .addCase(getAddresses.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(getAddresses.fulfilled, (state, action) => {
                state.loading = false;
                state.addresses = action.payload.data.addresses;
            })

            .addCase(getAddresses.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to get addresses";
            })

            // ===========================
            // GET ADDRESS BY ID
            // ===========================

            .addCase(getAddressById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(getAddressById.fulfilled, (state, action) => {
                state.loading = false;
                state.address = action.payload.data.address;
            })

            .addCase(getAddressById.rejected, (state, action) => {
                state.loading = false;
                state.address = null;
                state.error =
                    action.error.message || "Failed to get address";
            })

            // ===========================
            // CREATE ADDRESS
            // ===========================

            .addCase(createAddress.pending, (state) => {
                state.creating = true;
                state.error = null;
            })

            .addCase(createAddress.fulfilled, (state, action) => {
                state.creating = false;

                const newAddress = action.payload.data.address;

                state.addresses.push(newAddress);
                state.address = newAddress;
            })

            .addCase(createAddress.rejected, (state, action) => {
                state.creating = false;
                state.error =
                    action.error.message || "Failed to create address";
            })

            // ===========================
            // UPDATE ADDRESS
            // ===========================

            .addCase(updateAddress.pending, (state) => {
                state.updating = true;
                state.error = null;
            })

            .addCase(updateAddress.fulfilled, (state, action) => {
                state.updating = false;

                const updatedAddress = action.payload.data.address;

                // Update selected address
                state.address = updatedAddress;

                // Update address inside list
                const index = state.addresses.findIndex(
                    (item) => item.id === updatedAddress.id
                );

                if (index !== -1) {
                    state.addresses[index] = updatedAddress;
                }
            })

            .addCase(updateAddress.rejected, (state, action) => {
                state.updating = false;
                state.error =
                    action.error.message || "Failed to update address";
            })

            // ===========================
            // DELETE ADDRESS
            // ===========================

            .addCase(deleteAddress.pending, (state) => {
                state.deleting = true;
                state.error = null;
            })

            .addCase(deleteAddress.fulfilled, (state, action) => {
                state.deleting = false;

                // We need the deleted ID.
                // It will be handled below using thunk meta.
                const deletedId = action.meta.arg;

                state.addresses = state.addresses.filter(
                    (item) => item.id !== deletedId
                );

                // If the deleted address is currently selected
                if (state.address?.id === deletedId) {
                    state.address = null;
                }
            })

            .addCase(deleteAddress.rejected, (state, action) => {
                state.deleting = false;
                state.error =
                    action.error.message || "Failed to delete address";
            });
    },
});

export const {
    clearAddress,
    clearAddresses,
    clearAddressError,
    resetAddressState,
} = addressSlice.actions;

export default addressSlice.reducer;