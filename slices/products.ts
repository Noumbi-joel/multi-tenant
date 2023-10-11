import { FILTERS, SF_PRICES, SF_SORT, UPDATES } from "@/constants";
import {
  sortProductsByDate,
  sortProductsByInventory,
  sortProductsByName,
  sortProductsByPriceAsc,
  sortProductsByPriceDesc,
  sortProductsByPurchaseNumber,
} from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

type values = {
  products: IProduct[];
  filteredProducts: IProduct[];
  imageFour: "";
  imageOne: "";
  imageThree: "";
  imageTwo: "";
  tags: string[];
  extras: string[];
  sortBy: string;
  nothingFound: boolean;
  isEditing: boolean;
  selectAllProd: boolean;
  filterBy: string;
  editableProduct: ICreateProduct | null;
  filterProductByCategory: string;
  filterProductByPrice: string;
  sortProductBy: string;
};

const initialState: values = {
  products: [],
  filteredProducts: [],
  imageFour: "",
  imageOne: "",
  imageThree: "",
  imageTwo: "",
  extras: [],
  tags: [],
  sortBy: "",
  filterBy: "",
  filterProductByCategory: "",
  filterProductByPrice: "",
  sortProductBy: "",
  nothingFound: false,
  isEditing: false,
  selectAllProd: false,
  editableProduct: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    saveProdImageOne: (state, action) => {
      state.imageOne = action.payload;
    },
    saveProdImageTwo: (state, action) => {
      state.imageTwo = action.payload;
    },
    saveProdImageThree: (state, action) => {
      state.imageThree = action.payload;
    },
    saveProdImageFour: (state, action) => {
      state.imageFour = action.payload;
    },
    removeProdImageOne: (state, action) => {
      state.imageOne = "";
    },
    removeProdImageTwo: (state, action) => {
      state.imageTwo = "";
    },
    removeProdImageThree: (state, action) => {
      state.imageThree = "";
    },
    removeProdImageFour: (state, action) => {
      state.imageFour = "";
    },
    clearProduct: (state, action) => {
      state.imageOne = "";
      state.imageTwo = "";
      state.imageThree = "";
      state.imageFour = "";
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
    setProdExtra: (state, action) => {
      state.extras = [...state.extras, action.payload];
    },
    setProdTag: (state, action) => {
      state.tags = [...state.tags, "#" + action.payload];
    },
    setProdTags: (state, action) => {
      state.tags = action.payload;
    },
    setProdExtras: (state, action) => {
      state.extras = action.payload;
    },
    removeProdTag: (state, action) => {
      state.tags = state.tags.filter((tag) => tag !== action.payload);
    },
    removeProdExtra: (state, action) => {
      state.extras = state.extras.filter((extra) => extra !== action.payload);
    },
    clearProdTags: (state, action) => {
      state.tags = [];
    },
    clearProdExtras: (state, action) => {
      state.extras = [];
    },
    setNothingProductFound: (state, action) => {
      state.nothingFound = action.payload;
    },

    setSortProductBy: (state, action) => {
      state.sortBy = action.payload;
      switch (state.sortBy) {
        case UPDATES[0]:
          state.filteredProducts = state.products.sort(sortProductsByDate);
          break;

        case UPDATES[1]:
          state.filteredProducts = state.products.sort(sortProductsByName);
          break;

        case UPDATES[2]:
          state.filteredProducts = state.products.sort(sortProductsByInventory);
          break;

        default:
          break;
      }
    },

    setFilterProductBy: (state, action) => {
      state.filterBy = action.payload;
      switch (state.filterBy) {
        case FILTERS[0]:
          state.nothingFound = false;
          state.filteredProducts = state.products;
          break;

        case FILTERS[1]:
          state.filteredProducts = state.products.filter(
            (cat) => cat.status === FILTERS[1]
          );
          if (state.filteredProducts.length <= 0) {
            state.nothingFound = true;
            state.filteredProducts = state.products;
          } else {
            state.nothingFound = false;
          }
          break;

        case FILTERS[2]:
          state.filteredProducts = state.products.filter(
            (cat) => cat.status === FILTERS[2]
          );
          if (state.filteredProducts.length <= 0) {
            state.nothingFound = true;
            state.filteredProducts = state.products;
          } else {
            state.nothingFound = false;
          }
          break;

        case FILTERS[3]:
          state.filteredProducts = state.products.filter(
            (cat) => cat.status === FILTERS[3]
          );
          if (state.filteredProducts.length <= 0) {
            state.nothingFound = true;
            state.filteredProducts = state.products;
          } else {
            state.nothingFound = false;
          }
          break;

        default:
          break;
      }
    },

    deleteProduct: (state, action) => {
      state.filteredProducts = state.filteredProducts.filter(
        (prod) => prod.id !== action.payload
      );
    },
    selectProduct: (state, action) => {
      state.filteredProducts.forEach((prod) => {
        if (prod.id === action.payload) {
          prod.isEditing = !prod.isEditing;
        }
      });
    },
    selectAllProducts: (state, action) => {
      state.selectAllProd = action.payload;
      state.filteredProducts.forEach((category) => {
        category.selected = action.payload;
      });
    },

    clearAllProducts: (state, action) => {
      state.selectAllProd = false;
      state.filteredProducts.forEach((category) => {
        category.selected = false;
      });
    },
    deleteAllProducts: (state, action) => {
      state.filteredProducts = [];
      state.selectAllProd = false;
    },

    setEditableProduct: (state, action) => {
      state.editableProduct = action.payload;
      state.isEditing = true;
    },

    clearEditableProduct: (state, action) => {
      state.isEditing = false;
      state.imageFour = "";
      state.imageOne = "";
      state.imageThree = "";
      state.imageTwo = "";
      state.tags = [];
      state.editableProduct = null;
    },
    setFilterByCategory: (state, action) => {
      state.filterProductByCategory = action.payload;
      state.filteredProducts = state.products.filter(
        (p) => p.category === action.payload
      );
    },

    setFilterByPrice: (state, action) => {
      state.filterProductByPrice = action.payload;
      switch (action.payload) {
        case SF_PRICES[0]:
          state.filteredProducts = state.products.sort(sortProductsByPriceAsc);
          break;
        case SF_PRICES[1]:
          state.filteredProducts = state.products.sort(sortProductsByPriceDesc);
          break;
        default:
          state.filteredProducts = state.products;
          break;
      }
    },

    setSortProductStoreBy: (state, action) => {
      state.sortProductBy = action.payload;
      switch (action.payload) {
        case SF_SORT[0]:
          state.filteredProducts = state.products.sort(sortProductsByDate);
          break;
        case SF_SORT[1]:
          state.filteredProducts = state.products.sort(
            sortProductsByPurchaseNumber
          );
          break;
        default:
          state.filteredProducts = state.products;
          break;
      }
    },

    setResetProductFiltering: (state, action) => {
      state.filterProductByCategory = "";
      state.filterProductByPrice = "";
      state.sortProductBy = "";
      state.filteredProducts = state.products;
    },
  },
});

export const {
  setProducts,
  setFilteredProducts,
  setProdTag,
  removeProdTag,
  clearProdTags,
  setFilterProductBy,
  setSortProductBy,
  setNothingProductFound,
  clearAllProducts,
  deleteAllProducts,
  deleteProduct,
  selectAllProducts,
  selectProduct,
  setEditableProduct,
  setProdTags,
  clearEditableProduct,
  saveProdImageOne,
  removeProdImageFour,
  removeProdImageOne,
  removeProdImageThree,
  removeProdImageTwo,
  saveProdImageFour,
  saveProdImageThree,
  saveProdImageTwo,
  clearProduct,
  setFilterByCategory,
  setResetProductFiltering,
  setFilterByPrice,
  setSortProductStoreBy,
  setProdExtra,
  removeProdExtra,
  clearProdExtras,
  setProdExtras
} = productsSlice.actions;

export default productsSlice.reducer;
