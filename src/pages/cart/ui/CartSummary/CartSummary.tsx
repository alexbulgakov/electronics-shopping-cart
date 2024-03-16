import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'

import { PriceTag } from '@/shared/lib'

export const CartSummary = ({ total }: { total: number }) => {
  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Оформление заказа</Heading>

      <Stack spacing="6">
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Итого
          </Text>
          <PriceTag price={total} currency={'USD'} />
        </Flex>
      </Stack>
      <Button isDisabled={true} colorScheme="green" size="lg" fontSize="md">
        Оформить заказ
      </Button>
    </Stack>
  )
}
