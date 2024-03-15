import { useEffect, useState } from 'react'

import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Flex, Heading, Spinner, Stack } from '@chakra-ui/react'

import { CartProductList } from '../CartProductList/CartProductList.tsx'
import { CartSummary } from '../CartSummary/CartSummary.tsx'

import { CartType, getRandomCartId } from '@/entities/cart'
import { api } from '@/shared/api'

export const Page = () => {
  const [cart, setCart] = useState<CartType>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const cartId = getRandomCartId()

  useEffect(() => {
    setLoading(true)
    api
      .getItems<CartType>(`carts/${cartId}`)
      .then(cart => {
        setCart(cart)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <Box h="100vh" w="100vw" display="flex" justifyContent="center" alignItems="center">
        <Spinner size="xl" />
      </Box>
    )
  }

  if (error) {
    return (
      <Box h="100vh" w="100vw" display="flex" justifyContent="center" alignItems="center">
        <Alert maxW="50%" status="error">
          <AlertIcon />
          <AlertTitle>Произошла ошибка - </AlertTitle>
          <AlertDescription>попробуйте позже</AlertDescription>
        </Alert>
      </Box>
    )
  }

  return (
    <Box
      maxW={{ base: '3xl', lg: '7xl' }}
      mx="auto"
      px={{ base: '4', md: '8', lg: '12' }}
      py={{ base: '6', md: '8', lg: '12' }}>
      {cart ? (
        <Stack direction={{ base: 'column', lg: 'row' }} align={{ lg: 'flex-start' }} spacing={{ base: '8', md: '16' }}>
          <Stack spacing={{ base: '8', md: '10' }} flex="3">
            <Heading fontSize="2xl" fontWeight="extrabold">
              Ваша корзина {`(${cart?.products.length} товаров)`}
            </Heading>
            <CartProductList products={cart.products} />
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <CartSummary total={cart.total} discountedTotal={cart.discountedTotal} />
          </Flex>
        </Stack>
      ) : (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Корзина не загрузилась - </AlertTitle>
          <AlertDescription>попробуйте позже</AlertDescription>
        </Alert>
      )}
    </Box>
  )
}
