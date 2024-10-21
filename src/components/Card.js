import { Box, Heading, Image, Text, Stack, CardBody, Card, Flex, Icon } from "@chakra-ui/react"; // Import necessary components
import { FaShoppingCart } from 'react-icons/fa';
import React from "react";
import {CardFooter, Divider, ButtonGroup, Button } from '@chakra-ui/react'

const CustomCard = ({ title, description, imageSrc, price }) => {
  return (
    <Card maxW='sm' bg='#edefee'  >
  <CardBody>
    <Image
      src= {imageSrc}
      alt= {title}
      borderRadius='lg' 
      width='432px' 
      height='230px'
    />
    <Stack mt='6' spacing='3'>
  <Flex justify='space-between' align='center'>
    <Heading size='md'>{title}</Heading>
    <Text color='orange.500' fontSize='lg' fontWeight='bold'>
      {price}
    </Text>
  </Flex>
  <Text>
    {description}
  </Text>
</Stack>
  </CardBody>
  <CardFooter>
  <Button variant='ghost' colorScheme='blue' leftIcon={<Icon as={FaShoppingCart} />}>
          Order now
        </Button>
    {/* <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup> */}
  </CardFooter>
</Card>
  );
};

export default CustomCard;
