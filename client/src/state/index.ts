import { MenuItem } from "@/types/prismaTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FiltersState {
  categories: string[];
  priceRange: [number, number] | [null, null];
}

export interface ShoppingCartItem extends MenuItem {
  quantity: number;
}

interface InitialStateTypes {
  filters: FiltersState;
  isFiltersFullOpen: boolean;
  shoppingCart: ShoppingCartItem[];
}

export const initialState: InitialStateTypes = {
  filters: {
    categories: [],
    priceRange: [null, null],
  },
  isFiltersFullOpen: false,
  shoppingCart: [],
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<FiltersState>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    toggleFiltersFullOpen: (state) => {
      state.isFiltersFullOpen = !state.isFiltersFullOpen;
    },
    // Shopping cart functions
    addItemToShoppingCart: (state, action: PayloadAction<MenuItem>) => {
      const existingItem = state.shoppingCart.find(
        (item: any) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.shoppingCart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItemFromShoppingCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const index = state.shoppingCart.findIndex(
        (item: any) => item.id === itemId
      );

      if (index !== -1) {
        const item = state.shoppingCart[index];
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.shoppingCart.splice(index, 1);
        }
      }
    },
    clearItemFromShoppingCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.shoppingCart = state.shoppingCart.filter(
        (item: any) => item.id !== itemId
      );
    },
    clearShoppingCart: (state) => {
      state.shoppingCart = [];
    },
  },
});

export const {
  setFilters,
  toggleFiltersFullOpen,
  addItemToShoppingCart,
  removeItemFromShoppingCart,
  clearItemFromShoppingCart,
  clearShoppingCart,
} = globalSlice.actions;

export default globalSlice.reducer;
