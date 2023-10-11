import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

type values = {
  qty: number;
  cartItems: ICart[];
  totalQuantities: number;
  totalPrice: number;
  extras: string[];
  extra: string;
};

const initialState: values = {
  qty: 1,
  cartItems: [],
  totalQuantities: 0,
  totalPrice: 0,
  extras: [],
  extra: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartQty: (state, action) => {
      state.qty = action.payload;
    },
    setCartExtra: (state, action) => {
      state.extra = action.payload;
    },
    addToCart: (state, action) => {
      const foundProduct = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      const index = state.cartItems.findIndex(
        (prod) => prod.id === action.payload.id
      );
      state.totalPrice += action.payload.price * state.qty;
      state.totalQuantities += state.qty;
      if (foundProduct) {
        foundProduct.extras = [...foundProduct.extras!, state.qty + '/' + state.extra];
        foundProduct.quantity += state.qty;
        state.cartItems[index] = foundProduct;
        toast.success(`${state.qty} ${foundProduct.name} updated in the cart`);
      } else {
        state.extras = [...state.extras!, state.qty + '/' + state.extra];
        action.payload.extras = state.extras;
        action.payload.quantity = state.qty;
        state.cartItems = [...state.cartItems, action.payload];
        toast.success(`${state.qty} ${action.payload.name} added to the cart`);
      }
      state.qty = 1;
      state.extras = [];
    },
    removeToCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.totalPrice -= action.payload.quantity * action.payload.price;
      state.totalQuantities -= action.payload.quantity;
    },
    clearCart: (state) => {
      state.qty = 1;
      state.cartItems = [];
      state.totalQuantities = 0;
      state.totalPrice = 0;
      state.extras = [];
      state.extra = "";
    },
  },
});

export const {
  addToCart,
  setCartQty,
  setCartExtra,
  removeToCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
