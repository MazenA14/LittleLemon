import React from "react";
import { Box, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Mazen!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const Section1 = () => (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#495e57"
    >
      <VStack spacing={4} textAlign="center" color="white">
        <Heading as="h4" fontSize="s">
          {greeting}
        </Heading>
        <Heading as="h3" fontSize="4xl">
          {bio1}
        </Heading>
        <Heading as="h3" fontSize="4xl">
          {bio2}
        </Heading>
      </VStack>
    </FullScreenSection>
);

export default Section1;
