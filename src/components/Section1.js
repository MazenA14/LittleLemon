import React from "react";
import { Box, Button, Heading, VStack, Flex } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { useNavigate } from 'react-router-dom';

const heading = "Little Lemon";
const location = "Chicago";
const description = "We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.";

// The Section1 component
const Section1 = () => {
  // Move the useNavigate hook inside the component function
  const navigate = useNavigate();

  const goToPage = () => {
    navigate('/reserve'); // Replace with your route
  };

  return (
    <FullScreenSection
      justifyContent="center"
      isDarkBackground
      alignItems="flex-start"
      backgroundColor="#495e57"
      width="100%"
      ml="70px"
    >
      <Flex direction={{ base: "column", md: "row" }} alignItems="flex-start" spacing={4} textAlign="left" color="white">
        <VStack spacing={4} alignItems="flex-start">
          <Heading as="h3" fontSize="5xl" color={"#c3a510"}>
            {heading}
          </Heading>
          <Heading as="h3" fontSize="4xl">
            {location}
          </Heading>
          <Box width="300px">
            <Heading fontSize="20px">
              {description}
            </Heading>
          </Box>
          <Button
            colorScheme="yellow"
            size="lg" // Make the button larger
            fontSize="xl" // Increase the font size
            borderRadius="10px" // Make the corners less rounded
            onClick={goToPage}
          >
            Reserve a table
          </Button>
        </VStack>
        <Box display="flex" justifyContent="flex-end" width="100%" position={"relative"}>
          <img
            src={require("../images/restauranfood.jpg")}
            alt="Food Image"
            style={{ maxWidth: "300px", height: "auto", borderRadius: "10px", position: "absolute", zIndex: 2, top: "30px", left: "430px" }}
          />
        </Box>
      </Flex>
    </FullScreenSection>
  );
};

export default Section1;
