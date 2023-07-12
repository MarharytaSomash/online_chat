import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";
const initialState = {
    sidebar: {
        open: false,
        type: "CONTACT",
    },
};

const slice = createSlice({
    name: "app",
    initialState,
    reducers: {
        toggleSidebar(state) {
            state.sidebar.open = !state.sidebar.open;
        },
        updateSidebar(state, { payload }) {
            state.sidebar.type = payload.type;
        },
    },
});
export default slice.reducer;
