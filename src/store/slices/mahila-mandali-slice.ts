import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export interface MahilaMandali {
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

interface MahilaMandaliState {
  mahilaMandali: MahilaMandali[];
  loading: boolean;
  error: string | null;
  cached: boolean;
}

const initialState: MahilaMandaliState = {
  mahilaMandali: [],
  loading: false,
  error: null,
  cached: false,
};

export const fetchMahilaMandaliMembers = createAsyncThunk<
  MahilaMandali[],
  void,
  { state: { mahilaMandali: MahilaMandaliState } }
>(
  "data/fetchMahilaMandaliMembers",
  async (_, { getState, rejectWithValue }) => {
    if (getState().mahilaMandali.cached)
      return getState().mahilaMandali.mahilaMandali;
    try {
      const mahilaMandaliSnapshot = await getDocs(
        collection(db, "mahila-mandali-members-info")
      );
      const mahilaMandali: MahilaMandali[] = await Promise.all(
        mahilaMandaliSnapshot.docs.map(async (docSnap) => {
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
      return mahilaMandali;
    } catch (error: any) {
      return rejectWithValue(error?.message || "An unknown error occurred");
    }
  }
);

const mahilaMandaliSlice = createSlice({
  name: "mahilaMandali",
  initialState,
  reducers: {
    clearCache: (state) => {
      state.cached = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMahilaMandaliMembers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMahilaMandaliMembers.fulfilled, (state, action) => {
        state.mahilaMandali = action.payload;
        state.loading = false;
        state.cached = true;
      })
      .addCase(fetchMahilaMandaliMembers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearCache } = mahilaMandaliSlice.actions;
export default mahilaMandaliSlice.reducer;
