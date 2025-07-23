import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export interface SevadalaMembers {
  id: string;
  teamName: string;
  aboutTeam: string;
  members: Member[];
}

export interface Member {
  id: string;
  phNumber: string;
  name: string;
  role: string;
  address: string;
  image: string;
  bloodGroup: string;
}

interface DataState {
  sevadalaMembers: SevadalaMembers[];
  loading: boolean;
  error: string | null;
  cached: boolean;
}

const initialState: DataState = {
  sevadalaMembers: [],
  loading: false,
  error: null,
  cached: false,
};

export const fetchSevadalaMembers = createAsyncThunk<
  SevadalaMembers[],
  void,
  { state: { sevadala: DataState } }
>("data/fetchSevadalaMembers", async (_, { getState, rejectWithValue }) => {
  if (getState().sevadala.cached) return getState().sevadala.sevadalaMembers;
  try {
    const sevadalaMembersSnapshot = await getDocs(
      collection(db, "sevadala-members-info")
    );
    const sevadalaMembers: SevadalaMembers[] = await Promise.all(
      sevadalaMembersSnapshot.docs.map(async (docSnap) => {
        const data = docSnap.data();
        const membersSnapshot = await getDocs(
          collection(docSnap.ref, "members")
        );
        const members: Member[] = membersSnapshot.docs.map((m) => ({
          id: m.id,
          phNumber: m.data().phNumber ?? "",
          name: m.data().name ?? "",
          role: m.data().role ?? "",
          address: m.data().address ?? "",
          image: m.data().image ?? "",
          bloodGroup: m.data().bloodGroup ?? "",
        }));
        return {
          id: docSnap.id,
          teamName: data.teamName ?? "",
          aboutTeam: data.aboutTeam ?? "",
          members,
        };
      })
    );
    return sevadalaMembers;
  } catch (error: any) {
    return rejectWithValue(error?.message || "An unknown error occurred");
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
      .addCase(fetchSevadalaMembers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSevadalaMembers.fulfilled, (state, action) => {
        state.sevadalaMembers = action.payload;
        state.loading = false;
        state.cached = true;
      })
      .addCase(fetchSevadalaMembers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearCache } = dataSlice.actions;
export default dataSlice.reducer;
