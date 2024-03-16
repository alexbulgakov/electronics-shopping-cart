import { useEffect, useState } from 'react'

import { DeleteIcon } from '@chakra-ui/icons'
import { Flex, IconButton } from '@chakra-ui/react'

import { useAppDispatch } from '@/app/hooks.ts'
import { removeProduct } from '@/entities/cart/model/slice.ts'
import { CartProductMeta, type ProductDescription, type Product } from '@/entities/product'
import { ChangeQuantity } from '@/features/product/changeQuantity'
import { api } from '@/shared/api'
import { PriceTag } from '@/shared/lib/PriceTag.tsx'

export const CartItem = (props: Product) => {
  const { id, title, quantity, thumbnail, price } = props
  const [description, setDescription] = useState<string>()
  const dispatch = useAppDispatch()

  const handleRemoveProduct = () => {
    dispatch(removeProduct(id))
  }

  useEffect(() => {
    api.getItems<ProductDescription>(`products/${id}?select=description`).then(product => {
      setDescription(product.description)
    })
  }, [])

  return (
    <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
      <CartProductMeta description={`${description} ? ${description}: ''`} name={title} image={thumbnail} />

      {/* Desktop */}
      <Flex width="full" justify="space-between" display={{ base: 'none', md: 'flex' }}>
        <ChangeQuantity id={id} value={quantity} />
        <PriceTag price={price * quantity} currency={'USD'} />
        <IconButton onClick={handleRemoveProduct} icon={<DeleteIcon />} aria-label={`Delete ${title} from cart`} />
      </Flex>

      {/* Mobile */}
      <Flex mt="4" align="center" width="full" justify="space-between" display={{ base: 'flex', md: 'none' }}>
        <IconButton onClick={handleRemoveProduct} icon={<DeleteIcon />} aria-label={`Delete ${title} from cart`} />
        <ChangeQuantity id={id} value={quantity} />
        <PriceTag price={price * quantity} currency={'USD'} />
      </Flex>
    </Flex>
  )
}
