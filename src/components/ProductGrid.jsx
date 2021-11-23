import { Box, Flex, Heading, Text, Image, SimpleGrid } from "@chakra-ui/react";
import FurnitureModal from "./FurnitureModal";

const ProductGrid = ({ furnitureData, addToCart }) => {
  return (
    <SimpleGrid minChildWidth="300px" spacing="2rem" borderRadius="lg">
      {furnitureData.map((item) => (
        <Box
          key={item.id}
          boxShadow="lg"
          borderRadius="md"
          sx={{ overflow: "hidden" }}
        >
          <Image
            loading="lazy"
            src={item.img}
            alt=""
            objectFit="cover"
            width="100%"
          />
          <Flex direction="column" p="2">
            <Heading fontSize="2xl">{item.name}</Heading>
            <Flex justifyContent="space-between" align="center">
              <Text fontSize="xl">&#36;{item.price}</Text>
              <FurnitureModal item={item} addToCart={addToCart} />
              {/* <Button onClick={() => addToCart(item)}>Add To Cart</Button> */}
            </Flex>
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default ProductGrid;
