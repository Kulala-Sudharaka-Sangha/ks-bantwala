import { createSlice } from "@reduxjs/toolkit";
import { CommitteeNames, RoutesList } from "../../utils/master-menu";

const uiControls = createSlice({
  name: "uiControls",
  initialState: {
    isDrawerMenuOpen: false,
    activeRouterPage: RoutesList.HOME,
    activeCommitteePage: CommitteeNames.KULALA_SUDHARAKA_SANGHA,
  },
  reducers: {
    toggleDrawerMenu(state, actions) {
      state.isDrawerMenuOpen = actions.payload;
    },
    setActiveRouterPage(state, actions) {
      state.activeRouterPage = actions.payload;
    },
    setActiveCommitteePage(state, actions) {
      state.activeCommitteePage = actions.payload;
    },
  },
});

export const { toggleDrawerMenu, setActiveRouterPage, setActiveCommitteePage } =
  uiControls.actions;
export default uiControls.reducer;
