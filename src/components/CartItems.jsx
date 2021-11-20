import { Flex, Image, Text, Heading, Spacer, Button } from "@chakra-ui/react";
import { MinusIcon, AddIcon, CloseIcon } from "@chakra-ui/icons";

const CartItems = ({ cart, reduceFromCart, deleteFromCart, addToCart }) => {
  return (
    <>
      {cart.map((item) => (
        <Flex
          direction="column"
          justifyContent="flex-end"
          align="center"
          my="5"
        >
          <Flex align="center">
            <Image src={item.img} objectFit="contain" width="12rem" />
            <Heading fontSize="lg">{item.name}</Heading>
          </Flex>
          <Spacer />
          <Flex align="center">
            {item.count === 1 ? (
              <Button
                variant="outline"
                colorScheme="red"
                onClick={() => deleteFromCart(item.id)}
              >
                <CloseIcon />
              </Button>
            ) : (
              <Button
                variant="outline"
                colorScheme="orange"
                onClick={() => reduceFromCart(item.id)}
              >
                <MinusIcon />
              </Button>
            )}
            <Button variant="outline">{item.count}</Button>
            <Button
              variant="outline"
              colorScheme="green"
              onClick={() => addToCart(item, 1)}
            >
              <AddIcon />
            </Button>
            <Text align="right" fontWeight="" fontSize="lg" width="10ch">
              ${item.price * item.count}
            </Text>
          </Flex>
        </Flex>
      ))}
    </>
  );
};

export default CartItems;
