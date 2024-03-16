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
    removeProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter(product => product.id !== action.payload)
      state.totalProducts = state.products.length
      state.totalQuantity = state.products.reduce((total, product) => total + product.quantity, 0)
      state.total = state.products.reduce((total, product) => total + product.price * product.quantity, 0)
      state.discountedTotal = state.products.reduce(
        (total, product) => total + product.discountedPrice * product.quantity,
        0,
      )
    },
    updateProductQuantity(state, action: PayloadAction<{ productId: number; type: 'increase' | 'decrease' }>) {
      const { productId, type } = action.payload
      const productIndex = state.products.findIndex(product => product.id === productId)

      if (productIndex >= 0) {
        const product = state.products[productIndex]
        const newQuantity = type === 'increase' ? Math.min(product.quantity + 1, 10) : Math.max(product.quantity - 1, 1)
        state.products[productIndex] = { ...product, quantity: newQuantity }

        state.totalQuantity = state.products.reduce((total, product) => total + product.quantity, 0)

        state.total = state.products.reduce((total, product) => total + product.price * product.quantity, 0)
      }
    },
  },
})

export const { recievedState, removeProduct, updateProductQuantity } = cartSlice.actions
export const cartReducer = cartSlice.reducer
