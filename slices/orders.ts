import { ORDERS_FILTERS, ORDERS_SORT } from "@/constants";
import { sortOrderByDate } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

type Values = {
  orders: IOrder[];
  filteredOrders: IOrder[];
  nothingFound: boolean;
  sortBy: string;
  filterBy: string;
};

const initialState: Values = {
  orders: [],
  filteredOrders: [],
  sortBy: "",
  nothingFound: false,
  filterBy: "",
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setFilteredOrders: (state, action) => {
      state.filteredOrders = action.payload;
    },
    setOrdersNothingFound: (state, action) => {
      state.nothingFound = action.payload;
    },
    setSortOrderBy: (state, action) => {
      state.sortBy = action.payload;
      switch (state.sortBy) {
        case ORDERS_SORT[0]:
          state.filteredOrders = state.filteredOrders.sort(sortOrderByDate);
          break;

        case ORDERS_SORT[1]:
          state.filteredOrders = state.filteredOrders.sort(
            (a, b) => parseInt(b.totalPrice) - parseInt(a.totalPrice)
          );
          break;

        default:
          break;
      }
    },
    setFilterOrderBy: (state, action) => {
      state.filterBy = action.payload;
      switch (state.filterBy) {
        case ORDERS_FILTERS[0]:
          state.nothingFound = false;
          state.filteredOrders = state.orders;
          break;

        case ORDERS_FILTERS[1]:
          state.filteredOrders = state.orders.filter(
            (cat) => cat.status === ORDERS_FILTERS[1]
          );
          if (state.filteredOrders.length <= 0) {
            state.nothingFound = true;
            state.filteredOrders = state.orders;
          } else {
            state.nothingFound = false;
          }
          break;

        case ORDERS_FILTERS[2]:
          state.filteredOrders = state.orders.filter(
            (cat) => cat.status === ORDERS_FILTERS[2]
          );
          if (state.filteredOrders.length <= 0) {
            state.nothingFound = true;
            state.filteredOrders = state.orders;
          } else {
            state.nothingFound = false;
          }
          break;

        case ORDERS_FILTERS[3]:
          state.filteredOrders = state.orders.filter(
            (cat) => cat.status === ORDERS_FILTERS[3]
          );
          if (state.filteredOrders.length <= 0) {
            state.nothingFound = true;
            state.filteredOrders = state.orders;
          } else {
            state.nothingFound = false;
          }
          break;

        default:
          break;
      }
    },
  },
});

export const {
  setOrders,
  setFilteredOrders,
  setOrdersNothingFound,
  setSortOrderBy,
  setFilterOrderBy,
} = ordersSlice.actions;

export default ordersSlice.reducer;
