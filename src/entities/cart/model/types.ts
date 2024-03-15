import { type Product } from '@/entities/product/@x/cart'

export interface CartType {
  id: number
  total: number
  discountedTotal: number
  userId: number
  totalProducts: number
  totalQuantity: number
  products: Product[]
}
