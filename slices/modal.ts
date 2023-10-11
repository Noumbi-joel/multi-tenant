import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isGoingBack: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsGoingBack: (state, action) => {
      state.isGoingBack = action.payload;
    },
  },
});

export const { setIsGoingBack } = modalSlice.actions;

export default modalSlice.reducer;
