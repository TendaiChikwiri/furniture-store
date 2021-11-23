import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Heading,
  Container,
  Flex,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";
const Checkout = ({ cart, addToCart, reduceFromCart, deleteFromCart }) => {
  const cartTotalCost = (total, item) => total + item.count * item.price;
  const subTotal = cart.reduce(cartTotalCost, 0).toFixed(2);
  const deliveryFee = (cart.reduce(cartTotalCost, 0) * 0.02).toFixed(2);
  const total = (parseInt(subTotal) + parseFloat(deliveryFee)).toFixed(2);
  return (
    <Container maxWidth="container.sm">
      <Heading size="lg">Payment Details</Heading>
      <VStack spacing={2} mt="10">
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="card-details">
          <FormLabel>Card Number</FormLabel>
          <Input type="number" />
          <FormHelperText>Please don't enter your card number</FormHelperText>
        </FormControl>
        <Flex justify="flex-end" width="100%">
          <FormControl id="expiry">
            <FormLabel>Expiry Date</FormLabel>
            <Input type="date" />
          </FormControl>
          <FormControl width="20ch" id="cvc">
            <FormLabel>CVC</FormLabel>
            <Input type="number" max="999" />
          </FormControl>
        </Flex>
        <FormControl>
          <FormLabel>Cardholder Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Billing Address</FormLabel>
          <Input type="text" />
        </FormControl>
        <Flex mt="4" justify="space-between" width="100%">
          <Text>Subtotal:</Text>
          <Text>${subTotal}</Text>
        </Flex>
        <Flex justify="space-between" width="100%">
          <Text>Delivery fee:</Text>
          <Text>${deliveryFee}</Text>
        </Flex>
        <Flex justify="space-between" fontWeight="bold" width="100%">
          <Text>Total:</Text>
          <Text>${total}</Text>
        </Flex>
        <Button colorScheme="teal" width="100%">
          Pay ${total}
        </Button>
      </VStack>
    </Container>
  );
};

export default Checkout;
