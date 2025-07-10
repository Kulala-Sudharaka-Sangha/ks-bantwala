import { createSlice } from "@reduxjs/toolkit";
import { RoutesList } from "../../utils/master-menu";

const uiControls = createSlice({
  name: "uiControls",
  initialState: {
    isDrawerMenuOpen: false,
    activeRouterPage: RoutesList.HOME,
  },
  reducers: {
    toggleDrawerMenu(state, actions) {
      state.isDrawerMenuOpen = actions.payload;
    },
    setActiveRouterPage(state, actions) {
      state.activeRouterPage = actions.payload;
    },
  },
});

export const { toggleDrawerMenu, setActiveRouterPage } = uiControls.actions;
export default uiControls.reducer;
