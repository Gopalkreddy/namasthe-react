import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
  name: 'cart2',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
        // mutating the state
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items = state.items.pop();
    },
    clearCart: (state) => {
      state.items.length =0;
    },
  

    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

// when we call createSlice, it returns an object with a reducer and actions
// we can destructure them and export them  as named exports
/*
{
    actions: { addItem, removeItem, clearCart },
    reducer: cardSlice.reducer,
}
*/
export const { addItem, removeItem, clearCart} = cardSlice.actions;

export default cardSlice.reducer;