import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Flex,
  Text,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import CheckoutItems from "./CartItems";

const Header = ({ cart, reduceFromCart, deleteFromCart, addToCart }) => {
  const cartTotalItems = (total, item) => total + item.count;
  const cartTotalCost = (total, item) => total + item.count * item.price;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      p="2"
      align="center"
      backgroundColor="white"
      w="100%"
      sx={{ zIndex: "1000" }}
    >
      <Link to="/">
        <Heading fontSize="2xl">Furniture Store</Heading>
      </Link>
      <Spacer />
      <Button
        variant="outline"
        colorScheme="teal"
        onClick={onOpen}
        fontSize="md"
      >
        <Text fontSize="md" mr="1">
          {cart.length ? cart.reduce(cartTotalItems, 0) : "0"}
        </Text>
        <FiShoppingCart />
      </Button>
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader align="center">Cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CheckoutItems
              cart={cart}
              reduceFromCart={reduceFromCart}
              deleteFromCart={deleteFromCart}
              addToCart={addToCart}
            />
            <Flex justifyContent="flex-end">
              <Text fontWeight="bold" fontSize="2xl">
                Total: ${cart.length ? cart.reduce(cartTotalCost, 0) : "0"}
              </Text>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Link
              to="/checkout"
              onClick={() => {
                onClose();
              }}
            >
              {" "}
              Proceed to payment{" "}
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Header;
