'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    id: string;
    title: string;
    description: string;
    // image: {
    //     asset: {
    //       _ref: string;
    //       _type: string;
    //       url: string;
    //     };
    //   };
    image: string; // Change this to accept just the URL string
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart: (state, action: PayloadAction<CartItem>) => {
            console.log('Adding to cart:', action.payload); // Debug log
            state.items.push(action.payload);
        },
        remove: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addtoCart, remove } = cartSlice.actions;
export default cartSlice.reducer;