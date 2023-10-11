import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photoUrl: {
    url: "",
    name: "",
  },
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileImage: (state, action) => {
      state.photoUrl.url = action.payload.url;
      state.photoUrl.name = action.payload.name;
    },
    removeProfileImage: (state, action) => {
      state.photoUrl.name = "";
      state.photoUrl.url = "";
    },
  },
});

export const { setProfileImage, removeProfileImage } = profileSlice.actions;

export default profileSlice.reducer;
