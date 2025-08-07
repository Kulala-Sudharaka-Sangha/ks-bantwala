import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export interface Member {
  id: string;
  phNumber: string;
  name: string;
  role: string;
  address: string;
  image: string;
  bloodGroup: string;
}

export interface CommitteeMembers {
  id: string;
  teamName: string;
  aboutTeam: string;
  members: Member[];
}

interface CommitteeState {
  committees: CommitteeMembers[];
  loading: boolean;
  error: string | null;
  cached: boolean;
}

const initialState: CommitteeState = {
  committees: [],
  loading: false,
  error: null,
  cached: false,
};

export const fetchCommitteesMembers = createAsyncThunk<
  CommitteeMembers[],
  void,
  { state: { committee: CommitteeState } }
>(
  "committee/fetchCommitteeMembers",
  async (_, { getState, rejectWithValue }) => {
    const { cached, committees } = getState().committee;
    if (cached) return committees;
    try {
      const committeesSnapshot = await getDocs(
        collection(db, "committee-members-info")
      );
      const committees: CommitteeMembers[] = await Promise.all(
        committeesSnapshot.docs.map(async (docSnap) => {
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
      return committees;
    } catch (error: any) {
      return rejectWithValue(error?.message || "An unknown error occurred");
    }
  }
);

const committeeSlice = createSlice({
  name: "committee",
  initialState,
  reducers: {
    clearCache: (state) => {
      state.cached = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommitteesMembers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCommitteesMembers.fulfilled, (state, action) => {
        state.committees = action.payload;
        state.loading = false;
        state.cached = true;
      })
      .addCase(fetchCommitteesMembers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearCache } = committeeSlice.actions;
export default committeeSlice.reducer;
