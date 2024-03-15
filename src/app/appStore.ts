import { configureStore } from '@reduxjs/toolkit'

import { cartReducer } from '@/entities/cart'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})
