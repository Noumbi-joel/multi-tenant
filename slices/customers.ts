import { CUSTOMERS_SORT } from "@/constants";
import { sortCustomerByDate } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

type values = {
  customers: ICustomer[];
  filteredCustomers: ICustomer[];
  nothingFound: boolean;
  sortBy: string;
};

const initialState: values = {
  customers: [],
  filteredCustomers: [],
  nothingFound: false,
  sortBy: "",
};

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    setCustomers: (state, action) => {
      state.customers = action.payload;
    },
    setFilteredCustomers: (state, action) => {
      state.filteredCustomers = action.payload;
    },
    setNothingFound: (state, action) => {
      state.nothingFound = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
      switch (state.sortBy) {
        case CUSTOMERS_SORT[0]:
          state.filteredCustomers =
            state.filteredCustomers.sort(sortCustomerByDate);
          break;

        case CUSTOMERS_SORT[1]:
          state.filteredCustomers = state.filteredCustomers.sort(
            (a, b) => a.totalSpent - b.totalSpent
          );
          break;

        case CUSTOMERS_SORT[2]:
          state.filteredCustomers = state.filteredCustomers.sort(
            (a, b) => b.totalSpent - a.totalSpent
          );
          break;

        default:
          break;
      }
    },
  },
});

export const {
  setCustomers,
  setNothingFound,
  setFilteredCustomers,
  setSortBy,
} = customersSlice.actions;

export default customersSlice.reducer;
