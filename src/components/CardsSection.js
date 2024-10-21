import React from "react";
import { Box, Heading, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import FullScreenSection from "./FullScreenSection";
import CustomCard from "./Card"; // Ensure CustomCard component is correctly imported

const projects = [
  {
    title: "Greek Salad",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago fitylo feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: "$12.99",
    getImageSrc: () => require("../images/greek salad.jpg"),
  },
  {
    title: "Bruchetta",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt are olive oil.",
    price: "$5.99",
    getImageSrc: () => require("../images/bruchetta.jpg"),
  },
  {
    title: "Lemon Dessert",
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: "$5.00",
    getImageSrc: () => require("../images/lemon dessert.jpg"),
  },
];

const CardsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#ffffff"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      position="relative"
      mb={"50px"}
    >
      <Flex justify="space-between" align="center" mb={4}>
        <Heading as="h1" id="projects-section" color="black" fontSize={50} marginTop={"50px"}>
          This weeks specials!
        </Heading>
        <Link to="/menu">
          <Button
            colorScheme="yellow"
            size="lg"
            fontSize="xl"
            borderRadius="10px"
            position="absolute"
            right={"30px"}
          >
            Online Menu
          </Button>
        </Link>
      </Flex>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <CustomCard
            key={project.title}
            title={project.title}
            description={project.description}
            price={project.price}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default CardsSection;
