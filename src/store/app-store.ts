import { configureStore } from "@reduxjs/toolkit";
import uiControlsReducers from "./slices/ui-controls.ts";
import committeeReducer from "./slices/committee-slice.ts";
import mahilaMandaliReducer from "./slices/mahila-mandali-slice.ts";
import sevadalaReducer from "./slices/sevadala-slice.ts";
import zoneCommitteeMembersReducer from "./slices/zone-committee-members-slice.ts";

const appStore = configureStore({
  reducer: {
    uiControls: uiControlsReducers,
    committee: committeeReducer,
    mahilaMandali: mahilaMandaliReducer,
    sevadala: sevadalaReducer,
    zoneCommitteeMembers: zoneCommitteeMembersReducer,
  },
});

export default appStore;
export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
