import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      backgroundColor="white"
      width="100%" /* Ensure the footer spans the full width */
    >
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p style={{ color: 'black' }}>Mazen Ahmed • © 2024</p>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;
