import { FILTERS_CAT, UPDATES_CAT } from "@/constants";
import { sortCategoriesByDate, sortCategoriesByName } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

type values = {
  categories: ICategory[];
  filteredCategories: ICategory[];
  image: {
    src: string;
    name: string;
  };
  nothingFound: boolean;
  filterBy: string;
  sortBy: string;
  selectAllCat: boolean;
  editableCategory: ICreateCategory;
  isEditing: boolean;
};

const initialState: values = {
  categories: [],
  filteredCategories: [],
  image: {
    src: "",
    name: "",
  },
  nothingFound: false,
  filterBy: "",
  sortBy: "",
  selectAllCat: false,
  editableCategory: {
    id: "",
    items: "",
    name: "",
    image: "",
    status: "",
    description: "",
    createdAt: "",
    updatedAt: ""
  },
  isEditing: false,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategoryImage: (state, action) => {
      state.image.name = action.payload.name;
      state.image.src = action.payload.src;
    },
    setCategorySrc: (state, action) => {
      state.image.src = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setFilteredCategories: (state, action) => {
      state.filteredCategories = action.payload;
    },
    clearImageCategory: (state, action) => {
      state.image.name = "";
      state.image.src = "";
    },
    setNothingCategoryFound: (state, action) => {
      state.nothingFound = action.payload;
    },
    setSortCategoryBy: (state, action) => {
      state.sortBy = action.payload;
      switch (state.sortBy) {
        case UPDATES_CAT[0]:
          state.filteredCategories =
            state.categories.sort(sortCategoriesByDate);
          break;

        case UPDATES_CAT[1]:
          state.filteredCategories =
            state.categories.sort(sortCategoriesByName);
          break;

        default:
          break;
      }
    },
    setFilterCategoryBy: (state, action) => {
      state.filterBy = action.payload;
      switch (state.filterBy) {
        case FILTERS_CAT[0]:
          state.nothingFound = false;
          state.filteredCategories = state.categories;
          break;

        case FILTERS_CAT[1]:
          state.filteredCategories = state.categories.filter(
            (cat) => cat.status === FILTERS_CAT[1]
          );
          if (state.filteredCategories.length <= 0) {
            state.nothingFound = true;
            state.filteredCategories = state.categories;
          } else {
            state.nothingFound = false;
          }
          break;

        case FILTERS_CAT[2]:
          state.filteredCategories = state.categories.filter(
            (cat) => cat.status === FILTERS_CAT[2]
          );
          if (state.filteredCategories.length <= 0) {
            state.nothingFound = true;
            state.filteredCategories = state.categories;
          } else {
            state.nothingFound = false;
          }
          break;

        default:
          break;
      }
    },

    setEditableCategory: (state, action) => {
      state.editableCategory = action.payload;
      state.isEditing = true;
      state.image = {
        name: "firebaseEditCategoryImage",
        src: action.payload.image,
      };
    },

    deleteCategory: (state, action) => {
      state.filteredCategories = state.filteredCategories.filter(
        (cat) => cat.id !== action.payload
      );
    },
    selectCategory: (state, action) => {
      state.filteredCategories.forEach((category) => {
        if (category.id === action.payload) {
          category.isEditing = !category.isEditing;
        }
      });
    },
    selectAllCategories: (state, action) => {
      state.selectAllCat = action.payload;
      state.filteredCategories.forEach((category) => {
        category.selected = action.payload;
      });
    },

    clearAllCategories: (state, action) => {
      state.selectAllCat = false;
      state.filteredCategories.forEach((category) => {
        category.selected = false;
      });
    },
    deleteAllCategories: (state, action) => {
      state.filteredCategories = [];
      state.selectAllCat = false;
    },
    clearEditableCategory: (state, action) => {
      state.isEditing = false;
      state.editableCategory = {
        id: "",
        items: "",
        name: "",
        image: "",
        status: "",
        description: "",
        createdAt: "",
        updatedAt: ""
      };
    },
  },
});

export const {
  setCategoryImage,
  setCategories,
  clearImageCategory,
  setCategorySrc,
  setFilteredCategories,
  setNothingCategoryFound,
  setSortCategoryBy,
  setFilterCategoryBy,
  selectAllCategories,
  deleteAllCategories,
  clearAllCategories,
  selectCategory,
  deleteCategory,
  setEditableCategory,
  clearEditableCategory
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
