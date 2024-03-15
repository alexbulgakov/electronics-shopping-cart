import { Stack } from '@chakra-ui/react'

import { Product } from '@/entities/product'
import { CartItem } from '@/widgets/CartItem/CartItem'

export function CartProductList({ products }: { products: Product[] }) {
  return <Stack spacing="6">{products && products.map(product => <CartItem key={product.id} {...product} />)}</Stack>
}
