import { configureStore } from "@reduxjs/toolkit";
import uiControlsReducers from "./slices/ui-controls.ts";
import dataReducer from "./slices/data-slice.ts";

const appStore = configureStore({
  reducer: {
    uiControls: uiControlsReducers,
    data: dataReducer,
  },
});

export default appStore;
export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
