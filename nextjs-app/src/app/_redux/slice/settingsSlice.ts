import { createSlice } from "@reduxjs/toolkit";
export interface ISettingState {
  settings: any;
  sidebar: boolean;
  navbar: boolean;
}
const settingsSlice = createSlice({
  name: "setting",
  initialState: { sidebar: false, navbar: false } as ISettingState,
  reducers: {
    ToggleShowSidebar(state, actions) {
      state.sidebar = actions.payload;
    },
    ToggleShowNavbar(state, actions) {
      state.navbar = actions.payload;
    },
  },
});
export const settingAction = settingsSlice.actions;
export default settingsSlice.reducer;
