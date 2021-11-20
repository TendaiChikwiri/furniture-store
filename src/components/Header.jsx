import "../styles/Header.scss";
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
} from "@chakra-ui/react";
import CheckoutItems from "./CartItems";

const Header = ({ cart, reduceFromCart, deleteFromCart, addToCart }) => {
  const cartTotalItems = (total, item) => total + item.count;
  const cartTotalCost = (total, item) => total + item.count * item.price;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <nav className="nav-bar">
      <Link className="nav-item" to="/">
        <Heading fontSize="xl">Furniture Store</Heading>
      </Link>
      <Button onClick={onOpen} className="nav-item">
        <FiShoppingCart /> {cart.length ? cart.reduce(cartTotalItems, 0) : "0"}
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
            {cart.map((item) => (
              <Flex key={item.id}>
                {item.name}
                {item.count}
                <Button onClick={() => reduceFromCart(item.id)}>Reduce</Button>
                <Button onClick={() => deleteFromCart(item.id)}>Remove</Button>
                <Button onClick={() => addToCart(item, 1)}>Add</Button>
                <Text>{item.price * item.count}</Text>
              </Flex>
            ))}
            <Flex justifyContent="flex-end">
              <Text>
                Total: {cart.length ? cart.reduce(cartTotalCost, 0) : "0"}
              </Text>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </nav>
  );
};

export default Header;
