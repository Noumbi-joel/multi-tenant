import { createSlice } from "@reduxjs/toolkit";

type values = {
  settings: {
    legal: ILegal | null;
    general: ISettingsGeneral | null;
    socialProfiles: ISocialProfile | null;
  };
  favicon: { url: ""; name: "" };
  logo: { url: ""; name: "" };
  bannerImage: { url: ""; name: "" };
  drawer: boolean;
  menuDrawer: boolean;
  cartDrawer: boolean;
  filtersDrawer: boolean;
  store: IStore | null;
};

const initialState: values = {
  store: null,
  settings: {
    legal: null,
    general: null,
    socialProfiles: null,
  },
  favicon: {
    url: "",
    name: "",
  },
  logo: {
    url: "",
    name: "",
  },
  bannerImage: {
    url: "",
    name: "",
  },
  drawer: false,
  cartDrawer: false,
  menuDrawer: false,
  filtersDrawer: false,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setStore: (state, action) => {
      state.store = action.payload;
    },
    setFavicon: (state, action) => {
      state.favicon.url = action.payload.url;
      state.favicon.name = action.payload.name;
    },
    removeFavicon: (state, action) => {
      state.favicon.name = "";
      state.favicon.url = "";
    },
    setLogo: (state, action) => {
      state.logo.url = action.payload.url;
      state.logo.name = action.payload.name;
    },
    removeLogo: (state, action) => {
      state.logo.name = "";
      state.logo.url = "";
    },
    setBannerImage: (state, action) => {
      state.bannerImage.url = action.payload.url;
      state.bannerImage.name = action.payload.name;
    },
    removeBannerImage: (state, action) => {
      state.bannerImage.name = "";
      state.bannerImage.url = "";
    },
    setSettingsGeneral: (state, action) => {
      state.settings.general = action.payload;
    },
    setSettingsLegal: (state, action) => {
      state.settings.legal = action.payload;
    },
    setSettingsSocialProfiles: (state, action) => {
      state.settings.socialProfiles = action.payload;
    },
    setDrawer: (state, action) => {
      state.drawer = !state.drawer;
    },
    setMenuDrawer: (state, action) => {
      state.menuDrawer = !state.menuDrawer;
    },
    setCartDrawer: (state, action) => {
      state.cartDrawer = !state.cartDrawer;
    },
    setFiltersDrawer: (state, action) => {
      state.filtersDrawer = !state.filtersDrawer;
    },
  },
});

export const {
  removeFavicon,
  removeLogo,
  removeBannerImage,
  setFavicon,
  setLogo,
  setBannerImage,
  setSettingsGeneral,
  setSettingsLegal,
  setSettingsSocialProfiles,
  setDrawer,
  setCartDrawer,
  setMenuDrawer,
  setFiltersDrawer,
  setStore
} = settingsSlice.actions;

export default settingsSlice.reducer;
