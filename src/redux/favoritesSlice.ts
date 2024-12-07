import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface favoritesStateType {
  favoritesIds: number[];
}

const initialState: favoritesStateType = {
  favoritesIds: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialState,
  reducers: {
    setFavorites: (state, action: PayloadAction<number[]>) => {
      state.favoritesIds = action.payload;
    },
    // addToFavorites: (state, action: PayloadAction<number>) => {
    //   const newFavoritesIds = [...state.favoritesIds, action.payload];
    //   state.favoritesIds = newFavoritesIds;
    // },
    // removeFromFavorites: (state, action: PayloadAction<number>) => {
    //   const newFavoritesIds = state.favoritesIds.filter(
    //     favoriteId => favoriteId !== action.payload,
    //   );
    //   state.favoritesIds = newFavoritesIds;
    // },
  },
});

export const {
  // addToFavorites,
  // removeFromFavorites,
  setFavorites,
} = favoritesSlice.actions;
