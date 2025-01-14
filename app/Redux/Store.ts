// import { configureStore} from '@reduxjs/toolkit';
// import CartSlice from './CartSlice'

// const store = configureStore({
//     reducer:{
//         cart:CartSlice,
//     }
// })

// export default store;
'use client';

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    devTools: true  // Enable Redux DevTools
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;