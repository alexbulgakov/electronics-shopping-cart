import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Flex, IconButton, Text } from '@chakra-ui/react'

export function ChangeQuantity({ value }: { value: number }) {
  return (
    <Flex ml="5" alignItems="center" gap="2">
      <IconButton size="sm" aria-label="Select quantity" icon={<MinusIcon />} />
      <Text>{value}</Text>
      <IconButton size="sm" aria-label="Select quantity" icon={<AddIcon />} />
    </Flex>
  )
}
