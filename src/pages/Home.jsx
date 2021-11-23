import ProductGrid from "../components/ProductGrid";
import { Box } from "@chakra-ui/react";

const Home = ({ addToCart, furnitureData }) => {
  return (
    <Box>
      <ProductGrid addToCart={addToCart} furnitureData={furnitureData} />
    </Box>
  );
};

export default Home;
