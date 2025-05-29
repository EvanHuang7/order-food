import { MenuItem } from "@/types/prismaTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FiltersState {
  categories: string[];
  priceRange: [number, number] | [null, null];
}

export interface ShoppingCartItem extends MenuItem {
  quantity: number;
  restaurantName?: string;
}

interface InitialStateTypes {
  filters: FiltersState;
  shoppingCart: ShoppingCartItem[];
}

export const initialState: InitialStateTypes = {
  filters: {
    categories: [],
    priceRange: [null, null],
  },
  shoppingCart: [],
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<FiltersState>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    // Shopping cart functions
    addItemToShoppingCart: (
      state,
      action: PayloadAction<{ menuItem: MenuItem; restaurantName?: string }>
    ) => {
      const { menuItem, restaurantName } = action.payload;

      const existingItem = state.shoppingCart.find(
        (item: any) => item.id === menuItem.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.shoppingCart.push({ ...menuItem, quantity: 1, restaurantName });
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
  addItemToShoppingCart,
  removeItemFromShoppingCart,
  clearItemFromShoppingCart,
  clearShoppingCart,
} = globalSlice.actions;

export default globalSlice.reducer;
