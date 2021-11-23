import { Flex, Image, Text, Heading, Spacer, Button } from "@chakra-ui/react";
import { MinusIcon, AddIcon, CloseIcon } from "@chakra-ui/icons";

const CartItems = ({ cart, reduceFromCart, deleteFromCart, addToCart }) => {
  return (
    <>
      {cart.map((item) => (
        <Flex
          direction="column"
          slign="center"
          justifyContent="flex-end"
          my="5"
          key={item.id}
        >
          <Flex direction="column" align="center">
            <Heading fontSize="lg">{item.name}</Heading>{" "}
            <Image src={item.img} objectFit="contain" width="12rem" />
          </Flex>
          <Spacer />
          <Flex align="center" justify="center">
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
          </Flex>
          <Text align="center" fontWeight="" fontSize="lg">
            ${item.price * item.count}
          </Text>
        </Flex>
      ))}
    </>
  );
};

export default CartItems;
