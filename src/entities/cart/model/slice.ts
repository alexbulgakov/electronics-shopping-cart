import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { type CartType } from './types.ts'

const initialState: CartType = {
  id: 0,
  total: 0,
  discountedTotal: 0,
  userId: 0,
  totalProducts: 0,
  totalQuantity: 0,
  products: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    recievedState(state, action: PayloadAction<CartType>) {
      return action.payload
    },
  },
})

export const { recievedState } = cartSlice.actions
export const cartReducer = cartSlice.reducer
