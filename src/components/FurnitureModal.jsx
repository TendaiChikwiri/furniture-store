import { useState } from "react";
import {
  ButtonGroup,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Image,
  useToast,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import { FiShoppingCart } from "react-icons/fi";

const FurnitureModal = ({ item, addToCart }) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [count, setCount] = useState(1);
  const addCount = () => {
    setCount(count + 1);
  };
  const minusCount = () => {
    if (count <= 1) return;
    setCount(count - 1);
  };
  return (
    <>
      <Button variant="outline" colorScheme="teal" onClick={onOpen}>
        Add to Cart
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader align="center">{item.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={item.img} borderRadius="md" width="80%" m="auto" />
            <Text>{item.description}</Text>
          </ModalBody>
          <ModalFooter>
            <Text fontWeight="medium" mr="auto" fontSize="2xl">
              &#36;{item.price * count}
            </Text>
            <ButtonGroup variant="outline" spacing="6" isAttached>
              <Button onClick={minusCount} disabled={count <= 1 ? true : false}>
                <MinusIcon />
              </Button>
              <Button> {count} </Button>
              <Button onClick={addCount}>
                <AddIcon />
              </Button>
            </ButtonGroup>
            <Button
              variant="outline"
              ml="1"
              onClick={async () => {
                addToCart(item, count);
                toast({
                  position: "top",
                  title: "Added to Cart",
                  description: `${
                    count === 1 ? "Item" : "Items"
                  } added to cart`,
                  status: "success",
                  duration: 2000,
                  isClosable: true,
                });
                setCount(1);
                await new Promise((resolve) => setTimeout(resolve, 500));
                onClose();
              }}
            >
              Add <FiShoppingCart />
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FurnitureModal;
