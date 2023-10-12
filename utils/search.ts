import { setFilteredCategories, setNothingCategoryFound } from "@/slices/categories";
import { setFilteredCustomers, setNothingFound } from "@/slices/customers";
import { setFilteredOrders, setOrdersNothingFound } from "@/slices/orders";
import { setFilteredProducts, setNothingProductFound } from "@/slices/products";
import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";

export const searchCustomerName = (
    e: React.ChangeEvent<HTMLInputElement>,
    items: ICustomer[],
    filteredItems: ICustomer[],
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    dispatch: Dispatch<AnyAction>
  ) => {
    const value = e.target.value;
  
    if (value) {
      const newData = filteredItems.filter((item: ICustomer) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        return itemData.indexOf(value.toUpperCase()) > -1;
      });
      if (newData.length !== 0) {
        dispatch(setNothingFound(false));
        dispatch(setFilteredCustomers(newData));
      } else {
        dispatch(setNothingFound(true));
      }
    } else {
      dispatch(setFilteredCustomers(items));
      dispatch(setNothingFound(false));
    }
    setSearch(value);
  };
  
  export const searchOrderName = (
    e: React.ChangeEvent<HTMLInputElement>,
    items: IOrder[],
    filteredItems: IOrder[],
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    dispatch: Dispatch<AnyAction>
  ) => {
    const value = e.target.value;
  
    if (value) {
      const newData = filteredItems.filter((item: IOrder) => {
        const itemData = item.contactDetails.fullName
          ? item.contactDetails.fullName.toUpperCase()
          : "".toUpperCase();
        return itemData.indexOf(value.toUpperCase()) > -1;
      });
      if (newData.length !== 0) {
        dispatch(setOrdersNothingFound(false));
        dispatch(setFilteredOrders(newData));
      } else {
        dispatch(setOrdersNothingFound(true));
      }
    } else {
      dispatch(setFilteredOrders(items));
      dispatch(setOrdersNothingFound(false));
    }
    setSearch(value);
  };
  
export const searchCategoryName = (
    e: React.ChangeEvent<HTMLInputElement>,
    items: ICategory[],
    filteredItems: ICategory[],
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    dispatch: Dispatch<AnyAction>
  ) => {
    const value = e.target.value;
  
    if (value) {
      const newData = filteredItems.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        return itemData.indexOf(value.toUpperCase()) > -1;
      });
      if (newData.length !== 0) {
        dispatch(setNothingCategoryFound(false));
        dispatch(setFilteredCategories(newData));
      } else {
        dispatch(setNothingCategoryFound(true));
      }
    } else {
      dispatch(setFilteredCategories(items));
      dispatch(setNothingCategoryFound(false));
    }
    setSearch(value);
  };
  
  export const searchProductName = (
    e: React.ChangeEvent<HTMLInputElement>,
    items: IProduct[],
    filteredItems: IProduct[],
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    dispatch: Dispatch<AnyAction>
  ) => {
    const value = e.target.value;
  
    if (value) {
      const newData = filteredItems.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        return itemData.indexOf(value.toUpperCase()) > -1;
      });
      if (newData.length !== 0) {
        dispatch(setNothingProductFound(false));
        dispatch(setFilteredProducts(newData));
      } else {
        dispatch(setNothingProductFound(true));
      }
    } else {
      dispatch(setFilteredProducts(items));
      dispatch(setNothingProductFound(false));
    }
    setSearch(value);
  };