// 'use client';

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// // Define the type for a cart item
// interface CartItem {
//   id: string; // Assuming the item has an `id` of type string
//   name: string; // Example property for the item's name
//   price: number; // Example property for the item's price
// }

// // Define the initial state type as an array of `CartItem`
// const initialState: CartItem[] = [];

// const cartSlice = createSlice({
//   name: 'Cart',
//   initialState,
//   reducers: {
//     // Add to cart with a properly typed action payload
//     addtoCart(state, action: PayloadAction<CartItem>) {
//       state.push(action.payload);
//     },
//     // Remove from cart using the `id` property
//     remove(state, action: PayloadAction<string>) {
//       return state.filter((item) => item.id !== action.payload);
//     },
//   },
// });

// export const { addtoCart, remove } = cartSlice.actions;
// export default cartSlice.reducer;


'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    id: string;
    title: string;
    description: string;
    image: string;
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