import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AdminService } from "../services/services";

import { ProductType } from "../services/interfaces";
import { errorHandling } from "../services/errorHandling";

type CommonInitialStateType = {
  Products: ProductType[];
  Category: string[];
  loading: boolean;
};

export const getCategory = createAsyncThunk("common/cateogary", async () => {
  try {
    return await AdminService("get", "products/categories", null);
  } catch (err: any) {
    throw new Error(errorHandling(err));
  }
});

export const getProducts = createAsyncThunk(
  "common/products",
  async (value: any) => {
    try {
      return await AdminService("get", "products/category/" + value, null);
    } catch (err: any) {
      throw new Error(errorHandling(err));
    }
  }
);

const initialState: CommonInitialStateType = {
  Products: [],
  Category: [],
  loading: false,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCategory.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.Category = action.payload.data;
    });

    builder.addCase(getCategory.rejected, (state, action) => {
      state.loading = false;
    });

    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.Products = action.payload.data.products;
    });

    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export type CommonReducer = ReturnType<typeof commonSlice.reducer>;

export default commonSlice.reducer;
