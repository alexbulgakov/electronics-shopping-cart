import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Flex, IconButton, Text } from '@chakra-ui/react'

import { useAppDispatch } from '@/app/hooks.ts'
import { updateProductQuantity } from '@/entities/cart/model/slice.ts'

export function ChangeQuantity({ value, id }: { value: number; id: number }) {
  const dispatch = useAppDispatch()
  const handleIncreaseQuantity = () => {
    dispatch(updateProductQuantity({ productId: id, type: 'increase' }))
  }

  const handleDecreaseQuantity = () => {
    dispatch(updateProductQuantity({ productId: id, type: 'decrease' }))
  }

  return (
    <Flex ml="5" alignItems="center" gap="2">
      <IconButton onClick={handleDecreaseQuantity} size="sm" aria-label="Select quantity" icon={<MinusIcon />} />
      <Text>{value}</Text>
      <IconButton onClick={handleIncreaseQuantity} size="sm" aria-label="Select quantity" icon={<AddIcon />} />
    </Flex>
  )
}
