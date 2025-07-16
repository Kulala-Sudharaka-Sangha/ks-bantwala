// src/features/data/dataSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

export interface Item {
  id: string;
  [key: string]: any;
}

interface DataState {
  items: Item[];
  loading: boolean;
  error: string | null;
  cached: boolean;
}

const initialState: DataState = {
  items: [],
  loading: false,
  error: null,
  cached: false,
};

export const fetchData = createAsyncThunk<
  Item[],
  void,
  { state: { data: DataState } }
>("data/fetchData", async (_, { getState, rejectWithValue }) => {
  const { cached } = getState().data;
  if (cached) {
    return getState().data.items;
  }

  try {
    const querySnapshot = await getDocs(
      collection(db, "committee-members-info")
    );
    const items: Item[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return items;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    clearCache: (state) => {
      state.cached = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<Item[]>) => {
        state.items = action.payload;
        state.loading = false;
        state.cached = true;
      })
      .addCase(fetchData.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCache } = dataSlice.actions;
export default dataSlice.reducer;
