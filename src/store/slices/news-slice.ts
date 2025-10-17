import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export interface News {
  id: string;
  title: string;
  category: string;
  content: string;
}

export interface NewsList {
  newsList: News[];
  loading: boolean;
  error: string | null;
  cached: boolean;
}

const initialState: NewsList = {
  newsList: [],
  loading: false,
  error: null,
  cached: false,
};

export const fetchNews = createAsyncThunk<
  News[],
  void,
  { state: { news: NewsList } }
>("news/fetchNews", async (_, { getState, rejectWithValue }) => {
  const { cached, newsList } = getState().news;
  if (cached) return newsList;
  try {
    const newsSnapshot = await getDocs(collection(db, "news"));
    const newsList: News[] = newsSnapshot.docs.map((doc) => ({
      id: doc.id,
      title: doc.data().title,
      category: doc.data().category,
      content: doc.data().content,
    }));
    return newsList;
  } catch (error: any) {
    return rejectWithValue(error.message || "Failed to fetch news.");
  }
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNewsCache(state) {
      state.cached = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.newsList = action.payload;
        state.cached = true;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearNewsCache } = newsSlice.actions;
export default newsSlice.reducer;
