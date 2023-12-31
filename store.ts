import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/products";
import profileReducer from "./slices/profile";
import settingsReducer from "./slices/settings";
import categoriesReducer from "./slices/categories";
import customersReducer from "./slices/customers";
import cartReducer from "./slices/cart";
import orderReducer from "./slices/orders";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    profile: profileReducer,
    settings: settingsReducer,
    customers: customersReducer,
    cart: cartReducer,
    orders: orderReducer,
  },
});
